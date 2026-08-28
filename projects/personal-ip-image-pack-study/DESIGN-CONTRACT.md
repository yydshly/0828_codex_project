# Project 003 · Delivery record

## Design contract

```text
Entry mode: Revision-led implementation（在完整个人 IP 生产流程上增加真实跨风格资产矩阵）
Request revision: 5
Target user and context: 团队成员、未来合作者与希望把一次性 AI 生图升级为长期角色资产系统的人；从公开研究总库进入，先操作实验台，再阅读研究结论。
Desired first impression: 不只看到“同一人物能持续追加”，还可直接比较同一人物进入六种视觉系统后，身份、风格、资产能力与版本如何分别受控，并看到不支持能力被明确阻塞。
Visual ambition: Editorial
Experience architecture: Editorial Flow
Visual constraints: 延续研究库深色、低噪、证据优先的语言；Project 003 使用珊瑚橙和粉紫作为识别色；保留参数化 SVG/CSS 机制实验台，新增的真实样例只使用本项目生成的虚构人物，不复制上游参考图。
Information constraints: 覆盖目标、价值、业务场景、人物锁、资产清单、真实生成样例、流程状态、版本与 lineage、QA 失败/修复、指标、能力、原理、边界、使用场景、扩展与研究意义；新增 character vN / style sN / release rN 三轴版本、六种上游风格真实矩阵和身份/风格/任务三类 QA；明确区分“真实图片证据”“生产流程回放”“机制模拟”和“真人肖像测试”。
Operation constraints: 核心研究内容在无 JavaScript 时仍可阅读；完整生产演示台允许按顺序或直接选择六个阶段、选择任一资产查看来源/变量/规格/QA、重播流程；新增风格矩阵允许键盘或鼠标选择六种风格，查看 READY / CONDITIONAL / BLOCKED 能力与实际样例；既有机制实验台继续演示通用路由规则。
State constraints: 完整演示包含 brief、anchor、plan、produce、QA blocked、release 六个状态；资产状态至少包含 planned、generating/review、blocked、passed；风格矩阵包含 IP-01 至 IP-06 和 ready / conditional / blocked；选择风格后资产、三轴版本和三类 QA 必须同步；既有 READY/BLOCKED 状态继续有效。
Environment constraints: 零外部运行依赖静态页面；进入现有 GitHub Pages 构建；支持桌面、平板和 390px 手机；单一深色主题；键盘可达；尊重 reduced-motion；展示阶段不依赖真实照片、API、后端、外部字体或远程图片。
Primary journey: 从“知识课程发布”完整生产演示理解同一风格内的稳定追加；随后进入真实风格矩阵，在 IP-01 至 IP-06 之间切换，观察同一个 character v1 如何继承身份、切换 style sN、按能力路由交付不同资产并分别通过身份、风格和任务 QA；最后进入机制实验台理解六种风格的通用规则。
User-defined phases: 以现有原型为起点；先完成稳定、可追踪、可持续扩展的生产流程，再补充风格系统和此前未覆盖的能力维度。
Required artifacts: Project 003 研究 README、设计契约、完整生产演示台、至少十九张实际生成资产、六风格真实矩阵、character/style/release 三轴版本说明、风格矩阵 manifest、QA 与最终提示词、六风格机制实验台、独立样式与脚本、静态检查、真实浏览器证据和构建验证。
Autonomy authorization: 用户明确要求将该库作为下一个研究子项目并完成分析与演示；允许在当前仓库内实施、验证和登记。
User-decision boundary: 不复制或重新分发上游未清权图片；不把上游无许可证代码并入本仓库；不上传或模拟未经授权的真人照片；不把虚构人物生成结果声称为真人肖像还原测试；不进行外部发布、付费部署或商业授权承诺。
Observable completion criteria: 页面加载至少十九张不重复实际生成资产；完整演示的六阶段与 6/6 发布继续可复现；真实风格矩阵提供六种可选择风格、十五张实际图片（其中十三张为矩阵专用新增文件）、三个明确 BLOCKED 单元和一个 CONDITIONAL 单元；同一 character v1 在切换 style s1–s6 时不被误记为新人物；每种风格显示支持资产、三类 QA 和来源说明；既有机制实验台无回归；桌面、平板、390px 无溢出遮挡；无外部运行资源；reduced-motion 有明确规则；静态、全库、Pages 构建和真实浏览器验收通过。
```

## Design direction

| 决策 | 方向 | 可观察约束 | 验收标准 |
| --- | --- | --- | --- |
| 首屏层级 | 先给“工作流而非模型”的判断，再进入实验台 | 判断、证据数字和主行动在首屏可见 | 不依赖色彩也能理解项目结论 |
| 实验台 | 控制在左、角色锚点在中、契约与 QA 在右 | 每次操作只改变一个变量，角色锁持续可见 | 支持状态、版本号与 QA 随操作同步更新 |
| 视觉示意 | 参数化 SVG/CSS 虚构角色 | 不加载上游或第三方人物图片 | 网络断开时实验台仍完整工作 |
| 证据边界 | 事实、演示和推论分层 | 页面明确说明不演示底层模型画质 | 不把流程约束描述成模型能力 |
| 真实样例 | 虚构知识博主“林简”的原型锚点与五张跨用途变体 | 图片文件、版本号、输入约束与 QA 并列展示 | 六张图片均由实际图像生成产生并在浏览器成功加载；不声称验证真人还原 |
| 真实风格矩阵 | 同一 character v1 进入 IP-01 至 IP-06 六种风格系统 | 以三轴版本和能力状态组织真实图片；禁止用未清权上游图片作为参考 | 十五张矩阵图片（十三张新增），READY / CONDITIONAL / BLOCKED 和三类 QA 均可观察 |
| 完整生产演示 | “知识课程发布”单一业务情境贯穿六阶段 | 左侧阶段控制、中间资产包、右侧追踪证据；不做无关场景切换 | 六阶段可直接选择和顺序推进，QA 阻塞与最终发布均可复现 |
| 资产追踪 | 点击资产解释“从哪来、改了什么、为何通过” | 角色锚点、变更字段、版本、规格、QA 和 lineage 同屏 | 六张资产都有完整、互不矛盾的追踪记录 |
| 使用判断 | 先给适用场景，再给不适用边界 | 场景按资产复用价值而非行业热词组织 | 用户能判断何时值得采用、何时直接生一张图更简单 |
| 响应式 | 宽屏三栏，平板两段，手机单列 | 控制、角色和 QA 顺序保持一致 | 390px 无横向溢出，控件可触达 |
| 动效 | 只解释状态变化 | reduced-motion 关闭非必要过渡 | 信息不依赖动画出现 |

## Coverage manifest

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 建立子项目 | README、设计契约、上游精确版本 | 仓库文件 | 文件与 Git diff | 0、9 | pass | 已建立契约并锁定上游 commit |
| 目标与价值 | 明确系统目标、价值机制与衡量指标 | 首屏、判断区与 README | DOM 文本 | 2–3 | pass | 目标、价值公式与五类指标已接入 |
| 分析能力 | 能力、原理、边界与场景 | 专题页与 README | DOM 文本、来源链接 | 2–3 | pass | 使用场景与不适用边界已完成 |
| 真实样例 | 角色锚点、五个跨用途变体、spec / manifest / QA | 页面图片与项目实验记录 | 实际文件、浏览器 naturalWidth、截图 | 3、6、8 | pass | r1–r6、历史 r3 快照、最终 r6 manifest、lineage、QA 与提示词均已落盘 |
| 完整流程演示 | brief → anchor → plan → produce → QA blocked → release | 六阶段控制与状态反馈 | 浏览器顺序推进和直接选择 | 4–6 | pass | QA 阻塞和最终 6/6 发布均在浏览器复现 |
| 资产追踪 | 每项资产的来源、变量、版本、规格、QA、lineage | 六张真实资产卡与 trace 面板 | 点击/键盘选择后的 DOM 状态 | 4–6 | pass | r4 选择后版本、v1/r1 anchor、哈希与 manifest-r6 lineage 同步 |
| 三轴版本 | 分离 character vN、style sN 与 release rN | 真实风格矩阵、README 与 manifest | DOM 文本、JSON 文件 | 3、6 | pass | style registry、三轴 manifest 与页面模型一致 |
| 真实风格矩阵 | 同一林简 v1 对比 IP-01 至 IP-06 | 六风格选择器与资产矩阵 | 实际图片、浏览器 naturalWidth、截图 | 3–7 | pass | 十三张新增文件与两张复用图片成功解码；三个 BLOCKED 单元保留 |
| 风格能力路由 | 展示 READY、CONDITIONAL、BLOCKED | 矩阵单元与状态说明 | 鼠标/键盘交互与 DOM 状态 | 4–7 | pass | 六风格支持鼠标与方向键循环切换，状态和三轴版本同步 |
| 三类 QA | 分离身份、风格、任务完成度 | 风格详情与 QA 面板 | 记录文件、DOM 状态 | 6 | pass | 六风格三类 QA 独立显示；九项风格矩阵失败证据保留 |
| 可持续扩展说明 | 业务目标如何拆成资产包、如何追加 rN、何时升级 vN | 演示台说明、指标与 README | DOM 文本与项目文档 | 3 | pass | 课程发布场景、追加 r4–r6、下一版本 r7 与指标说明已完成 |
| 演示能力 | 参数化角色、风格/资产/变量/版本/QA | 默认、支持、阻塞、身份升级状态 | 浏览器交互与截图 | 4–6 | pass | 既有机制实验台证据不受影响 |
| 扩展方向 | 近期、中期、产品化路线 | 专题页路线图 | DOM 文本 | 3 | pass | P0–P2 已按真实 QA、量化一致性与资产平台重排 |
| 我们的意义 | Project 001–003 的研究链路与复用价值 | 专题页与 README | DOM 文本 | 3 | pass | 已补充资产复利与 provider 回归基线 |
| 研究库接入 | 首页卡片、封面、README、项目索引 | 首页与仓库文件 | 构建输出、浏览器导航 | 1、9 | pass | 总库卡片和专题路由已验证 |
| 跨表面验收 | 桌面、平板、390px、键盘、reduced-motion | 完整生产演示、风格矩阵与既有交互 | 浏览器证据 | 7–8 | pass | Playwright 41/41；十九资产、六风格、六阶段、trace、性能和跨视口通过 |
| 自动检查 | Project 003 静态检查与全库构建 | Node 脚本 | 命令输出 | 9 | pass | 静态 36/36、两组 r6 manifest 哈希、全库测试与 Pages 构建通过 |

## Runtime record

- 验证时间：2026-08-28（Asia/Shanghai）
- 构建命令：`npm run build:pages`
- 静态检查：`npm run test:project-003`，36/36 通过，包括十二文件 SHA-256 与两组 manifest 对照。
- 全库回归：`npm run test:all`，Project 001–003 全部通过。
- 本地地址：`http://127.0.0.1:4173/projects/personal-ip-image-pack-study/`
- 浏览器：Chromium 151.0.7922.34，Playwright 无头模式。
- 桌面：1440 × 1000，`scrollWidth = clientWidth = 1440`。
- 平板：820 × 1180，`scrollWidth = clientWidth = 820`。
- 手机：390 × 844，`scrollWidth = clientWidth = 390`。
- 真实资产：`v1/r1` 1060×1484（真实 alpha）；`r2` 1003×1568、`r3` 1122×1402、`r4/r5` 1051×1496、`r6` 1254×1254（均明确登记实体背景）；浏览器 naturalWidth / naturalHeight 与 manifest 一致。
- 真实 QA：两张初始变体因把棋盘格烘焙为 RGB、四角 alpha 均为 255 而被拒；失败样本与原因已保留。
- 状态路径：IP-01 + 全身立绘进入 `BLOCKED`；改为头像恢复 `READY`；表情与道具只升级至 `v2/r4`；改变发型升级至 `v3/r1`。
- 键盘：character-spec 标签按 ArrowRight 切换至 manifest，并同步 `aria-selected`。
- reduced-motion：非必要过渡收敛至 `0.00001s`。
- 运行边界：页面无外部资源请求；控制台与页面错误为 0。
- 浏览器 CLI：`agent-browser` 在当前环境不可用；已使用工作区内置 Playwright 完成同等真实浏览器验证，没有延期项。
- 完整流程：READY → APPROVED → LOCKED → IN REVIEW → BLOCKED → RELEASED；质量门槛阻塞 2 项，修复后 `6 / 6 PASSED`。
- 浏览器验收：26/26；六阶段、六资产、alpha 阻塞、lineage、既有交互、各视口、reduced-motion 与零错误均通过；最终构建后的本地导航加载 325.0ms。
- 证据截图：`assets/project-003-production-qa.png`、`assets/project-003-production-release.png`、`assets/project-003-desktop.png`、`assets/project-003-real-sample.png`、`assets/project-003-lab.png`、`assets/project-003-mobile.png`。
- 修订 4 风格矩阵：同一 `character v1` 登记 `s1/IP-04`、`s2/IP-02`、`s3/IP-05`；新增六张实际 PNG，总实际资产增至十二张。
- 风格路由：IP-02 全身为 CONDITIONAL；IP-04 场景卡为 BLOCKED 并路由 IP-05；IP-05 三项 READY。
- 新增真实 QA：两张 IP-05 首轮贴纸因不透明棋盘格被拒；修复后均为 `Format32bppArgb`，半身四角 alpha `0/0/1/0`，全身均为 `0`。
- 修订 4 浏览器验收：35/35；三风格鼠标/键盘切换、六张新增图片解码、三轴版本、三类 QA、桌面/平板/390px、reduced-motion 与零错误均通过；最终构建后的本地导航加载 313.2ms。
- 修订 4 证据截图：`assets/project-003-style-matrix.png`、`assets/project-003-style-matrix-mobile.png`。
- 修订 5 六风格矩阵：新增 `s4/IP-01`、`s5/IP-03`、`s6/IP-06` 七张实际 PNG；六风格矩阵共显示十五张真实图片，仓库不重复资产总数为十九张。
- 修订 5 能力路由：IP-01 全身、IP-03 换装、IP-04 场景为 BLOCKED；IP-02 全身为 CONDITIONAL；其余十四个图片单元 READY。
- 修订 5 alpha QA：三张新增贴纸首轮均为不透明棋盘格；首次背景提取获得真实 alpha。三张二次清理和一次 IP-03 重试重新烘焙棋盘格，全部拒绝；IP-03 接受版本的轻微半透明外沿登记为回归注记。
- 修订 5 自动验收：静态 36/36；浏览器 41/41；十三张新增矩阵图片全部解码；桌面、820px、390px 无横向溢出，reduced-motion、零外部资源和零控制台错误通过；最终本地导航加载 285.1ms。
- 修订 5 证据截图：`assets/project-003-style-matrix.png`、`assets/project-003-style-matrix-mobile.png`；手机路由器为 2×3 网格并显示 IP-06 输出。
