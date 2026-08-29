(() => {
const referenceProfiles = {
  rain: {
    label: '雨亭欠曝抓拍',
    dna: '清冷雨亭、偶发抓拍、人物压成暗形、潮湿木构与灰绿背景',
    person: '清冷东方文艺成年女性，自然半哑光底妆，低饱和唇色，潮湿碎发',
    wardrobe: '哑暗黑色短外套与灰黑长裙，面料吞光，局部褶皱不作商业塑形',
    scene: '雨中的木亭与栏杆，亭外灰绿植物合并成低反差大色块，主体周围保留连续低细节区',
    light: '阴天天空的大面积散射光从亭外侧前方进入，屋檐筛掉上方来光，面部靠近开口一侧微亮，亭内木构和服装自然欠曝',
    event: '一滴檐水落到手背，她短促收回手指，视线追随水滴，眉眼轻微收紧后松开',
    imaging: '冷中性白平衡，低饱和灰绿，压低黑位，亮部偶有截断，轻微手持晃动与旧数码压缩，脸部允许自然脱焦',
    hierarchy: '人物脸与手是有限清晰区，亭柱和栏杆形成主导大形，远处枝叶保持低锐度低微反差',
    antiPolish: '不补连续暖色发丝轮廓光，不加无来源正面回填，不把低机位组织成英雄式时装广告'
  },
  cream: {
    label: '奶油柔雾棚拍',
    dna: '高调奶油棚拍、柔雾包裹、克制妆面反射、干净造型展示',
    person: '清透奶油裸妆的成年女性，自然卧蚕，浅粉唇，额头和双颊保持柔和漫反射',
    wardrobe: '象牙白斜裁连衣裙与薄纱肩披，丝绸窄高光和薄纱透光边缘清楚但不过曝',
    scene: '灰白无缝背景与简单弧形地台，大面积留白，只保留一件透明亚克力构图道具',
    light: '左前方大面积棚拍柔光包裹面部与肩颈，右侧白色反光板提供克制回填，眼神光宽而柔和',
    event: '她调整肩披时感到薄纱滑落，手指轻轻接住布料，视线短暂落向肩侧，嘴角出现未完全形成的笑意',
    imaging: '中性偏暖白平衡，低对比，高光柔和滚降，Pro-Mist 式轻微 bloom，主体清楚，背景平滑衰减',
    hierarchy: '五官和薄纱边缘为主体清晰区，地台是次级大形，背景保持连续干净留白',
    antiPolish: '保留精致 editorial 的柔和塑形，不额外做脏，不增加旧数码噪点或偶发失焦'
  },
  y2k: {
    label: 'Y2K CCD 直闪',
    dna: 'Y2K 街头快照、CCD direct flash、近距离广角、俏皮但非商业摆拍',
    person: '甜酷成年女性，猫眼眼线，桃粉腮红，水润质感只保留在唇部，双颊不形成连续湿亮',
    wardrobe: '银灰短款夹克、黑色细肩带上衣与低腰牛仔，金属边缘出现零碎冷亮点',
    scene: '夜间便利店门口，自动贩卖机与玻璃反光作为背景大形，远处招牌文字不要求可辨认',
    light: '近轴机顶直闪提亮眼神、鼻梁窄线和服装金属边缘，环境低曝光，玻璃返回少量冷色反射',
    event: '饮料罐刚从机器出口滚出，她俯身接住后抬眼看向镜头，单侧眉峰上扬，另一只手仍扶着机器边缘',
    imaging: '偏冷白平衡，高反差硬闪，人物边缘轻微过曝，背景快速跌入暗部，保留 CCD 噪点和轻微压缩',
    hierarchy: '脸、饮料罐和扶机手是清晰区，贩卖机为主导色块，远处灯点和货架合并为低细节背景',
    antiPolish: '不做奶油散景、电影化重暗角或现代商业磨皮，不把直闪扩大成全脸油亮反射'
  }
};

const viewpointProfiles = {
  original: {
    label: '平视 / 原关系',
    topology: '机位与主参考接近，保持原有主光方位、遮挡和人物—背景曝光关系；只根据本张动作重新确认手部与道具落点。',
    predictions: ['眼神光保持原方向', '面部亮暗侧不翻转', '手部受光服从当前动作', '背景曝光差保持稳定']
  },
  overhead: {
    label: '俯拍 / 相机升高',
    topology: '相机升高并俯拍，但世界空间中的主光和遮挡保持不变；俯拍不能把侧窗、亭外天空或机顶闪光改写成无来源暖顶光。',
    predictions: ['靠近原开口侧的眼神光仍可见', '面部亮侧保持原光向', '肩臂上表面只接到环境散射', '地面或地台在画面中扩大但不自动变亮']
  },
  low: {
    label: '低机位 / 屋檐下',
    topology: '相机降低，光源仍固定在原场景；若处在屋檐或棚内，先计算上方遮挡和开口方向，不能因背景面积变大自动升级成英雄式轮廓光。',
    predictions: ['眼窝受遮挡后略深', '脸部靠开口一侧保留窄亮面', '手与道具接收同向侧光', '背景亮部面积增加但人物仍可欠曝']
  }
};

const modeProfiles = {
  detailed: {
    badge: 'ROUTE / DETAILED',
    pipeline: ['识别完整控制请求', '拆分人物与摄影模块', '写入光源—落点—结果', '编译连续详细 Prompt']
  },
  variant: {
    badge: 'ROUTE / SERIES VARIANT',
    pipeline: ['提取固定风格词链', '提取固定成像机制', '建立分张差异矩阵', '编译三条无标题关键词链']
  },
  reshoot: {
    badge: 'ROUTE / PRODUCTION RESHOOT',
    pipeline: ['还原共同写真套餐', '分配主参考与身份职责', '规划五张新分镜', '重建新机位光照拓扑', '编译 Prompt 与七轴门禁']
  }
};

const form = document.querySelector('#compilerForm');
const modeButtons = [...document.querySelectorAll('[data-mode]')];
const themeInput = document.querySelector('#themeInput');
const referenceSelect = document.querySelector('#referenceSelect');
const viewpointSelect = document.querySelector('#viewpointSelect');
const identityToggle = document.querySelector('#identityToggle');
const resetButton = document.querySelector('#resetCompiler');
const routeBadge = document.querySelector('#routeBadge');
const compileStatus = document.querySelector('#compileStatus');
const pipelineSteps = document.querySelector('#pipelineSteps');
const referenceRole = document.querySelector('#referenceRole');
const compiledPrompt = document.querySelector('#compiledPrompt');
const promptStats = document.querySelector('#promptStats');
const qualityGates = document.querySelector('#qualityGates');
const copyButton = document.querySelector('#copyCompiledPrompt');
const copyFeedback = document.querySelector('#copyFeedback');
const sampleFilterButtons = [...document.querySelectorAll('[data-sample-filter]')];
const sampleCards = [...document.querySelectorAll('[data-sample-card]')];
const sampleVisibleCount = document.querySelector('#sampleVisibleCount');
const sampleCopyButtons = [...document.querySelectorAll('[data-copy-sample]')];
const sampleImages = [...document.querySelectorAll('.sample-visual img')];

let activeMode = 'detailed';
let compileRevision = 0;

function currentTheme() {
  return themeInput?.value.trim() || '为一位成年原创女性设计一组写真';
}

function identityContract(hasIdentity) {
  return hasIdentity
    ? '图片 1 是人物身份参考，只负责保持同一位成年人物的主要五官辨识度，不负责妆造、表情、姿势、场景、构图、光线或调色；图片 2 是本张主摄影参考，不承担人物身份。'
    : '图片 1 是本张主摄影参考，只负责摄影企划、布光、曝光、色彩和成像质感；本张重新生成一位适配企划的成年原创女性，不继承写真参考人物的脸。';
}

function identitySentence(hasIdentity) {
  return hasIdentity
    ? '人物身份只来自图片 1，只保留脸型轮廓、眼型、鼻唇关系和稳定特征；不要继承身份图的中性表情、眼神方向和嘴角状态，本张表情服从当前人物事件。'
    : '本张重新生成一位适配当前主题的成年原创女性，不继承写真参考图中人物的脸，不把参考人物的脸型、眼型、痣或鼻唇关系作为生成目标。';
}

function buildDetailed(theme, reference, viewpoint, hasIdentity) {
  return [
    `【任务】${theme}。`,
    `【参考职责】${identityContract(hasIdentity)}`,
    `【人物与事件】${identitySentence(hasIdentity)}${reference.person}；${reference.event}，让视线、眉眼、手部和身体响应同一事件。`,
    `【穿搭与场景】${reference.wardrobe}；${reference.scene}。`,
    `【机位与构图】采用${viewpoint.label}，${reference.hierarchy}。`,
    `【光线拓扑】${reference.light}。${viewpoint.topology}新视角应看到：${viewpoint.predictions.join('、')}。`,
    `【成像系统】${reference.imaging}。${reference.antiPolish}。`,
    '【质量防线】保持自然人体连接与手指结构，不做塑料皮肤、过度磨皮、HDR、元素堆砌和额外文字水印。'
  ].join('\n\n');
}

function buildVariants(theme, reference, viewpoint, hasIdentity) {
  const fixedStyle = `${reference.dna}，${reference.person}`;
  const fixedImaging = `${reference.imaging}，${reference.hierarchy}`;
  const identity = identitySentence(hasIdentity);
  const shots = [
    `P01｜${fixedStyle}；${identity}${reference.event}；${reference.wardrobe}；${reference.scene}；平视近距离，让手部与事件成为前景关系；${reference.light}；${fixedImaging}；${reference.antiPolish}。`,
    `P02｜${fixedStyle}；${identity}人物刚转向现场触发物，肩线和重心仍在移动，视线不看镜头；${reference.wardrobe}；${reference.scene}；${viewpoint.label}，主体偏离中心并保留一侧低细节区；${viewpoint.topology}拓扑预测：${viewpoint.predictions.join('、')}；${fixedImaging}；${reference.antiPolish}。`,
    `P03｜${fixedStyle}；${identity}人物停下动作整理衣料或道具，眉眼放松，嘴角只出现轻微变化；${reference.wardrobe}；${reference.scene}；环境关系更强的半身构图，前景形成一次自然遮挡；${reference.light}；${fixedImaging}；${reference.antiPolish}。`
  ];
  return `【系列任务】${theme}\n【固定整体风格词链】${fixedStyle}\n【固定成像机制词链】${fixedImaging}\n\n${shots.join('\n\n')}`;
}

function buildReshoot(theme, reference, viewpoint, hasIdentity) {
  const shotPlan = [
    'P01 近景：人物事件驱动眉眼与手指反应',
    `P02 ${viewpoint.label}：重建世界空间受光关系`,
    'P03 半身：主道具与视线形成同一任务',
    'P04 环境照：人物更小，保持背景低细节区',
    'P05 偶发抓拍：改变重心与裁切，不复制参考完整构图'
  ].join('；');

  return [
    `【摄影方案】${theme}。共同写真套餐为：${reference.dna}；${reference.wardrobe}；${reference.scene}。`,
    `【参考职责】${identityContract(hasIdentity)}`,
    `【五张新分镜】${shotPlan}。整组最多一张近似复拍标志性画面，其余重新组合人物位置、机位、动作、视线和道具。`,
    `【本张正式 Prompt / P02】${identitySentence(hasIdentity)}${reference.person}。${reference.event}。采用${viewpoint.label}，${reference.hierarchy}。`,
    `世界空间中的主光、遮挡和环境回填保持不变：${reference.light}。${viewpoint.topology}拓扑预测：${viewpoint.predictions.join('；')}。`,
    `成像保持${reference.imaging}。${reference.antiPolish}。不要复制参考人物的脸，不自动补入参考中不存在的商业摄影升级。`,
    '【重做合同】如结果失败，回到原始人物图、原始写真参考和本轮反馈重新编译完整 Prompt；上一轮生成图只用于诊断，generated_image_inputs: none。'
  ].join('\n\n');
}

function buildPrompt(mode, theme, reference, viewpoint, hasIdentity) {
  if (mode === 'variant') return buildVariants(theme, reference, viewpoint, hasIdentity);
  if (mode === 'reshoot') return buildReshoot(theme, reference, viewpoint, hasIdentity);
  return buildDetailed(theme, reference, viewpoint, hasIdentity);
}

function renderPipeline(steps) {
  if (!pipelineSteps) return;
  pipelineSteps.replaceChildren(...steps.map((step, index) => {
    const item = document.createElement('li');
    const number = document.createElement('b');
    const label = document.createElement('span');
    number.textContent = String(index + 1).padStart(2, '0');
    label.textContent = step;
    item.append(number, label);
    return item;
  }));
}

function renderQualityGates(hasIdentity, viewpointChanged) {
  if (!qualityGates) return;
  const gates = [
    ['输入职责', 'READY', hasIdentity ? '身份与摄影参考已分开' : '原创人物与摄影参考已分开'],
    ['光照拓扑', 'READY', viewpointChanged ? '已为新机位写入四项预测' : '保持主参考受光关系'],
    ['写真套餐', 'PENDING IMAGE', '生成后对照妆造、场景与道具'],
    ['人物事件', 'PENDING IMAGE', '生成后检查眉眼、视线、手部与身体'],
    ['原作保真', 'PENDING IMAGE', '不能用“比上一轮好”代替原作对照']
  ];

  qualityGates.replaceChildren(...gates.map(([name, status, detail]) => {
    const item = document.createElement('li');
    const label = document.createElement('span');
    const state = document.createElement('b');
    const note = document.createElement('small');
    label.textContent = name;
    state.textContent = status;
    state.dataset.state = status === 'READY' ? 'ready' : 'pending';
    note.textContent = detail;
    item.append(label, state, note);
    return item;
  }));
}

function compile({ announce = true } = {}) {
  if (!referenceSelect || !viewpointSelect || !compiledPrompt) return;
  const reference = referenceProfiles[referenceSelect.value];
  const viewpoint = viewpointProfiles[viewpointSelect.value];
  const mode = modeProfiles[activeMode];
  const hasIdentity = Boolean(identityToggle?.checked);
  const prompt = buildPrompt(activeMode, currentTheme(), reference, viewpoint, hasIdentity);

  compileRevision += 1;
  if (routeBadge) routeBadge.textContent = mode.badge;
  if (compileStatus) compileStatus.textContent = `REV ${String(compileRevision).padStart(2, '0')} · ${reference.label} · ${viewpoint.label}`;
  if (referenceRole) referenceRole.textContent = identityContract(hasIdentity);
  compiledPrompt.textContent = prompt;
  if (promptStats) promptStats.textContent = `${prompt.length} 字符 · ${activeMode === 'reshoot' ? '5 张分镜 / 展示 P02' : activeMode === 'variant' ? '3 条变体' : '1 条详细 Prompt'}`;
  if (copyFeedback && announce) copyFeedback.textContent = '已重新编译；尚未调用图片模型';

  renderPipeline(mode.pipeline);
  renderQualityGates(hasIdentity, viewpointSelect.value !== 'original');
}

function setMode(mode, announce = true) {
  activeMode = modeProfiles[mode] ? mode : 'detailed';
  modeButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.mode === activeMode)));
  compile({ announce });
}

async function copyPrompt() {
  if (!compiledPrompt || !copyFeedback) return;
  const text = compiledPrompt.textContent;
  let copied = false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      copied = false;
    }
  }

  if (!copied) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.append(textarea);
    textarea.select();
    try {
      copied = document.execCommand('copy');
    } catch {
      copied = false;
    }
    textarea.remove();
  }

  if (copied) {
    copyFeedback.textContent = 'Prompt 已复制；这仍是文本结果，未调用图片模型';
    copyButton.textContent = '已复制';
  } else {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(compiledPrompt);
    selection.removeAllRanges();
    selection.addRange(range);
    copyFeedback.textContent = '剪贴板未授权，Prompt 已选中，请按 Ctrl/Cmd+C';
    copyButton.textContent = '已选中';
  }

  window.setTimeout(() => {
    copyButton.textContent = '复制结果';
  }, 2800);
}

function resetCompiler() {
  if (themeInput) themeInput.value = '为一位成年原创女性设计雨亭中的抓拍写真';
  if (referenceSelect) referenceSelect.value = 'rain';
  if (viewpointSelect) viewpointSelect.value = 'original';
  if (identityToggle) identityToggle.checked = false;
  setMode('detailed');
  if (copyFeedback) copyFeedback.textContent = '已恢复默认；尚未调用图片模型';
}

function setSampleFilter(filter) {
  const activeFilter = ['all', 'rain', 'cream', 'y2k'].includes(filter) ? filter : 'all';
  let visible = 0;

  sampleCards.forEach((card) => {
    const show = activeFilter === 'all' || card.dataset.sampleStyle === activeFilter;
    card.hidden = !show;
    if (show) visible += 1;
  });

  sampleFilterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.sampleFilter === activeFilter));
  });

  if (sampleVisibleCount) {
    const labels = { all: '全部', rain: '雨亭欠曝', cream: '奶油柔雾', y2k: 'Y2K 直闪' };
    sampleVisibleCount.textContent = `${labels[activeFilter]} · 正在显示 ${visible} / 6 张实测样例`;
  }
}

async function copySamplePrompt(button) {
  const prompt = button.closest('.sample-prompt')?.querySelector('[data-sample-prompt]')?.textContent || '';
  if (!prompt) return;
  let copied = false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(prompt);
      copied = true;
    } catch {
      copied = false;
    }
  }

  if (!copied) {
    const textarea = document.createElement('textarea');
    textarea.value = prompt;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.append(textarea);
    textarea.select();
    try {
      copied = document.execCommand('copy');
    } catch {
      copied = false;
    }
    textarea.remove();
  }

  button.textContent = copied ? '已复制 Prompt' : '复制失败，请手动选择';
  window.setTimeout(() => {
    button.textContent = '复制 Prompt';
  }, 2400);
}

sampleFilterButtons.forEach((button) => {
  button.addEventListener('click', () => setSampleFilter(button.dataset.sampleFilter));
});
sampleCopyButtons.forEach((button) => {
  button.addEventListener('click', () => copySamplePrompt(button));
});
sampleImages.forEach((image) => {
  image.addEventListener('error', () => {
    image.hidden = true;
    const label = image.parentElement?.querySelector(':scope > span');
    if (label) label.textContent = 'LOCAL IMAGE UNAVAILABLE';
  });
});

modeButtons.forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  compile();
});
referenceSelect?.addEventListener('change', () => compile());
viewpointSelect?.addEventListener('change', () => compile());
identityToggle?.addEventListener('change', () => compile());
resetButton?.addEventListener('click', resetCompiler);
copyButton?.addEventListener('click', copyPrompt);

setSampleFilter('all');
compile({ announce: false });
})();
