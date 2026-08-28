(() => {
  "use strict";

  const WIDTH = 960;
  const HEIGHT = 540;
  const FLOOR_Y = 414;
  const CEILING_Y = 126;
  const FIXED_STEP = 1 / 120;
  const PLAYER_RADIUS = 15;
  const GRAVITY = 2050;
  const JUMP_POWER = 715;
  const CAM_X = 268;
  const CAMPAIGN_SECONDS = 120;
  const STORAGE_KEY = "outrun_the_level_progress_v1";

  const canvas = document.querySelector("#game");
  const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
  const ui = {
    hud: document.querySelector("#hud"),
    menu: document.querySelector("#menuScreen"),
    result: document.querySelector("#resultScreen"),
    score: document.querySelector("#scoreValue"),
    distance: document.querySelector("#distanceValue"),
    collectibles: document.querySelector("#collectibleValue"),
    timer: document.querySelector("#timerValue"),
    phase: document.querySelector("#phaseValue"),
    gravity: document.querySelector("#gravityBadge"),
    progress: document.querySelector("#progressFill"),
    toast: document.querySelector("#toast"),
    menuBest: document.querySelector("#menuBest"),
    menuDistance: document.querySelector("#menuDistance"),
    infiniteLabel: document.querySelector("#infiniteButtonLabel"),
    startInfinite: document.querySelector("#startInfinite"),
    resultKicker: document.querySelector("#resultKicker"),
    resultTitle: document.querySelector("#resultTitle"),
    resultReason: document.querySelector("#resultReason"),
    resultScore: document.querySelector("#resultScore"),
    resultDistance: document.querySelector("#resultDistance"),
    resultCollectibles: document.querySelector("#resultCollectibles"),
    resultBest: document.querySelector("#resultBest"),
    resultInfinite: document.querySelector("#resultInfiniteButton")
  };

  const defaultProgress = {
    infiniteUnlocked: false,
    bestCampaign: 0,
    bestInfinite: 0,
    bestDistance: 0,
    totalCollectibles: 0
  };

  function loadProgress() {
    try {
      return { ...defaultProgress, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    } catch (_) {
      return { ...defaultProgress };
    }
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (_) { /* storage may be disabled */ }
  }

  let progress = loadProgress();
  let state = "menu";
  let mode = "campaign";
  let elapsed = 0;
  let score = 0;
  let distance = 0;
  let collected = 0;
  let speed = 300;
  let tier = 0;
  let cameraX = -148;
  let waveX = -220;
  let gravityDirection = 1;
  let worldTilt = 0;
  let worldTiltVelocity = 0;
  let shake = 0;
  let exitPrepared = false;
  let endedAt = 0;
  let toastTimer = 0;
  let lastFrame = performance.now();
  let accumulator = 0;
  let audio = null;

  const player = {
    x: 120,
    previousX: 120,
    y: FLOOR_Y - PLAYER_RADIUS,
    previousY: FLOOR_Y - PLAYER_RADIUS,
    vy: 0,
    onSurface: true,
    coyote: 0.1,
    jumpBuffer: 0,
    rotation: 0,
    runCycle: 0
  };

  const world = {
    platforms: [],
    obstacles: [],
    collectibles: [],
    gates: [],
    particles: [],
    exit: null,
    cursor: 0,
    plannedGravity: 1,
    gateIndex: 0,
    nextInfiniteGate: 9400,
    rngState: 1
  };

  function makeSeed() {
    return ((Date.now() ^ Math.floor(performance.now() * 1000)) >>> 0) || 1;
  }

  function random() {
    let x = world.rngState;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    world.rngState = x >>> 0;
    return world.rngState / 4294967296;
  }

  function range(min, max) { return min + random() * (max - min); }

  function resetWorld(seed = makeSeed()) {
    world.platforms.length = 0;
    world.obstacles.length = 0;
    world.collectibles.length = 0;
    world.gates.length = 0;
    world.particles.length = 0;
    world.exit = null;
    world.cursor = 1850;
    world.plannedGravity = 1;
    world.gateIndex = 0;
    world.nextInfiniteGate = 9400;
    world.rngState = seed;
    world.platforms.push({ x: -900, w: 2750, side: 1 });
    addCollectibleLine(680, 5, 46, 1, 72);
    ensureWorld(3300);
  }

  function addPlatform(x, w, side) {
    if (w > 1) world.platforms.push({ x, w, side });
  }

  function addObstacle(x, side, kind = "spike", size = 42) {
    const h = kind === "barrier" ? size * 1.35 : size;
    world.obstacles.push({ x, w: kind === "barrier" ? size * 0.82 : size, h, side, kind });
  }

  function collectibleY(side, lift = 72) {
    return side === 1 ? FLOOR_Y - lift : CEILING_Y + lift;
  }

  function addCollectibleLine(x, count, gap, side, lift = 72) {
    for (let i = 0; i < count; i += 1) {
      world.collectibles.push({ x: x + i * gap, y: collectibleY(side, lift), taken: false, phase: random() * Math.PI * 2 });
    }
  }

  function addCollectibleArc(x, width, side) {
    const count = 5;
    for (let i = 0; i < count; i += 1) {
      const t = i / (count - 1);
      const lift = 60 + Math.sin(t * Math.PI) * 68;
      world.collectibles.push({ x: x + t * width, y: collectibleY(side, lift), taken: false, phase: random() * Math.PI * 2 });
    }
  }

  function campaignGateThreshold() {
    return [10300, 19900, 29600, 39200][world.gateIndex] ?? Infinity;
  }

  function shouldPlaceGate() {
    if (mode === "campaign") return world.cursor >= campaignGateThreshold() - 800;
    return world.cursor >= world.nextInfiniteGate - 800;
  }

  function generateGateChunk() {
    const side = world.plannedGravity;
    const start = world.cursor;
    const gateX = start + 340;
    const target = -side;
    addPlatform(start, 430, side);
    addPlatform(gateX + 34, 790, target);
    addCollectibleLine(gateX + 205, 5, 48, target, 74);
    world.gates.push({ x: gateX, from: side, target, used: false });
    world.cursor = gateX + 824;
    world.plannedGravity = target;
    if (mode === "campaign") world.gateIndex += 1;
    else world.nextInfiniteGate += range(7800, 9300);
  }

  function generateFlatChunk(difficulty) {
    const side = world.plannedGravity;
    const start = world.cursor;
    const length = range(620, 850);
    addPlatform(start, length, side);

    // Two separate jumps only appear when the platform is long enough to give
    // a full landing-and-rejump window at maximum campaign speed.
    const obstacleCount = length >= 790 && random() < 0.35 + difficulty * 0.065 ? 2 : 1;
    if (obstacleCount === 1) {
      const ox = start + range(235, length - 155);
      addObstacle(ox, side, random() < 0.28 ? "barrier" : "spike", range(34, 45));
      addCollectibleLine(ox - 80, 4, 42, side, 102);
    } else {
      const first = start + 220;
      const second = Math.min(start + length - 145, first + range(385, 425));
      addObstacle(first, side, "spike", range(34, 42));
      addObstacle(second, side, random() < 0.35 ? "barrier" : "spike", range(34, 42));
      addCollectibleLine(first - 66, 3, 42, side, 104);
    }
    world.cursor += length;
  }

  function generateGapChunk(difficulty) {
    const side = world.plannedGravity;
    const start = world.cursor;
    const approach = range(255, 350);
    const gap = Math.min(138, 76 + difficulty * 8 + range(0, 18));
    const landing = range(570, 760);
    addPlatform(start, approach, side);
    addPlatform(start + approach + gap, landing, side);
    addCollectibleArc(start + approach - 8, gap + 34, side);
    if (landing > 640 && random() < 0.52) {
      addObstacle(start + approach + gap + 300, side, "spike", range(34, 41));
    }
    world.cursor += approach + gap + landing;
  }

  function generatePulseChunk(difficulty) {
    const side = world.plannedGravity;
    const start = world.cursor;
    const length = range(760, 930);
    addPlatform(start, length, side);
    const clusterX = start + range(245, 320);
    addObstacle(clusterX, side, "spike", 34);
    addObstacle(clusterX + 35, side, "spike", 34);
    addCollectibleLine(clusterX - 72, 5, 38, side, 112);
    if (difficulty >= 3 && length > 840) {
      addObstacle(start + length - 180, side, "spike", 36);
    }
    world.cursor += length;
  }

  function generateRestChunk() {
    const side = world.plannedGravity;
    const start = world.cursor;
    const length = range(580, 720);
    addPlatform(start, length, side);
    addCollectibleLine(start + 180, 6, 50, side, 66);
    world.cursor += length;
  }

  function ensureWorld(targetX) {
    if (exitPrepared) return;
    let guard = 0;
    while (world.cursor < targetX && guard < 40) {
      guard += 1;
      if (shouldPlaceGate()) {
        generateGateChunk();
        continue;
      }
      const difficulty = mode === "campaign" ? Math.min(5, Math.floor(elapsed / 20)) : Math.min(10, Math.floor(elapsed / 20));
      const roll = random();
      const gapChance = 0.22 + Math.min(difficulty, 6) * 0.018;
      if (roll < 0.14) generateRestChunk();
      else if (roll < 0.14 + gapChance) generateGapChunk(difficulty);
      else if (roll < 0.58) generatePulseChunk(difficulty);
      else generateFlatChunk(difficulty);
    }
  }

  function prepareExit() {
    if (exitPrepared) return;
    exitPrepared = true;
    const safeStart = player.x - 220;
    const exitX = player.x + 720;
    world.obstacles = world.obstacles.filter((item) => item.x < safeStart);
    world.gates = world.gates.filter((item) => item.x < safeStart);
    addPlatform(safeStart, 1500, gravityDirection);
    addCollectibleLine(player.x + 160, 7, 55, gravityDirection, 72);
    world.exit = { x: exitX, side: gravityDirection };
    showToast("出口已生成 // 抵达出口", 2.6);
    sound("exit");
  }

  function cleanupWorld() {
    const cutoff = cameraX - 700;
    world.platforms = world.platforms.filter((item) => item.x + item.w > cutoff);
    world.obstacles = world.obstacles.filter((item) => item.x + item.w > cutoff);
    world.collectibles = world.collectibles.filter((item) => !item.taken && item.x > cutoff);
    world.gates = world.gates.filter((item) => !item.used || item.x > cutoff);
  }

  function surfaceAt(x, side) {
    for (let i = world.platforms.length - 1; i >= 0; i -= 1) {
      const platform = world.platforms[i];
      if (platform.side === side && x >= platform.x && x <= platform.x + platform.w) return platform;
    }
    return null;
  }

  function currentSpeed() {
    const level = Math.floor(elapsed / 20);
    if (mode === "campaign") return 300 + Math.min(level, 5) * 27;
    return 300 + Math.min(level, 12) * 18;
  }

  function beginRun(nextMode = "campaign", seed) {
    mode = nextMode;
    state = "playing";
    elapsed = 0;
    score = 0;
    distance = 0;
    collected = 0;
    speed = 300;
    tier = 0;
    gravityDirection = 1;
    worldTilt = 0;
    worldTiltVelocity = 0;
    shake = 0;
    exitPrepared = false;
    toastTimer = 0;
    accumulator = 0;
    player.x = 120;
    player.previousX = 120;
    player.y = FLOOR_Y - PLAYER_RADIUS;
    player.previousY = player.y;
    player.vy = 0;
    player.onSurface = true;
    player.coyote = 0.1;
    player.jumpBuffer = 0;
    player.rotation = 0;
    player.runCycle = 0;
    cameraX = player.x - CAM_X;
    waveX = player.x - 210;
    resetWorld(seed);
    ui.menu.classList.add("is-hidden");
    ui.result.classList.add("is-hidden");
    ui.hud.classList.remove("is-hidden");
    document.body.dataset.state = "playing";
    initAudio();
    showToast(mode === "campaign" ? "坚持 120 秒" : "无限模式 // 开始", 1.4);
    updateHud();
  }

  function queueJump() {
    if (state !== "playing") return;
    player.jumpBuffer = 0.13;
  }

  function performJump() {
    player.vy = -gravityDirection * JUMP_POWER;
    player.onSurface = false;
    player.coyote = 0;
    player.jumpBuffer = 0;
    spawnBurst(player.x, player.y + gravityDirection * PLAYER_RADIUS, "#45edf3", 6, -gravityDirection);
    sound("jump");
  }

  function circleHitsRect(cx, cy, radius, rect) {
    const nx = Math.max(rect.x, Math.min(cx, rect.x + rect.w));
    const ny = Math.max(rect.y, Math.min(cy, rect.y + rect.h));
    const dx = cx - nx;
    const dy = cy - ny;
    return dx * dx + dy * dy < radius * radius;
  }

  function obstacleRect(obstacle) {
    const inset = obstacle.kind === "spike" ? 6 : 2;
    return {
      x: obstacle.x + inset,
      y: obstacle.side === 1 ? FLOOR_Y - obstacle.h + inset : CEILING_Y,
      w: Math.max(4, obstacle.w - inset * 2),
      h: Math.max(4, obstacle.h - inset)
    };
  }

  function checkInteractions() {
    for (const gate of world.gates) {
      if (!gate.used && player.previousX < gate.x && player.x >= gate.x) {
        gate.used = true;
        gravityDirection = gate.target;
        player.onSurface = false;
        player.coyote = 0;
        player.vy = gravityDirection * 88;
        worldTiltVelocity = gravityDirection === -1 ? -1 : 1;
        spawnBurst(gate.x, HEIGHT / 2, "#c56cff", 18, gravityDirection);
        showToast(gravityDirection === -1 ? "重力反转 // 向上坠落" : "重力恢复 // 向下坠落", 1.7);
        sound("gate");
      }
    }

    for (const obstacle of world.obstacles) {
      if (obstacle.x > player.x + 80 || obstacle.x + obstacle.w < player.x - 40) continue;
      if (circleHitsRect(player.x, player.y, PLAYER_RADIUS * 0.82, obstacleRect(obstacle))) {
        finishRun(false, "obstacle");
        return;
      }
    }

    for (const item of world.collectibles) {
      if (item.taken || Math.abs(item.x - player.x) > 32) continue;
      const dx = item.x - player.x;
      const dy = item.y - player.y;
      if (dx * dx + dy * dy < 31 * 31) {
        item.taken = true;
        collected += 1;
        spawnBurst(item.x, item.y, "#ffd166", 7, 0);
        sound("collect");
      }
    }

    if (world.exit && player.previousX < world.exit.x && player.x >= world.exit.x) {
      finishRun(true, "escaped");
    }
  }

  function isFallingAway() {
    return gravityDirection === 1 ? player.y > FLOOR_Y + 34 : player.y < CEILING_Y - 34;
  }

  function updateStep(dt) {
    if (state !== "playing") return;
    const previousTier = tier;
    elapsed += dt;
    tier = Math.floor(elapsed / 20);
    speed = currentSpeed();
    if (tier !== previousTier && (!exitPrepared || mode === "infinite")) {
      showToast(`阶段 ${tier + 1} // 速度提升`, 1.5);
      sound("phase");
    }

    if (mode === "campaign" && elapsed >= CAMPAIGN_SECONDS) prepareExit();

    player.jumpBuffer = Math.max(0, player.jumpBuffer - dt);
    if (player.onSurface) player.coyote = 0.105;
    else player.coyote = Math.max(0, player.coyote - dt);
    if (player.jumpBuffer > 0 && player.coyote > 0) performJump();

    player.previousX = player.x;
    player.previousY = player.y;
    const runFactor = isFallingAway() ? 0.22 : 1;
    player.x += speed * runFactor * dt;
    player.vy += gravityDirection * GRAVITY * dt;
    player.y += player.vy * dt;
    player.runCycle += speed * dt * 0.028;

    const support = surfaceAt(player.x, gravityDirection);
    const targetY = gravityDirection === 1 ? FLOOR_Y - PLAYER_RADIUS : CEILING_Y + PLAYER_RADIUS;
    const crossedSurface = gravityDirection === 1
      ? player.previousY <= targetY && player.y >= targetY && player.vy >= 0
      : player.previousY >= targetY && player.y <= targetY && player.vy <= 0;

    if (support && crossedSurface) {
      if (!player.onSurface && Math.abs(player.vy) > 180) {
        spawnBurst(player.x, targetY + gravityDirection * PLAYER_RADIUS, "#3bcad4", 5, -gravityDirection);
        sound("land");
      }
      player.y = targetY;
      player.vy = 0;
      player.onSurface = true;
    } else if (!support && player.onSurface) {
      player.onSurface = false;
    }

    if (player.onSurface && support) {
      player.y = targetY;
      player.vy = 0;
    }

    const desiredRotation = gravityDirection === 1 ? 0 : Math.PI;
    let rotationDelta = desiredRotation - player.rotation;
    while (rotationDelta > Math.PI) rotationDelta -= Math.PI * 2;
    while (rotationDelta < -Math.PI) rotationDelta += Math.PI * 2;
    player.rotation += rotationDelta * Math.min(1, dt * 9);
    worldTilt += (gravityDirection === -1 ? -0.018 : 0.018 - worldTilt) * dt * 1.6;
    worldTiltVelocity *= Math.pow(0.01, dt);

    cameraX += (player.x - CAM_X - cameraX) * Math.min(1, dt * 14);
    if (isFallingAway()) waveX += speed * 0.98 * dt;
    else waveX += speed * 0.988 * dt;

    if (player.x - PLAYER_RADIUS <= waveX) {
      finishRun(false, "wave");
      return;
    }
    if (player.y > HEIGHT + 500 || player.y < -500) {
      finishRun(false, "fall");
      return;
    }

    checkInteractions();
    if (state !== "playing") return;
    ensureWorld(player.x + 2700);
    if (Math.floor(elapsed * 2) % 9 === 0) cleanupWorld();

    distance = Math.max(0, Math.floor((player.x - 120) / 10));
    score = Math.floor(distance * 8 + collected * 250 + elapsed * 24);
    updateParticles(dt);
    if (shake > 0) shake = Math.max(0, shake - dt * 3.5);
    if (toastTimer > 0) {
      toastTimer -= dt;
      if (toastTimer <= 0) ui.toast.classList.remove("is-visible");
    }
  }

  function finishRun(success, reason) {
    if (state !== "playing") return;
    state = success ? "complete" : "gameover";
    endedAt = performance.now();
    shake = success ? 0.15 : 1;
    const bestKey = mode === "campaign" ? "bestCampaign" : "bestInfinite";
    progress[bestKey] = Math.max(progress[bestKey], score);
    progress.bestDistance = Math.max(progress.bestDistance, distance);
    progress.totalCollectibles += collected;
    if (success && mode === "campaign") progress.infiniteUnlocked = true;
    saveProgress();
    updateMenuRecords();
    showResult(success, reason);
    spawnBurst(player.x, player.y, success ? "#5fffea" : "#ff496d", success ? 34 : 22, 0);
    sound(success ? "win" : "fail");
  }

  function showResult(success, reason) {
    const reasons = {
      obstacle: "你撞上了危险物。再早一点起跳。",
      fall: "你掉出了跑道。注意落点与重力方向。",
      wave: "删除浪追上了你。保持前进。",
      escaped: "你从生成中的世界里成功逃脱。"
    };
    ui.resultKicker.textContent = success ? "LEVEL OUTRUN // COMPLETE" : "RUN TERMINATED";
    ui.resultTitle.textContent = success ? "成功抵达出口" : "连接中断";
    ui.resultReason.textContent = reasons[reason] || "本局结束。";
    ui.resultScore.textContent = formatScore(score);
    ui.resultDistance.textContent = `${distance} m`;
    ui.resultCollectibles.textContent = String(collected);
    ui.resultBest.textContent = formatScore(Math.max(progress.bestCampaign, progress.bestInfinite));
    ui.resultInfinite.classList.toggle("is-hidden", !progress.infiniteUnlocked || mode === "infinite");
    ui.result.classList.remove("is-hidden");
    ui.hud.classList.add("is-hidden");
    document.body.dataset.state = state;
  }

  function returnToMenu() {
    state = "menu";
    ui.result.classList.add("is-hidden");
    ui.hud.classList.add("is-hidden");
    ui.menu.classList.remove("is-hidden");
    document.body.dataset.state = "menu";
    updateMenuRecords();
  }

  function formatScore(value) { return String(Math.max(0, value | 0)).padStart(6, "0"); }

  function updateMenuRecords() {
    ui.menuBest.textContent = formatScore(Math.max(progress.bestCampaign, progress.bestInfinite));
    ui.menuDistance.textContent = `${progress.bestDistance} m`;
    ui.startInfinite.disabled = !progress.infiniteUnlocked;
    ui.infiniteLabel.textContent = progress.infiniteUnlocked ? "无限模式" : "无限模式 · 完成主模式后解锁";
  }

  function updateHud() {
    ui.score.textContent = formatScore(score);
    ui.distance.textContent = `${distance} m`;
    ui.collectibles.textContent = String(collected);
    if (mode === "campaign") {
      const remaining = Math.max(0, CAMPAIGN_SECONDS - elapsed);
      ui.timer.textContent = remaining.toFixed(1);
      ui.phase.textContent = exitPrepared ? "出口已生成" : `阶段 ${Math.min(6, tier + 1)} / 6`;
      ui.progress.style.width = `${Math.min(100, elapsed / CAMPAIGN_SECONDS * 100)}%`;
    } else {
      ui.timer.textContent = elapsed.toFixed(1);
      ui.phase.textContent = `无限阶段 ${tier + 1}`;
      ui.progress.style.width = `${(elapsed % 20) / 20 * 100}%`;
    }
    const inverted = gravityDirection === -1;
    ui.gravity.classList.toggle("is-inverted", inverted);
    ui.gravity.innerHTML = inverted ? "<span>↑</span> 反向重力" : "<span>↓</span> 标准重力";
  }

  function showToast(message, duration = 1.5) {
    ui.toast.textContent = message;
    ui.toast.classList.add("is-visible");
    toastTimer = duration;
  }

  function initAudio() {
    if (audio) {
      if (audio.state === "suspended") audio.resume();
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audio = new AudioContext();
  }

  function sound(type) {
    if (!audio || audio.state !== "running") return;
    const now = audio.currentTime;
    const gain = audio.createGain();
    const osc = audio.createOscillator();
    const settings = {
      jump: [290, 470, 0.09, "square", 0.035],
      land: [95, 62, 0.05, "triangle", 0.018],
      collect: [690, 980, 0.08, "sine", 0.032],
      gate: [180, 520, 0.28, "sawtooth", 0.026],
      phase: [260, 390, 0.18, "square", 0.022],
      fail: [170, 45, 0.38, "sawtooth", 0.045],
      exit: [320, 720, 0.42, "sine", 0.035],
      win: [420, 940, 0.62, "triangle", 0.04]
    }[type] || [220, 220, 0.05, "sine", 0.02];
    osc.type = settings[3];
    osc.frequency.setValueAtTime(settings[0], now);
    osc.frequency.exponentialRampToValueAtTime(Math.max(30, settings[1]), now + settings[2]);
    gain.gain.setValueAtTime(settings[4], now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + settings[2]);
    osc.connect(gain).connect(audio.destination);
    osc.start(now);
    osc.stop(now + settings[2]);
  }

  function spawnBurst(x, y, color, count, direction) {
    for (let i = 0; i < count; i += 1) {
      world.particles.push({
        x, y,
        vx: range(-145, 145),
        vy: direction ? range(25, 170) * direction : range(-170, 170),
        life: range(0.2, 0.55),
        maxLife: 0.55,
        color,
        size: range(1.5, 4)
      });
    }
  }

  function updateParticles(dt) {
    for (const particle of world.particles) {
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vy += 260 * dt;
      particle.life -= dt;
    }
    world.particles = world.particles.filter((particle) => particle.life > 0);
  }

  function hash(number) {
    const x = Math.sin(number * 127.1) * 43758.5453;
    return x - Math.floor(x);
  }

  function worldToScreen(x) { return x - cameraX; }

  function drawBackground(time) {
    const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    gradient.addColorStop(0, "#050813");
    gradient.addColorStop(0.55, "#07101a");
    gradient.addColorStop(1, "#03060c");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.strokeStyle = "rgba(42, 108, 120, .08)";
    ctx.lineWidth = 1;
    const horizon = 272;
    for (let y = horizon; y < HEIGHT; y += 26) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(WIDTH, y + (y - horizon) * 0.02);
      ctx.stroke();
    }

    drawCityLayer(cameraX * 0.08, 263, 0.35, "#08121d", "rgba(39, 104, 115, .10)", 58);
    drawCityLayer(cameraX * 0.16, 322, 0.55, "#091722", "rgba(49, 133, 142, .13)", 82);

    ctx.save();
    ctx.globalAlpha = 0.13;
    ctx.fillStyle = "#44eaf1";
    const scanX = ((time * 18) % (WIDTH + 220)) - 110;
    ctx.fillRect(scanX, 0, 1, HEIGHT);
    ctx.restore();
  }

  function drawCityLayer(offset, baseY, alpha, fill, light, cell) {
    ctx.save();
    ctx.globalAlpha = alpha;
    const start = Math.floor(offset / cell) - 2;
    for (let i = start; i < start + Math.ceil(WIDTH / cell) + 5; i += 1) {
      const x = i * cell - offset;
      const w = cell * (0.58 + hash(i * 5.17) * 0.34);
      const h = 48 + hash(i * 8.31) * 145;
      ctx.fillStyle = fill;
      ctx.fillRect(x, baseY - h, w, h);
      ctx.fillStyle = light;
      const rows = Math.floor(h / 22);
      for (let row = 1; row < rows; row += 1) {
        if (hash(i * 19 + row) > 0.68) ctx.fillRect(x + 8, baseY - row * 19, 3, 7);
        if (hash(i * 31 + row) > 0.82) ctx.fillRect(x + w - 11, baseY - row * 19, 3, 7);
      }
    }
    ctx.restore();
  }

  function drawWorld(time) {
    ctx.save();
    if (shake > 0) ctx.translate((hash(time * 80) - 0.5) * 8 * shake, (hash(time * 97) - 0.5) * 6 * shake);

    drawDeletionWave(time);

    for (const platform of world.platforms) drawPlatform(platform);
    for (const gate of world.gates) drawGate(gate, time);
    if (world.exit) drawExit(world.exit, time);
    for (const item of world.collectibles) if (!item.taken) drawCollectible(item, time);
    for (const obstacle of world.obstacles) drawObstacle(obstacle);
    for (const particle of world.particles) drawParticle(particle);
    drawPlayer(time);
    ctx.restore();
  }

  function drawPlatform(platform) {
    const x = worldToScreen(platform.x);
    if (x > WIDTH + 80 || x + platform.w < -80) return;
    const y = platform.side === 1 ? FLOOR_Y : 0;
    const h = platform.side === 1 ? HEIGHT - FLOOR_Y + 10 : CEILING_Y;
    ctx.fillStyle = "#09131d";
    ctx.fillRect(x, y, platform.w, h);
    ctx.fillStyle = "#0c1a25";
    if (platform.side === 1) {
      ctx.beginPath();
      ctx.moveTo(x, FLOOR_Y);
      ctx.lineTo(x + platform.w, FLOOR_Y);
      ctx.lineTo(x + platform.w - 18, FLOOR_Y + 25);
      ctx.lineTo(x + 18, FLOOR_Y + 25);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(x, CEILING_Y);
      ctx.lineTo(x + platform.w, CEILING_Y);
      ctx.lineTo(x + platform.w - 18, CEILING_Y - 25);
      ctx.lineTo(x + 18, CEILING_Y - 25);
      ctx.closePath();
      ctx.fill();
    }
    ctx.strokeStyle = "rgba(57, 222, 231, .82)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(x, platform.side === 1 ? FLOOR_Y : CEILING_Y);
    ctx.lineTo(x + platform.w, platform.side === 1 ? FLOOR_Y : CEILING_Y);
    ctx.stroke();
    ctx.strokeStyle = "rgba(57, 222, 231, .12)";
    ctx.lineWidth = 1;
    const innerY = platform.side === 1 ? FLOOR_Y + 24 : CEILING_Y - 24;
    for (let lineX = x + 26; lineX < x + platform.w; lineX += 54) {
      ctx.beginPath();
      ctx.moveTo(lineX, platform.side === 1 ? FLOOR_Y + 2 : CEILING_Y - 2);
      ctx.lineTo(lineX - 15, innerY);
      ctx.stroke();
    }
  }

  function drawObstacle(obstacle) {
    const x = worldToScreen(obstacle.x);
    if (x > WIDTH + 70 || x + obstacle.w < -70) return;
    const base = obstacle.side === 1 ? FLOOR_Y : CEILING_Y;
    const sign = obstacle.side === 1 ? -1 : 1;
    if (obstacle.kind === "spike") {
      ctx.fillStyle = "#ff496d";
      ctx.strokeStyle = "#ff9a78";
      ctx.lineWidth = 1.2;
      const spikes = obstacle.w > 50 ? 2 : 1;
      const sw = obstacle.w / spikes;
      for (let i = 0; i < spikes; i += 1) {
        ctx.beginPath();
        ctx.moveTo(x + i * sw, base);
        ctx.lineTo(x + i * sw + sw / 2, base + sign * obstacle.h);
        ctx.lineTo(x + (i + 1) * sw, base);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    } else {
      const top = obstacle.side === 1 ? base - obstacle.h : base;
      ctx.fillStyle = "#291522";
      ctx.fillRect(x, top, obstacle.w, obstacle.h);
      ctx.strokeStyle = "#ff5a73";
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 1, top + 1, obstacle.w - 2, obstacle.h - 2);
      ctx.strokeStyle = "rgba(255, 200, 87, .72)";
      ctx.lineWidth = 1;
      for (let y = 7; y < obstacle.h; y += 11) {
        ctx.beginPath();
        ctx.moveTo(x + 4, top + y);
        ctx.lineTo(x + obstacle.w - 4, top + Math.min(obstacle.h - 3, y + 8));
        ctx.stroke();
      }
    }
  }

  function drawCollectible(item, time) {
    const x = worldToScreen(item.x);
    if (x < -40 || x > WIDTH + 40) return;
    const y = item.y + Math.sin(time * 4 + item.phase) * 4;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(time * 1.8 + item.phase);
    ctx.shadowColor = "rgba(255, 200, 87, .6)";
    ctx.shadowBlur = 8;
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(6, 0);
    ctx.lineTo(0, 8);
    ctx.lineTo(-6, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawGate(gate, time) {
    const x = worldToScreen(gate.x);
    if (x < -100 || x > WIDTH + 180) return;
    const pulse = 0.65 + Math.sin(time * 5) * 0.12;
    ctx.save();
    ctx.globalAlpha = gate.used ? 0.22 : 1;
    ctx.strokeStyle = `rgba(202, 104, 255, ${pulse})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, CEILING_Y + 10);
    ctx.bezierCurveTo(x - 24, 210, x + 24, 330, x, FLOOR_Y - 10);
    ctx.stroke();
    ctx.strokeStyle = "rgba(71, 232, 238, .72)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(x, HEIGHT / 2, 28 + Math.sin(time * 4) * 3, 126, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "rgba(213, 157, 255, .9)";
    ctx.font = "700 10px Consolas, monospace";
    ctx.textAlign = "center";
    ctx.fillText("GRAVITY", x, HEIGHT / 2 - 8);
    ctx.font = "700 22px Consolas, monospace";
    ctx.fillText(gate.target === -1 ? "↑" : "↓", x, HEIGHT / 2 + 18);
    if (!gate.used && x > 430) {
      ctx.fillStyle = "rgba(209, 165, 235, .7)";
      ctx.font = "700 9px Consolas, monospace";
      ctx.textAlign = "left";
      ctx.fillText("重力门 // 准备翻转", x - 250, gate.from === 1 ? FLOOR_Y - 34 : CEILING_Y + 40);
    }
    ctx.restore();
  }

  function drawExit(exit, time) {
    const x = worldToScreen(exit.x);
    if (x < -100 || x > WIDTH + 160) return;
    const surface = exit.side === 1 ? FLOOR_Y : CEILING_Y;
    const sign = exit.side === 1 ? -1 : 1;
    ctx.save();
    ctx.translate(x, surface);
    ctx.shadowColor = "rgba(70, 255, 229, .55)";
    ctx.shadowBlur = 16;
    ctx.strokeStyle = "#64ffe8";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(-28, sign * 112);
    ctx.quadraticCurveTo(0, sign * 146, 28, sign * 112);
    ctx.lineTo(28, 0);
    ctx.stroke();
    ctx.globalAlpha = 0.35 + Math.sin(time * 7) * 0.12;
    ctx.fillStyle = "#64ffe8";
    ctx.fillRect(-20, sign === -1 ? -108 : 0, 40, 108);
    ctx.restore();
  }

  function drawDeletionWave(time) {
    const x = worldToScreen(waveX);
    const gradient = ctx.createLinearGradient(x - 130, 0, x + 24, 0);
    gradient.addColorStop(0, "rgba(1, 2, 6, .98)");
    gradient.addColorStop(0.78, "rgba(8, 3, 13, .93)");
    gradient.addColorStop(1, "rgba(255, 55, 105, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(-20, 0, x + 50, HEIGHT);
    ctx.strokeStyle = "rgba(255, 65, 104, .85)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    for (let y = 0; y <= HEIGHT; y += 18) {
      const jag = (hash(Math.floor(y * 0.7 + time * 26)) - 0.5) * 22;
      ctx.lineTo(x + jag, y);
    }
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 73, 109, .58)";
    for (let i = 0; i < 8; i += 1) {
      const yy = (i * 73 + time * 76) % HEIGHT;
      const width = 10 + hash(i * 22 + Math.floor(time * 5)) * 55;
      ctx.fillRect(x - width, yy, width, 1);
    }
  }

  function drawParticle(particle) {
    const x = worldToScreen(particle.x);
    ctx.globalAlpha = Math.max(0, particle.life / particle.maxLife);
    ctx.fillStyle = particle.color;
    ctx.fillRect(x, particle.y, particle.size, particle.size);
    ctx.globalAlpha = 1;
  }

  function drawPlayer(time) {
    const x = worldToScreen(player.x);
    const y = player.y;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(player.rotation);
    ctx.shadowColor = "rgba(74, 246, 244, .75)";
    ctx.shadowBlur = 12;
    ctx.fillStyle = "#d8ffff";
    ctx.strokeStyle = "#42eaf0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -16);
    ctx.lineTo(13, -5);
    ctx.lineTo(10, 12);
    ctx.lineTo(-7, 16);
    ctx.lineTo(-15, 2);
    ctx.lineTo(-9, -12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#071018";
    ctx.fillRect(4, -6, 5, 4);
    if (player.onSurface) {
      const stride = Math.sin(player.runCycle) * 7;
      ctx.strokeStyle = "#85ffff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-5, 12);
      ctx.lineTo(-8 + stride, 22);
      ctx.moveTo(5, 12);
      ctx.lineTo(8 - stride, 22);
      ctx.stroke();
    }
    ctx.restore();

    ctx.strokeStyle = "rgba(70, 229, 235, .22)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 3; i += 1) {
      const length = 28 + i * 18 + Math.sin(time * 8 + i) * 5;
      ctx.beginPath();
      ctx.moveTo(x - 20, y - 7 + i * 7);
      ctx.lineTo(x - length, y - 7 + i * 7);
      ctx.stroke();
    }
  }

  function render(time) {
    const scaleX = canvas.width / WIDTH;
    const scaleY = canvas.height / HEIGHT;
    ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
    ctx.imageSmoothingEnabled = true;
    drawBackground(time);
    drawWorld(time);

    if (state === "menu") {
      ctx.fillStyle = "rgba(4, 8, 16, .18)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  }

  function frame(now) {
    resize();
    const delta = Math.min(0.05, Math.max(0, (now - lastFrame) / 1000));
    lastFrame = now;
    if (state === "playing") {
      accumulator += delta;
      let safety = 0;
      while (accumulator >= FIXED_STEP && safety < 8) {
        updateStep(FIXED_STEP);
        accumulator -= FIXED_STEP;
        safety += 1;
      }
      updateHud();
    } else {
      updateParticles(delta);
      if (shake > 0) shake = Math.max(0, shake - delta * 2.5);
    }
    render(now / 1000);
    requestAnimationFrame(frame);
  }

  function handleAction(event) {
    if (event) event.preventDefault();
    if (state === "playing") queueJump();
  }

  canvas.addEventListener("pointerdown", handleAction, { passive: false });
  window.addEventListener("keydown", (event) => {
    if (event.code !== "Space") return;
    if (event.target instanceof HTMLElement && event.target.closest("button, a")) return;
    event.preventDefault();
    if (state === "playing") queueJump();
    else if (state === "menu") beginRun("campaign");
    else if (performance.now() - endedAt > 180) beginRun(mode);
  });

  document.querySelector("#startCampaign").addEventListener("click", () => beginRun("campaign"));
  ui.startInfinite.addEventListener("click", () => { if (progress.infiniteUnlocked) beginRun("infinite"); });
  document.querySelector("#retryButton").addEventListener("click", () => beginRun(mode));
  ui.resultInfinite.addEventListener("click", () => beginRun("infinite"));
  document.querySelector("#menuButton").addEventListener("click", returnToMenu);
  document.addEventListener("visibilitychange", () => { lastFrame = performance.now(); accumulator = 0; });
  window.addEventListener("resize", resize);
  window.addEventListener("contextmenu", (event) => event.preventDefault());

  updateMenuRecords();
  resetWorld(0x0a71e1);
  resize();
  requestAnimationFrame(frame);

  // Small deterministic surface for automated browser verification.
  window.__OTL_TEST__ = {
    start: (nextMode = "campaign", seed = 12345) => beginRun(nextMode, seed),
    jump: queueJump,
    step: (seconds) => {
      const count = Math.min(24000, Math.max(0, Math.round(seconds / FIXED_STEP)));
      for (let i = 0; i < count && state === "playing"; i += 1) updateStep(FIXED_STEP);
      updateHud();
      return window.__OTL_TEST__.snapshot();
    },
    setElapsed: (seconds) => { elapsed = Math.max(0, Number(seconds) || 0); },
    reachNextGate: () => {
      ensureWorld(player.x + 12000);
      const gate = world.gates.find((item) => !item.used);
      if (!gate) return null;
      gravityDirection = gate.from;
      player.x = gate.x - 1;
      player.previousX = player.x;
      player.y = gate.from === 1 ? FLOOR_Y - PLAYER_RADIUS : CEILING_Y + PLAYER_RADIUS;
      player.previousY = player.y;
      player.vy = 0;
      player.onSurface = true;
      cameraX = player.x - CAM_X;
      waveX = player.x - 210;
      return { x: gate.x, target: gate.target };
    },
    unlockInfinite: () => { progress.infiniteUnlocked = true; saveProgress(); updateMenuRecords(); },
    snapshot: () => ({
      state, mode, elapsed, score, distance, collected, speed, tier,
      gravityDirection, exitPrepared, player: { x: player.x, y: player.y, vy: player.vy, onSurface: player.onSurface },
      counts: { platforms: world.platforms.length, obstacles: world.obstacles.length, collectibles: world.collectibles.length, gates: world.gates.length },
      infiniteUnlocked: progress.infiniteUnlocked
    })
  };
})();
