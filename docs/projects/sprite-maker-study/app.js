document.documentElement.classList.add('js');

const workflows = {
  sprite: {
    code: 'CREATE_STATIC_SPRITE',
    title: '从描述和参考图建立一张可进入游戏的源资产',
    verdict: '最短生成路径',
    pipeline: [
      ['files', '锁定工作树与生成规格', '保存类别、尺寸、风格、参考图、质量档和 Provider 设置。'],
      ['ai', 'Harness 编译提示词并生成源图', 'Agent 路由到角色、怪物、道具或 VFX 合同，再调用可用图像能力。'],
      ['local', '规范化画布、透明边界与调色板', '检查尺寸、Alpha、边缘、安全间距和文件有效性。'],
      ['files', '注册内容哈希版本', 'PNG 进入对应 assets/ 分类，聊天和 Manifest 记录本次来源。']
    ],
    requires: ['一个已认证 Agent / 图像 Provider', '明确主体或参考图', '人工确认轮廓与可读尺度'],
    delivers: ['一张独立 PNG', '生成 Manifest', '可继续动画的源资产'],
    risk: '单张图质量由外部 Provider 决定；“透明”“像素清晰”和角色身份仍需人工验收。',
    status: '静态生成需要 Provider；后续规范化、注册与版本管理在本地完成。'
  },
  animate: {
    code: 'ANIMATE_EXISTING',
    title: '把已确认角色变成可重复的动作循环',
    verdict: '最能体现本库差异',
    requires: ['一个已认证 Agent CLI', '一张动作友好的透明源图', '人工检查骨骼与循环'],
    delivers: ['Rig 与关键姿势', 'PNG 动画帧', 'Sprite Sheet + JSON'],
    risk: '平面像素变形可能在大角度关节处拉伸；复杂新视角仍需重绘。'
  },
  pack: {
    code: 'COORDINATED_ASSET_PACK',
    title: '在同一美术方向下生产一组独立游戏资产',
    verdict: '适合长尾内容生产',
    pipeline: [
      ['files', '建立 Pack brief', '记录名称、种类、数量、风格和每项独立资产清单。'],
      ['ai', '按一致方向分批生成', 'Agent 保持同一 art direction，但每项仍是可单独使用的 PNG。'],
      ['local', '逐项验证文件与透明边界', '拒绝无效图片、错误尺寸和明显背景烘焙。'],
      ['files', '登记 Pack Manifest', '保存描述、种类、风格、创建时间和每项资产路径。'],
      ['files', '在 Packs 与 Sprite Library 中浏览', 'Pack 只是组织层，原始 PNG 不被锁进专有格式。']
    ],
    requires: ['一个已认证图像 Provider', '明确的资产清单和数量', '统一 art direction'],
    delivers: ['多张独立 PNG', 'Pack Manifest', '可筛选资产集合'],
    risk: '同一批次的视觉一致不等于长期角色身份一致；大包仍需要逐项 QA 与失败重做。',
    status: 'Pack 主要消耗图像 Provider；本地负责验证、组织、版本和浏览。'
  },
  terrain: {
    code: 'COMPLETE_TERRAIN_ATLAS',
    title: '生成一个保持过渡关系的完整地形图集',
    verdict: '避免碎片化地形卡片',
    pipeline: [
      ['files', '确定 tile 尺寸与地形主题', '选择 atlas 画布、风格、地面类型和必要过渡。'],
      ['ai', '生成完整 atlas 概念', '同一张图包含填充、边缘、转角、条带、墙、坡面和过渡。'],
      ['local', '运行 terrain cleanup 与网格检查', '保留一个完整源图，避免把区域误注册为无关 Sprite。'],
      ['files', '保存 atlas 与 terrain metadata', '源图可缩放查看，并可进入 Terrain Studio。'],
      ['files', '导出 Godot 4 TileSet', '生成 atlas 资源和地形遮罩；其他引擎仍需适配器。']
    ],
    requires: ['一个已认证图像 Provider', 'tile 尺寸与目标引擎', '人工检查边缘和过渡'],
    delivers: ['完整 terrain PNG', '地形 metadata', 'Godot 4 TileSet'],
    risk: '生成一张完整 atlas 不等于所有 tile 都能无缝拼接；碰撞、多层和其他引擎接入仍需工程工作。',
    status: '上游已提供 Terrain Studio 与 Godot 导出；Canvas、Phaser 和 Unity 仍需要项目侧适配。'
  }
};

const animationModes = {
  rig: {
    label: 'Rig-only',
    pipeline: [
      ['files', '锁定源资产与聊天参考', '选择准确的 PNG、尺寸、FPS、风格和动画意图。'],
      ['ai', '观察形态并建议 Rig', '返回关节点、胶囊骨骼、层级、关键姿势和接触点。'],
      ['local', '分配像素、求解 IK、渲染帧', '使用权重网格和父子变换生成确定性 Rig-only 帧。'],
      ['local', '运行尺寸、Alpha、连续性与循环检查', '失败修复写入新版本，不覆盖源资产。'],
      ['files', '保存动画并导出 Sheet + JSON', '帧、时间线、pivot、质量报告和 Manifest 留在工作区。']
    ],
    risk: '平面像素变形可能在大角度关节处拉伸；复杂新视角仍需重绘。',
    status: '当前为 Rig-only：动作帧不需要逐帧调用图像模型。'
  },
  polish: {
    label: 'AI Polish',
    pipeline: [
      ['files', '锁定源资产与聊天参考', '源图、尺寸、FPS 和身份参考成为本次动画权威。'],
      ['ai', '观察形态并建议 Rig', 'AI 只规划关节点、骨骼、姿势和接触，不直接决定最终时间线。'],
      ['local', '先渲染完整粗帧', 'Rust Rig 生成每个姿势，建立稳定的动作和时间权威。'],
      ['ai', '逐帧局部润色粗帧', '图像模型改善关节与外观，但必须保留粗帧姿势、身份和相邻帧关系。'],
      ['local', '规范化并运行质量检查', '检查透明、尺寸、重复、连续性、调色板和循环首尾。'],
      ['files', '保留粗帧、润色帧与版本关系', '可回到 Rig-only 结果，也可导出润色后的 Sheet。']
    ],
    risk: '视觉质量可能提高，但每次图像调用都可能产生身份和调色板漂移，也会增加成本与时间。',
    status: '当前为 AI Polish：Rig 负责动作权威，图像模型只处理已经存在的粗帧。'
  },
  redraw: {
    label: 'Full Redraw',
    pipeline: [
      ['files', '锁定源资产与动作合同', '源图、Rig 和运动阶段仍作为完整重绘的约束。'],
      ['ai', '建议 Rig 与关键姿势', 'Agent 建立完整动作，不允许直接生成无时间权威的 pose sheet。'],
      ['local', '渲染可验收粗帧', '先证明姿势、接触和循环成立，再进入重绘。'],
      ['ai', '按粗帧逐帧完整重绘', '每帧使用身份参考和相邻帧，但像素不再由 Rig 确定。'],
      ['local', '执行严格连续性与身份警告', '像素指标能发现跳变，最终身份与肢体仍由人检查。'],
      ['files', '并存粗帧与实验重绘版本', '保留可回退路径，失败时仍可发布结构有效的 Rig 版本。']
    ],
    risk: '自由度最高，也最容易变脸、变色、改变肢体和产生逐帧闪烁；属于实验路径。',
    status: '当前为 Full Redraw：仍需 Rig 先建立姿势，但最终每帧都会调用图像模型。'
  }
};

const laneLabels = {
  ai: 'AI / PROVIDER',
  local: 'LOCAL ENGINE',
  files: 'FILES / STATE'
};

const workflowTabs = [...document.querySelectorAll('[data-workflow]')];
const modeTabs = [...document.querySelectorAll('[data-mode]')];
const modeFieldset = document.querySelector('#finishModeFieldset');
const panel = document.querySelector('#workflow-panel');
const workflowCode = document.querySelector('#workflowCode');
const workflowTitle = document.querySelector('#workflowTitle');
const workflowVerdict = document.querySelector('#workflowVerdict');
const pipelineList = document.querySelector('#pipelineList');
const requiresList = document.querySelector('#requiresList');
const deliverList = document.querySelector('#deliverList');
const riskText = document.querySelector('#riskText');
const labStatus = document.querySelector('#labStatus');
const copyWorkflow = document.querySelector('#copyWorkflow');

let activeWorkflow = 'animate';
let activeMode = 'rig';

function setSelected(tabs, selected) {
  tabs.forEach((tab) => {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
}

function moveTab(event, tabs, index, activate) {
  let next = index;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = tabs.length - 1;
  else return;
  event.preventDefault();
  activate(tabs[next]);
  tabs[next].focus();
}

function fillList(target, values) {
  target.replaceChildren(...values.map((value) => {
    const item = document.createElement('li');
    item.textContent = value;
    return item;
  }));
}

function renderPipeline(steps) {
  pipelineList.replaceChildren(...steps.map(([lane, title, description], index) => {
    const item = document.createElement('li');
    item.className = `lane-${lane}`;
    const number = document.createElement('span');
    number.textContent = String(index + 1).padStart(2, '0');
    const content = document.createElement('div');
    const label = document.createElement('small');
    label.textContent = laneLabels[lane];
    const heading = document.createElement('strong');
    heading.textContent = title;
    const body = document.createElement('p');
    body.textContent = description;
    content.append(label, heading, body);
    item.append(number, content);
    return item;
  }));
}

function renderWorkflow() {
  const workflow = workflows[activeWorkflow];
  const animation = activeWorkflow === 'animate' ? animationModes[activeMode] : null;
  workflowCode.textContent = workflow.code;
  workflowTitle.textContent = workflow.title;
  workflowVerdict.textContent = workflow.verdict;
  renderPipeline(animation?.pipeline ?? workflow.pipeline);
  fillList(requiresList, workflow.requires);
  fillList(deliverList, workflow.delivers);
  riskText.textContent = animation?.risk ?? workflow.risk;
  labStatus.textContent = animation?.status ?? workflow.status;
  modeFieldset.hidden = activeWorkflow !== 'animate';
  panel.setAttribute('aria-labelledby', `workflow-${activeWorkflow}`);
}

function activateWorkflow(tab) {
  activeWorkflow = tab.dataset.workflow;
  setSelected(workflowTabs, tab);
  renderWorkflow();
}

function activateMode(tab) {
  activeMode = tab.dataset.mode;
  setSelected(modeTabs, tab);
  renderWorkflow();
}

workflowTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateWorkflow(tab));
  tab.addEventListener('keydown', (event) => moveTab(event, workflowTabs, index, activateWorkflow));
});

modeTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateMode(tab));
  tab.addEventListener('keydown', (event) => moveTab(event, modeTabs, index, activateMode));
});

const scenarioTabs = [...document.querySelectorAll('[data-scenario]')];
const scenarioViews = [...document.querySelectorAll('[data-scenario-view]')];

function activateScenario(tab) {
  const scenario = tab.dataset.scenario;
  setSelected(scenarioTabs, tab);
  scenarioViews.forEach((view) => {
    const active = view.dataset.scenarioView === scenario;
    view.classList.toggle('is-active', active);
    view.setAttribute('aria-hidden', String(!active));
  });
}

scenarioTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateScenario(tab));
  tab.addEventListener('keydown', (event) => moveTab(event, scenarioTabs, index, activateScenario));
});

if (scenarioTabs[0]) activateScenario(scenarioTabs[0]);

function workflowText() {
  const workflow = workflows[activeWorkflow];
  const animation = activeWorkflow === 'animate' ? animationModes[activeMode] : null;
  const steps = animation?.pipeline ?? workflow.pipeline;
  const mode = animation ? ` / ${animation.label}` : '';
  return [
    `${workflow.code}${mode}`,
    workflow.title,
    '',
    ...steps.map(([lane, title, description], index) => `${index + 1}. [${laneLabels[lane]}] ${title} — ${description}`),
    '',
    `交付：${workflow.delivers.join('、')}`,
    `主要风险：${animation?.risk ?? workflow.risk}`
  ].join('\n');
}

function copyWithSelection(value) {
  const field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.append(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  return copied;
}

copyWorkflow?.addEventListener('click', async () => {
  try {
    const value = workflowText();
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
    else if (!copyWithSelection(value)) throw new Error('clipboard unavailable');
    labStatus.textContent = '当前工作流已复制。';
  } catch (_) {
    const copied = copyWithSelection(workflowText());
    labStatus.textContent = copied
      ? '当前工作流已复制。'
      : '浏览器未授权剪贴板；当前工作流仍可直接从流程列表读取。';
  }
});

const navLinks = [...document.querySelectorAll('[data-nav]')];
const sections = [...document.querySelectorAll('[data-section]')];

function markSection(id) {
  navLinks.forEach((link) => {
    const active = link.dataset.nav === id;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
    if (visible) markSection(visible.target.dataset.section);
  }, { rootMargin: '-18% 0px -66% 0px', threshold: [0, 0.1, 0.35] });
  sections.forEach((section) => observer.observe(section));
}

const readingProgress = document.querySelector('#readingProgress');

function updateProgress() {
  if (!readingProgress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  readingProgress.style.width = `${ratio * 100}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
renderWorkflow();
