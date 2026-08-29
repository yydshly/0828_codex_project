(() => {
  'use strict';

  const canvas = document.querySelector('#combatCanvas');
  const ctx = canvas?.getContext?.('2d');
  const fallback = document.querySelector('#canvasFallback');
  const controls = [...document.querySelectorAll('.touch-controls button')];
  const holdButtons = [...document.querySelectorAll('[data-hold]')];
  const actionButtons = [...document.querySelectorAll('[data-action]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!canvas || !ctx) {
    if (fallback) fallback.hidden = false;
    controls.forEach((button) => { button.disabled = true; });
    window.__SPRITE_COMBAT_TRIAL__ = { available: false, reason: 'canvas-unavailable' };
    return;
  }

  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  const WORLD_WIDTH = 1720;
  const GROUND_Y = 438;
  const STEP = 1 / 60;
  const MAX_FRAME_DELTA = 0.1;
  const PLAYER_RADIUS = 25;
  const assetRoot = '../../assets/project-009-game/';
  const masterPath = `${assetRoot}lin-jian-motion-master-v1.png`;
  const runPaths = Array.from({ length: 4 }, (_, index) => `${assetRoot}lin-jian-motion-run-v2_0${index + 1}.png`);
  const castPaths = Array.from({ length: 5 }, (_, index) => `${assetRoot}lin-jian-motion-cast-v1_0${index + 1}.png`);

  const ui = {
    trialState: document.querySelector('#trialState'),
    waveState: document.querySelector('#waveState'),
    healthState: document.querySelector('#healthState'),
    syncState: document.querySelector('#syncState'),
    syncFill: document.querySelector('#syncFill'),
    assetState: document.querySelector('#assetState'),
    briefing: document.querySelector('#briefingCard'),
    victory: document.querySelector('#victoryCard'),
    failure: document.querySelector('#failureCard'),
    encounterLabel: document.querySelector('#encounterLabel'),
    encounterTitle: document.querySelector('#encounterTitle'),
    encounterMeta: document.querySelector('#encounterMeta'),
    eventLog: document.querySelector('#eventLog'),
    enemyState: document.querySelector('#enemyState'),
    actionState: document.querySelector('#actionState'),
    syncButton: document.querySelector('[data-action="sync"]')
  };

  const input = { left: false, right: false };
  const state = {
    stage: 'briefing',
    wave: 0,
    player: {
      x: 285,
      vx: 0,
      facing: 1,
      health: 5,
      maxHealth: 5,
      invulnerable: 0,
      dodgeTimer: 0,
      dodgeCooldown: 0,
      fireCooldown: 0,
      pendingPulse: null
    },
    companion: {
      x: 195,
      facing: 1,
      mode: 'idle',
      frameIndex: 0,
      castTimer: 0,
      castElapsed: 0,
      contactResolved: false,
      actionId: 0
    },
    sync: 0,
    enemies: [],
    projectiles: [],
    enemyProjectiles: [],
    particles: [],
    cameraX: 0,
    visualTime: 0,
    transitionTimer: null,
    renderFrames: 0,
    shotsFired: 0,
    hits: 0,
    syncCasts: 0,
    perfectDodges: 0,
    defeated: 0,
    nextActionId: 1,
    events: ['等待试运行开始。'],
    assetsReady: false,
    motionAssetsReady: false,
    assetErrors: 0
  };

  const master = new Image();
  const runFrames = runPaths.map(() => new Image());
  const castFrames = castPaths.map(() => new Image());

  const encounterMeta = {
    0: { label: 'BRIEFING CHANNEL', title: '等待部署', meta: 'E / ENTER 开始' },
    1: { label: 'PRESSURE 01 / MIXED PATROL', title: '追击哨兵 + 远程中继', meta: '读预警 · 保持距离 · 脉冲积能' },
    2: { label: 'PRESSURE 02 / SHIELD CELL', title: '护盾壁垒 + 远程中继', meta: 'SYNC CAST 对护盾造成 4 点压力' },
    3: { label: 'PRESSURE 03 / SIGNAL WARDEN', title: '双阶段守门者', meta: '半血后进入 BURST PHASE' }
  };

  const enemyTuning = {
    stalker: { speed: 104, reach: 68, startup: 0.45, active: 0.12, recovery: 0.56, cooldown: 1.28, color: '#ff716c' },
    ranger: { speed: 38, reach: 520, startup: 0.7, active: 0.04, recovery: 0.52, cooldown: 1.86, color: '#e8a75b' },
    bulwark: { speed: 54, reach: 88, startup: 0.64, active: 0.13, recovery: 0.76, cooldown: 1.52, color: '#ba8cff' },
    boss: { speed: 68, reach: 116, startup: 0.78, active: 0.15, recovery: 0.72, cooldown: 1.42, color: '#6cabff' }
  };

  function pushEvent(message) {
    state.events.unshift(message);
    state.events = state.events.slice(0, 5);
  }

  function clearInput() {
    input.left = false;
    input.right = false;
    holdButtons.forEach((button) => button.classList.remove('is-active'));
  }

  function createEnemy(kind, id, x, hp, shield = 0) {
    return {
      kind,
      id,
      x,
      hp,
      maxHp: hp,
      shield,
      maxShield: shield,
      facing: -1,
      phase: 'approach',
      phaseTime: 0,
      cooldown: 0.6,
      currentAttack: null,
      actionId: 0,
      contacted: false,
      bossPhase: kind === 'boss' ? 1 : 0
    };
  }

  function waveEnemies(wave) {
    if (wave === 1) return [
      createEnemy('stalker', 'S-01', 720, 3),
      createEnemy('ranger', 'R-01', 1010, 2)
    ];
    if (wave === 2) return [
      createEnemy('bulwark', 'B-01', 1070, 6, 4),
      createEnemy('ranger', 'R-02', 1360, 3)
    ];
    if (wave === 3) return [createEnemy('boss', 'WARDEN', 1370, 14)];
    return [];
  }

  function aliveEnemies() {
    return state.enemies.filter((enemy) => enemy.hp > 0);
  }

  function resetRuntime() {
    state.stage = 'briefing';
    state.wave = 0;
    Object.assign(state.player, { x: 285, vx: 0, facing: 1, health: 5, invulnerable: 0, dodgeTimer: 0, dodgeCooldown: 0, fireCooldown: 0, pendingPulse: null });
    Object.assign(state.companion, { x: 195, facing: 1, mode: 'idle', frameIndex: 0, castTimer: 0, castElapsed: 0, contactResolved: false, actionId: 0 });
    state.sync = 0;
    state.enemies = [];
    state.projectiles = [];
    state.enemyProjectiles = [];
    state.particles = [];
    state.cameraX = 0;
    state.visualTime = 0;
    state.transitionTimer = null;
    state.shotsFired = 0;
    state.hits = 0;
    state.syncCasts = 0;
    state.perfectDodges = 0;
    state.defeated = 0;
    state.nextActionId = 1;
    state.events = ['等待试运行开始。'];
    clearInput();
    updateUi();
    draw();
  }

  function loadWave(wave, options = {}) {
    state.wave = wave;
    state.stage = wave === 3 ? 'boss' : 'wave';
    state.enemies = waveEnemies(wave);
    state.projectiles = [];
    state.enemyProjectiles = [];
    state.transitionTimer = null;
    state.player.pendingPulse = null;
    state.player.fireCooldown = 0;
    state.player.dodgeCooldown = 0;
    state.player.invulnerable = 0.55;
    const spawnX = options.playerX ?? (wave === 1 ? 330 : wave === 2 ? 760 : 930);
    state.player.x = spawnX;
    state.player.vx = 0;
    state.player.facing = 1;
    state.companion.x = spawnX - 90;
    state.companion.mode = 'idle';
    state.companion.castTimer = 0;
    state.companion.castElapsed = 0;
    state.companion.contactResolved = false;
    if (!options.fixture) state.player.health = Math.min(state.player.maxHealth, state.player.health + (wave > 1 ? 1 : 0));
    if (wave > 1 && !options.fixture) state.sync = Math.min(100, state.sync + 35);
    const meta = encounterMeta[wave];
    pushEvent(`${meta.label} 已部署。`);
    updateUi();
    draw();
    canvas.focus({ preventScroll: true });
  }

  function startTrial() {
    if (state.stage === 'briefing') {
      state.player.health = state.player.maxHealth;
      state.sync = 0;
      state.events = ['试运行开始：读取预警，再处理接触。'];
      loadWave(1);
      return true;
    }
    if (state.stage === 'failed') {
      retryWave();
      return true;
    }
    if (state.stage === 'victory') {
      resetRuntime();
      return true;
    }
    return false;
  }

  function retryWave() {
    const wave = Math.max(1, state.wave);
    state.player.health = state.player.maxHealth;
    state.sync = Math.max(50, state.sync);
    pushEvent(`从 PRESSURE 0${wave} 重新部署。`);
    loadWave(wave, { fixture: true });
  }

  function spawnParticles(x, y, color, count = 8) {
    if (reducedMotion.matches) return;
    for (let index = 0; index < count; index += 1) {
      const angle = (Math.PI * 2 * index) / count;
      const speed = 45 + (index % 4) * 20;
      state.particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 0.5, maxLife: 0.5, color });
    }
  }

  function addSync(amount) {
    state.sync = Math.max(0, Math.min(100, state.sync + amount));
  }

  function firePulse() {
    if (!['wave', 'boss'].includes(state.stage) || state.player.fireCooldown > 0 || state.player.pendingPulse || state.player.dodgeTimer > 0) return false;
    const actionId = `pulse-${state.nextActionId++}`;
    state.player.pendingPulse = { id: actionId, timer: 0.08 };
    state.player.fireCooldown = 0.22;
    canvas.focus({ preventScroll: true });
    return true;
  }

  function releasePulse(action) {
    state.projectiles.push({ id: action.id, x: state.player.x + state.player.facing * 30, vx: state.player.facing * 740, life: 1.4, damage: 1 });
    state.shotsFired += 1;
    spawnParticles(state.player.x + state.player.facing * 28, GROUND_Y - 34, '#6cabff', 5);
  }

  function dodge() {
    if (!['wave', 'boss'].includes(state.stage) || state.player.dodgeCooldown > 0 || state.player.dodgeTimer > 0) return false;
    state.player.dodgeTimer = 0.18;
    state.player.invulnerable = Math.max(state.player.invulnerable, 0.22);
    state.player.dodgeCooldown = 0.85;
    state.player.vx = state.player.facing * 610;
    pushEvent('DODGE：220ms 无敌窗口已开始。');
    spawnParticles(state.player.x, GROUND_Y - 24, '#8ff0b5', 8);
    canvas.focus({ preventScroll: true });
    return true;
  }

  function commandCast() {
    if (!['wave', 'boss'].includes(state.stage) || state.sync < 100 || state.companion.castTimer > 0) return false;
    state.sync = 0;
    state.companion.castTimer = 5 / 12;
    state.companion.castElapsed = 0;
    state.companion.contactResolved = false;
    state.companion.actionId = state.nextActionId++;
    state.companion.mode = 'cast';
    state.syncCasts += 1;
    pushEvent(`SYNC-${state.companion.actionId}：施法启动，167ms 后结算一次接触。`);
    canvas.focus({ preventScroll: true });
    return true;
  }

  function nearestEnemy(originX = state.player.x) {
    return aliveEnemies().sort((a, b) => Math.abs(a.x - originX) - Math.abs(b.x - originX))[0] || null;
  }

  function resolveCompanionContact() {
    const target = nearestEnemy(state.player.x);
    state.companion.contactResolved = true;
    if (!target || Math.abs(target.x - state.player.x) > 470) {
      pushEvent(`SYNC-${state.companion.actionId}：目标超出 470px 接触范围。`);
      spawnParticles(state.companion.x, GROUND_Y - 90, '#6cabff', 12);
      return;
    }
    applyEnemyDamage(target, { id: `sync-${state.companion.actionId}`, damage: 2, shieldDamage: 4, source: 'SYNC CAST' });
    spawnParticles(target.x, GROUND_Y - 62, '#8ff0b5', 20);
  }

  function applyEnemyDamage(enemy, contact) {
    if (enemy.hp <= 0) return false;
    if (enemy.shield > 0) {
      const before = enemy.shield;
      enemy.shield = Math.max(0, enemy.shield - contact.shieldDamage);
      state.hits += 1;
      if (contact.source === 'PULSE') addSync(25);
      pushEvent(`${contact.source} → ${enemy.id} SHIELD ${before}→${enemy.shield}`);
      if (enemy.shield === 0) pushEvent(`${enemy.id} 护盾破裂：生命现在可以受击。`);
      spawnParticles(enemy.x, GROUND_Y - 54, '#ba8cff', 12);
      return true;
    }
    enemy.hp = Math.max(0, enemy.hp - contact.damage);
    state.hits += 1;
    if (contact.source === 'PULSE') addSync(25);
    pushEvent(`${contact.source} → ${enemy.id} HP ${enemy.hp}/${enemy.maxHp}`);
    spawnParticles(enemy.x, GROUND_Y - 48, enemyTuning[enemy.kind].color, 10);
    if (enemy.kind === 'boss' && enemy.hp <= 7 && enemy.bossPhase === 1) {
      enemy.bossPhase = 2;
      enemy.phase = 'recovery';
      enemy.phaseTime = 0;
      enemy.cooldown = 0.4;
      pushEvent('WARDEN PHASE 2：追加三重脉冲，预警窗口缩短。');
      spawnParticles(enemy.x, GROUND_Y - 70, '#6cabff', 28);
    }
    if (enemy.hp === 0) {
      state.defeated += 1;
      pushEvent(`${enemy.id} 已解除。`);
    }
    return true;
  }

  function damagePlayer(amount, source = 'enemy-contact') {
    if (!['wave', 'boss'].includes(state.stage) || state.player.invulnerable > 0) return false;
    state.player.health = Math.max(0, state.player.health - amount);
    state.player.invulnerable = 0.72;
    state.player.vx = -state.player.facing * 210;
    pushEvent(`${source} → PLAYER -${amount}，完整度 ${state.player.health}/${state.player.maxHealth}`);
    spawnParticles(state.player.x, GROUND_Y - 28, '#ff716c', 14);
    if (state.player.health === 0) {
      state.stage = 'failed';
      state.projectiles = [];
      state.enemyProjectiles = [];
      clearInput();
      pushEvent('连接中断：当前压力段可以重试。');
    }
    return true;
  }

  function beginEnemyAttack(enemy) {
    enemy.actionId += 1;
    enemy.contacted = false;
    if (enemy.kind === 'ranger') enemy.currentAttack = 'bolt';
    else if (enemy.kind === 'boss' && enemy.bossPhase === 2 && enemy.actionId % 2 === 0) enemy.currentAttack = 'burst';
    else enemy.currentAttack = 'melee';
    enemy.phase = 'windup';
    enemy.phaseTime = 0;
  }

  function attackTuning(enemy) {
    const base = enemyTuning[enemy.kind];
    if (enemy.kind !== 'boss' || enemy.bossPhase === 1) return base;
    return { ...base, speed: 96, startup: 0.5, recovery: 0.58, cooldown: 1.0 };
  }

  function spawnEnemyAttack(enemy) {
    if (enemy.currentAttack === 'bolt') {
      const direction = Math.sign(state.player.x - enemy.x) || -1;
      state.enemyProjectiles.push({ id: `${enemy.id}-${enemy.actionId}`, x: enemy.x + direction * 30, vx: direction * 360, life: 2.4, damage: 1, color: '#e8a75b' });
    } else if (enemy.currentAttack === 'burst') {
      const direction = Math.sign(state.player.x - enemy.x) || -1;
      [300, 390, 480].forEach((speed, index) => state.enemyProjectiles.push({ id: `${enemy.id}-${enemy.actionId}-${index}`, x: enemy.x + direction * (38 + index * 7), vx: direction * speed, life: 2.5, damage: 1, color: '#6cabff' }));
    }
  }

  function resolveEnemyMelee(enemy, tuning) {
    if (enemy.contacted || Math.abs(state.player.x - enemy.x) > tuning.reach + PLAYER_RADIUS) return;
    enemy.contacted = true;
    if (state.player.invulnerable > 0 && state.player.dodgeTimer > 0) {
      addSync(12);
      state.perfectDodges += 1;
      pushEvent(`${enemy.id}-${enemy.actionId} 被 DODGE 窗口回避。SYNC +12`);
      spawnParticles(state.player.x, GROUND_Y - 28, '#8ff0b5', 10);
    } else if (state.player.invulnerable > 0) {
      pushEvent(`${enemy.id}-${enemy.actionId} 接触被普通无敌时间吸收，不奖励 SYNC。`);
    } else {
      damagePlayer(enemy.kind === 'boss' ? 2 : 1, `${enemy.id}-${enemy.actionId}`);
    }
  }

  function updateEnemy(enemy, delta) {
    if (enemy.hp <= 0) return;
    const tuning = attackTuning(enemy);
    const distance = state.player.x - enemy.x;
    enemy.facing = Math.sign(distance) || enemy.facing;
    enemy.cooldown = Math.max(0, enemy.cooldown - delta);
    enemy.phaseTime += delta;

    if (enemy.phase === 'approach' || enemy.phase === 'idle') {
      const desiredRange = enemy.kind === 'ranger' ? 360 : tuning.reach - 8;
      if (Math.abs(distance) > desiredRange) enemy.x += Math.sign(distance) * tuning.speed * delta;
      if (enemy.cooldown === 0 && Math.abs(distance) <= tuning.reach) beginEnemyAttack(enemy);
      return;
    }
    if (enemy.phase === 'windup' && enemy.phaseTime >= tuning.startup) {
      enemy.phase = 'active';
      enemy.phaseTime = 0;
      if (enemy.currentAttack !== 'melee') spawnEnemyAttack(enemy);
      return;
    }
    if (enemy.phase === 'active') {
      if (enemy.currentAttack === 'melee') resolveEnemyMelee(enemy, tuning);
      if (enemy.phaseTime >= tuning.active) {
        enemy.phase = 'recovery';
        enemy.phaseTime = 0;
      }
      return;
    }
    if (enemy.phase === 'recovery' && enemy.phaseTime >= tuning.recovery) {
      enemy.phase = 'approach';
      enemy.phaseTime = 0;
      enemy.cooldown = tuning.cooldown;
    }
  }

  function updatePlayer(delta) {
    const player = state.player;
    player.invulnerable = Math.max(0, player.invulnerable - delta);
    player.dodgeCooldown = Math.max(0, player.dodgeCooldown - delta);
    player.fireCooldown = Math.max(0, player.fireCooldown - delta);

    if (player.pendingPulse) {
      player.pendingPulse.timer -= delta;
      if (player.pendingPulse.timer <= 0) {
        releasePulse(player.pendingPulse);
        player.pendingPulse = null;
      }
    }

    if (player.dodgeTimer > 0) {
      player.dodgeTimer = Math.max(0, player.dodgeTimer - delta);
      player.x += player.vx * delta;
    } else {
      const direction = Number(input.right) - Number(input.left);
      const targetVelocity = direction * 250;
      player.vx += (targetVelocity - player.vx) * Math.min(1, delta * 15);
      if (direction) player.facing = direction;
      player.x += player.vx * delta;
    }
    player.x = Math.max(72, Math.min(WORLD_WIDTH - 72, player.x));
  }

  function updateCompanion(delta) {
    const companion = state.companion;
    if (companion.castTimer > 0) {
      companion.castTimer = Math.max(0, companion.castTimer - delta);
      companion.castElapsed += delta;
      companion.mode = 'cast';
      companion.facing = state.player.facing;
      companion.frameIndex = reducedMotion.matches ? 0 : Math.min(4, Math.floor(companion.castElapsed * 12));
      if (!companion.contactResolved && companion.castElapsed >= 2 / 12) resolveCompanionContact();
      if (companion.castTimer === 0) {
        companion.mode = 'idle';
        companion.frameIndex = 0;
      }
      return;
    }
    const target = state.player.x - state.player.facing * 90;
    const distance = target - companion.x;
    if (Math.abs(distance) > 6) {
      companion.facing = Math.sign(distance) || companion.facing;
      const travel = reducedMotion.matches ? distance : Math.sign(distance) * Math.min(Math.abs(distance), 265 * delta);
      companion.x += travel;
      companion.mode = reducedMotion.matches ? 'idle' : 'run';
      companion.frameIndex = reducedMotion.matches ? 0 : Math.floor(state.visualTime * 10) % 4;
    } else {
      companion.mode = 'idle';
      companion.frameIndex = 0;
    }
  }

  function updateProjectiles(delta) {
    for (const projectile of state.projectiles) {
      projectile.x += projectile.vx * delta;
      projectile.life -= delta;
      const target = aliveEnemies().find((enemy) => Math.abs(enemy.x - projectile.x) <= (enemy.kind === 'boss' ? 62 : 36));
      if (target) {
        applyEnemyDamage(target, { id: projectile.id, damage: projectile.damage, shieldDamage: 1, source: 'PULSE' });
        projectile.life = 0;
      }
    }
    state.projectiles = state.projectiles.filter((projectile) => projectile.life > 0 && projectile.x > 0 && projectile.x < WORLD_WIDTH);

    for (const projectile of state.enemyProjectiles) {
      projectile.x += projectile.vx * delta;
      projectile.life -= delta;
      if (Math.abs(projectile.x - state.player.x) <= PLAYER_RADIUS + 10) {
        projectile.life = 0;
        if (state.player.invulnerable > 0 && state.player.dodgeTimer > 0) {
          addSync(10);
          state.perfectDodges += 1;
          pushEvent(`${projectile.id} 被 DODGE 窗口回避。SYNC +10`);
          spawnParticles(state.player.x, GROUND_Y - 26, '#8ff0b5', 8);
        } else if (state.player.invulnerable > 0) {
          pushEvent(`${projectile.id} 被普通无敌时间吸收，不奖励 SYNC。`);
        } else {
          damagePlayer(projectile.damage, projectile.id);
        }
      }
    }
    state.enemyProjectiles = state.enemyProjectiles.filter((projectile) => projectile.life > 0 && projectile.x > 0 && projectile.x < WORLD_WIDTH);
  }

  function updateParticles(delta) {
    for (const particle of state.particles) {
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.vy += 80 * delta;
      particle.life -= delta;
    }
    state.particles = state.particles.filter((particle) => particle.life > 0).slice(-180);
  }

  function updateEncounterTransition(delta) {
    if (!['wave', 'boss'].includes(state.stage) || aliveEnemies().length > 0) return;
    if (state.transitionTimer === null) {
      state.transitionTimer = 1.15;
      pushEvent(state.wave === 3 ? 'WARDEN 已解除：正在确认试运行结果。' : `PRESSURE 0${state.wave} 清除：下一段准备中。`);
    }
    state.transitionTimer -= delta;
    if (state.transitionTimer > 0) return;
    if (state.wave < 3) loadWave(state.wave + 1);
    else {
      state.stage = 'victory';
      state.transitionTimer = null;
      clearInput();
      pushEvent('TRIAL COMPLETE：复杂场景资产链已通过。');
    }
  }

  function updateCamera(delta) {
    const target = Math.max(0, Math.min(WORLD_WIDTH - WIDTH, state.player.x - WIDTH * 0.38));
    if (reducedMotion.matches) state.cameraX = target;
    else state.cameraX += (target - state.cameraX) * Math.min(1, delta * 7);
  }

  function updateStep(delta) {
    state.visualTime += delta;
    if (['wave', 'boss'].includes(state.stage)) {
      updatePlayer(delta);
      updateCompanion(delta);
      aliveEnemies().forEach((enemy) => updateEnemy(enemy, delta));
      updateProjectiles(delta);
      updateEncounterTransition(delta);
    } else if (state.stage === 'briefing') {
      updateCompanion(delta);
    }
    updateParticles(delta);
    updateCamera(delta);
    updateUi();
  }

  function stageLabel() {
    if (state.stage === 'briefing') return 'BRIEFING';
    if (state.stage === 'wave') return `WAVE 0${state.wave}`;
    if (state.stage === 'boss') return `BOSS / PHASE ${aliveEnemies()[0]?.bossPhase || 1}`;
    return state.stage.toUpperCase();
  }

  function updateUi() {
    ui.trialState.textContent = stageLabel();
    ui.waveState.textContent = `${state.wave} / 3`;
    ui.healthState.textContent = '●'.repeat(state.player.health) + '○'.repeat(state.player.maxHealth - state.player.health);
    ui.syncState.textContent = `${Math.round(state.sync)}%`;
    ui.syncFill.style.width = `${state.sync}%`;
    ui.assetState.textContent = `${state.companion.mode.toUpperCase()} · ${String(state.companion.frameIndex + 1).padStart(2, '0')}`;
    ui.briefing.hidden = state.stage !== 'briefing';
    ui.victory.hidden = state.stage !== 'victory';
    ui.failure.hidden = state.stage !== 'failed';
    ui.syncButton?.classList.toggle('is-ready', state.sync >= 100 && ['wave', 'boss'].includes(state.stage));

    const meta = encounterMeta[state.wave] || encounterMeta[0];
    ui.encounterLabel.textContent = meta.label;
    ui.encounterTitle.textContent = state.stage === 'victory' ? '复杂场景资产链通过' : state.stage === 'failed' ? '当前压力段连接中断' : meta.title;
    ui.encounterMeta.textContent = state.transitionTimer !== null ? `NEXT IN ${Math.max(0, state.transitionTimer).toFixed(1)}s` : meta.meta;

    ui.eventLog.replaceChildren(...state.events.map((event) => {
      const item = document.createElement('li');
      item.textContent = event;
      return item;
    }));

    const enemies = aliveEnemies();
    ui.enemyState.replaceChildren(...(enemies.length ? enemies.map((enemy) => {
      const row = document.createElement('span');
      const shield = enemy.maxShield ? ` · SH ${enemy.shield}/${enemy.maxShield}` : '';
      const phase = enemy.kind === 'boss' ? ` · P${enemy.bossPhase}` : '';
      row.innerHTML = `<b>${enemy.id}</b> · ${enemy.phase.toUpperCase()} · HP ${enemy.hp}/${enemy.maxHp}${shield}${phase}`;
      return row;
    }) : [Object.assign(document.createElement('span'), { textContent: '当前没有活动目标。' })]));

    const pulseState = state.player.pendingPulse ? `startup ${Math.max(0, state.player.pendingPulse.timer * 1000).toFixed(0)}ms` : state.player.fireCooldown > 0 ? `cooldown ${state.player.fireCooldown.toFixed(2)}s` : 'ready';
    const dodgeState = state.player.dodgeTimer > 0 ? `active ${state.player.dodgeTimer.toFixed(2)}s` : state.player.dodgeCooldown > 0 ? `cooldown ${state.player.dodgeCooldown.toFixed(2)}s` : 'ready';
    const syncState = state.companion.castTimer > 0 ? `cast frame ${state.companion.frameIndex + 1}` : state.sync >= 100 ? 'ready' : `charging ${Math.round(state.sync)}%`;
    ui.actionState.replaceChildren(...[
      `PULSE ${pulseState}`,
      `DODGE ${dodgeState}`,
      `SYNC ${syncState}`
    ].map((value) => Object.assign(document.createElement('span'), { textContent: value })));
  }

  function drawBackground() {
    const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    gradient.addColorStop(0, '#071c28');
    gradient.addColorStop(0.62, '#082019');
    gradient.addColorStop(1, '#06100d');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.save();
    ctx.translate(-state.cameraX * 0.18, 0);
    ctx.fillStyle = '#0b2528';
    for (let index = 0; index < 11; index += 1) {
      const x = index * 210;
      const height = 90 + (index % 4) * 34;
      ctx.fillRect(x, GROUND_Y - 150 - height, 150, height + 150);
      ctx.fillStyle = '#103036';
      for (let light = 0; light < 4; light += 1) ctx.fillRect(x + 18 + light * 28, GROUND_Y - height - 116, 13, 3);
      ctx.fillStyle = '#0b2528';
    }
    ctx.restore();

    ctx.save();
    ctx.translate(-state.cameraX, 0);
    const zones = [
      { x: 72, w: 520, label: '01 / MIXED PATROL', color: '#6cabff' },
      { x: 610, w: 520, label: '02 / SHIELD CELL', color: '#ba8cff' },
      { x: 1150, w: 500, label: '03 / SIGNAL WARDEN', color: '#e8a75b' }
    ];
    zones.forEach((zone) => {
      ctx.strokeStyle = `${zone.color}66`;
      ctx.strokeRect(zone.x, 170, zone.w, GROUND_Y - 170);
      ctx.fillStyle = zone.color;
      ctx.font = '700 13px "Cascadia Mono", monospace';
      ctx.fillText(zone.label, zone.x + 16, 198);
    });

    ctx.strokeStyle = '#8ff0b5';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y);
    ctx.lineTo(WORLD_WIDTH, GROUND_Y);
    ctx.stroke();
    ctx.strokeStyle = '#2b473d';
    ctx.lineWidth = 1;
    for (let x = 0; x < WORLD_WIDTH; x += 72) {
      ctx.beginPath();
      ctx.moveTo(x, GROUND_Y + 26);
      ctx.lineTo(x + 36, GROUND_Y + 26);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawPlayer() {
    const x = state.player.x - state.cameraX;
    const y = GROUND_Y - PLAYER_RADIUS;
    ctx.save();
    ctx.translate(x, y);
    if (state.player.invulnerable > 0) {
      ctx.strokeStyle = '#8ff0b5';
      ctx.globalAlpha = 0.45 + Math.sin(state.visualTime * 30) * 0.25;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 34, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = '#8ff0b5';
    ctx.beginPath();
    ctx.arc(0, 0, PLAYER_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#07120f';
    ctx.beginPath();
    ctx.moveTo(state.player.facing * 6, -8);
    ctx.lineTo(state.player.facing * 17, 0);
    ctx.lineTo(state.player.facing * 6, 8);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#6cabff';
    ctx.fillRect(-state.player.facing * 31, -3, state.player.facing * -12, 6);
    ctx.restore();
    ctx.fillStyle = '#8ff0b5';
    ctx.font = '700 10px "Cascadia Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(state.player.dodgeTimer > 0 ? 'EXPLORER · DODGE' : 'EXPLORER', x, GROUND_Y + 22);
  }

  function drawCompanion() {
    const companion = state.companion;
    let image = master;
    let label = 'MASTER';
    if (companion.mode === 'run' && runFrames.length) {
      image = runFrames[companion.frameIndex % runFrames.length];
      label = 'RUN V2';
    } else if (companion.mode === 'cast' && castFrames.length) {
      image = castFrames[Math.min(castFrames.length - 1, companion.frameIndex)];
      label = 'CAST V1';
    }
    const x = companion.x - state.cameraX;
    const height = 146;
    const width = 98;
    ctx.save();
    ctx.translate(x, GROUND_Y);
    if (companion.facing < 0) ctx.scale(-1, 1);
    ctx.shadowColor = companion.mode === 'cast' ? '#6cabff' : '#8ff0b5';
    ctx.shadowBlur = companion.mode === 'cast' ? 24 : 12;
    if (image.complete && image.naturalWidth > 0) ctx.drawImage(image, -width / 2, -height, width, height);
    ctx.restore();
    ctx.fillStyle = companion.mode === 'cast' ? '#6cabff' : '#8ff0b5';
    ctx.font = '700 10px "Cascadia Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`林简投影 · ${label}`, x, GROUND_Y + 36);
  }

  function drawEnemy(enemy) {
    if (enemy.hp <= 0) return;
    const x = enemy.x - state.cameraX;
    const baseY = GROUND_Y - 32;
    const tuning = attackTuning(enemy);
    ctx.save();
    ctx.translate(x, baseY);
    if (enemy.phase === 'windup') {
      const progress = Math.min(1, enemy.phaseTime / tuning.startup);
      ctx.strokeStyle = enemyTuning[enemy.kind].color;
      ctx.globalAlpha = 0.35 + progress * 0.6;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 48 + progress * 20, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    if (enemy.phase === 'active') {
      ctx.fillStyle = 'rgba(255, 113, 108, .16)';
      ctx.beginPath();
      ctx.arc(0, 0, tuning.reach, 0, Math.PI * 2);
      ctx.fill();
    }
    const color = enemyTuning[enemy.kind].color;
    ctx.fillStyle = color;
    ctx.strokeStyle = '#07120f';
    ctx.lineWidth = 5;
    if (enemy.kind === 'stalker') {
      ctx.rotate(Math.PI / 4);
      ctx.fillRect(-23, -23, 46, 46);
      ctx.strokeRect(-23, -23, 46, 46);
      ctx.rotate(-Math.PI / 4);
    } else if (enemy.kind === 'ranger') {
      ctx.fillRect(-25, -25, 50, 50);
      ctx.strokeRect(-25, -25, 50, 50);
      ctx.fillStyle = '#07120f';
      ctx.fillRect(enemy.facing * 10, -5, enemy.facing * 32, 10);
    } else if (enemy.kind === 'bulwark') {
      ctx.beginPath();
      for (let index = 0; index < 6; index += 1) {
        const angle = Math.PI / 3 * index;
        const px = Math.cos(angle) * 34;
        const py = Math.sin(angle) * 34;
        if (index === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.shadowColor = color;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(0, 0, 48, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#07120f';
      ctx.beginPath();
      ctx.moveTo(-22, 0);
      ctx.lineTo(0, -24);
      ctx.lineTo(22, 0);
      ctx.lineTo(0, 24);
      ctx.closePath();
      ctx.fill();
    }
    if (enemy.shield > 0) {
      ctx.strokeStyle = '#ba8cff';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(0, 0, 46, -Math.PI * 0.72, Math.PI * 0.72);
      ctx.stroke();
    }
    ctx.restore();

    const width = enemy.kind === 'boss' ? 130 : 82;
    const hpRatio = enemy.hp / enemy.maxHp;
    ctx.fillStyle = '#14231e';
    ctx.fillRect(x - width / 2, baseY - (enemy.kind === 'boss' ? 76 : 58), width, 7);
    ctx.fillStyle = enemyTuning[enemy.kind].color;
    ctx.fillRect(x - width / 2, baseY - (enemy.kind === 'boss' ? 76 : 58), width * hpRatio, 7);
    ctx.fillStyle = '#edf8f1';
    ctx.font = '700 10px "Cascadia Mono", monospace';
    ctx.textAlign = 'center';
    const suffix = enemy.kind === 'boss' ? ` · PHASE ${enemy.bossPhase}` : enemy.shield > 0 ? ` · SHIELD ${enemy.shield}` : '';
    ctx.fillText(`${enemy.id}${suffix}`, x, baseY + 58);
  }

  function drawProjectiles() {
    for (const projectile of state.projectiles) {
      const x = projectile.x - state.cameraX;
      ctx.fillStyle = '#6cabff';
      ctx.shadowColor = '#6cabff';
      ctx.shadowBlur = 16;
      ctx.fillRect(x - 9, GROUND_Y - 38, 18, 7);
      ctx.shadowBlur = 0;
    }
    for (const projectile of state.enemyProjectiles) {
      const x = projectile.x - state.cameraX;
      ctx.fillStyle = projectile.color;
      ctx.shadowColor = projectile.color;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(x, GROUND_Y - 31, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function drawParticles() {
    for (const particle of state.particles) {
      ctx.globalAlpha = Math.max(0, particle.life / particle.maxLife);
      ctx.fillStyle = particle.color;
      ctx.fillRect(particle.x - state.cameraX - 2, particle.y - 2, 4, 4);
    }
    ctx.globalAlpha = 1;
  }

  function drawMiniMap() {
    const x = WIDTH / 2 - 150;
    const y = 22;
    ctx.fillStyle = 'rgba(4, 12, 10, .86)';
    ctx.strokeStyle = '#275647';
    ctx.fillRect(x, y, 300, 36);
    ctx.strokeRect(x, y, 300, 36);
    ctx.strokeStyle = '#345c50';
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 18);
    ctx.lineTo(x + 282, y + 18);
    ctx.stroke();
    [330, 900, 1420].forEach((worldX, index) => {
      ctx.fillStyle = index + 1 < state.wave ? '#8ff0b5' : index + 1 === state.wave ? '#e8a75b' : '#35574d';
      ctx.beginPath();
      ctx.arc(x + 18 + worldX / WORLD_WIDTH * 264, y + 18, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = '#edf8f1';
    ctx.beginPath();
    ctx.arc(x + 18 + state.player.x / WORLD_WIDTH * 264, y + 18, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  function draw() {
    drawBackground();
    drawMiniMap();
    state.enemies.forEach(drawEnemy);
    drawProjectiles();
    drawCompanion();
    drawPlayer();
    drawParticles();
    state.renderFrames += 1;
  }

  function setFixture(name) {
    resetRuntime();
    if (name === 'briefing' || !name) return;
    if (name === 'wave-1') {
      loadWave(1, { fixture: true, playerX: 585 });
    } else if (name === 'wave-2') {
      loadWave(2, { fixture: true, playerX: 820 });
      state.sync = 75;
    } else if (name === 'sync-ready') {
      loadWave(2, { fixture: true, playerX: 860 });
      state.enemies[0].x = 1040;
      state.sync = 100;
    } else if (name === 'boss-1') {
      loadWave(3, { fixture: true, playerX: 1050 });
      state.sync = 50;
    } else if (name === 'boss-2') {
      loadWave(3, { fixture: true, playerX: 1060 });
      state.enemies[0].hp = 7;
      state.enemies[0].bossPhase = 2;
      state.player.health = 3;
      state.sync = 100;
      pushEvent('WARDEN PHASE 2 fixture 已加载。');
    } else if (name === 'victory') {
      state.wave = 3;
      state.stage = 'victory';
      state.enemies = [];
      state.sync = 100;
      state.player.x = 1320;
      state.companion.x = 1230;
      state.events = ['TRIAL COMPLETE：复杂场景资产链已通过。'];
    } else if (name === 'failed') {
      loadWave(2, { fixture: true, playerX: 820 });
      state.stage = 'failed';
      state.player.health = 0;
      state.events = ['连接中断：当前压力段可以重试。'];
    }
    updateUi();
    draw();
  }

  function snapshot() {
    const boss = state.enemies.find((enemy) => enemy.kind === 'boss');
    return {
      available: true,
      stage: state.stage,
      wave: state.wave,
      player: {
        x: Number(state.player.x.toFixed(3)),
        health: state.player.health,
        maxHealth: state.player.maxHealth,
        invulnerable: Number(state.player.invulnerable.toFixed(3)),
        dodgeTimer: Number(state.player.dodgeTimer.toFixed(3)),
        dodgeCooldown: Number(state.player.dodgeCooldown.toFixed(3)),
        fireCooldown: Number(state.player.fireCooldown.toFixed(3)),
        pulseStartup: state.player.pendingPulse ? Number(state.player.pendingPulse.timer.toFixed(3)) : 0
      },
      companion: {
        x: Number(state.companion.x.toFixed(3)),
        mode: state.companion.mode,
        frameIndex: state.companion.frameIndex,
        castTimer: Number(state.companion.castTimer.toFixed(3)),
        contactResolved: state.companion.contactResolved
      },
      sync: Number(state.sync.toFixed(2)),
      enemies: state.enemies.map((enemy) => ({ id: enemy.id, kind: enemy.kind, x: Number(enemy.x.toFixed(2)), hp: enemy.hp, maxHp: enemy.maxHp, shield: enemy.shield, maxShield: enemy.maxShield, phase: enemy.phase, bossPhase: enemy.bossPhase })),
      enemiesAlive: aliveEnemies().length,
      bossPhase: boss?.bossPhase || 0,
      projectiles: state.projectiles.length,
      enemyProjectiles: state.enemyProjectiles.length,
      particles: state.particles.length,
      shotsFired: state.shotsFired,
      hits: state.hits,
      syncCasts: state.syncCasts,
      perfectDodges: state.perfectDodges,
      defeated: state.defeated,
      transitionTimer: state.transitionTimer === null ? null : Number(state.transitionTimer.toFixed(3)),
      cameraX: Number(state.cameraX.toFixed(3)),
      worldWidth: WORLD_WIDTH,
      events: [...state.events],
      assetsReady: state.assetsReady,
      motionAssetsReady: state.motionAssetsReady,
      assetErrors: state.assetErrors,
      renderFrames: state.renderFrames,
      reducedMotion: reducedMotion.matches
    };
  }

  function simulate(seconds, direction = '') {
    input.left = direction === 'left';
    input.right = direction === 'right';
    const steps = Math.max(0, Math.min(1200, Math.round(Number(seconds) / STEP)));
    for (let index = 0; index < steps; index += 1) updateStep(STEP);
    clearInput();
    draw();
    return snapshot();
  }

  window.__SPRITE_COMBAT_TRIAL__ = {
    available: true,
    getSnapshot: snapshot,
    setFixture,
    startTrial,
    firePulse,
    dodge,
    commandCast,
    retry: retryWave,
    reset: resetRuntime,
    simulate,
    setSync(value) { state.sync = Math.max(0, Math.min(100, Number(value))); updateUi(); return state.sync; },
    setHealth(value) { state.player.health = Math.max(1, Math.min(state.player.maxHealth, Number(value))); updateUi(); return state.player.health; },
    movePlayerTo(x) { state.player.x = Math.max(72, Math.min(WORLD_WIDTH - 72, Number(x))); updateCamera(STEP); draw(); },
    damagePlayer(amount = 1) { state.player.invulnerable = 0; const result = damagePlayer(Number(amount), 'test-contact'); updateUi(); draw(); return result; },
    damageEnemy(id, amount = 1) { const enemy = state.enemies.find((item) => item.id === id); if (!enemy) return false; const result = applyEnemyDamage(enemy, { id: `test-${state.nextActionId++}`, damage: Number(amount), shieldDamage: Number(amount), source: 'TEST CONTACT' }); updateUi(); draw(); return result; },
    defeatWave() { state.enemies.forEach((enemy) => { enemy.hp = 0; enemy.shield = 0; }); updateEncounterTransition(STEP); updateUi(); draw(); },
    spawnEnemyProjectile() { state.enemyProjectiles.push({ id: `test-bolt-${state.nextActionId++}`, x: state.player.x + 80, vx: -360, life: 1, damage: 1, color: '#e8a75b' }); return true; }
  };

  function act() {
    if (state.stage === 'briefing' || state.stage === 'failed' || state.stage === 'victory') return startTrial();
    return false;
  }

  window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['arrowleft', 'arrowright', 'a', 'd', 'j', 'k', 'l', 'c', 'e', 'r', 'enter', 'shift'].includes(key)) event.preventDefault();
    if (key === 'arrowleft' || key === 'a') input.left = true;
    if (key === 'arrowright' || key === 'd') input.right = true;
    if ((key === 'j') && !event.repeat) firePulse();
    if ((key === 'k' || key === 'shift') && !event.repeat) dodge();
    if ((key === 'l' || key === 'c') && !event.repeat) commandCast();
    if ((key === 'e' || key === 'enter') && !event.repeat) act();
    if (key === 'r' && !event.repeat) resetRuntime();
  });
  window.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'arrowleft' || key === 'a') input.left = false;
    if (key === 'arrowright' || key === 'd') input.right = false;
  });
  window.addEventListener('blur', clearInput);
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearInput(); });

  holdButtons.forEach((button) => {
    const direction = button.dataset.hold;
    const start = (event) => {
      event.preventDefault();
      input[direction] = true;
      button.classList.add('is-active');
      button.setPointerCapture?.(event.pointerId);
      canvas.focus({ preventScroll: true });
    };
    const stop = (event) => {
      event.preventDefault();
      input[direction] = false;
      button.classList.remove('is-active');
    };
    button.addEventListener('pointerdown', start);
    button.addEventListener('pointerup', stop);
    button.addEventListener('pointercancel', stop);
    button.addEventListener('lostpointercapture', stop);
  });

  actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      if (action === 'pulse') firePulse();
      if (action === 'dodge') dodge();
      if (action === 'sync') commandCast();
      if (action === 'start') act();
      if (action === 'retry') retryWave();
      if (action === 'reset') resetRuntime();
    });
  });

  const images = [master, ...runFrames, ...castFrames];
  const paths = [masterPath, ...runPaths, ...castPaths];
  Promise.all(images.map((image, index) => new Promise((resolve) => {
    image.onload = () => resolve(true);
    image.onerror = () => { state.assetErrors += 1; resolve(false); };
    image.src = paths[index];
  }))).then((loaded) => {
    state.assetsReady = loaded.every(Boolean);
    state.motionAssetsReady = state.assetsReady && master.naturalWidth > 0 && runFrames.every((image) => image.naturalWidth > 0) && castFrames.every((image) => image.naturalWidth > 0);
    updateUi();
    draw();
  });

  let previousTime = performance.now();
  let accumulator = 0;
  function frame(time) {
    const delta = Math.min(MAX_FRAME_DELTA, Math.max(0, (time - previousTime) / 1000));
    previousTime = time;
    accumulator += delta;
    while (accumulator >= STEP) {
      updateStep(STEP);
      accumulator -= STEP;
    }
    draw();
    requestAnimationFrame(frame);
  }

  const fixture = new URLSearchParams(window.location.search).get('state') || 'briefing';
  setFixture(fixture);
  requestAnimationFrame(frame);
})();
