const styles = {
  "IP-01": {
    name: "简笔涂鸦头像",
    short: "极简线条",
    supported: ["avatar", "bust_sticker"],
    conditional: []
  },
  "IP-02": {
    name: "清透扁平肖像",
    short: "干净色块",
    supported: ["avatar", "bust_sticker", "cover_card"],
    conditional: ["full_body"]
  },
  "IP-03": {
    name: "粉蜡笔撞色肖像",
    short: "颗粒撞色",
    supported: ["avatar", "bust_sticker", "full_body", "full_body_sticker"],
    conditional: []
  },
  "IP-04": {
    name: "彩铅换装小人",
    short: "全身换装",
    supported: ["full_body", "full_body_sticker", "outfit_variant", "avatar"],
    conditional: []
  },
  "IP-05": {
    name: "治愈手帐小剧场",
    short: "留白场景",
    supported: ["bust_sticker", "full_body_sticker", "scene_card"],
    conditional: []
  },
  "IP-06": {
    name: "粗线撞色漫画",
    short: "海报漫画",
    supported: ["avatar", "bust_sticker", "cover_card"],
    conditional: ["full_body"]
  }
};

const forms = {
  avatar: { label: "头像", dimensions: "1024 × 1024", alpha: "preferred", framing: "头部或肩像" },
  bust_sticker: { label: "半身贴纸", dimensions: "1024 × 1024", alpha: "required", framing: "半身 + 12% 安全边距" },
  full_body: { label: "全身立绘", dimensions: "1080 × 1350", alpha: "preferred", framing: "完整头顶到鞋底" },
  full_body_sticker: { label: "全身贴纸", dimensions: "1080 × 1350", alpha: "required", framing: "全身 + 10% 安全边距" },
  outfit_variant: { label: "换装版本", dimensions: "1080 × 1350", alpha: "preferred", framing: "完整全身" },
  scene_card: { label: "场景卡", dimensions: "1080 × 1350", alpha: "not_required", framing: "人物 + 一个场景元素" },
  cover_card: { label: "封面卡", dimensions: "1080 × 1440", alpha: "not_required", framing: "人物 + 文案安全区" }
};

const expressions = {
  neutral: "平静",
  happy: "开心",
  thinking: "思考",
  surprised: "惊喜"
};

const props = {
  none: "无道具",
  camera: "相机",
  coffee: "咖啡",
  notebook: "笔记本"
};

const state = {
  style: "IP-04",
  form: "full_body",
  expression: "neutral",
  prop: "none",
  hair: "a",
  identityVersion: 1,
  releaseVersion: 1,
  lastAction: "人物原型已确认并冻结为 v1。"
};

const styleOptions = document.querySelector("#styleOptions");
const assetForm = document.querySelector("#assetForm");
const expressionOptions = document.querySelector("#expressionOptions");
const propOptions = document.querySelector("#propOptions");
const formHelp = document.querySelector("#formHelp");
const changeHair = document.querySelector("#changeHair");
const characterStage = document.querySelector("#characterStage");
const stageCaption = document.querySelector("#stageCaption");
const identityVersion = document.querySelector("#identityVersion");
const releaseVersion = document.querySelector("#releaseVersion");
const deliveryStatus = document.querySelector("#deliveryStatus");
const characterSpec = document.querySelector("#characterSpec code");
const manifestSpec = document.querySelector("#manifestSpec code");
const qaScore = document.querySelector("#qaScore");
const qaList = document.querySelector("#qaList");
const liveMessage = document.querySelector("#liveMessage");

function bumpRelease(action) {
  state.releaseVersion += 1;
  state.lastAction = `${action}；身份锁保持 v${state.identityVersion}，创建 r${state.releaseVersion}。`;
}

function bumpIdentity(action) {
  state.identityVersion += 1;
  state.releaseVersion = 1;
  state.lastAction = `${action}属于人物锁变化，创建 v${state.identityVersion}；发布号回到 r1。`;
}

function capabilityStatus() {
  const style = styles[state.style];
  if (style.supported.includes(state.form)) return "supported";
  if (style.conditional.includes(state.form)) return "conditional";
  return "blocked";
}

function makeButton(label, value, group, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.dataset.value = value;
  button.setAttribute("aria-pressed", String(state[group] === value));
  button.addEventListener("click", onClick);
  return button;
}

function buildControls() {
  for (const [id, style] of Object.entries(styles)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "style-option";
    button.dataset.value = id;
    button.setAttribute("aria-pressed", String(state.style === id));

    const code = document.createElement("b");
    code.textContent = `${id} · ${style.name}`;
    const description = document.createElement("small");
    description.textContent = style.short;
    button.append(code, description);

    button.addEventListener("click", () => {
      if (state.style === id) return;
      state.style = id;
      bumpIdentity(`主风格切换为 ${id}`);
      render();
    });
    styleOptions.append(button);
  }

  for (const [id, form] of Object.entries(forms)) {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = `${form.label} · ${form.dimensions}`;
    assetForm.append(option);
  }
  assetForm.value = state.form;
  assetForm.addEventListener("change", () => {
    state.form = assetForm.value;
    bumpRelease(`资产形式改为${forms[state.form].label}`);
    render();
  });

  for (const [id, label] of Object.entries(expressions)) {
    expressionOptions.append(makeButton(label, id, "expression", () => {
      if (state.expression === id) return;
      state.expression = id;
      bumpRelease(`表情改为${label}`);
      render();
    }));
  }

  for (const [id, label] of Object.entries(props)) {
    propOptions.append(makeButton(label, id, "prop", () => {
      if (state.prop === id) return;
      state.prop = id;
      bumpRelease(`必要道具改为${label}`);
      render();
    }));
  }

  changeHair.addEventListener("click", () => {
    state.hair = state.hair === "a" ? "b" : "a";
    bumpIdentity("发型轮廓改变");
    render();
  });
}

function renderButtons() {
  document.querySelectorAll(".style-option").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.value === state.style));
  });
  document.querySelectorAll("#expressionOptions button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.value === state.expression));
  });
  document.querySelectorAll("#propOptions button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.value === state.prop));
  });
  assetForm.value = state.form;
}

function renderCharacter() {
  characterStage.dataset.style = state.style;
  characterStage.dataset.form = state.form;
  characterStage.dataset.hair = state.hair;
  stageCaption.textContent = `${state.style} · ${styles[state.style].name}`;
  identityVersion.textContent = `v${state.identityVersion}`;
  releaseVersion.textContent = `r${state.releaseVersion}`;

  for (const id of ["eyesNeutral", "eyesHappy", "eyesSurprised"]) {
    document.querySelector(`#${id}`).classList.add("is-hidden");
  }

  const mouth = document.querySelector("#mouth");
  if (state.expression === "happy") {
    document.querySelector("#eyesHappy").classList.remove("is-hidden");
    mouth.setAttribute("d", "M244 190 Q261 216 279 190");
  } else if (state.expression === "surprised") {
    document.querySelector("#eyesSurprised").classList.remove("is-hidden");
    mouth.setAttribute("d", "M253 194a9 12 0 1 0 18 0a9 12 0 1 0-18 0");
  } else if (state.expression === "thinking") {
    document.querySelector("#eyesNeutral").classList.remove("is-hidden");
    mouth.setAttribute("d", "M249 199 Q261 193 273 199");
  } else {
    document.querySelector("#eyesNeutral").classList.remove("is-hidden");
    mouth.setAttribute("d", "M245 194 Q261 204 278 194");
  }

  for (const id of ["propCamera", "propCoffee", "propNotebook"]) {
    document.querySelector(`#${id}`).classList.add("is-hidden");
  }
  if (state.prop !== "none") {
    const propId = `#prop${state.prop.charAt(0).toUpperCase()}${state.prop.slice(1)}`;
    document.querySelector(propId)?.classList.remove("is-hidden");
  }
}

function renderContracts(status) {
  const form = forms[state.form];
  const hairDescription = state.hair === "a" ? "黑色中长弧形发型" : "黑色中长分层发型";
  characterSpec.textContent = [
    `character_id: demo-muse`,
    `identity_version: v${state.identityVersion}`,
    `status: approved`,
    ``,
    `identity_lock:`,
    `  face_shape: round`,
    `  hair: ${hairDescription}`,
    `  eyes_and_glasses: round_glasses`,
    `  outfit: coral_top_blue_trousers`,
    ``,
    `visual_lock:`,
    `  style_id: ${state.style}`,
    `  palette: [coral, navy, cream]`,
    ``,
    `mutable_fields:`,
    `  expression: ${state.expression}`,
    `  required_prop: ${state.prop}`,
    ``,
    `approved_anchor: prototype-v${state.identityVersion}-r1.svg`
  ].join("\n");

  const qaStatus = status === "supported" ? "pass" : status === "conditional" ? "pending" : "rework";
  manifestSpec.textContent = JSON.stringify({
    delivery_id: `demo-muse-r${state.releaseVersion}`,
    character_spec: `character-spec-v${state.identityVersion}.yaml`,
    release: `r${state.releaseVersion}`,
    status: qaStatus === "pass" ? "qa_passed" : "draft",
    asset: {
      file: `${state.form}-v${state.identityVersion}-r${state.releaseVersion}.png`,
      asset_form: state.form,
      pixel_size: form.dimensions,
      alpha: form.alpha,
      expression: state.expression,
      required_prop: state.prop,
      qa_status: qaStatus
    }
  }, null, 2);
}

function renderQa(status) {
  const form = forms[state.form];
  const items = [
    { label: "肖像授权与输入预检已确认", state: "pass" },
    { label: `人物锚点 v${state.identityVersion} 已冻结`, state: "pass" },
    {
      label: status === "supported"
        ? `${state.style} 支持${form.label}`
        : status === "conditional"
          ? `${state.style} 对${form.label}为条件支持，需要一致性确认`
          : `${state.style} 不支持${form.label}`,
      state: status === "supported" ? "pass" : status === "conditional" ? "pending" : "fail"
    },
    { label: "本轮只生成一个独立 source_asset", state: "pass" },
    { label: `输出规格已登记：${form.dimensions} / alpha ${form.alpha}`, state: "pass" }
  ];

  qaList.replaceChildren();
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item.label;
    if (item.state === "fail") li.className = "is-failed";
    if (item.state === "pending") li.className = "is-pending";
    qaList.append(li);
  }

  const passes = items.filter((item) => item.state === "pass").length;
  qaScore.textContent = status === "conditional" ? `${passes} / 5 + REVIEW` : `${passes} / 5`;

  deliveryStatus.className = "status-pill";
  liveMessage.className = "live-message";
  if (status === "supported") {
    deliveryStatus.textContent = "READY";
    liveMessage.textContent = `${state.lastAction} 当前资产符合能力范围，可以进入实际生成与视觉验收。`;
  } else if (status === "conditional") {
    deliveryStatus.textContent = "REVIEW";
    deliveryStatus.classList.add("is-conditional");
    liveMessage.classList.add("is-conditional");
    liveMessage.textContent = `${state.lastAction} 当前资产为条件支持，必须先验证角色一致性。`;
  } else {
    deliveryStatus.textContent = "BLOCKED";
    deliveryStatus.classList.add("is-blocked");
    liveMessage.classList.add("is-blocked");
    liveMessage.textContent = `${state.lastAction} 能力路由拒绝本次组合；请更换资产形式或主风格。`;
  }
}

function render() {
  const status = capabilityStatus();
  const form = forms[state.form];
  renderButtons();
  renderCharacter();
  renderContracts(status);
  renderQa(status);
  formHelp.textContent = `${form.framing} · alpha ${form.alpha} · 当前能力：${status === "supported" ? "支持" : status === "conditional" ? "条件支持" : "不支持"}`;
}

function setupTabs() {
  const tabs = [document.querySelector("#specTab"), document.querySelector("#manifestTab")];
  const panels = [document.querySelector("#characterSpec"), document.querySelector("#manifestSpec")];

  function selectTab(index) {
    tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[tabIndex].classList.toggle("is-hidden", !selected);
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(index));
    tab.addEventListener("keydown", (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
      selectTab(next);
      tabs[next].focus();
    });
  });
}

buildControls();
setupTabs();
render();

const productionStages = [
  {
    code: "01 / BRIEF",
    state: "READY",
    title: "先定义结果，不先写提示词。",
    description: "把“做一套个人 IP”转换成具体渠道、资产形式和验收标准，避免生成完成后才发现不能使用。",
    checklist: ["业务目标：支持知识课程发布", "渠道：社交账号、课程页、PPT、社群", "验收：同一人物、独立文件、规格可用、来源可追踪"],
    hint: "资产尚未进入生产。",
    coverage: "0 / 6 READY",
    metrics: [0, 0, 0],
    next: "进入人物冻结"
  },
  {
    code: "02 / ANCHOR",
    state: "APPROVED",
    title: "先确认一个人物，再扩展一组人物。",
    description: "v1/r1 成为 approved anchor。后续生成不重新设计林简，而是在同一身份上改变允许字段。",
    checklist: ["身份锁：圆脸、黑色中长发、圆框眼镜", "视觉锁：珊瑚衬衫、海军蓝阔腿裤、彩铅纸感", "锚点事实：1060 × 1484，真实 alpha"],
    hint: "人物原型通过，其他资产等待规划。",
    coverage: "1 / 6 PASSED",
    metrics: [1, 1, 0],
    next: "进入资产规划"
  },
  {
    code: "03 / PLAN",
    state: "LOCKED",
    title: "把业务目标编译成独立资产清单。",
    description: "每个渠道需求都有独立用途、变化字段和输出契约。范围先锁定，模型才知道每轮只需要解决什么。",
    checklist: ["社交：方形头像 r6", "课程与 PPT：思考 r3、讲解 r4", "社群：欢迎 r2、庆祝 r5"],
    hint: "六项范围已锁定，五项等待生成。",
    coverage: "1 PASS · 5 PLANNED",
    metrics: [1, 1, 0],
    next: "开始增量生产"
  },
  {
    code: "04 / PRODUCE",
    state: "IN REVIEW",
    stateClass: "is-review",
    title: "每次从锚点出发，只改变一个目标。",
    description: "模型收到 v1/r1 参考图、人物锁、本轮唯一变化和文件规格。一个输出对应一个 source asset，失败不牵连整包。",
    checklist: ["r2：微笑 + 挥手", "r3：思考 + 空白笔记本", "r4–r6：排队等待独立生成"],
    hint: "首批变体已生成，等待文件与视觉 QA。",
    coverage: "1 PASS · 2 REVIEW",
    metrics: [3, 1, 0],
    next: "进入质量门槛"
  },
  {
    code: "05 / VERIFY",
    state: "BLOCKED",
    stateClass: "is-blocked",
    title: "看起来正确，不代表可以交付。",
    description: "初始 r2/r3 把透明棋盘格烘焙进 RGB 像素，四角 alpha 均为 255。发布门槛阻塞它们，其他资产继续视觉复核。",
    checklist: ["机器 QA：尺寸、alpha、哈希、文件格式", "人工 QA：脸、发型、眼镜、服装、动作与道具", "修复策略：只重做失败项，并把资产契约改为实体底色 full_body"],
    hint: "发现 2 项伪透明失败；不能发布整包。",
    coverage: "1 PASS · 2 BLOCKED · 3 REVIEW",
    metrics: [6, 1, 2],
    next: "修复并发布"
  },
  {
    code: "06 / RELEASE",
    state: "RELEASED",
    title: "发布的是可继续增长的资产状态。",
    description: "失败项完成重做，六张图片连同角色卡、manifest、SHA-256、QA 和 lineage 一起发布为 v1/r6。",
    checklist: ["6 / 6 文件通过并进入发布包", "r1–r6 保持同一人物版本 v1", "下一项需求从 r7 继续，无需重做已有资产"],
    hint: "课程发布资产包已就绪；下一项从 r7 追加。",
    coverage: "6 / 6 PASSED",
    metrics: [6, 6, 0],
    next: "发布已完成"
  }
];

const productionAssetRegistry = [
  {
    id: "r1",
    release: "v1 / r1",
    name: "人物原型",
    form: "PROTOTYPE",
    channel: "角色系统",
    use: "身份锚点",
    image: "../../assets/project-003-sample/lin-jian-anchor-v1-r1.png",
    alt: "林简人物原型锚点",
    width: 1060,
    height: 1484,
    anchor: "SELF · approved anchor",
    change: "冻结身份锁与视觉锁",
    spec: "1060 × 1484 · alpha true",
    hash: "514fe3766fb5…a0aa61",
    qa: "PASS · alpha、全身完整与人物锁已确认",
    lineage: "brief → lin-jian-v1 → approved-anchor-r1",
    statuses: ["planned", "passed", "passed", "passed", "passed", "passed"]
  },
  {
    id: "r2",
    release: "v1 / r2",
    name: "开心挥手",
    form: "FULL BODY",
    channel: "社群 / 课程页",
    use: "欢迎",
    image: "../../assets/project-003-sample/lin-jian-happy-wave-v1-r2.png",
    alt: "林简开心挥手全身资产",
    width: 1003,
    height: 1568,
    anchor: "v1/r1 · 人物原型",
    change: "微笑 + 右手挥手 + 奶油底色",
    spec: "1003 × 1568 · alpha false",
    hash: "b787dbed8725…d001b4b",
    qa: "PASS · 重做后契约明确为实体底色 full_body",
    blockedQa: "BLOCKED · 初始文件四角 alpha 255，棋盘格被画入 RGB",
    lineage: "brief → v1/r1(anchor) → r2 → alpha-rework → manifest-r6",
    statuses: ["planned", "waiting", "planned", "review", "blocked", "passed"]
  },
  {
    id: "r3",
    release: "v1 / r3",
    name: "思考笔记",
    form: "FULL BODY",
    channel: "课程 / PPT",
    use: "知识讲解",
    image: "../../assets/project-003-sample/lin-jian-thinking-notebook-v1-r3.png",
    alt: "林简思考并手持笔记本全身资产",
    width: 1122,
    height: 1402,
    anchor: "v1/r1 · 人物原型",
    change: "思考表情 + 空白笔记本 + 奶油底色",
    spec: "1122 × 1402 · alpha false",
    hash: "1897806e9cd8…87a409",
    qa: "PASS · 道具无文字，人物锁与实体底色契约一致",
    blockedQa: "BLOCKED · 初始文件四角 alpha 255，透明要求未满足",
    lineage: "brief → v1/r1(anchor) → r3 → alpha-rework → manifest-r6",
    statuses: ["planned", "waiting", "planned", "review", "blocked", "passed"]
  },
  {
    id: "r4",
    release: "v1 / r4",
    name: "讲解指向",
    form: "FULL BODY",
    channel: "PPT / 课程页",
    use: "重点指引",
    image: "../../assets/project-003-sample/lin-jian-explain-point-v1-r4.png",
    alt: "林简讲解指向全身资产",
    width: 1051,
    height: 1496,
    anchor: "v1/r1 · 人物原型",
    change: "讲解表情 + 单手指向 + 文案留白",
    spec: "1051 × 1496 · alpha false",
    hash: "ce2562b00fd9…42ae4d",
    qa: "PASS · 指向清楚、双鞋完整、无额外道具",
    lineage: "brief → v1/r1(anchor) → r4 → visual-qa → manifest-r6",
    statuses: ["planned", "waiting", "planned", "queued", "review", "passed"]
  },
  {
    id: "r5",
    release: "v1 / r5",
    name: "庆祝点赞",
    form: "FULL BODY",
    channel: "社群 / 反馈",
    use: "成功庆祝",
    image: "../../assets/project-003-sample/lin-jian-celebrate-v1-r5.png",
    alt: "林简庆祝点赞全身资产",
    width: 1051,
    height: 1496,
    anchor: "v1/r1 · 人物原型",
    change: "明亮微笑 + 单手点赞",
    spec: "1051 × 1496 · alpha false",
    hash: "9cdc8b6feb1d…e885778b",
    qa: "PASS · 手势可读、无彩纸和附加元素",
    lineage: "brief → v1/r1(anchor) → r5 → visual-qa → manifest-r6",
    statuses: ["planned", "waiting", "planned", "queued", "review", "passed"]
  },
  {
    id: "r6",
    release: "v1 / r6",
    name: "社交头像",
    form: "AVATAR",
    channel: "社交账号",
    use: "头像",
    image: "../../assets/project-003-sample/lin-jian-avatar-v1-r6.png",
    alt: "林简海军蓝圆形背景社交头像",
    width: 1254,
    height: 1254,
    anchor: "v1/r1 · 人物原型",
    change: "方形头肩构图 + 海军蓝圆形背景",
    spec: "1254 × 1254 · alpha false",
    hash: "a62c0a4161a0…5309ac51",
    qa: "PASS · 安全边距支持圆形裁切，脸与人物锁保持",
    lineage: "brief → v1/r1(anchor) → r6(channel-crop) → manifest-r6",
    statuses: ["planned", "waiting", "planned", "queued", "review", "passed"]
  }
];

const productionStatusLabels = {
  planned: "PLANNED",
  waiting: "WAITING",
  queued: "QUEUED",
  review: "IN REVIEW",
  blocked: "BLOCKED",
  passed: "PASSED"
};

const productionState = {
  step: 0,
  selectedAsset: "r1"
};

function setupProductionDemo() {
  const root = document.querySelector("#productionDemo");
  if (!root) return;

  const stageButtons = [...document.querySelectorAll("[data-production-step]")];
  const phaseCode = document.querySelector("#productionPhaseCode");
  const phaseState = document.querySelector("#productionPhaseState");
  const phaseTitle = document.querySelector("#production-phase-title");
  const phaseDescription = document.querySelector("#productionPhaseDescription");
  const phaseChecklist = document.querySelector("#productionPhaseChecklist");
  const progress = document.querySelector("#productionProgress");
  const progressLabel = document.querySelector("#productionProgressLabel");
  const previous = document.querySelector("#productionPrevious");
  const next = document.querySelector("#productionNext");
  const replay = document.querySelector("#productionReplay");
  const coverage = document.querySelector("#productionCoverage");
  const hint = document.querySelector("#productionRegistryHint");
  const generated = document.querySelector("#productionGenerated");
  const passed = document.querySelector("#productionPassed");
  const blocked = document.querySelector("#productionBlocked");
  const assetContainer = document.querySelector("#productionAssets");
  const traceStatus = document.querySelector("#traceStatus");
  const traceImage = document.querySelector("#traceImage");
  const traceRelease = document.querySelector("#traceRelease");
  const traceTitle = document.querySelector("#production-trace-title");
  const traceAssetForm = document.querySelector("#traceAssetForm");
  const traceAnchor = document.querySelector("#traceAnchor");
  const traceChange = document.querySelector("#traceChange");
  const traceSpec = document.querySelector("#traceSpec");
  const traceHash = document.querySelector("#traceHash");
  const traceQa = document.querySelector("#traceQa");
  const traceLineage = document.querySelector("#traceLineage");
  const assetButtons = new Map();

  for (const asset of productionAssetRegistry) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "production-asset";
    button.dataset.assetId = asset.id;
    button.setAttribute("aria-pressed", String(asset.id === productionState.selectedAsset));

    const image = document.createElement("img");
    image.src = asset.image;
    image.alt = "";
    image.width = asset.width;
    image.height = asset.height;
    image.loading = "lazy";

    const copy = document.createElement("span");
    copy.className = "production-asset-copy";
    const version = document.createElement("span");
    version.textContent = asset.release;
    const name = document.createElement("strong");
    name.textContent = asset.name;
    const usage = document.createElement("small");
    usage.textContent = `${asset.channel} · ${asset.use}`;
    const status = document.createElement("span");
    status.className = "production-asset-status";
    copy.append(version, name, usage, status);
    button.append(image, copy);

    button.addEventListener("click", () => {
      productionState.selectedAsset = asset.id;
      renderProductionDemo();
    });
    assetButtons.set(asset.id, { button, status });
    assetContainer.append(button);
  }

  function qaFor(asset, status) {
    if (status === "blocked") return asset.blockedQa || "BLOCKED · 等待修复";
    if (status === "passed") return asset.qa;
    if (status === "review") return "IN REVIEW · 等待人物、动作、规格与禁止项复核";
    if (status === "queued") return "QUEUED · 已有明确生成契约，等待独立调用";
    if (status === "waiting") return "WAITING · 人物已冻结，等待资产规划";
    return "PLANNED · 尚未进入生产与 QA";
  }

  function renderProductionDemo() {
    const stage = productionStages[productionState.step];
    const selected = productionAssetRegistry.find((asset) => asset.id === productionState.selectedAsset) || productionAssetRegistry[0];
    const selectedStatus = selected.statuses[productionState.step];

    stageButtons.forEach((button, index) => {
      if (index === productionState.step) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });

    phaseCode.textContent = stage.code;
    phaseState.textContent = stage.state;
    phaseState.className = stage.stateClass || "";
    phaseTitle.textContent = stage.title;
    phaseDescription.textContent = stage.description;
    phaseChecklist.replaceChildren(...stage.checklist.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    }));

    const stepNumber = productionState.step + 1;
    progress.style.setProperty("--progress", `${(stepNumber / productionStages.length) * 100}%`);
    progress.setAttribute("aria-valuenow", String(stepNumber));
    progressLabel.textContent = `${stepNumber} / ${productionStages.length}`;
    previous.disabled = productionState.step === 0;
    next.disabled = productionState.step === productionStages.length - 1;
    next.textContent = stage.next;

    coverage.textContent = stage.coverage;
    coverage.className = stage.stateClass || "";
    hint.textContent = stage.hint;
    [generated.textContent, passed.textContent, blocked.textContent] = stage.metrics.map(String);

    for (const asset of productionAssetRegistry) {
      const entry = assetButtons.get(asset.id);
      const status = asset.statuses[productionState.step];
      entry.button.dataset.status = status;
      entry.button.setAttribute("aria-pressed", String(asset.id === selected.id));
      entry.button.setAttribute("aria-label", `${asset.release} ${asset.name}，${productionStatusLabels[status]}，查看追踪`);
      entry.status.textContent = productionStatusLabels[status];
    }

    traceStatus.textContent = productionStatusLabels[selectedStatus];
    traceStatus.className = selectedStatus === "blocked" ? "is-blocked" : selectedStatus === "review" ? "is-review" : "";
    traceImage.src = selected.image;
    traceImage.alt = selected.alt;
    traceImage.width = selected.width;
    traceImage.height = selected.height;
    traceRelease.textContent = selected.release;
    traceTitle.textContent = selected.name;
    traceAssetForm.textContent = selected.form;
    traceAnchor.textContent = selected.anchor;
    traceChange.textContent = selected.change;
    traceSpec.textContent = selected.spec;
    traceHash.textContent = selected.hash;
    traceQa.textContent = qaFor(selected, selectedStatus);
    traceLineage.textContent = selected.lineage;
  }

  function setProductionStep(step, shouldFocus = false) {
    productionState.step = Math.max(0, Math.min(productionStages.length - 1, step));
    if (productionState.step === 4) productionState.selectedAsset = "r2";
    if (productionState.step === 5) productionState.selectedAsset = "r6";
    renderProductionDemo();
    if (shouldFocus) stageButtons[productionState.step].focus();
  }

  stageButtons.forEach((button, index) => {
    button.addEventListener("click", () => setProductionStep(index));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const offset = event.key === "ArrowRight" ? 1 : -1;
      setProductionStep((index + offset + stageButtons.length) % stageButtons.length, true);
    });
  });
  previous.addEventListener("click", () => setProductionStep(productionState.step - 1));
  next.addEventListener("click", () => setProductionStep(productionState.step + 1));
  replay.addEventListener("click", () => {
    productionState.selectedAsset = "r1";
    setProductionStep(0);
  });

  renderProductionDemo();
}

setupProductionDemo();

const styleMatrixProfiles = {
  "IP-01": {
    styleVersion: "s4",
    releaseVersion: "r2",
    name: "简笔涂鸦头像",
    use: "头像 / 表情贴纸",
    packState: "2 READY · 1 BLOCKED",
    stateTone: "blocked",
    routing: "IP-01 用最少线条建立高频头像和半身表情；全身不是其能力范围，应切换到 IP-03 或 IP-04。",
    qaState: "PASS · ROUTED",
    qaTone: "review",
    identityQa: "PASS",
    identityNote: "圆眼镜、黑色中长发、圆脸和珊瑚领口在简化后仍可识别为林简 v1。",
    styleQa: "PASS",
    styleNote: "柔软黑线、手绘断点、暖白与珊瑚单色点缀成立；没有复杂背景和多余道具。",
    taskQa: "2/3 ROUTED",
    taskNote: "头像与挥手半身贴纸可交付；全身请求按能力规范阻塞并路由。",
    evidence: "头像直接生成；贴纸首轮烘焙棋盘格，背景提取后为真实 alpha。全身没有为填满矩阵而强行生成。",
    assets: [
      {
        slot: "PORTRAIT",
        status: "ready",
        title: "涂鸦头像",
        meta: "avatar · v1/s4/r1",
        src: "../../assets/project-003-style-matrix/lin-jian-ip01-avatar-v1-s4-r1.png",
        alt: "林简 v1 的 IP-01 简笔涂鸦头像",
        width: 1254,
        height: 1254,
        alpha: false
      },
      {
        slot: "STICKER",
        status: "ready",
        title: "挥手贴纸",
        meta: "bust_sticker · v1/s4/r2",
        src: "../../assets/project-003-style-matrix/lin-jian-ip01-bust-sticker-v1-s4-r2.png",
        alt: "林简 v1 的 IP-01 简笔涂鸦透明半身贴纸",
        width: 1385,
        height: 1136,
        alpha: true
      },
      {
        slot: "FULL BODY",
        status: "blocked",
        title: "全身立绘",
        meta: "能力规范拒绝，而不是让模型碰运气。",
        route: "→ IP-03 / IP-04"
      }
    ]
  },
  "IP-02": {
    styleVersion: "s2",
    releaseVersion: "r3",
    name: "清透扁平肖像",
    use: "品牌肖像包",
    packState: "2 READY · 1 CONDITIONAL",
    stateTone: "review",
    routing: "IP-02 的头像与封面是主能力；全身可以生成，但必须明确标记 CONDITIONAL 并加强人物和裁切验收。",
    qaState: "PASS · CONDITIONAL",
    qaTone: "review",
    identityQa: "PASS",
    identityNote: "三张图保留圆脸、黑色中长发、圆眼镜、珊瑚上衣与藏蓝裤装。",
    styleQa: "PASS",
    styleNote: "大色块、简化五官、轻描边和品牌色背景成立；少量柔和明暗被记录为样例边界。",
    taskQa: "2 READY · 1 CONDITIONAL",
    taskNote: "头像与封面可直接使用；全身双脚完整，但不是该风格的首选能力。",
    evidence: "三张新增 PNG 均由林简 v1/r1 锚点生成；只使用上游文字风格规则，没有输入上游风格图片。",
    assets: [
      {
        slot: "PORTRAIT",
        status: "ready",
        title: "品牌头像",
        meta: "avatar · v1/s2/r1",
        src: "../../assets/project-003-style-matrix/lin-jian-ip02-avatar-v1-s2-r1.png",
        alt: "林简 v1 的 IP-02 清透扁平品牌头像",
        width: 1254,
        height: 1254,
        alpha: false
      },
      {
        slot: "FULL BODY",
        status: "conditional",
        title: "条件全身",
        meta: "full_body · v1/s2/r2",
        src: "../../assets/project-003-style-matrix/lin-jian-ip02-full-body-v1-s2-r2.png",
        alt: "林简 v1 的 IP-02 清透扁平全身条件资产",
        width: 1122,
        height: 1402,
        alpha: false
      },
      {
        slot: "CONTENT CARD",
        status: "ready",
        title: "课程封面",
        meta: "cover_card · v1/s2/r3",
        src: "../../assets/project-003-style-matrix/lin-jian-ip02-cover-v1-s2-r3.png",
        alt: "林简 v1 的 IP-02 清透扁平课程封面卡",
        width: 1086,
        height: 1448,
        alpha: false
      }
    ]
  },
  "IP-03": {
    styleVersion: "s5",
    releaseVersion: "r2",
    name: "粉蜡笔撞色肖像",
    use: "高能头像 / 动作贴纸",
    packState: "2 READY · 1 BLOCKED",
    stateTone: "blocked",
    routing: "IP-03 适合用高饱和蜡笔色块制造头像和动作贴纸；换装体系不是它的任务，应路由 IP-04。",
    qaState: "PASS · NOTE",
    qaTone: "review",
    identityQa: "PASS",
    identityNote: "大头比例与高饱和处理没有改变圆眼镜、黑色发型、珊瑚上衣和藏蓝裤装的人物锁。",
    styleQa: "PASS",
    styleNote: "钴蓝、珊瑚与暖黄的粉蜡笔色块、干擦断面和颗粒感成立。",
    taskQa: "2/3 ROUTED",
    taskNote: "头像和全身动作贴纸完成；透明贴纸外沿仍有轻微半透明过渡，登记为回归注记；换装请求被阻塞。",
    evidence: "全身贴纸首轮烘焙棋盘格；首轮背景提取获得真实 alpha，但保留轻微外沿。两次复清重新烘焙棋盘格，均拒绝并保存。",
    assets: [
      {
        slot: "PORTRAIT",
        status: "ready",
        title: "撞色头像",
        meta: "avatar · v1/s5/r1",
        src: "../../assets/project-003-style-matrix/lin-jian-ip03-avatar-v1-s5-r1.png",
        alt: "林简 v1 的 IP-03 粉蜡笔撞色头像",
        width: 1254,
        height: 1254,
        alpha: false
      },
      {
        slot: "FULL BODY",
        status: "ready",
        title: "马克笔贴纸",
        meta: "full_body_sticker · v1/s5/r2",
        src: "../../assets/project-003-style-matrix/lin-jian-ip03-full-body-sticker-v1-s5-r2.png",
        alt: "林简 v1 的 IP-03 粉蜡笔透明全身马克笔贴纸",
        width: 1024,
        height: 1536,
        alpha: true
      },
      {
        slot: "OUTFIT SYSTEM",
        status: "blocked",
        title: "换装变体",
        meta: "能力规范拒绝，而不是让模型碰运气。",
        route: "→ IP-04"
      }
    ]
  },
  "IP-04": {
    styleVersion: "s1",
    releaseVersion: "r6",
    name: "彩铅换装小人",
    use: "全身资产包",
    packState: "2 READY · 1 BLOCKED",
    stateTone: "blocked",
    routing: "IP-04 擅长全身与换装；场景卡不应勉强生成，而应路由到 IP-05。",
    qaState: "PASS",
    qaTone: "pass",
    identityQa: "PASS",
    identityNote: "圆脸、黑色中长发、圆眼镜与标志服装保持 v1。",
    styleQa: "PASS",
    styleNote: "彩铅颗粒、柔灰轮廓、完整全身与低饱和配色成立。",
    taskQa: "2/3 ROUTED",
    taskNote: "头像和全身通过；场景卡按能力规范路由到 IP-05。",
    evidence: "复用已发布的 v1/r1 与 v1/r6；没有为了填满矩阵而生成不支持的场景卡。",
    assets: [
      {
        slot: "PORTRAIT",
        status: "ready",
        title: "社交头像",
        meta: "avatar · v1/s1/r6",
        src: "../../assets/project-003-sample/lin-jian-avatar-v1-r6.png",
        alt: "林简 v1 的 IP-04 彩铅风格社交头像",
        width: 1254,
        height: 1254,
        alpha: false
      },
      {
        slot: "FULL BODY",
        status: "ready",
        title: "全身原型",
        meta: "full_body · v1/s1/r1",
        src: "../../assets/project-003-sample/lin-jian-anchor-v1-r1.png",
        alt: "林简 v1 的 IP-04 彩铅风格全身原型",
        width: 1060,
        height: 1484,
        alpha: true
      },
      {
        slot: "CONTENT CARD",
        status: "blocked",
        title: "场景卡",
        meta: "能力规范拒绝，而不是让模型碰运气。",
        route: "→ IP-05"
      }
    ]
  },
  "IP-05": {
    styleVersion: "s3",
    releaseVersion: "r3",
    name: "治愈手帐小剧场",
    use: "贴纸 / 微场景",
    packState: "3 READY · 0 BLOCKED",
    stateTone: "pass",
    routing: "IP-05 把人物放入轻量叙事情境；贴纸要求真实透明，场景只保留一个可读故事中心。",
    qaState: "PASS · NOTE",
    qaTone: "review",
    identityQa: "PASS",
    identityNote: "三张图保留人物锁、服装色板和圆眼镜，风格变化没有创建新人物。",
    styleQa: "PASS",
    styleNote: "手绘细线、纸张铅笔质感、克制配色和大面积留白成立。",
    taskQa: "3/3 PASS",
    taskNote: "两张贴纸为真实 alpha；场景任务可读，桌面细节复杂度被记录为下一轮回归项。",
    evidence: "首轮两张贴纸因烘焙棋盘格被阻塞；背景提取后角点 alpha 接近或等于 0，失败文件仍保留。",
    assets: [
      {
        slot: "PORTRAIT",
        status: "ready",
        title: "挥手贴纸",
        meta: "bust_sticker · v1/s3/r1",
        src: "../../assets/project-003-style-matrix/lin-jian-ip05-bust-sticker-v1-s3-r1.png",
        alt: "林简 v1 的 IP-05 手帐风格透明半身挥手贴纸",
        width: 1235,
        height: 1274,
        alpha: true
      },
      {
        slot: "FULL BODY",
        status: "ready",
        title: "笔记贴纸",
        meta: "full_body_sticker · v1/s3/r2",
        src: "../../assets/project-003-style-matrix/lin-jian-ip05-full-body-sticker-v1-s3-r2.png",
        alt: "林简 v1 的 IP-05 手帐风格透明全身笔记贴纸",
        width: 1024,
        height: 1536,
        alpha: true
      },
      {
        slot: "CONTENT CARD",
        status: "ready",
        title: "备课小剧场",
        meta: "scene_card · v1/s3/r3",
        src: "../../assets/project-003-style-matrix/lin-jian-ip05-scene-v1-s3-r3.png",
        alt: "林简 v1 的 IP-05 手帐风格备课微场景卡",
        width: 1122,
        height: 1402,
        alpha: false
      }
    ]
  },
  "IP-06": {
    styleVersion: "s6",
    releaseVersion: "r3",
    name: "粗线撞色漫画",
    use: "营销头像 / 贴纸 / 封面",
    packState: "3 READY · 0 BLOCKED",
    stateTone: "pass",
    routing: "IP-06 用粗黑轮廓和高饱和色块制造传播冲击，优先服务头像、半身贴纸和营销封面。",
    qaState: "PASS",
    qaTone: "pass",
    identityQa: "PASS",
    identityNote: "三张图保持圆眼镜、圆脸、强黑发型轮廓和珊瑚上衣，动作变化没有升级 character v1。",
    styleQa: "PASS",
    styleNote: "统一粗黑轮廓、实心黑发块、黄蓝珊瑚撞色和硬边图形成立。",
    taskQa: "3/3 PASS",
    taskNote: "头像、讲解贴纸和 3:4 营销封面均完成；封面保留空白标题区且没有生成伪文字。",
    evidence: "贴纸首轮烘焙棋盘格；背景提取后为真实 alpha。封面与头像为实体背景，均无文字和外部参考图。",
    assets: [
      {
        slot: "PORTRAIT",
        status: "ready",
        title: "漫画头像",
        meta: "avatar · v1/s6/r1",
        src: "../../assets/project-003-style-matrix/lin-jian-ip06-avatar-v1-s6-r1.png",
        alt: "林简 v1 的 IP-06 粗线撞色漫画头像",
        width: 1254,
        height: 1254,
        alpha: false
      },
      {
        slot: "STICKER",
        status: "ready",
        title: "重点讲解贴纸",
        meta: "bust_sticker · v1/s6/r2",
        src: "../../assets/project-003-style-matrix/lin-jian-ip06-bust-sticker-v1-s6-r2.png",
        alt: "林简 v1 的 IP-06 粗线撞色透明半身讲解贴纸",
        width: 1284,
        height: 1225,
        alpha: true
      },
      {
        slot: "CONTENT CARD",
        status: "ready",
        title: "营销封面",
        meta: "cover_card · v1/s6/r3",
        src: "../../assets/project-003-style-matrix/lin-jian-ip06-cover-v1-s6-r3.png",
        alt: "林简 v1 的 IP-06 粗线撞色竖版营销封面",
        width: 1086,
        height: 1448,
        alpha: false
      }
    ]
  }
};

function setupStyleMatrix() {
  const root = document.querySelector("#styleMatrix");
  if (!root) return;

  const buttons = Array.from(root.querySelectorAll("[data-matrix-style]"));
  const panel = root.querySelector("#styleMatrixPanel");
  const assetGrid = root.querySelector("#matrixAssetGrid");
  const profileCode = root.querySelector("#matrixProfileCode");
  const profileTitle = root.querySelector("#matrix-assets-title");
  const profileUse = root.querySelector("#matrixProfileUse");
  const packState = root.querySelector("#matrixPackState");
  const routingNote = root.querySelector("#matrixRoutingNote");
  const qaState = root.querySelector("#matrixQaState");
  const identityQa = root.querySelector("#matrixIdentityQa");
  const identityNote = root.querySelector("#matrixIdentityNote");
  const styleQa = root.querySelector("#matrixStyleQa");
  const styleNote = root.querySelector("#matrixStyleNote");
  const taskQa = root.querySelector("#matrixTaskQa");
  const taskNote = root.querySelector("#matrixTaskNote");
  const evidenceNote = root.querySelector("#matrixEvidenceNote");
  const styleVersion = document.querySelector("#matrixStyleVersion");
  const releaseVersion = document.querySelector("#matrixReleaseVersion");

  buttons.forEach((button, index) => {
    button.id = `matrix-style-${index + 1}`;
    button.setAttribute("tabindex", button.getAttribute("aria-selected") === "true" ? "0" : "-1");
  });

  function renderAsset(asset) {
    const card = document.createElement("article");
    card.className = `matrix-asset-card${asset.status === "blocked" ? " matrix-asset-card--blocked" : ""}`;
    card.dataset.capability = asset.status;
    card.dataset.alpha = String(Boolean(asset.alpha));

    if (asset.status === "blocked") {
      const blocked = document.createElement("div");
      blocked.className = "matrix-blocked-mark";
      blocked.setAttribute("aria-hidden", "true");
      const label = document.createElement("b");
      label.textContent = "BLOCKED";
      const route = document.createElement("span");
      route.textContent = asset.route;
      blocked.append(label, route);
      card.append(blocked);
    } else {
      const preview = document.createElement("div");
      preview.className = `matrix-image${asset.alpha ? " matrix-image--transparent" : ""}`;
      const image = document.createElement("img");
      image.src = asset.src;
      image.alt = asset.alt;
      image.width = asset.width;
      image.height = asset.height;
      image.loading = "lazy";
      preview.append(image);
      card.append(preview);
    }

    const copy = document.createElement("div");
    const status = document.createElement("span");
    status.textContent = `${asset.slot} · ${asset.status.toUpperCase()}`;
    const title = document.createElement("h4");
    title.textContent = asset.title;
    const meta = document.createElement("p");
    meta.textContent = asset.meta;
    copy.append(status, title, meta);
    card.append(copy);
    return card;
  }

  function applyTone(element, tone) {
    element.classList.toggle("is-blocked", tone === "blocked");
    element.classList.toggle("is-review", tone === "review");
  }

  function selectStyle(styleId, shouldFocus = false) {
    const profile = styleMatrixProfiles[styleId];
    const activeButton = buttons.find((button) => button.dataset.matrixStyle === styleId);
    if (!profile || !activeButton) return;

    buttons.forEach((button) => {
      const selected = button === activeButton;
      button.setAttribute("aria-selected", String(selected));
      button.setAttribute("tabindex", selected ? "0" : "-1");
    });
    panel.setAttribute("aria-labelledby", activeButton.id);
    profileCode.textContent = `${profile.styleVersion} · ${styleId}`;
    profileTitle.textContent = profile.name;
    profileUse.textContent = profile.use;
    packState.textContent = profile.packState;
    routingNote.textContent = profile.routing;
    qaState.textContent = profile.qaState;
    identityQa.textContent = profile.identityQa;
    identityNote.textContent = profile.identityNote;
    styleQa.textContent = profile.styleQa;
    styleNote.textContent = profile.styleNote;
    taskQa.textContent = profile.taskQa;
    taskNote.textContent = profile.taskNote;
    evidenceNote.textContent = profile.evidence;
    styleVersion.textContent = `style ${profile.styleVersion}`;
    releaseVersion.textContent = `release ${profile.releaseVersion}`;
    applyTone(packState, profile.stateTone);
    applyTone(qaState, profile.qaTone);
    assetGrid.replaceChildren(...profile.assets.map(renderAsset));
    if (shouldFocus) activeButton.focus();
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => selectStyle(button.dataset.matrixStyle));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (["ArrowDown", "ArrowRight"].includes(event.key)) nextIndex = (index + 1) % buttons.length;
      if (["ArrowUp", "ArrowLeft"].includes(event.key)) nextIndex = (index - 1 + buttons.length) % buttons.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = buttons.length - 1;
      selectStyle(buttons[nextIndex].dataset.matrixStyle, true);
    });
  });

  selectStyle("IP-04");
}

setupStyleMatrix();
