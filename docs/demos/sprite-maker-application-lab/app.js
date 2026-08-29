document.documentElement.classList.add('js');

const assetRoot = '../../assets/project-009-game/';
const actorFrames = {
  idle: ['lin-jian-motion-master-v1.png'],
  run: [1, 2, 3, 4].map((index) => `lin-jian-motion-run-v2_0${index}.png`),
  cast: [1, 2, 3, 4, 5].map((index) => `lin-jian-motion-cast-v1_0${index}.png`)
};

const scenes = {
  companion: {
    code: '01 / DESKTOP COMPANION',
    title: '桌面伙伴',
    summary: '动作资产提供陪伴角色的视觉状态；计时、提醒和用户偏好属于桌面应用。',
    asset: 'master / idle / cast-v1',
    business: '专注计时、提醒策略、用户状态',
    adoption: 'HIGH MATCH / SMALL-SCALE',
    states: [
      { state: 'READY', feedback: '桌面伙伴已待命。', speech: '我会根据业务状态切换动作，但不会替业务做决定。', primary: '开始专注', secondary: '提醒喝水', mode: 'idle' },
      { state: 'FOCUS ACTIVE', feedback: '专注计时已由桌面应用启动。', speech: '专注区块已开始。我会保持低干扰陪伴。', primary: '完成专注', secondary: '切换休息', mode: 'run' },
      { state: 'BLOCK COMPLETE', feedback: '本轮专注完成，视觉反馈已结算。', speech: '完成一轮。动画只负责祝贺，记录仍由应用保存。', primary: '再来一轮', secondary: '记录完成', mode: 'cast' }
    ]
  },
  story: {
    code: '02 / STORY & EXHIBIT',
    title: '互动故事 / 数字展厅',
    summary: '动作资产让角色成为叙事向导；分支、展品、解锁条件和观众进度属于内容系统。',
    asset: 'master / run-v2 / cast-v1',
    business: '故事分支、展品数据、访问进度',
    adoption: 'HIGH MATCH / GUIDED SCENE',
    states: [
      { state: 'AWAITING BRANCH', feedback: '序章已加载，等待选择路线。', speech: '两个展柜保存着不同证据。你想先看哪一个？', primary: '追随信号', secondary: '打开档案', mode: 'idle' },
      { state: 'SIGNAL BRANCH', feedback: '分支 A：角色移动到动作母版展柜。', speech: '这条路线强调动作怎样从一张透明母版开始。', primary: '返回序章', secondary: '切换档案线', mode: 'run' },
      { state: 'ARCHIVE BRANCH', feedback: '分支 B：角色讲解确定性骨骼档案。', speech: '这条路线强调 Rig、版本和复渲染证据。', primary: '返回序章', secondary: '切换信号线', mode: 'cast' }
    ]
  },
  teaching: {
    code: '03 / TEACHING DEMO',
    title: '教学演示',
    summary: '角色动作可以承担指引和答题反馈；课程结构、答案判断和学习记录属于教学系统。',
    asset: 'master / cast-v1',
    business: '课程步骤、答案规则、学习进度',
    adoption: 'HIGH MATCH / EXPLAINER',
    states: [
      { state: 'STEP 1 / OBSERVE', feedback: '观察阶段：先辨认资产层。', speech: '先看 cast-v1：它提供施法视觉，但不决定何时施法。', primary: '下一步', secondary: '直接作答：游戏代码', mode: 'idle' },
      { state: 'STEP 2 / QUESTION', feedback: '问题阶段：谁拥有施法时机？', speech: '请选择：Sprite Studio，还是上层游戏代码？', primary: '选择 Sprite Studio', secondary: '选择游戏代码', mode: 'idle' },
      { state: 'ANSWER CORRECT', feedback: '回答正确：上层状态机拥有业务时机。', speech: '正确。资产提供动作，运行时决定触发、命中和恢复。', primary: '重新学习', secondary: '保留结果', mode: 'cast' }
    ]
  },
  marketing: {
    code: '04 / MARKETING CHARACTER',
    title: '营销动态人物',
    summary: '动作人物可以建立视觉焦点并引导 CTA；产品声明、分析事件和表单提交属于营销系统。',
    asset: 'master / cast-v1',
    business: 'CTA、转化事件、提交与合规文案',
    adoption: 'MEDIUM-HIGH / CAMPAIGN',
    states: [
      { state: 'LANDING READY', feedback: '营销页面已就绪，尚未产生事件。', speech: '我负责吸引注意，但产品信息和按钮必须独立可读。', primary: '查看动作系列', secondary: '预约体验', mode: 'idle' },
      { state: 'PRODUCT REVEALED', feedback: '产品系列已展开，本地记录一次查看事件。', speech: '动作只强化内容层级，不替代真实产品证明。', primary: '收起系列', secondary: '预约体验', mode: 'run' },
      { state: 'CTA COMPLETE', feedback: '预约模拟完成；没有向外部服务提交数据。', speech: 'CTA 已由页面逻辑结算，我只呈现成功反馈。', primary: '重新体验', secondary: '查看系列', mode: 'cast' }
    ]
  },
  prototype: {
    code: '05 / LOW-COST PROTOTYPE',
    title: '低成本游戏原型',
    summary: '现有动作帧可快速验证输入和反馈假设；敌人、碰撞、数值、关卡和胜负属于游戏运行时。',
    asset: 'master / run-v2 / cast-v1',
    business: '输入、伤害、目标、胜负与重置',
    adoption: 'HIGH MATCH / PRE-PRODUCTION',
    states: [
      { state: 'RULE READY', feedback: '原型已就绪：验证两次脉冲是否足够清晰。', speech: '先验证规则和手感，再决定是否投入完整美术。', primary: '开始遭遇', secondary: '释放脉冲', mode: 'idle' },
      { state: 'ENCOUNTER ACTIVE', feedback: '遭遇开始：目标拥有 2 点完整度。', speech: '运行时处理命中；cast-v1 只呈现攻击动作。', primary: '退出遭遇', secondary: '释放脉冲', mode: 'run' },
      { state: 'RULE PROVEN', feedback: '两次脉冲清除目标，最小规则假设成立。', speech: '规则得到快速验证。下一步才值得扩展关卡和资产。', primary: '重新验证', secondary: '查看结果', mode: 'cast' }
    ]
  }
};

const body = document.body;
const tabs = [...document.querySelectorAll('[data-scene-tab]')];
const panels = [...document.querySelectorAll('[data-scene-panel]')];
const sceneCode = document.querySelector('#sceneCode');
const businessState = document.querySelector('#businessState');
const actorMode = document.querySelector('#actorMode');
const actionCount = document.querySelector('#actionCount');
const actorSprite = document.querySelector('#actorSprite');
const actorTag = document.querySelector('#actorTag');
const actorSpeech = document.querySelector('#actorSpeech');
const sceneFeedback = document.querySelector('#sceneFeedback');
const primaryAction = document.querySelector('#primaryAction');
const secondaryAction = document.querySelector('#secondaryAction');
const resetAction = document.querySelector('#resetAction');
const inspector = document.querySelector('#inspector');
const inspectorTitle = document.querySelector('#inspectorTitle');
const inspectorSummary = document.querySelector('#inspectorSummary');
const assetResponsibility = document.querySelector('#assetResponsibility');
const businessResponsibility = document.querySelector('#businessResponsibility');
const eventFeed = document.querySelector('#eventFeed');
const adoptionState = document.querySelector('#adoptionState');
const inspectorToggle = document.querySelector('#inspectorToggle');
const inspectorClose = document.querySelector('#inspectorClose');
const inspectorBackdrop = document.querySelector('#inspectorBackdrop');
const prototypePulse = document.querySelector('#prototypePulse');

const state = {
  scene: 'companion',
  step: 0,
  prototypeHp: 2,
  actions: 0,
  actorMode: 'idle',
  actorFrame: 0,
  actorUntil: 0,
  assetsReady: false,
  assetErrors: 0,
  inspectorOpen: false,
  reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches
};

function currentScene() { return scenes[state.scene]; }
function currentState() { return currentScene().states[state.step]; }
function isNarrow() { return matchMedia('(max-width: 920px)').matches; }

function setActorMode(mode, duration = 0) {
  state.actorMode = mode;
  state.actorFrame = 0;
  state.actorUntil = duration ? performance.now() + duration : 0;
  updateActor();
}

function updateActor() {
  const mode = state.reducedMotion ? 'idle' : state.actorMode;
  const frames = actorFrames[mode] || actorFrames.idle;
  actorSprite.src = `${assetRoot}${frames[state.actorFrame % frames.length]}`;
  actorTag.textContent = `SHARED ASSET / ${mode === 'idle' ? 'MASTER' : mode.toUpperCase() + (mode === 'run' ? ' V2' : ' V1')}`;
  actorMode.textContent = mode === 'idle' ? 'MASTER / IDLE' : `${mode.toUpperCase()} / ${mode === 'run' ? 'V2' : 'V1'}`;
}

function renderSceneDetails() {
  const view = currentState();
  const scene = currentScene();
  sceneCode.textContent = scene.code;
  businessState.textContent = view.state;
  actionCount.textContent = String(state.actions).padStart(2, '0');
  actorSpeech.textContent = view.speech;
  sceneFeedback.textContent = view.feedback;
  primaryAction.textContent = view.primary;
  secondaryAction.textContent = view.secondary;
  inspectorTitle.textContent = scene.title;
  inspectorSummary.textContent = scene.summary;
  assetResponsibility.textContent = scene.asset;
  businessResponsibility.textContent = scene.business;
  adoptionState.textContent = scene.adoption;
  eventFeed.textContent = `${scene.code.split(' / ')[0]}-${String(state.step + 1).padStart(2, '0')} / ${view.state}`;
  body.dataset.scene = state.scene;
  body.dataset.sceneState = state.step === 0 ? 'default' : state.step === 2 ? 'complete' : 'active';

  document.querySelector('#companionTimer').textContent = state.step === 0 || state.scene !== 'companion' ? '25:00' : state.step === 1 ? '24:18' : '00:00';
  document.querySelector('#companionTask').textContent = state.step === 2 && state.scene === 'companion' ? '本轮记录等待应用保存' : '整理角色动作清单';
  document.querySelector('#companionSignal').textContent = state.scene === 'companion' ? view.feedback : '等待你的工作节奏';

  const storyLabels = ['序章：两个展柜，一次选择', '信号线：动作母版已解锁', '档案线：Rig 证据已解锁'];
  document.querySelector('#storySignal').textContent = state.scene === 'story' ? storyLabels[state.step] : storyLabels[0];
  document.querySelector('#storyBeacon').textContent = state.scene !== 'story' || state.step === 0 ? '?' : state.step === 1 ? 'A' : 'B';
  document.querySelector('#storyPath').textContent = state.scene !== 'story' || state.step === 0 ? '等待观众选择路线' : state.step === 1 ? '移动到动作母版展柜' : '讲解确定性骨骼档案';

  const lessonWidths = ['25%', '62%', '100%'];
  document.querySelector('#lessonProgress').style.width = state.scene === 'teaching' ? lessonWidths[state.step] : lessonWidths[0];
  document.querySelector('#lessonResult').textContent = state.scene === 'teaching' && state.step === 2 ? 'RUNTIME OWNS IT' : '等待作答';
  document.querySelector('#lessonHint').textContent = state.scene === 'teaching' && state.step === 2 ? '资产提供动作；业务运行时决定触发、命中和恢复。' : state.scene === 'teaching' && state.step === 1 ? '正确答案：上层游戏代码。' : '先查看动作帧，再判断谁拥有业务时机。';
  document.querySelector('#teachingSignal').textContent = state.scene === 'teaching' ? view.feedback : '步骤 1 / 观察动作资产';

  document.querySelector('#campaignMetric').textContent = state.scene !== 'marketing' || state.step === 0 ? 'READY' : state.step === 1 ? 'VIEW +1' : 'CTA +1';
  document.querySelector('#campaignProof').textContent = `${state.scene === 'marketing' ? Math.max(0, state.step) : 0} 次本地模拟事件`;
  document.querySelector('#campaignMessage').textContent = state.scene === 'marketing' && state.step === 2 ? '预约只在本地完成模拟，没有上传姓名、邮箱或分析数据。' : '动态人物负责引导注意，产品信息仍然可读、可点击。';
  document.querySelector('#marketingSignal').textContent = state.scene === 'marketing' ? view.feedback : '等待访客查看系列';

  const prototypeHp = state.scene === 'prototype' ? state.prototypeHp : 2;
  document.querySelector('#prototypeHp').style.width = `${prototypeHp * 50}%`;
  document.querySelector('#prototypeSignal').textContent = state.scene === 'prototype' ? view.feedback : '验证假设：一次脉冲是否足够可读？';
  secondaryAction.disabled = state.scene === 'prototype' && state.step === 0;
}

function updateUrl() {
  const url = new URL(location.href);
  url.searchParams.set('scene', state.scene);
  url.searchParams.set('state', state.step === 2 ? 'complete' : state.step === 1 ? 'active' : 'default');
  history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
}

function activateScene(sceneId, fixture = 'default', shouldUpdateUrl = true) {
  if (!scenes[sceneId]) return false;
  state.scene = sceneId;
  state.step = fixture === 'complete' ? 2 : fixture === 'active' ? 1 : 0;
  state.prototypeHp = sceneId === 'prototype' && state.step === 2 ? 0 : 2;
  tabs.forEach((tab) => {
    const active = tab.dataset.sceneTab === sceneId;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  panels.forEach((panel) => {
    const active = panel.dataset.scenePanel === sceneId;
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });
  setActorMode(currentState().mode);
  renderSceneDetails();
  if (shouldUpdateUrl) updateUrl();
  return true;
}

function performAction(type = 'primary') {
  state.actions += 1;
  const sceneId = state.scene;
  if (sceneId === 'companion') {
    if (type === 'secondary' && state.step === 0) state.step = 1;
    else state.step = state.step === 2 ? 0 : state.step + 1;
  } else if (sceneId === 'story') {
    if (state.step === 0) state.step = type === 'primary' ? 1 : 2;
    else if (type === 'primary') state.step = 0;
    else state.step = state.step === 1 ? 2 : 1;
  } else if (sceneId === 'teaching') {
    if (state.step === 0) state.step = type === 'secondary' ? 2 : 1;
    else if (state.step === 1) state.step = type === 'secondary' ? 2 : 1;
    else if (type === 'primary') state.step = 0;
  } else if (sceneId === 'marketing') {
    if (type === 'secondary') state.step = 2;
    else state.step = state.step === 2 ? 0 : state.step === 0 ? 1 : 0;
  } else if (sceneId === 'prototype') {
    if (type === 'primary') {
      state.step = state.step === 0 ? 1 : 0;
      state.prototypeHp = 2;
    } else if (state.step === 1) {
      state.prototypeHp = Math.max(0, state.prototypeHp - 1);
      prototypePulse.classList.remove('is-active');
      void prototypePulse.offsetWidth;
      prototypePulse.classList.add('is-active');
      if (state.prototypeHp === 0) state.step = 2;
    }
  }
  const view = currentState();
  setActorMode(view.mode, view.mode === 'cast' ? 900 : 0);
  renderSceneDetails();
  updateUrl();
  return snapshot();
}

function resetScene() {
  state.step = 0;
  state.prototypeHp = 2;
  setActorMode('idle');
  renderSceneDetails();
  updateUrl();
  return snapshot();
}

function setInspector(open, returnFocus = false) {
  if (!isNarrow()) open = true;
  state.inspectorOpen = open;
  body.classList.toggle('inspector-open', open && isNarrow());
  inspectorToggle.setAttribute('aria-expanded', String(open));
  inspector.setAttribute('aria-hidden', String(!open && isNarrow()));
  inspectorBackdrop.hidden = !open || !isNarrow();
  if (open && isNarrow()) inspectorClose.focus();
  if (!open && returnFocus) inspectorToggle.focus();
}

function syncInspectorMode() {
  const narrow = isNarrow();
  inspectorToggle.hidden = !narrow;
  inspectorClose.hidden = !narrow;
  setInspector(narrow ? state.inspectorOpen : true);
}

function snapshot() {
  return {
    available: true,
    scene: state.scene,
    step: state.step,
    sceneState: body.dataset.sceneState,
    businessState: currentState().state,
    actorMode: state.reducedMotion ? 'idle' : state.actorMode,
    actions: state.actions,
    prototypeHp: state.prototypeHp,
    inspectorOpen: state.inspectorOpen,
    assetsReady: state.assetsReady,
    assetErrors: state.assetErrors,
    reducedMotion: state.reducedMotion
  };
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateScene(tab.dataset.sceneTab));
  tab.addEventListener('keydown', (event) => {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    activateScene(tabs[next].dataset.sceneTab);
    tabs[next].focus();
  });
});

primaryAction.addEventListener('click', () => performAction('primary'));
secondaryAction.addEventListener('click', () => performAction('secondary'));
resetAction.addEventListener('click', resetScene);
inspectorToggle.addEventListener('click', () => setInspector(true));
inspectorClose.addEventListener('click', () => setInspector(false, true));
inspectorBackdrop.addEventListener('click', () => setInspector(false, true));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.inspectorOpen && isNarrow()) setInspector(false, true);
});
addEventListener('resize', syncInspectorMode);

let previousFrame = performance.now();
function animate(now) {
  if (state.actorUntil && now >= state.actorUntil) {
    state.actorUntil = 0;
    state.actorMode = state.step === 1 && currentState().mode === 'run' ? 'run' : 'idle';
    state.actorFrame = 0;
    updateActor();
  }
  if (!state.reducedMotion && now - previousFrame >= 135) {
    previousFrame = now;
    const frames = actorFrames[state.actorMode] || actorFrames.idle;
    if (frames.length > 1) {
      state.actorFrame = (state.actorFrame + 1) % frames.length;
      updateActor();
    }
  }
  requestAnimationFrame(animate);
}

const allAssets = [...new Set(Object.values(actorFrames).flat())];
Promise.all(allAssets.map((file) => new Promise((resolve) => {
  const image = new Image();
  image.onload = () => resolve(true);
  image.onerror = () => { state.assetErrors += 1; resolve(false); };
  image.src = `${assetRoot}${file}`;
}))).then((results) => { state.assetsReady = results.every(Boolean); });

const params = new URLSearchParams(location.search);
const initialScene = scenes[params.get('scene')] ? params.get('scene') : 'companion';
const initialState = ['default', 'active', 'complete'].includes(params.get('state')) ? params.get('state') : 'default';
activateScene(initialScene, initialState, false);
syncInspectorMode();
requestAnimationFrame(animate);

window.__SPRITE_APPLICATION_LAB__ = {
  snapshot,
  setScene: (sceneId, fixture = 'default') => { activateScene(sceneId, fixture); return snapshot(); },
  performAction,
  resetScene,
  openInspector: () => { setInspector(true); return snapshot(); },
  closeInspector: () => { setInspector(false); return snapshot(); }
};
