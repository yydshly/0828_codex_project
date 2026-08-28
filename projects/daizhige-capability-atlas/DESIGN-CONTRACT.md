# Project 004 · Delivery record

## Design contract

```text
Entry mode: Revision-led project closure inside the existing research library
Request revision: 2
Target user and context: 未来遇到古籍检索、古籍阅读、历史知识、文化内容或古汉语 AI 产品时，需要快速判断「殆知阁」是否值得重新启用的人；从 0828 研究总库进入，先看归档结论，再按需查阅能力、书目与边界。
Desired first impression: 研究已经结束并归档；它不是当前研发主线，而是一份经过仓库树核对的候选资料源档案，仅在相关产品出现时按需启用。
Visual ambition: Editorial
Experience architecture: Editorial Flow
Visual constraints: 延续研究库深色、低噪、证据优先的视觉语言；Project 004 使用档案青与纸张米色作为识别色；不使用外部图片、字体或运行时服务。
Information constraints: 首屏明确“已归档、按需启用、候选资料源、未保存正文镜像”；区分原仓库已有能力、维护版新增能力、条件性扩展能力与不具备的能力；覆盖十大门类、文件数、代表书目、原理、触发场景、对我们的价值、限制、授权与当前维护状态；代表书目必须来自实际仓库路径，不能暗示为完整目录。
Operation constraints: 正文在无 JavaScript 时仍可完成核心阅读；书目筛选、关键词过滤、能力层切换、章节导航和回到顶部为渐进增强；所有筛选按钮支持键盘操作并公开当前结果数量。
State constraints: 全部门类、单一门类、关键词命中、无结果、原生能力、增强能力与边界状态均有可理解反馈；筛选后结果标题和数量同步更新。
Environment constraints: 零外部依赖静态页面；进入现有 GitHub Pages 构建；支持桌面、平板和 390px 手机；单一深色主题；尊重 reduced-motion；不下载或复制上游 4.8 GiB 语料。
Primary journey: 从“已归档、仅在相关产品出现时作为候选资料源启用”这一判断进入，快速了解它保存什么、何时值得调用、对我们有什么价值，再按需查阅能力分层、代表书目、边界与重新启动条件。
User-defined phases: 暂停继续研究；总结项目；描述对我们的价值；汇总并提交远端；部署 GitHub Pages。
Required artifacts: 更新后的 Project 004 研究 README、设计契约、专题页结项判断与价值说明、首页归档状态、静态检查、真实浏览器检查与证据截图、全库构建验证、Git 提交、远端推送与 GitHub Pages 在线地址。
Autonomy authorization: 用户明确要求总结、汇总、提交远端并部署 GitHub Pages；允许直接修改、验证、提交和推送本项目范围内文件。
User-decision boundary: 不下载或镜像上游语料，不建立外部数据库或真实搜索后端，不扩展新的古籍研究，不代替用户确定商业授权策略，不声称抽样书目等于完整书目；保留并不提交与 Project 004 无关的现有工作区改动。
Observable completion criteria: 总库可进入 Project 004；首屏明确显示“已归档、按需启用、候选资料源、未保存正文镜像”；页面完整说明触发条件、当前价值、未来价值、能力、十大门类、代表书目和边界；类别与关键词筛选保持正确；桌面、平板、390px 无溢出；键盘可操作；reduced-motion 生效；静态检查、浏览器检查、全库测试和 Pages 构建通过；Project 004 范围文件提交并推送；GitHub Pages 公开地址返回成功。
```

## Design direction

| 决策 | 方向 | 可观察约束 | 验收标准 |
| --- | --- | --- | --- |
| 首屏层级 | “已归档、按需启用的候选资料源”先于规模数字和扩展想象 | 归档状态、角色、触发条件和无正文镜像边界在首屏或紧邻首屏出现 | 不依赖颜色即可读出当前决策和重新启用条件 |
| 阅读路径 | 结项判断 → 能力层 → 门类书目 → 原理 → 触发场景 → 对我们的价值 → 条件路线 → 边界 | 章节导航与连续编号一致 | 任一问题都能从导航直接定位 |
| 书目表达 | 十大门类作为可筛选档案柜 | 每个条目显示门类、书名、路径语义与用途提示 | 筛选、搜索、空状态和结果数一致 |
| 证据边界 | 审计事实、维护版事实、推断建议分开 | 页面明确文件数不等于独立书种数 | 不把抽样、目录层级或维护版能力误写成原仓已有能力 |
| 视觉语言 | 深色档案室基底、青色索引、米色纸张提示 | 不引入图片依赖，信息对比清楚 | 视觉装饰不遮挡正文或控件 |
| 响应式 | 宽屏双栏与矩阵，窄屏单列和横向可滚动导航 | 390px 无页面级横向溢出 | 筛选器、书目卡和来源链接均可用 |
| 动效 | 仅解释筛选与悬停状态 | reduced-motion 取消非必要过渡和平滑滚动 | 信息不依赖动画出现 |

## Coverage manifest

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 暂停继续研究 | 首屏与总结明确已归档、按需启用、未保存正文镜像 | 首屏、结项判断、README | DOM 文本、截图、文件检查 | 2–3 | pass | 首屏与结项摘要已统一显示归档决定 |
| 总结项目 | 汇总能力、门类、书目、原理、适用与不适用边界 | 专题页与 README | DOM、文件检查 | 3 | pass | 既有审计结论保留并补充结项摘要 |
| 描述我们的价值 | 区分当前价值、条件价值、触发条件和不投入事项 | 场景、意义、路线章节 | DOM、截图 | 3–5 | pass | 扩展路线已明确降为需求触发后的条件路线 |
| 保留交互 | 十大门类、61 个代表路径、筛选、关键词与空结果保持可用 | 全部、分类、关键词、空结果 | 浏览器交互、DOM | 4–6 | pass | 浏览器完整交互路径 25/25 通过 |
| 研究库接入 | 总库卡片、首页状态、README、项目数据均显示归档定位 | 首页与仓库文件 | 浏览器导航、构建输出 | 1、9 | pass | 总库卡片、首页和 README 已同步归档定位 |
| 跨表面验收 | 桌面、平板、390px、键盘、reduced-motion | 关键路径与筛选状态 | 浏览器检查、截图 | 7–8 | pass | 三视口无溢出，键盘与 reduced-motion 通过 |
| 自动检查 | Project 004 静态检查、全库测试与 Pages 构建 | Node 与构建脚本 | 命令输出 | 9 | pass | 工作区与精确暂存快照均通过测试和 Pages 构建 |
| 远端发布 | 仅提交 Project 004 范围文件并推送，GitHub Pages 可访问 | Git、Actions、线上 URL | commit、push、workflow、HTTP 与 DOM | 9 | continue | 验证后精确暂存、提交、推送并检查部署 |

## Runtime record

- 验证时间：2026-08-28（Asia/Shanghai）
- 构建命令：`npm run build:pages`，通过；输出为 `.pages-dist`。
- 静态检查：`npm run test:project-004`，23/23 通过。
- 全库回归：`npm run test:all`，Project 001–004 全部通过。
- 本地地址：`http://127.0.0.1:4173/projects/daizhige-capability-atlas/`。
- 浏览器运行：复用已在 `127.0.0.1:4173` 运行的 canonical Pages server；页面返回 200，控制台与页面错误为零，运行时没有外部资源请求。
- 浏览器自动化：`agent-browser` CLI 当前不可用，使用 Codex workspace bundled Playwright 作为可运行替代，通过 `NODE_PATH` 临时解析；未向项目增加依赖。
- 交互检查：原生/维护/扩展能力层点击与键盘切换；全部 61 条、史藏 7 条、子藏 6 条、易藏 6 条；关键词、本草纲目单条命中、空结果、清除与 Escape 状态均通过。
- 视口检查：1440 × 1000、820 × 1180、390 × 844 的 `scrollWidth` 均等于 `clientWidth`，无页面级横向溢出。
- reduced-motion：浏览器计算 `html` 的 `scroll-behavior` 为 `auto`。
- 证据截图：`assets/project-004-desktop.png`、`assets/project-004-catalog.png`、`assets/project-004-mobile.png`；桌面与手机首屏均显示归档、按需启用和无正文镜像边界。
