# Project 006 · Delivery record

## Design contract

```text
Entry mode: Brief-led implementation
Request revision: 1
Target user and context: 需要判断 nativePDF-structurer 是否值得研究、采用或扩展的研发人员与知识库建设者；从直达链接进入并快速形成技术判断。
Desired first impression: 这不是项目宣传页，而是一份结论先行、边界清楚、可以直接指导选型的研究档案。
Visual ambition: Editorial
Experience architecture: Editorial Flow
Visual constraints: 延续研究库深色、低噪、证据优先的语言；以电气蓝与青绿色表示“确定性结构层”；不使用外部图片、字体或运行依赖。
Information constraints: 汇总我们的连续理解；明确区分能力、本质、适用范围、局限、扩展路线和同类产品；不把作者愿景或规则推断写成统一精度结论。
Operation constraints: 无 JavaScript 时全部内容仍可阅读；路线比较器和章节导航为渐进增强；外部来源使用明确标签。
State constraints: 三种解析路线切换、当前章节和采用判断必须可理解；交互支持键盘方向键、Home 和 End。
Environment constraints: 零外部依赖静态页面；进入现有 GitHub Pages 构建；支持桌面、平板和 390px 手机；单一深色主题；尊重 reduced-motion。
Primary journey: 先读最终判断，再理解“读取对象—恢复结构—进入 RAG”的位置，核对能力与边界，按场景选型，最后查看扩展方向和同类产品。
User-defined phases: 整理我们的理解；归纳库的能力与本质；说明使用场景和扩展方向；比较同类型产品；制作网页；提交并部署到 GitHub。
Required artifacts: Project 006 专题页、研究 README、设计与验收记录、静态检查、浏览器证据、Git 提交、远端推送与 GitHub Pages 直达地址。
Autonomy authorization: 用户明确要求制作网页、归纳总结、提交并部署到 GitHub；允许范围内实现、验证、提交与推送。
User-decision boundary: 不创建新仓库、后端、账号或付费服务；不提交当前工作区中属于其他项目的未提交改动；不声称真实语料上的精度已得到公开基准验证。
Observable completion criteria: 直达专题页完整覆盖所需信息；结论和技术边界在首屏可见；解析路线切换可点击和键盘操作；桌面、平板、390px 无页面级横向溢出；无外部运行资源；控制台与页面错误为零；静态检查和 Pages 构建通过；仅提交本项目文件并推送到 main。
```

## Design direction

| 决策 | 方向 | 可观察约束 | 验收标准 |
| --- | --- | --- | --- |
| 首屏层级 | 先给“不是新范式，而是专用结构恢复器”的判断 | 标题、结论、四项成熟度判断和主入口可见 | 第一次扫描即可知道是否值得继续研究 |
| 阅读路径 | 判断 → 本质 → 能力边界 → 场景 → 同类产品 → 扩展 → 采用建议 | 固定章节导航和清晰编号 | 每个用户问题有独立可定位章节 |
| 证据边界 | 已实现、作者目标、我们的判断分层 | 不使用“识别所有细节”“通用精度已验证”等绝对表述 | 页面同时呈现能力与失败边界 |
| 视觉语言 | 深色技术档案 + 蓝青信号色 + 低密度网格 | 不依赖图片或动效表达信息 | 离线资源完整，文字对比清楚 |
| 响应式 | 宽屏双栏与比较矩阵，窄屏单栏和可横向滚动表格 | 390px 页面本身无横向溢出 | 导航、标签页、表格和来源均可访问 |
| 动效 | 只解释标签页和状态切换 | reduced-motion 关闭平滑滚动及非必要过渡 | 信息不依赖动画出现 |

## Coverage manifest

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 整理理解 | 最终判断和概念边界 | 桌面首屏、正文 | 浏览器截图、DOM 文本 | 2–3 | pass | 无 |
| 能力与本质 | 三层技术位置、能力/非能力 | 默认内容、路线标签页 | DOM、点击、键盘 | 3–6 | pass | 无 |
| 场景与扩展 | 场景判断器、扩展优先级 | 桌面/平板/手机 | 浏览器交互、视口检查 | 3–7 | pass | 无 |
| 同类产品 | 五类替代方案与选型建议 | 比较表、来源链接 | DOM、链接检查 | 3、7 | pass | 无 |
| 研究档案 | README 与来源边界 | 仓库文件 | 文件、静态检查 | 9 | pass | 无 |
| 自动检查 | Project 006 静态和浏览器检查 | Node / agent-browser | 命令输出、截图 | 7、9 | pass | 无 |
| 远端部署 | main 提交和 GitHub Pages | Git / Actions / 线上 URL | 提交、推送、HTTP 与页面 DOM | 9 | continue | 验证通过后提交推送 |

## Runtime record

- 验证时间：2026-08-29（Asia/Shanghai）。
- 构建：`npm run build:pages` 通过；`git diff --check` 通过。
- 静态检查：`node projects/nativepdf-structurer-analysis/tests/static-check.mjs`，19/19 通过。
- 本地地址：`http://127.0.0.1:48173/projects/nativepdf-structurer-analysis/`。
- 浏览器：`agent-browser 0.27.0`；1440×1000、820×1180、390×844 三个视口无页面级横向溢出，比较表在窄屏保留局部横向滚动。
- 交互：路线标签鼠标点击和方向键切换通过；复制判断的键盘触发与反馈通过；reduced-motion 下滚动行为为 `auto`。
- 运行边界：控制台与页面错误为零；无第三方字体、脚本或样式运行依赖。
- 视觉证据：桌面、平板、移动端全页截图以及 390px 首屏、比较表局部截图已在浏览器校准环节人工检查；临时证据不写入发布产物。
- 远端部署证据：待提交、推送及 GitHub Pages 完成后补充。
