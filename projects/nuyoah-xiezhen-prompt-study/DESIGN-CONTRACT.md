# Project 005 · Delivery record

## Design contract

```text
Entry mode: Revision-led capability proof layered onto the existing Project 005 research subproject
Request revision: 2
Target user and context: 我们的视觉 Skill、内容生产与生成式资产团队；从研究总库进入，需要快速判断 nuyoah-xiezhen-prompt 的真实能力、底层机制、适用边界和是否值得借鉴。
Desired first impression: 第一眼直接看到六张真实生成样例，再理解这是“提示词生成图片”的工程化控制层；样例展示能力而不把它误解成新的图像模型。
Visual ambition: Editorial
Experience architecture: Editorial Flow
Visual constraints: 延续研究库深色、证据优先的语言；Project 005 使用摄影接触表式黑灰底、曝光青与安全黄作为识别色；允许且只使用本项目生成并落盘的写真样例，不使用外部字体或运行时服务；装饰与真实生成结果必须明确区分。
Information constraints: 必须覆盖能力、原理、使用场景、能力边界、扩展方向和对我们的意义；明确公开版是 Agent Skill 而非模型、LoRA、换脸或独立生图引擎；每张样例展示完整提示词、能力标签、生成方式和人工 QA，且标注为 Project 005 实测而非上游官方结果；记录审计版本与证据来源。
Operation constraints: 核心研究结论在无 JavaScript 时仍可阅读；真实样例库可按雨亭、奶油棚拍、Y2K 直闪筛选并展开完整 Prompt；能力工作台作为渐进增强，允许切换任务模式、摄影参考、人物身份职责和新机位，实时展示意图路由、参考职责、Prompt 编译结果与质量门禁；支持复制输出、重置和键盘操作。
State constraints: 样例库全部/雨亭/奶油棚拍/Y2K 直闪四种筛选状态与详情展开；详细提示词、系列变体、摄影方案复拍三种工作台模式；三套内置摄影参考；有/无人物身份图；原机位/俯拍/低机位；图片加载失败降级、复制成功反馈与无脚本说明均可理解。
Environment constraints: 零外部依赖静态页面；进入现有 GitHub Pages 构建；支持桌面、平板和 390px 手机；单一深色主题；尊重 reduced-motion；构建期使用内置 imagegen 生成样例并保存为项目本地资产，运行时不调用 LLM、生图 API、Eagle 或远程服务。
Primary journey: 先读“一句话判断”，紧接着浏览六张真实生成样例并按风格筛选、查看完整 Prompt，再操作能力工作台理解同一输入如何经过路由、职责分配、光照拓扑和质量门禁变成 Prompt，随后查看适用场景、扩展路线和对我们的行动建议。
User-defined phases: 新建子项目；研究该库；演示该库能力；说明使用场景；说明可扩展方向；说明对我们的意义；根据仓库提示词建立真实样例演示库，让能力可直接观看。
Required artifacts: Project 005 研究 README、设计契约、交互专题页、六张跨三种摄影 DNA 的真实生成样例、样例清单/完整 Prompt/QA 记录、可筛选样例库、确定性能力模拟器、研究总库卡片与索引、封面 SVG、静态检查、真实浏览器检查、桌面/样例/工作台/手机证据截图、全库测试和 Pages 构建验证。
Autonomy authorization: 用户明确要求新建子项目并完成研究与演示；允许直接创建和修改该子项目及必要的研究总库索引、构建和测试入口。
User-decision boundary: 不安装或改写上游 Skill，不上传人物或参考图片；使用原创成年虚构人物作为生成样例，不做人脸复刻；不提交、推送或部署远端，不把 Project 005 实测描述成上游官方运行结果，不编造评分或效果指标，不覆盖与 Project 005 无关的现有工作区改动。
Observable completion criteria: 总库可进入 Project 005；首屏明确“仍是提示词控制层”；样例库至少包含三种摄影 DNA、每种两个机位/事件变体，共六张项目本地真实生成图，每张有完整 Prompt、能力标签、生成方式和人工 QA；工作台至少覆盖三模式、三参考、身份职责与机位变化并生成可复制结果；页面完整说明能力、原理、场景、扩展、意义与边界；1440、820、390px 无横向溢出；关键路径可键盘操作；reduced-motion 生效；静态检查、浏览器检查、全库测试和 Pages 构建通过；没有外部运行资源和控制台错误。
```

## Design direction

| 决策 | 方向 | 可观察约束 | 验收标准 |
| --- | --- | --- | --- |
| 首屏判断 | “提示词工程化控制层”先于功能清单 | 标题、导语与能力边界共同出现 | 第一屏不会让人误解为新模型或生图引擎 |
| 演示核心 | 真实生成接触表 + 确定性摄影 Prompt 编译台 | 六张结果、完整 Prompt、标签、QA 与编译中间层前后关联 | 先能直接比较成片，再能追溯控制变量与路由逻辑 |
| 证据边界 | 公开事实、研究判断、Project 005 实测与概念编译分别标注 | 样例区持续显示“项目实测 / 非上游官方”，工作台显示“确定性模拟器” | 页面不把样例冒充上游官方结果，不展示伪造效果指标 |
| 阅读路径 | 判断 → 真实样例 → 工作台 → 能力 → 原理 → 场景 → 扩展 → 意义 → 边界 | 章节导航和连续编号一致 | 核心问题可直接定位，也可顺序阅读 |
| 视觉语言 | 摄影接触表、曝光标记、规则编译器 | 高对比深色基底，青色表示机制，黄色表示边界 | 装饰不遮挡正文、状态或控件 |
| 响应式 | 宽屏双栏工作台、窄屏顺序流 | 390px 无页面级横向溢出 | 选择器、输出、复制按钮与导航均可操作 |
| 动效 | 只解释状态变化与阅读进度 | reduced-motion 关闭平滑滚动和非必要过渡 | 信息不依赖动画出现 |

## Coverage manifest

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 新建子项目 | 建立 Project 005 研究目录和专题页 | 仓库文件、总库入口 | 文件、构建、浏览器导航 | 0–1、9 | pass | 项目目录、专题页、总库卡片与首页最新入口均已建立 |
| 研究该库 | 固定版本并说明能力、机制与边界 | README、判断、能力、原理、边界 | 文件检查、DOM | 3、9 | pass | 已固定 1.1.0 / 7482a14 并形成证据化研究档案 |
| 演示能力 | 三模式、三参考、身份职责、机位和质量门禁 | 工作台默认与切换状态 | 浏览器交互、截图、DOM | 4–6 | pass | 确定性能力模拟器全路径浏览器检查通过 |
| 真实样例库 | 三种摄影 DNA 各两个机位/事件变体，附完整 Prompt 与 QA | 全部/雨亭/奶油棚拍/Y2K 筛选与详情 | 本地图片、样例清单、浏览器图片加载与交互 | 3–8 | pass | 六张 1122 × 1402 本地样例、完整 Prompt、哈希、人工 QA、筛选、展开与复制均已交付 |
| 使用场景 | 区分适合、条件适合和不适合 | 场景矩阵 | DOM、截图 | 3 | pass | HIGH FIT、CONDITIONAL、NOT A FIT 三层已交付 |
| 可扩展方向 | 给出从 Prompt Skill 到生产系统的分层路线 | 扩展路线 | DOM、文件检查 | 3 | pass | P0–P4 路线已交付 |
| 对我们的意义 | 给出可借鉴、不可高估和下一步建议 | 意义与行动建议 | DOM、文件检查 | 3 | pass | 已给出工程借鉴、保留边界和真实 A/B 建议 |
| 跨表面验收 | 桌面、平板、390px、样例筛选/展开、键盘、复制反馈、reduced-motion | 关键路径与状态 | 浏览器检查、截图 | 7–8 | pass | 32/32 浏览器检查通过，六图加载、三视口、样例交互和工作台全路径通过 |
| 自动检查 | Project 005 静态检查、全库测试与 Pages 构建 | Node 与构建脚本 | 命令输出 | 9 | pass | 静态 33/33、全库回归、Pages 构建与本地 HTTP 200 全部通过 |

## Runtime record

- 当前阶段：Revision 2 / Stage 9，真实样例库与研究交付闭合。
- 审计对象：`nuyoah-ai-works/nuyoah-xiezhen-prompt`，公开版 `1.1.0`。
- 审计提交：`7482a14`（公开仓库 `main`，访问于 2026-08-28）。
- 验证时间：2026-08-29（Asia/Shanghai）。
- 构建命令：`npm run build:pages`，通过；输出为 `.pages-dist`。
- 静态检查：`npm run test:project-005`，33/33 通过；逐个校验六张项目资产与站点资产的 SHA-256。
- 全库回归：`npm run test:all`，Project 001–005 全部通过。
- 本地地址：`http://127.0.0.1:4173/projects/nuyoah-xiezhen-prompt-study/`，返回 200。
- 浏览器自动化：优先尝试 `agent-browser`，当前环境未提供该 CLI；改用 Codex workspace bundled Playwright 完成等价真实浏览器验证，未向项目增加依赖。
- 真实样例：雨亭欠曝、奶油柔雾棚拍、Y2K CCD 直闪三套摄影 DNA，每套平视/近景基准与低机位/俯拍/广角变体，共六张 1122 × 1402 PNG；使用内置 imagegen 生成，模型版本未由工具公开。
- 样例记录：`experiments/sample-library/sample-manifest-v1.json` 保存完整 Prompt、能力标签、尺寸、文件路径、SHA-256、人工 QA 与局限；样例为 Project 005 实测，不是上游官方输出或跨模型指标。
- 交互检查：全部/雨亭/奶油棚拍/Y2K 筛选、Prompt 展开与复制、原图打开；详细 Prompt、系列变体、摄影方案复拍；人物身份开关；俯拍拓扑；键盘模式切换；复制反馈与质量待验收状态均通过。
- 视口检查：1440 × 1000、820 × 1180、390 × 844 的 `scrollWidth` 均等于 `clientWidth`，无页面级横向溢出。
- reduced-motion：浏览器计算 `html` 的 `scroll-behavior` 为 `auto`。
- 运行时边界：没有外部资源请求，没有 LLM 或图片 API 调用，控制台与页面错误为零。
- 浏览器检查：32/32 通过；六张图片完成本地加载与尺寸校验。
- 证据截图：`assets/project-005-desktop.png`、`assets/project-005-samples.png`、`assets/project-005-lab.png`、`assets/project-005-samples-mobile.png`、`assets/project-005-mobile.png`。
- 终端审计：所有覆盖项均为 `pass`；未执行用户未授权的提交、推送或远端部署。
