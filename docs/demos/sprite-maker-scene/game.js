document.documentElement.classList.add('js');

(() => {
  const canvas = document.querySelector('#gameCanvas');
  const fallback = document.querySelector('#canvasFallback');
  const status = document.querySelector('#gameStatus');
  const questCode = document.querySelector('#questCode');
  const questTitle = document.querySelector('#questTitle');
  const moduleCount = document.querySelector('#moduleCount');
  const enemyCount = document.querySelector('#enemyCount');
  const healthPips = document.querySelector('#healthPips');
  const mapPlayer = document.querySelector('#mapPlayer');
  const prompt = document.querySelector('#interactionPrompt');
  const promptText = prompt?.querySelector('span');
  const speaker = document.querySelector('#speaker');
  const dialogue = document.querySelector('#dialogueText');
  const completion = document.querySelector('#completionCard');
  const failure = document.querySelector('#failureCard');
  const modulePanel = document.querySelector('#modulePanel');
  const moduleClose = document.querySelector('#moduleClose');
  const moduleEyebrow = document.querySelector('#moduleEyebrow');
  const moduleTitle = document.querySelector('#moduleTitle');
  const moduleDescription = document.querySelector('#moduleDescription');
  const moduleViews = [...document.querySelectorAll('[data-module-view]')];
  const controlButtons = [...document.querySelectorAll('[data-control]')];
  const actionButtons = [...document.querySelectorAll('[data-action]')];
  const ctx = canvas?.getContext?.('2d');

  if (!canvas || !ctx) {
    document.body.classList.add('canvas-unavailable');
    if (fallback) fallback.hidden = false;
    if (status) status.textContent = '当前浏览器无法运行 Canvas；Rig、QA 与 Export 证据仍可阅读。';
    [...controlButtons, ...actionButtons, moduleClose].filter(Boolean).forEach((button) => { button.disabled = true; });
    window.__SPRITE_GAME__ = { available: false, reason: 'canvas-unavailable' };
    return;
  }

  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  const WORLD_WIDTH = 2800;
  const STEP = 1 / 60;
  const MAX_FRAME_DELTA = 0.1;
  const GROUND_Y = 452;
  const PLAYER_RADIUS = 18;
  const PLAYER_SPEED = 310;
  const PLAYER_ACCELERATION = 1750;
  const PLAYER_FRICTION = 1450;
  const JUMP_VELOCITY = -610;
  const GRAVITY = 1650;
  const NPC_X = 260;
  const BEACON_X = 2660;
  const INTERACT_DISTANCE = 94;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const idleFramePaths = [1, 2, 3, 4].map((index) => `../../assets/project-009-game/lin-jian-idle-${String(index).padStart(2, '0')}.png`);
  const runFramePaths = [1, 2, 3, 4].map((index) => `../../assets/project-009-game/lin-jian-motion-run-v2_${String(index).padStart(2, '0')}.png`);
  const castFramePaths = [1, 2, 3, 4, 5].map((index) => `../../assets/project-009-game/lin-jian-motion-cast-v1_${String(index).padStart(2, '0')}.png`);
  const motionMasterPath = '../../assets/project-009-game/lin-jian-motion-master-v1.png';
  const npcFrames = [];
  const runFrames = [];
  const castFrames = [];
  let motionMaster = null;
  const input = { left: false, right: false };

  const terminalDefinitions = [
    { id: 'rig', x: 760, color: '#6cabff', label: 'RIG', title: '01 / Rig 与多动作序列', description: '已验证 idle 保留为静态 NPC；motion-ready master 继续生成 4 帧 run 与 5 帧 pulse-cast，并在关卡内切换状态。' },
    { id: 'qa', x: 1510, color: '#e8a75b', label: 'QA', title: '02 / QA 与发布门禁', description: '像素指标负责发现漂移、断帧、循环和透明问题；人工仍负责动作语义与审美批准。' },
    { id: 'export', x: 2225, color: '#8ff0b5', label: 'EXPORT', title: '03 / Export 与游戏合同', description: '帧、FPS、循环、版本、pivot 与 provenance 一起交付，游戏代码只负责加载和状态切换。' }
  ];

  const enemyDefinitions = [
    { id: 'fault-a', spawnX: 1040, minX: 940, maxX: 1160, speed: 52 },
    { id: 'fault-b', spawnX: 1290, minX: 1210, maxX: 1400, speed: 62 },
    { id: 'fault-c', spawnX: 1740, minX: 1650, maxX: 1850, speed: 56 },
    { id: 'fault-d', spawnX: 1980, minX: 1900, maxX: 2110, speed: 68 },
    { id: 'fault-e', spawnX: 2430, minX: 2350, maxX: 2540, speed: 72 }
  ];

  const obstacles = [
    { x: 1165, width: 38, height: 50 },
    { x: 1870, width: 46, height: 64 },
    { x: 2328, width: 34, height: 45 }
  ];

  const moduleMeta = Object.fromEntries(terminalDefinitions.map((terminal) => [terminal.id, terminal]));

  function createEnemies() {
    return enemyDefinitions.map((enemy, index) => ({ ...enemy, x: enemy.spawnX, direction: index % 2 === 0 ? 1 : -1, hp: 2, maxHp: 2, flash: 0 }));
  }

  const state = {
    quest: 'available',
    player: { x: 92, y: GROUND_Y - PLAYER_RADIUS, vx: 0, vy: 0, facing: 1, onGround: true, health: 4, maxHealth: 4, invulnerable: 0, checkpointX: 92 },
    companion: { x: NPC_X, facing: 1, mode: 'idle', frameIndex: 0, castTimer: 0 },
    cameraX: 0,
    modules: { rig: false, qa: false, export: false },
    moduleOpen: null,
    terminals: terminalDefinitions.map((terminal) => ({ ...terminal, active: false })),
    enemies: createEnemies(),
    projectiles: [],
    particles: [],
    visualTime: 0,
    assetsReady: false,
    motionAssetsReady: false,
    assetErrors: 0,
    frameIndex: 0,
    renderFrames: 0,
    shotsFired: 0,
    hits: 0,
    defeated: 0,
    fireCooldown: 0,
    lastFocus: null
  };

  function moduleTotal() {
    return Object.values(state.modules).filter(Boolean).length;
  }

  function aliveEnemies() {
    return state.enemies.filter((enemy) => enemy.hp > 0);
  }

  function announce(who, message) {
    speaker.textContent = who;
    dialogue.textContent = message;
    status.textContent = `${who}：${message}`;
  }

  function clearInput() {
    input.left = false;
    input.right = false;
    controlButtons.forEach((button) => button.classList.remove('is-pressed'));
  }

  function distanceTo(x) {
    return Math.abs(state.player.x - x);
  }

  function getInteractable() {
    const candidates = [];
    if (distanceTo(NPC_X) <= INTERACT_DISTANCE) candidates.push({ type: 'npc', x: NPC_X, distance: distanceTo(NPC_X) });
    state.terminals.forEach((terminal) => {
      if (distanceTo(terminal.x) <= INTERACT_DISTANCE) candidates.push({ type: 'terminal', id: terminal.id, x: terminal.x, distance: distanceTo(terminal.x) });
    });
    if (distanceTo(BEACON_X) <= INTERACT_DISTANCE) candidates.push({ type: 'beacon', x: BEACON_X, distance: distanceTo(BEACON_X) });
    return candidates.sort((a, b) => a.distance - b.distance)[0] || null;
  }

  function promptFor(target) {
    if (!target) return '';
    if (target.type === 'npc') return state.quest === 'available' ? '领取能力试运行任务' : '与林简同步状态';
    if (target.type === 'beacon') return state.quest === 'ready' ? '启动最终信标' : '信标尚未就绪';
    const terminal = moduleMeta[target.id];
    if (state.modules[target.id]) return `复核 ${terminal.label} 证据`;
    return `激活 ${terminal.label} 终端`;
  }

  function updateUi() {
    const activeObjective = moduleTotal() === 3
      ? `清除终点故障体 · 剩余 ${aliveEnemies().length}`
      : `恢复三个能力终端 · ${moduleTotal()} / 3`;
    const labels = {
      available: ['BRIEFING', '先与林简建立连接'],
      active: ['CAPABILITY RUN', activeObjective],
      ready: ['BEACON READY', '前往最右侧启动最终信标'],
      complete: ['CHAIN ONLINE', 'Rig · QA · Export 已全部上线'],
      failed: ['CONNECTION LOST', '从最近检查点恢复']
    };
    const [code, title] = labels[state.quest];
    questCode.textContent = code;
    questTitle.textContent = title;
    moduleCount.textContent = String(moduleTotal());
    enemyCount.textContent = String(aliveEnemies().length);
    healthPips.textContent = `${'● '.repeat(state.player.health)}${'○ '.repeat(state.player.maxHealth - state.player.health)}`.trim();
    mapPlayer.style.left = `${Math.max(0, Math.min(100, (state.player.x / WORLD_WIDTH) * 100))}%`;
    document.body.dataset.questState = state.quest;
    const target = getInteractable();
    prompt.hidden = !target || state.quest === 'complete' || state.quest === 'failed' || Boolean(state.moduleOpen);
    if (promptText && target) promptText.textContent = promptFor(target);
    completion.hidden = state.quest !== 'complete';
    failure.hidden = state.quest !== 'failed';
  }

  function setModules(ids) {
    Object.keys(state.modules).forEach((id) => { state.modules[id] = ids.includes(id); });
    state.terminals.forEach((terminal) => { terminal.active = state.modules[terminal.id]; });
    if (!state.modules.rig) Object.assign(state.companion, { x: NPC_X, facing: 1, mode: 'idle', frameIndex: 0, castTimer: 0 });
  }

  function resetGame() {
    state.quest = 'available';
    Object.assign(state.player, { x: 92, y: GROUND_Y - PLAYER_RADIUS, vx: 0, vy: 0, facing: 1, onGround: true, health: 4, invulnerable: 0, checkpointX: 92 });
    Object.assign(state.companion, { x: NPC_X, facing: 1, mode: 'idle', frameIndex: 0, castTimer: 0 });
    state.cameraX = 0;
    setModules([]);
    state.moduleOpen = null;
    state.enemies = createEnemies();
    state.projectiles = [];
    state.particles = [];
    state.visualTime = 0;
    state.shotsFired = 0;
    state.hits = 0;
    state.defeated = 0;
    state.fireCooldown = 0;
    modulePanel.hidden = true;
    clearInput();
    announce('SYSTEM', '沿站台向右，找到林简。W / ↑ 跳跃，J / F 发射脉冲。');
    updateUi();
    draw();
  }

  function spawnParticles(x, y, color, count = 10) {
    if (reducedMotion.matches) return;
    for (let index = 0; index < count; index += 1) {
      const angle = (Math.PI * 2 * index) / count;
      state.particles.push({ x, y, vx: Math.cos(angle) * (35 + (index % 3) * 18), vy: Math.sin(angle) * (35 + (index % 4) * 14), life: 0.55, maxLife: 0.55, color });
    }
  }

  function openModule(id) {
    const meta = moduleMeta[id];
    if (!meta) return;
    state.moduleOpen = id;
    state.lastFocus = document.activeElement;
    moduleEyebrow.textContent = `${meta.label} CAPABILITY ONLINE`;
    moduleTitle.textContent = meta.title;
    moduleDescription.textContent = meta.description;
    moduleViews.forEach((view) => { view.hidden = view.dataset.moduleView !== id; });
    modulePanel.hidden = false;
    clearInput();
    updateUi();
    requestAnimationFrame(() => moduleClose.focus());
  }

  function closeModule() {
    if (!state.moduleOpen) return;
    const closedId = state.moduleOpen;
    state.moduleOpen = null;
    modulePanel.hidden = true;
    if (moduleTotal() === 3 && aliveEnemies().length === 0) announce('SYSTEM', '三个能力模块与故障清理已完成。继续向右，启动最终信标。');
    else if (moduleTotal() === 3) announce('SYSTEM', `三个能力模块已上线。先清除剩余 ${aliveEnemies().length} 个故障体。`);
    else announce('SYSTEM', `${moduleMeta[closedId].label} 证据已记录。继续穿越旧站。`);
    updateUi();
    canvas.focus({ preventScroll: true });
  }

  function prerequisiteFor(id) {
    if (id === 'qa' && !state.modules.rig) return 'RIG';
    if (id === 'export' && !state.modules.qa) return 'QA';
    return null;
  }

  function combatGateFor(id) {
    if (id === 'qa') return state.enemies.slice(0, 2).filter((enemy) => enemy.hp > 0).length;
    if (id === 'export') return state.enemies.slice(0, 4).filter((enemy) => enemy.hp > 0).length;
    return 0;
  }

  function refreshQuestReady() {
    if (moduleTotal() === 3 && aliveEnemies().length === 0 && state.quest !== 'complete') state.quest = 'ready';
  }

  function activateTerminal(id) {
    const terminal = state.terminals.find((item) => item.id === id);
    if (!terminal) return false;
    const required = prerequisiteFor(id);
    if (required) {
      announce('SYSTEM', `${terminal.label} 终端被锁定。请先恢复 ${required}。`);
      return false;
    }
    const blockingFaults = combatGateFor(id);
    if (blockingFaults > 0) {
      announce('SYSTEM', `${terminal.label} 区仍有 ${blockingFaults} 个故障体干扰。先用脉冲清除。`);
      return false;
    }
    if (!state.modules[id]) {
      state.modules[id] = true;
      terminal.active = true;
      state.player.checkpointX = terminal.x - 70;
      if (id === 'rig') Object.assign(state.companion, { x: terminal.x - 92, facing: 1, mode: 'idle', frameIndex: 0, castTimer: 0 });
      spawnParticles(terminal.x, GROUND_Y - 92, terminal.color, 18);
      refreshQuestReady();
    }
    openModule(id);
    return true;
  }

  function interact() {
    if (state.moduleOpen) return;
    canvas.focus({ preventScroll: true });
    const target = getInteractable();
    if (!target) {
      announce('SYSTEM', '交互范围内没有角色、终端或信标。');
      return;
    }
    if (target.type === 'npc') {
      if (state.quest === 'available') {
        state.quest = 'active';
        state.player.checkpointX = NPC_X - 72;
        announce('林简', '旧站的资产链被三个故障体区段切断。恢复 Rig、QA、Export，再启动终点信标。');
      } else if (state.quest === 'active') {
        announce('林简', `已恢复 ${moduleTotal()} / 3。蓝色是 Rig，橙色是 QA，绿色是 Export。`);
      } else {
        announce('林简', '三个模块已响应。继续向右，启动信标。');
      }
    } else if (target.type === 'terminal') {
      if (state.quest === 'available') announce('SYSTEM', '先返回林简处领取试运行任务。');
      else activateTerminal(target.id);
    } else if (target.type === 'beacon') {
      if (state.quest === 'ready') {
        state.quest = 'complete';
        spawnParticles(BEACON_X, GROUND_Y - 170, '#8ff0b5', 32);
        announce('SYSTEM', '能力链上线：Rig 生产帧，QA 解释边界，Export 交付游戏；运行时负责玩法。');
      } else {
        announce('SYSTEM', `信标缺少 ${3 - moduleTotal()} 个能力模块。`);
      }
    }
    updateUi();
  }

  function jump() {
    if (state.moduleOpen || state.quest === 'complete' || state.quest === 'failed') return false;
    canvas.focus({ preventScroll: true });
    if (!state.player.onGround) return false;
    state.player.vy = JUMP_VELOCITY;
    state.player.onGround = false;
    spawnParticles(state.player.x, GROUND_Y - 3, '#8ff0b5', 6);
    return true;
  }

  function firePulse() {
    if (state.moduleOpen || state.quest === 'complete' || state.quest === 'failed' || state.fireCooldown > 0) return false;
    canvas.focus({ preventScroll: true });
    state.projectiles.push({ x: state.player.x + state.player.facing * 24, y: state.player.y - 2, vx: state.player.facing * 720, life: 1.25 });
    state.fireCooldown = 0.22;
    state.shotsFired += 1;
    if (state.modules.rig) {
      state.companion.castTimer = 5 / 12;
      state.companion.mode = 'cast';
      state.companion.facing = state.player.facing;
    }
    spawnParticles(state.player.x + state.player.facing * 24, state.player.y, '#6cabff', 5);
    return true;
  }

  function damagePlayer(amount = 1) {
    if (state.player.invulnerable > 0 || state.quest === 'failed' || state.quest === 'complete') return false;
    state.player.health = Math.max(0, state.player.health - amount);
    state.player.invulnerable = 0.85;
    state.player.vx = -state.player.facing * 180;
    spawnParticles(state.player.x, state.player.y, '#ff766d', 12);
    announce('SYSTEM', `探索器受到干扰。完整度 ${state.player.health} / ${state.player.maxHealth}。`);
    if (state.player.health === 0) {
      state.quest = 'failed';
      state.projectiles = [];
      clearInput();
      announce('SYSTEM', '连接中断。终端进度已保留，可从最近检查点恢复。');
    }
    updateUi();
    return true;
  }

  function retryCheckpoint() {
    if (state.quest !== 'failed') return;
    state.quest = moduleTotal() === 3 ? 'ready' : 'active';
    Object.assign(state.player, { x: state.player.checkpointX, y: GROUND_Y - PLAYER_RADIUS, vx: 0, vy: 0, facing: 1, onGround: true, health: state.player.maxHealth, invulnerable: 1 });
    if (state.modules.rig) Object.assign(state.companion, { x: state.player.x - 74, facing: 1, mode: 'idle', frameIndex: 0, castTimer: 0 });
    state.projectiles = [];
    state.cameraX = Math.max(0, Math.min(WORLD_WIDTH - WIDTH, state.player.x - WIDTH * 0.34));
    announce('SYSTEM', '已从最近能力终端恢复。终端进度保留。');
    updateUi();
    draw();
    canvas.focus({ preventScroll: true });
  }

  function resolveObstacleCollision(previousX, nextX) {
    let resolved = nextX;
    for (const obstacle of obstacles) {
      const top = GROUND_Y - obstacle.height;
      const overlapsVertically = state.player.y + PLAYER_RADIUS > top + 3;
      if (!overlapsVertically) continue;
      if (nextX > previousX && previousX + PLAYER_RADIUS <= obstacle.x && nextX + PLAYER_RADIUS >= obstacle.x) {
        resolved = obstacle.x - PLAYER_RADIUS;
        state.player.vx = 0;
      }
      const right = obstacle.x + obstacle.width;
      if (nextX < previousX && previousX - PLAYER_RADIUS >= right && nextX - PLAYER_RADIUS <= right) {
        resolved = right + PLAYER_RADIUS;
        state.player.vx = 0;
      }
    }
    return resolved;
  }

  function updatePlayer(delta) {
    let direction = 0;
    if (input.left) direction -= 1;
    if (input.right) direction += 1;
    if (direction !== 0) {
      state.player.facing = direction;
      const targetVelocity = direction * PLAYER_SPEED;
      const change = Math.sign(targetVelocity - state.player.vx) * PLAYER_ACCELERATION * delta;
      state.player.vx = Math.abs(change) > Math.abs(targetVelocity - state.player.vx) ? targetVelocity : state.player.vx + change;
    } else {
      const friction = PLAYER_FRICTION * delta;
      state.player.vx = Math.abs(state.player.vx) <= friction ? 0 : state.player.vx - Math.sign(state.player.vx) * friction;
    }
    const previousX = state.player.x;
    const proposedX = Math.max(PLAYER_RADIUS, Math.min(WORLD_WIDTH - PLAYER_RADIUS, previousX + state.player.vx * delta));
    state.player.x = resolveObstacleCollision(previousX, proposedX);
    state.player.vy += GRAVITY * delta;
    state.player.y += state.player.vy * delta;
    const floor = GROUND_Y - PLAYER_RADIUS;
    if (state.player.y >= floor) {
      state.player.y = floor;
      state.player.vy = 0;
      state.player.onGround = true;
    }
  }

  function updateEnemies(delta) {
    if (!['active', 'ready'].includes(state.quest)) return;
    for (const enemy of state.enemies) {
      if (enemy.hp <= 0) continue;
      enemy.flash = Math.max(0, enemy.flash - delta);
      enemy.x += enemy.direction * enemy.speed * delta;
      if (enemy.x <= enemy.minX || enemy.x >= enemy.maxX) {
        enemy.x = Math.max(enemy.minX, Math.min(enemy.maxX, enemy.x));
        enemy.direction *= -1;
      }
      if (Math.abs(enemy.x - state.player.x) < 32 && Math.abs((GROUND_Y - 34) - state.player.y) < 44) damagePlayer(1);
    }
  }

  function updateProjectiles(delta) {
    for (const projectile of state.projectiles) {
      projectile.x += projectile.vx * delta;
      projectile.life -= delta;
      for (const enemy of state.enemies) {
        if (enemy.hp <= 0 || projectile.life <= 0) continue;
        if (Math.abs(projectile.x - enemy.x) < 25 && Math.abs(projectile.y - (GROUND_Y - 34)) < 36) {
          projectile.life = 0;
          enemy.hp -= 1;
          enemy.flash = 0.14;
          state.hits += 1;
          spawnParticles(enemy.x, GROUND_Y - 34, '#6cabff', 9);
          if (enemy.hp <= 0) {
            state.defeated += 1;
            spawnParticles(enemy.x, GROUND_Y - 34, '#ff766d', 18);
            announce('SYSTEM', `故障体已清除。剩余 ${aliveEnemies().length}。`);
            refreshQuestReady();
          }
        }
      }
    }
    state.projectiles = state.projectiles.filter((projectile) => projectile.life > 0 && projectile.x > 0 && projectile.x < WORLD_WIDTH);
  }

  function updateParticles(delta) {
    for (const particle of state.particles) {
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.vy += 90 * delta;
      particle.life -= delta;
    }
    state.particles = state.particles.filter((particle) => particle.life > 0).slice(-120);
  }

  function updateCamera(delta) {
    const target = Math.max(0, Math.min(WORLD_WIDTH - WIDTH, state.player.x - WIDTH * 0.36));
    if (reducedMotion.matches) state.cameraX = target;
    else state.cameraX += (target - state.cameraX) * Math.min(1, delta * 6);
  }

  function updateCompanion(delta) {
    if (!state.modules.rig) return;
    state.companion.castTimer = Math.max(0, state.companion.castTimer - delta);
    const targetX = Math.max(90, Math.min(WORLD_WIDTH - 90, state.player.x - state.player.facing * 74));
    const distance = targetX - state.companion.x;
    if (state.companion.castTimer > 0) {
      state.companion.mode = 'cast';
      const castFrameCount = Math.max(1, castFrames.length);
      state.companion.frameIndex = reducedMotion.matches
        ? 0
        : Math.min(castFrameCount - 1, Math.floor(((5 / 12) - state.companion.castTimer) * 12));
      return;
    }
    if (Math.abs(distance) > 7) {
      state.companion.facing = Math.sign(distance) || state.companion.facing;
      const travel = reducedMotion.matches ? distance : Math.sign(distance) * Math.min(Math.abs(distance), 235 * delta);
      state.companion.x += travel;
      state.companion.mode = reducedMotion.matches ? 'idle' : 'run';
      state.companion.frameIndex = reducedMotion.matches ? 0 : Math.floor(state.visualTime * 10) % Math.max(1, runFrames.length);
    } else {
      state.companion.mode = 'idle';
      state.companion.frameIndex = 0;
    }
  }

  function updateStep(delta) {
    state.visualTime += delta;
    state.fireCooldown = Math.max(0, state.fireCooldown - delta);
    state.player.invulnerable = Math.max(0, state.player.invulnerable - delta);
    if (!state.moduleOpen && !['complete', 'failed'].includes(state.quest)) {
      updatePlayer(delta);
      updateCompanion(delta);
      updateEnemies(delta);
      updateProjectiles(delta);
    }
    updateParticles(delta);
    updateCamera(delta);
    updateUi();
  }

  function runFrameDelta(seconds) {
    let remaining = Math.min(Math.max(0, seconds), MAX_FRAME_DELTA);
    while (remaining >= STEP) {
      updateStep(STEP);
      remaining -= STEP;
    }
    if (remaining > 0) updateStep(remaining);
  }

  function drawParallax() {
    const sky = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    sky.addColorStop(0, '#071d2a');
    sky.addColorStop(0.55, '#12352f');
    sky.addColorStop(1, '#06100d');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.fillStyle = 'rgba(232, 167, 91, 0.11)';
    ctx.beginPath();
    ctx.arc(735 - state.cameraX * 0.035, 115, 74, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#e8a75b';
    ctx.beginPath();
    ctx.arc(735 - state.cameraX * 0.035, 115, 25, 0, Math.PI * 2);
    ctx.fill();

    for (let layer = 0; layer < 2; layer += 1) {
      const parallax = layer === 0 ? 0.12 : 0.25;
      const baseY = layer === 0 ? 350 : 410;
      const color = layer === 0 ? '#0a2020' : '#081817';
      ctx.fillStyle = color;
      for (let index = -2; index < 12; index += 1) {
        const width = 105 + ((index * 37 + layer * 21) % 70);
        const height = 75 + ((index * 53 + layer * 31) % 115);
        const x = index * 150 - ((state.cameraX * parallax) % 150);
        ctx.fillRect(x, baseY - height, width, height);
        ctx.fillStyle = layer === 0 ? 'rgba(108,171,255,0.06)' : 'rgba(143,240,181,0.05)';
        for (let row = 0; row < 3; row += 1) ctx.fillRect(x + 20 + row * 25, baseY - height + 24, 7, 4);
        ctx.fillStyle = color;
      }
    }

    if (!reducedMotion.matches) {
      ctx.strokeStyle = 'rgba(150, 210, 195, 0.16)';
      ctx.lineWidth = 1;
      for (let index = 0; index < 38; index += 1) {
        const x = ((index * 83 - state.cameraX * 0.28 + state.visualTime * 145) % (WIDTH + 80)) - 40;
        const y = (index * 47 + state.visualTime * 210) % 430;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 7, y + 17);
        ctx.stroke();
      }
    }
  }

  function drawWorldBase() {
    ctx.fillStyle = '#101f1a';
    ctx.fillRect(0, GROUND_Y, WORLD_WIDTH, HEIGHT - GROUND_Y);
    ctx.fillStyle = '#8ff0b5';
    ctx.fillRect(0, GROUND_Y, WORLD_WIDTH, 3);
    ctx.fillStyle = 'rgba(232, 167, 91, 0.22)';
    for (let x = 20; x < WORLD_WIDTH; x += 88) ctx.fillRect(x, GROUND_Y + 34, 50, 4);
    ctx.strokeStyle = 'rgba(143,240,181,0.1)';
    for (let x = 120; x < WORLD_WIDTH; x += 220) {
      ctx.beginPath();
      ctx.moveTo(x, 190);
      ctx.lineTo(x, GROUND_Y);
      ctx.stroke();
    }
    const zones = [
      { x: 470, width: 590, label: '01 / RIG DISTRICT', color: '#6cabff' },
      { x: 1120, width: 760, label: '02 / QA DISTRICT', color: '#e8a75b' },
      { x: 1940, width: 620, label: '03 / EXPORT DISTRICT', color: '#8ff0b5' }
    ];
    zones.forEach((zone) => {
      ctx.strokeStyle = `${zone.color}35`;
      ctx.strokeRect(zone.x, 185, zone.width, GROUND_Y - 185);
      ctx.fillStyle = zone.color;
      ctx.font = '700 12px "Cascadia Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(zone.label, zone.x + 16, 210);
    });
  }

  function drawObstacle(obstacle) {
    const top = GROUND_Y - obstacle.height;
    ctx.fillStyle = '#142a24';
    ctx.fillRect(obstacle.x, top, obstacle.width, obstacle.height);
    ctx.fillStyle = '#e8a75b';
    for (let y = top + 7; y < GROUND_Y; y += 14) ctx.fillRect(obstacle.x + 4, y, obstacle.width - 8, 3);
  }

  function drawTerminal(terminal, index) {
    const active = state.modules[terminal.id];
    const unlocked = !prerequisiteFor(terminal.id) && combatGateFor(terminal.id) === 0;
    ctx.save();
    ctx.translate(terminal.x, GROUND_Y);
    ctx.fillStyle = 'rgba(0,0,0,0.32)';
    ctx.beginPath();
    ctx.ellipse(0, 8, 46, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0b1814';
    ctx.strokeStyle = active ? terminal.color : unlocked ? `${terminal.color}88` : 'rgba(145,169,156,0.28)';
    ctx.lineWidth = active ? 3 : 1;
    ctx.fillRect(-31, -118, 62, 118);
    ctx.strokeRect(-31, -118, 62, 118);
    ctx.fillStyle = active ? terminal.color : '#31443b';
    ctx.shadowColor = active ? terminal.color : 'transparent';
    ctx.shadowBlur = active ? 24 : 0;
    ctx.beginPath();
    ctx.arc(0, -82, 14 + (active && !reducedMotion.matches ? Math.sin(state.visualTime * 4 + index) * 2 : 0), 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = active ? terminal.color : '#6c8075';
    ctx.font = '700 11px "Cascadia Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(terminal.label, 0, -42);
    ctx.font = '700 9px "Cascadia Mono", monospace';
    ctx.fillText(active ? 'ONLINE' : unlocked ? 'READY' : 'LOCKED', 0, -25);
    ctx.restore();
  }

  function drawNpc() {
    const frameIndex = reducedMotion.matches ? 0 : Math.floor(state.visualTime * 6) % 4;
    state.frameIndex = frameIndex;
    const image = npcFrames[frameIndex];
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(NPC_X, GROUND_Y + 5, 52, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.globalAlpha = state.modules.rig ? 0.38 : 1;
    if (image?.complete && image.naturalWidth > 0) ctx.drawImage(image, NPC_X - 71, GROUND_Y - 199, 142, 199);
    else {
      ctx.fillStyle = '#e5685c';
      ctx.fillRect(NPC_X - 25, GROUND_Y - 140, 50, 112);
      ctx.fillStyle = '#f1d1bf';
      ctx.beginPath();
      ctx.arc(NPC_X, GROUND_Y - 164, 24, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    if (state.quest === 'available') {
      ctx.fillStyle = '#e8a75b';
      ctx.font = '800 28px "Cascadia Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('!', NPC_X, GROUND_Y - 220);
    }
    ctx.fillStyle = 'rgba(4,12,9,0.88)';
    ctx.fillRect(NPC_X - 58, GROUND_Y + 17, 116, 24);
    ctx.fillStyle = '#8ff0b5';
    ctx.font = '700 11px "Cascadia Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(state.modules.rig ? 'SOURCE · IDLE R1' : '林简 · VERIFIED IDLE', NPC_X, GROUND_Y + 34);
  }

  function drawCompanion() {
    if (!state.modules.rig) return;
    const companion = state.companion;
    let image = motionMaster;
    let sequence = 'MASTER';
    if (companion.mode === 'run' && runFrames.length) {
      image = runFrames[companion.frameIndex % runFrames.length];
      sequence = 'RUN V2';
    } else if (companion.mode === 'cast' && castFrames.length) {
      image = castFrames[Math.max(0, Math.min(castFrames.length - 1, companion.frameIndex))];
      sequence = 'CAST V1';
    }
    ctx.fillStyle = 'rgba(108,171,255,0.17)';
    ctx.beginPath();
    ctx.ellipse(companion.x, GROUND_Y + 4, 42, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.translate(companion.x, GROUND_Y);
    ctx.scale(companion.facing < 0 ? -1 : 1, 1);
    ctx.shadowColor = '#6cabff';
    ctx.shadowBlur = companion.mode === 'cast' ? 22 : 10;
    if (image?.complete && image.naturalWidth > 0) ctx.drawImage(image, -58, -174, 116, 174);
    ctx.restore();
    ctx.fillStyle = 'rgba(4,12,9,0.9)';
    ctx.fillRect(companion.x - 61, GROUND_Y + 15, 122, 24);
    ctx.fillStyle = companion.mode === 'cast' ? '#e8a75b' : '#6cabff';
    ctx.font = '700 10px "Cascadia Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`林简投影 · ${sequence}`, companion.x, GROUND_Y + 32);
  }

  function drawEnemy(enemy) {
    if (enemy.hp <= 0 || state.quest === 'available') return;
    const y = GROUND_Y - 34 + (reducedMotion.matches ? 0 : Math.sin(state.visualTime * 4 + enemy.spawnX) * 5);
    ctx.save();
    ctx.translate(enemy.x, y);
    ctx.shadowColor = '#ff766d';
    ctx.shadowBlur = 18;
    ctx.fillStyle = enemy.flash > 0 ? '#ffffff' : '#ff766d';
    ctx.beginPath();
    ctx.moveTo(0, -18);
    ctx.lineTo(22, 0);
    ctx.lineTo(0, 18);
    ctx.lineTo(-22, 0);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#07110d';
    ctx.fillRect(-7, -3, 14, 6);
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.fillRect(-23, -31, 46, 4);
    ctx.fillStyle = '#ff766d';
    ctx.fillRect(-23, -31, 46 * (enemy.hp / enemy.maxHp), 4);
    ctx.restore();
  }

  function drawBeacon() {
    const online = state.quest === 'complete';
    const ready = state.quest === 'ready' || online;
    ctx.save();
    ctx.translate(BEACON_X, GROUND_Y);
    ctx.strokeStyle = ready ? '#8ff0b5' : 'rgba(145,169,156,0.25)';
    ctx.lineWidth = ready ? 3 : 1;
    ctx.beginPath();
    ctx.moveTo(-42, 0);
    ctx.lineTo(0, -178);
    ctx.lineTo(42, 0);
    ctx.stroke();
    ctx.fillStyle = ready ? '#8ff0b5' : '#30443a';
    ctx.shadowColor = ready ? '#8ff0b5' : 'transparent';
    ctx.shadowBlur = online ? 40 : ready ? 18 : 0;
    ctx.beginPath();
    ctx.arc(0, -178, online ? 20 : 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = ready ? '#8ff0b5' : '#6c8075';
    ctx.font = '700 11px "Cascadia Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(online ? 'CHAIN ONLINE' : ready ? 'BEACON READY' : '3 MODULES REQUIRED', 0, 30);
    ctx.restore();
  }

  function drawPlayer() {
    const player = state.player;
    const blink = player.invulnerable > 0 && Math.floor(player.invulnerable * 12) % 2 === 0;
    if (blink) return;
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.beginPath();
    ctx.ellipse(player.x, GROUND_Y + 6, 27, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.shadowColor = '#8ff0b5';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#8ff0b5';
    ctx.beginPath();
    ctx.arc(0, 0, PLAYER_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#07110d';
    ctx.beginPath();
    ctx.moveTo(player.facing * 16, 0);
    ctx.lineTo(player.facing * 4, -7);
    ctx.lineTo(player.facing * 4, 7);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#6cabff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-11, 13);
    ctx.lineTo(-20, 22);
    ctx.moveTo(11, 13);
    ctx.lineTo(20, 22);
    ctx.stroke();
    ctx.restore();
  }

  function drawProjectilesAndParticles() {
    for (const projectile of state.projectiles) {
      ctx.fillStyle = '#b9d8ff';
      ctx.shadowColor = '#6cabff';
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    for (const particle of state.particles) {
      ctx.globalAlpha = Math.max(0, particle.life / particle.maxLife);
      ctx.fillStyle = particle.color;
      ctx.fillRect(particle.x - 2, particle.y - 2, 4, 4);
    }
    ctx.globalAlpha = 1;
  }

  function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawParallax();
    ctx.save();
    ctx.translate(-state.cameraX, 0);
    drawWorldBase();
    obstacles.forEach(drawObstacle);
    state.terminals.forEach(drawTerminal);
    drawNpc();
    drawCompanion();
    state.enemies.forEach(drawEnemy);
    drawBeacon();
    drawProjectilesAndParticles();
    drawPlayer();
    const target = getInteractable();
    if (target && !state.moduleOpen && !['complete', 'failed'].includes(state.quest)) {
      ctx.strokeStyle = 'rgba(232,167,91,0.5)';
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.arc(target.x, GROUND_Y - 70, INTERACT_DISTANCE, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.restore();
    state.renderFrames += 1;
  }

  function setDirection(direction, pressed, button) {
    input[direction] = pressed;
    button?.classList.toggle('is-pressed', pressed);
    if (pressed) canvas.focus({ preventScroll: true });
  }

  controlButtons.forEach((button) => {
    const direction = button.dataset.control;
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      button.setPointerCapture?.(event.pointerId);
      setDirection(direction, true, button);
    });
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((type) => button.addEventListener(type, () => setDirection(direction, false, button)));
  });

  actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      if (action === 'jump') jump();
      if (action === 'fire') firePulse();
      if (action === 'interact') interact();
      if (action === 'reset') resetGame();
      if (action === 'retry') retryCheckpoint();
      if (action === 'close-module') closeModule();
    });
  });
  moduleClose.addEventListener('click', closeModule);

  window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'escape' && state.moduleOpen) {
      event.preventDefault();
      closeModule();
      return;
    }
    if (['arrowleft', 'arrowright', 'arrowup', 'a', 'd', 'w', 'j', 'f', 'e', 'r', 'enter', ' '].includes(key)) event.preventDefault();
    if (state.moduleOpen) return;
    if (key === 'arrowleft' || key === 'a') input.left = true;
    if (key === 'arrowright' || key === 'd') input.right = true;
    if ((key === 'arrowup' || key === 'w' || key === ' ') && !event.repeat) jump();
    if ((key === 'j' || key === 'f') && !event.repeat) firePulse();
    if ((key === 'e' || key === 'enter') && !event.repeat) interact();
    if (key === 'r' && !event.repeat) resetGame();
  });

  window.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'arrowleft' || key === 'a') input.left = false;
    if (key === 'arrowright' || key === 'd') input.right = false;
  });
  window.addEventListener('blur', clearInput);
  canvas.addEventListener('pointerdown', () => canvas.focus({ preventScroll: true }));
  reducedMotion.addEventListener?.('change', () => draw());

  function placePlayer(x, y = GROUND_Y - PLAYER_RADIUS) {
    Object.assign(state.player, { x: Math.max(PLAYER_RADIUS, Math.min(WORLD_WIDTH - PLAYER_RADIUS, Number(x))), y, vx: 0, vy: 0, onGround: y >= GROUND_Y - PLAYER_RADIUS });
    state.cameraX = Math.max(0, Math.min(WORLD_WIDTH - WIDTH, state.player.x - WIDTH * 0.36));
  }

  function setFixture(name) {
    resetGame();
    if (name === 'near') {
      placePlayer(NPC_X - 62);
      announce('SYSTEM', '已进入林简的交互范围。');
    } else if (name === 'active') {
      state.quest = 'active';
      state.player.checkpointX = NPC_X - 72;
      placePlayer(520);
      announce('林简', '恢复 Rig、QA、Export 三个能力终端。');
    } else if (name === 'terminal-1') {
      state.quest = 'active';
      placePlayer(moduleMeta.rig.x - 58);
      announce('SYSTEM', 'RIG 终端在交互范围内。');
    } else if (name === 'terminal-2') {
      state.quest = 'active';
      setModules(['rig']);
      state.enemies.slice(0, 2).forEach((enemy) => { enemy.hp = 0; });
      state.defeated = 2;
      state.player.checkpointX = moduleMeta.rig.x - 70;
      placePlayer(moduleMeta.qa.x - 58);
      announce('SYSTEM', 'QA 终端在交互范围内。');
    } else if (name === 'terminal-3') {
      state.quest = 'active';
      setModules(['rig', 'qa']);
      state.enemies.forEach((enemy) => { enemy.hp = 0; });
      state.defeated = state.enemies.length;
      state.player.checkpointX = moduleMeta.qa.x - 70;
      placePlayer(moduleMeta.export.x - 58);
      announce('SYSTEM', 'EXPORT 终端在交互范围内。');
    } else if (name === 'combat') {
      state.quest = 'active';
      placePlayer(970);
      state.player.health = 3;
      state.enemies[0].x = 1050;
      state.enemies[0].minX = 1045;
      state.enemies[0].maxX = 1055;
      state.enemies[0].speed = 10;
      announce('SYSTEM', '故障体进入脉冲射程。J / F 发射。');
    } else if (name === 'ready') {
      state.quest = 'ready';
      setModules(['rig', 'qa', 'export']);
      state.player.checkpointX = moduleMeta.export.x - 70;
      state.enemies.forEach((enemy) => { enemy.hp = 0; });
      state.defeated = state.enemies.length;
      placePlayer(BEACON_X - 70);
      announce('SYSTEM', '最终信标已就绪。');
    } else if (name === 'complete') {
      state.quest = 'complete';
      setModules(['rig', 'qa', 'export']);
      state.enemies.forEach((enemy) => { enemy.hp = 0; });
      state.defeated = state.enemies.length;
      placePlayer(BEACON_X - 58);
      announce('SYSTEM', '能力链已上线。');
    } else if (name === 'failed') {
      state.quest = 'failed';
      state.player.checkpointX = moduleMeta.rig.x - 70;
      setModules(['rig']);
      placePlayer(1320);
      state.player.health = 0;
      announce('SYSTEM', '连接中断，可从最近检查点恢复。');
    }
    if (state.modules.rig) Object.assign(state.companion, { x: state.player.x - state.player.facing * 74, facing: state.player.facing, mode: 'idle', frameIndex: 0, castTimer: 0 });
    updateUi();
    draw();
  }

  function snapshot() {
    return {
      available: true,
      quest: state.quest,
      player: {
        x: Number(state.player.x.toFixed(3)),
        y: Number(state.player.y.toFixed(3)),
        vx: Number(state.player.vx.toFixed(3)),
        vy: Number(state.player.vy.toFixed(3)),
        health: state.player.health,
        maxHealth: state.player.maxHealth,
        onGround: state.player.onGround,
        checkpointX: state.player.checkpointX
      },
      companion: {
        deployed: state.modules.rig,
        x: Number(state.companion.x.toFixed(3)),
        facing: state.companion.facing,
        mode: state.companion.mode,
        frameIndex: state.companion.frameIndex,
        castTimer: Number(state.companion.castTimer.toFixed(3))
      },
      cameraX: Number(state.cameraX.toFixed(3)),
      worldWidth: WORLD_WIDTH,
      nearTarget: getInteractable()?.type || null,
      modules: { ...state.modules },
      moduleCount: moduleTotal(),
      moduleOpen: state.moduleOpen,
      terminals: state.terminals.map((terminal) => ({ id: terminal.id, x: terminal.x, active: terminal.active })),
      enemies: state.enemies.map((enemy) => ({ id: enemy.id, x: Number(enemy.x.toFixed(2)), hp: enemy.hp })),
      enemiesAlive: aliveEnemies().length,
      projectiles: state.projectiles.length,
      particles: state.particles.length,
      shotsFired: state.shotsFired,
      hits: state.hits,
      defeated: state.defeated,
      frameIndex: state.frameIndex,
      assetsReady: state.assetsReady,
      motionAssetsReady: state.motionAssetsReady,
      assetErrors: state.assetErrors,
      renderFrames: state.renderFrames,
      reducedMotion: reducedMotion.matches
    };
  }

  window.__SPRITE_GAME__ = {
    available: true,
    getSnapshot: snapshot,
    setFixture,
    interact,
    jump,
    firePulse,
    damagePlayer(amount = 1) {
      state.player.invulnerable = 0;
      const result = damagePlayer(Number(amount));
      draw();
      return result;
    },
    retry: retryCheckpoint,
    closeModule,
    activateTerminal(id) {
      const result = activateTerminal(id);
      updateUi();
      draw();
      return result;
    },
    movePlayerTo(x, y) {
      placePlayer(x, y === undefined ? GROUND_Y - PLAYER_RADIUS : Number(y));
      updateUi();
      draw();
      return snapshot();
    },
    defeatAllEnemies() {
      state.enemies.forEach((enemy) => { enemy.hp = 0; });
      state.defeated = state.enemies.length;
      updateUi();
      draw();
      return snapshot();
    },
    simulateSteps(count = 1) {
      for (let index = 0; index < Number(count); index += 1) updateStep(STEP);
      draw();
      return snapshot();
    },
    simulateFrameDelta(milliseconds, direction = 'right') {
      const before = state.player.x;
      input[direction] = true;
      runFrameDelta(Number(milliseconds) / 1000);
      input[direction] = false;
      draw();
      return Number((state.player.x - before).toFixed(3));
    },
    reset: resetGame
  };

  let lastTime = performance.now();
  let accumulator = 0;
  function animate(now) {
    const frameDelta = Math.min(Math.max(0, (now - lastTime) / 1000), MAX_FRAME_DELTA);
    lastTime = now;
    accumulator += frameDelta;
    while (accumulator >= STEP) {
      updateStep(STEP);
      accumulator -= STEP;
    }
    draw();
    requestAnimationFrame(animate);
  }

  const allAssetPaths = [...idleFramePaths, ...runFramePaths, ...castFramePaths, motionMasterPath];
  Promise.all(allAssetPaths.map((path) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => {
      state.assetErrors += 1;
      resolve(image);
    };
    image.src = path;
  }))).then((images) => {
    npcFrames.push(...images.slice(0, idleFramePaths.length));
    runFrames.push(...images.slice(idleFramePaths.length, idleFramePaths.length + runFramePaths.length));
    castFrames.push(...images.slice(idleFramePaths.length + runFramePaths.length, idleFramePaths.length + runFramePaths.length + castFramePaths.length));
    motionMaster = images.at(-1);
    state.assetsReady = images.every((image) => image.naturalWidth > 0);
    state.motionAssetsReady = [...runFrames, ...castFrames, motionMaster].every((image) => image?.naturalWidth > 0);
    if (!state.assetsReady) announce('SYSTEM', '角色动作资产加载不完整，当前使用已加载帧或程序化占位。');
    draw();
  });

  const fixture = new URLSearchParams(window.location.search).get('state');
  if (fixture) setFixture(fixture);
  else resetGame();
  requestAnimationFrame(animate);
})();
