const ACTS = {
  0: {
    kicker: 'ORIENTATION',
    title: 'DEAD CALM',
    summary: '平静海况负责建立尺度：地平线、三个波浪频段、低机位和连续反光共同证明“海”不是一张平面材质。',
    see: '多尺度海面、低风速、稳定地平线',
    drive: '三层 JONSWAP FFT + OceanMesh',
    prove: '基础海洋运行时成立'
  },
  1: {
    kicker: 'LIGHT ENTERS THE SYSTEM',
    title: 'SUNRISE',
    summary: '太阳高度和大气散射同步改变天空、云、飞沫与水面反射，证明环境光不是单独的背景层。',
    see: '低角度太阳、暖色空气透视、海面反光',
    drive: 'Atmosphere LUT + shared sun transmittance',
    prove: '天空与海洋共享光照状态'
  },
  2: {
    kicker: 'SEA STATE BUILD-UP',
    title: 'FRESH GALE',
    summary: '风速、涌浪、尖锐度和白沫共同升级，让风力变化变成可读的海况，而不是只改变一个波高参数。',
    see: '更密集白帽、更尖浪峰、方向性浪列',
    drive: 'Weather → OceanFFT spectrum + foam history',
    prove: '连续天气状态可以驱动海况'
  },
  3: {
    kicker: 'ATMOSPHERIC THREAT',
    title: 'SQUALL LINE',
    summary: '低云、降雨、雾、飞沫和闪电叠加为一条组合天气前线，镜头仍保留可读的海面尺度。',
    see: '雨幕、低云、闪电和能见度下降',
    drive: 'Clouds + Rain + Spray + Lightning',
    prove: '天气子系统可以同步合成'
  },
  4: {
    kicker: 'COMPOSITE THREAT',
    title: 'VIOLENT STORM',
    summary: '剧烈风暴不是“把浪调大”：山状海浪、方向性白沫、低云、雨雾、飞沫和贴浪镜头共同制造威胁。',
    see: '山状海浪、白沫、低压云顶、雨雾',
    drive: 'FFT + precipitation + atmosphere + PostFX',
    prove: '多系统组合形成目标画面'
  },
  5: {
    kicker: 'VOLUMETRIC EVENT',
    title: 'WATERSPOUT',
    summary: '水龙卷把海面涡旋、凝结漏斗、云底与镜头高度绑定为一个可定位事件。',
    see: '云底漏斗、海面旋转与局部飞沫',
    drive: 'Waterspout raymarch + vortex field',
    prove: '事件同时影响水面与体积效果'
  },
  6: {
    kicker: 'LOCAL WAVE EVENT',
    title: 'ROGUE WAVE',
    summary: '疯狗浪在已有重海况上叠加局部 Gerstner 波组，并通过到达时刻驱动相机冲击。',
    see: '异常单组高浪、接近和通过',
    drive: 'analytic rogue group + camera impulse',
    prove: '局部事件可以进入同一高度场'
  },
  7: {
    kicker: 'STORM-SCALE FIELD',
    title: 'HURRICANE EYE',
    summary: '飓风眼用大范围旋转场、眼墙天气和高位镜头表达公里级结构，而不是局部粒子特效。',
    see: '风眼、环状海况、眼墙云体',
    drive: 'hurricane field + storm weather preset',
    prove: '解析事件可覆盖大尺度构图'
  },
  8: {
    kicker: 'HERO EVENT',
    title: 'TSUNAMI',
    summary: '海啸使用移动孤立波和非对称波面；CPU 相机高度与 GLSL 水面采用同一解析形状，让镜头真正爬上波墙。',
    see: '远处波墙、海平面尺度、波面通过',
    drive: 'soliton field + CPU/GLSL twin sampling',
    prove: '灾害事件会真实改变水面几何'
  },
  9: {
    kicker: 'LIGHT AS THE SUBJECT',
    title: 'NIGHT LIGHTNING',
    summary: '夜间压低环境光，让体积闪电、云内照明和海面瞬时反射成为主要叙事元素。',
    see: '黑暗云层、分支闪电、瞬时海面高光',
    drive: 'Lightning geometry + exposure + atmosphere',
    prove: '光照事件可以主导完整镜头'
  },
  10: {
    kicker: 'RECOVERY',
    title: 'AFTERMATH',
    summary: '灾后段降低风雨与事件强度，并恢复镜头和天气状态；它验证的不只是画面平静，而是系统能否干净回收。',
    see: '雨雾回落、海况下降、光线恢复',
    drive: 'Director.clearEvents() + Weather interpolation',
    prove: '事件序列可以回到稳定状态'
  }
};

const SANDBOX_VIEW = {
  kicker: 'INTERACTIVE MODE',
  title: 'SANDBOX',
  summary: '自由飞行并组合七种天气预设、十三项环境参数和七类灾害触发。这里仍使用同一个上游天气、事件和渲染系统。',
  see: '自由相机、条件按钮、灾害触发和实时滑杆',
  drive: 'Sandbox → Weather / Director spawners',
  prove: '演示不是一条只能播放的固定视频'
};

const SCENARIOS = {
  port: {
    index: 1,
    kicker: 'EXTENSION 01 / PORT SAFETY',
    title: '港口台风预警',
    summary: '用上游飓风、剧烈风暴和海况表现建立环境压力，再叠加港区节点、预案等级与封港动作。它演示的是“环境如何进入业务流程”，不是台风路径预测。',
    see: '真实飓风眼、风暴海况、港区节点与预案状态',
    drive: 'Sandbox.applyCondition(storm) + hurricane()',
    prove: '海洋环境运行时可成为港口预案的视觉环境层',
    runtime(app) {
      app.sandbox.applyCondition('storm', true);
      app.sandbox.hurricane();
    }
  },
  tsunami: {
    index: 2,
    kicker: 'EXTENSION 02 / COASTAL EVACUATION',
    title: '近岸海啸疏散',
    summary: '用上游移动孤立波展示波墙接近与通过，再叠加临海禁入区、疏散路线和集合区。到达时间与风险带仅用于体验演示，不承担预警或淹没计算。',
    see: '真实海啸波面、三级风险带、疏散方向与演示倒计时',
    drive: 'Sandbox.applyCondition(overcast) + tsunami()',
    prove: '同一事件可以连接环境表现与人员行动叙事',
    runtime(app) {
      app.sandbox.applyCondition('overcast', true);
      app.sandbox.tsunami();
    }
  },
  platform: {
    index: 3,
    kicker: 'EXTENSION 03 / OFFSHORE OPERATIONS',
    title: '平台风暴作业',
    summary: '用上游夜间风暴、强降雨和体积闪电建立作业窗口，再叠加平台状态、停工动作与人员清点。这是培训和汇报原型，不是结构安全计算。',
    see: '夜间重海况、体积闪电、平台轮廓与作业检查项',
    drive: 'Sandbox.applyCondition(night) + lightning()',
    prove: '环境状态可以驱动作业界面的状态与反馈',
    runtime(app) {
      app.sandbox.applyCondition('night', true);
      app.sandbox.lightning();
    }
  }
};

const runtimeStage = document.querySelector('#runtimeStage');
const runtimeFrame = document.querySelector('#upstreamRuntime');
const runtimeStatus = document.querySelector('#runtimeStatus');
const runtimePreset = document.querySelector('#runtimePreset');
const runtimeFrameMetric = document.querySelector('#runtimeFrame');
const stageError = document.querySelector('#stageError');
const stageErrorText = document.querySelector('#stageErrorText');
const actControls = [...document.querySelectorAll('[data-act]')];
const resetDirector = document.querySelector('#resetDirector');
const openSandbox = document.querySelector('#openSandbox');
const openFullDemo = document.querySelector('#openFullDemo');
const proofValues = [...document.querySelectorAll('#actProof dd')];
const scenarioControls = [...document.querySelectorAll('[data-scenario]')];
const scenarioOverlays = [...document.querySelectorAll('[data-scenario-overlay]')];
const returnEvidence = document.querySelector('#returnEvidence');

const parentParams = new URLSearchParams(location.search);
const embeddedPreset = parentParams.get('embedPreset') || 'low';
const canEmbed = parentParams.get('embed') !== '0'
  && matchMedia('(min-width: 720px)').matches
  && navigator.connection?.saveData !== true;
let runtimeApp = null;
let pendingAct = 0;
let pendingScenario = null;
let lastObservedAct = -1;
let currentView = 'act';
let currentScenario = null;
let runtimeTimer = 0;

function clearScenarioUI() {
  currentScenario = null;
  document.body.removeAttribute('data-active-scenario');
  scenarioControls.forEach((control) => {
    control.classList.remove('is-active');
    control.setAttribute('aria-pressed', 'false');
  });
  scenarioOverlays.forEach((overlay) => { overlay.hidden = true; });
  returnEvidence.hidden = true;
}

function updateActUI(index) {
  clearScenarioUI();
  const act = ACTS[index] || ACTS[0];
  document.querySelector('#actIndex').textContent = `ACT ${String(index + 1).padStart(2, '0')} / 11`;
  document.querySelector('#actKicker').textContent = act.kicker;
  document.querySelector('#actTitle').textContent = act.title;
  document.querySelector('#actSummary').textContent = act.summary;
  proofValues[0].textContent = act.see;
  proofValues[1].textContent = act.drive;
  proofValues[2].textContent = act.prove;
  actControls.forEach((control) => {
    const active = Number(control.dataset.act) === index;
    control.classList.toggle('is-active', active);
    if (active) control.setAttribute('aria-current', 'step');
    else control.removeAttribute('aria-current');
  });
  const demoUrl = new URL('../../demos/natural-disasters-environment-poc/', location.href);
  demoUrl.searchParams.set('preset', embeddedPreset);
  demoUrl.searchParams.set('act', String(index));
  openFullDemo.href = demoUrl.href;
  lastObservedAct = index;
  currentView = 'act';
}

function updateSandboxUI() {
  clearScenarioUI();
  document.querySelector('#actIndex').textContent = 'INTERACTIVE / FREE FLY';
  document.querySelector('#actKicker').textContent = SANDBOX_VIEW.kicker;
  document.querySelector('#actTitle').textContent = SANDBOX_VIEW.title;
  document.querySelector('#actSummary').textContent = SANDBOX_VIEW.summary;
  proofValues[0].textContent = SANDBOX_VIEW.see;
  proofValues[1].textContent = SANDBOX_VIEW.drive;
  proofValues[2].textContent = SANDBOX_VIEW.prove;
  actControls.forEach((control) => {
    control.classList.remove('is-active');
    control.removeAttribute('aria-current');
  });
  currentView = 'sandbox';
}

function updateScenarioUI(key) {
  const scenario = SCENARIOS[key];
  if (!scenario) return;
  currentScenario = key;
  document.body.dataset.activeScenario = key;
  document.querySelector('#actIndex').textContent = `EXT ${String(scenario.index).padStart(2, '0')} / 03`;
  document.querySelector('#actKicker').textContent = scenario.kicker;
  document.querySelector('#actTitle').textContent = scenario.title;
  document.querySelector('#actSummary').textContent = scenario.summary;
  proofValues[0].textContent = scenario.see;
  proofValues[1].textContent = scenario.drive;
  proofValues[2].textContent = scenario.prove;
  actControls.forEach((control) => {
    control.classList.remove('is-active');
    control.removeAttribute('aria-current');
  });
  scenarioControls.forEach((control) => {
    const active = control.dataset.scenario === key;
    control.classList.toggle('is-active', active);
    control.setAttribute('aria-pressed', String(active));
  });
  scenarioOverlays.forEach((overlay) => {
    overlay.hidden = overlay.dataset.scenarioOverlay !== key;
  });
  returnEvidence.hidden = false;
  const sandboxUrl = new URL('../../demos/natural-disasters-environment-poc/', location.href);
  sandboxUrl.searchParams.set('preset', embeddedPreset);
  sandboxUrl.searchParams.set('director', '0');
  openFullDemo.href = sandboxUrl.href;
  currentView = 'scenario';
}

function setRuntimeStatus(state, message) {
  runtimeStage.dataset.runtime = state;
  runtimeStatus.textContent = message;
}

function getRuntimeApp() {
  try {
    return runtimeFrame.contentWindow?.__app || null;
  } catch {
    return null;
  }
}

function setEmbeddedSandboxChrome(app, hidden) {
  if (!app?.sandbox?.root) return;
  app.sandbox.root.style.display = hidden ? 'none' : '';
}

function enterAct(index) {
  const app = runtimeApp || getRuntimeApp();
  if (!app?.running || !app.director) return false;
  pendingScenario = null;
  setEmbeddedSandboxChrome(app, false);
  app.sandbox?.setActive(false);
  app.director.enabled = true;
  app.director.gotoAct(index);
  app.paused = false;
  pendingAct = index;
  updateActUI(index);
  setRuntimeStatus('ready', `上游运行时 · ${ACTS[index].title}`);
  return true;
}

function enterScenario(key) {
  const scenario = SCENARIOS[key];
  const app = runtimeApp || getRuntimeApp();
  if (!scenario || !app?.running || !app.director || !app.sandbox) return false;
  app.sandbox.setActive(true);
  setEmbeddedSandboxChrome(app, true);
  app.director.clearEvents();
  scenario.runtime(app);
  app.paused = false;
  pendingScenario = key;
  updateScenarioUI(key);
  setRuntimeStatus('ready', `扩展场景 · ${scenario.title}`);
  return true;
}

function startMetrics() {
  clearInterval(runtimeTimer);
  runtimeTimer = window.setInterval(() => {
    const app = runtimeApp || getRuntimeApp();
    if (!app?.running) return;
    runtimePreset.textContent = `PRESET ${String(app.quality?.presetName || '—').toUpperCase()}`;
    runtimeFrameMetric.textContent = `FRAME ${Number(app.frameMs || 0).toFixed(1)} MS`;

    if (app.sandbox?.active) {
      if (currentView !== 'sandbox' && currentView !== 'scenario') updateSandboxUI();
      return;
    }

    const index = app.director?.actIndex;
    if (Number.isInteger(index) && index !== lastObservedAct) updateActUI(index);
  }, 800);
}

function failRuntime(message) {
  setRuntimeStatus('error', '上游运行时不可用');
  stageErrorText.textContent = message;
  stageError.hidden = false;
}

async function waitForRuntime() {
  const startedAt = performance.now();
  while (performance.now() - startedAt < 70000) {
    const app = getRuntimeApp();
    if (app?.running && app.director && app.sandbox) {
      runtimeApp = app;
      setRuntimeStatus('ready', '上游运行时已连接');
      runtimePreset.textContent = `PRESET ${String(app.quality?.presetName || embeddedPreset).toUpperCase()}`;
      if (pendingScenario) enterScenario(pendingScenario);
      else enterAct(pendingAct);
      startMetrics();
      return;
    }
    const bootError = (() => {
      try {
        return runtimeFrame.contentDocument?.querySelector('#booterr')?.textContent?.trim() || '';
      } catch {
        return '';
      }
    })();
    if (bootError) {
      failRuntime(`上游启动错误：${bootError}`);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
  failRuntime('70 秒内未检测到上游 App.ready。可以继续阅读，或在独立页面运行演示。');
}

function bootEmbed() {
  if (!canEmbed) {
    setRuntimeStatus('disabled', navigator.connection?.saveData ? '节省流量模式 · 使用独立演示' : '移动端轻量模式 · 使用独立演示');
    runtimePreset.textContent = 'EMBED OFF';
    runtimeFrameMetric.textContent = 'CONTENT READY';
    return;
  }

  const src = new URL(runtimeFrame.dataset.src, location.href);
  src.searchParams.set('preset', embeddedPreset);
  src.searchParams.set('act', String(pendingAct));
  runtimeFrame.src = src.href;
  setRuntimeStatus('loading', '正在初始化上游 WebGL');
  runtimeFrame.addEventListener('load', waitForRuntime, { once: true });
}

actControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    const index = Number(control.dataset.act);
    pendingAct = index;
    if (!canEmbed) return;
    event.preventDefault();
    if (!enterAct(index)) {
      updateActUI(index);
      setRuntimeStatus('loading', `运行时加载中 · 已排队 ${ACTS[index].title}`);
    }
  });
});

scenarioControls.forEach((control) => {
  control.addEventListener('click', () => {
    const key = control.dataset.scenario;
    if (!SCENARIOS[key]) return;
    pendingScenario = key;
    if (!canEmbed) {
      updateScenarioUI(key);
      setRuntimeStatus('disabled', '轻量场景说明 · 独立打开真实运行时');
      return;
    }
    if (!enterScenario(key)) {
      updateScenarioUI(key);
      setRuntimeStatus('loading', `运行时加载中 · 已排队 ${SCENARIOS[key].title}`);
    }
  });
});

returnEvidence.addEventListener('click', () => {
  pendingScenario = null;
  pendingAct = 0;
  if (enterAct(0)) return;
  updateActUI(0);
  if (!canEmbed) setRuntimeStatus('disabled', '移动端轻量模式 · 使用独立演示');
});

resetDirector.addEventListener('click', () => {
  if (enterAct(0)) return;
  location.href = openFullDemo.href;
});

openSandbox.addEventListener('click', (event) => {
  const app = runtimeApp || getRuntimeApp();
  if (!canEmbed || !app?.running || !app.sandbox) return;
  event.preventDefault();
  pendingScenario = null;
  setEmbeddedSandboxChrome(app, false);
  app.sandbox.setActive(true);
  app.paused = false;
  updateSandboxUI();
  setRuntimeStatus('ready', '上游 Sandbox · 自由控制');
});

const sandboxUrl = new URL(openSandbox.href, location.href);
sandboxUrl.searchParams.set('preset', embeddedPreset);
openSandbox.href = sandboxUrl.href;

const navLinks = [...document.querySelectorAll('.topbar__nav a[href^="#"]')];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => {
    link.classList.toggle('is-current', link.getAttribute('href') === `#${visible.target.id}`);
  });
}, { rootMargin: '-20% 0px -68% 0px', threshold: [0, 0.2, 0.6] });

navSections.forEach((section) => sectionObserver.observe(section));

let scrollFrame = 0;
function updateProgress() {
  scrollFrame = 0;
  const max = document.documentElement.scrollHeight - innerHeight;
  const progress = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
  document.querySelector('#readingProgress').style.width = `${progress * 100}%`;
}

addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress);
}, { passive: true });

addEventListener('pagehide', () => clearInterval(runtimeTimer));

updateActUI(0);
updateProgress();
bootEmbed();
