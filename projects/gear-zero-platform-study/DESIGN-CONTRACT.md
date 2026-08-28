# Project 002 · Delivery record

## Design contract

```text
Entry mode: Brief-led implementation
Request revision: 1
Target user and context: 团队成员、未来合作者与希望理解 AI 原生产品平台的人；从公开研究总库进入并完成一次完整阅读。
Desired first impression: 这不是一篇竞品软文，而是一份把外部产品观察转译成内部产品方法的清晰研究档案。
Visual ambition: Editorial
Experience architecture: Editorial Flow
Visual constraints: 延续研究库深色、低噪、证据优先的视觉语言；Project 002 使用暖黄色作为独立识别；不使用外部图片依赖。
Information constraints: 明确区分公开事实、合理推断与我们的决策；覆盖能力、底层抽象、交互推导、研究意义、库价值、扩展方向和建议。
Operation constraints: 所有内容在无 JavaScript 时仍可阅读；章节导航、复制论点和回到顶部为渐进增强。
State constraints: 导航当前章节、复制成功/失败反馈、details 展开状态必须可理解。
Environment constraints: 零外部依赖静态页面；进入现有 GitHub Pages 构建；支持桌面、平板和 390px 手机；单一深色主题；尊重 reduced-motion。
Primary journey: 从结论进入能力地图，理解 Skill/Workflow/Orchestrator 的关系，查看本库意义与建议，最终抵达下一研究行动。
User-defined phases: 总结与补充描述；整理交互推导；说明后期意义与库价值；提出类似项目建议；部署到远端 GitHub。
Required artifacts: Project 002 专题页、研究 README、首页索引、项目数据、静态检查、浏览器证据、Git 提交与远端部署。
Autonomy authorization: 用户明确要求制作网页并部署到远端 GitHub；允许范围内实现、验证、提交与推送。
User-decision boundary: 不创建新的外部服务、账号或仓库；不更改 GitHub Pages 以外的发布目标；不声称已知 Gear Zero 未公开实现。
Observable completion criteria: 专题页可从总库进入；关键章节与来源完整；桌面/平板/390px 无溢出或遮挡；键盘可达；复制交互与章节导航有效；构建和静态检查通过；提交推送后 Pages 工作流被触发。
```

## Design direction

| 决策 | 方向 | 可观察约束 | 验收标准 |
| --- | --- | --- | --- |
| 首屏层级 | 先给判断，再给研究公式 | 标题、结论和主行动在首屏可见 | 不依赖颜色也能识别主结论 |
| 阅读路径 | 判断 → 交互推导 → 系统模型 → 研究价值 → 行动 | 固定章节导航与明确编号 | 任一章节可直接定位，滚动时显示当前位置 |
| 证据边界 | 事实、推断、决策分层 | 三类标签不混用 | 未公开内部实现不以事实口吻表达 |
| 视觉语言 | 研究库深色基底 + Project 002 暖色 | 不引入外部字体或图片服务 | GitHub Pages 离线资源完整 |
| 响应式 | 宽屏多列，窄屏单列 | 390px 无横向内容溢出 | 主行动、表格和架构图均可用 |
| 动效 | 只解释状态变化 | reduced-motion 关闭平滑滚动和过渡 | 信息不依赖动画出现 |

## Coverage manifest

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 总结与补充 | Project 002 专题内容 | 桌面首屏与全文 | 浏览器截图、DOM 文本 | 2–3 | pass | 已完成 |
| 交互整理 | 对话推导与能力映射 | 章节导航、复制交互 | 浏览器交互 | 4–6 | pass | 已完成 |
| 后期意义 | 研究价值、库价值、扩展与建议 | 桌面/平板/手机 | 视口截图 | 3、7 | pass | 已完成 |
| 研究边界 | 事实/推断/决策与来源 | details 与链接 | DOM、键盘路径 | 5–7 | pass | 已完成 |
| 研究库接入 | 首页卡片、README、项目索引 | 首页与仓库文件 | 构建输出、浏览器导航 | 1、9 | pass | 已完成 |
| 自动检查 | Project 002 静态检查 | Node 脚本 | 命令输出 | 9 | pass | 已完成 |
| 远端部署 | main 提交和 GitHub Pages | Git / Actions | 提交、推送、工作流 | 9 | ready | 推送后检查 Pages 工作流 |

## Runtime record

- 验证时间：2026-08-28（Asia/Shanghai）
- 构建命令：`npm run build:pages`
- 测试命令：`npm run test:all`
- 本地地址：`http://127.0.0.1:48173/projects/gear-zero-platform-study/`
- 桌面视口：1440 × 1000；首屏与全文截图通过目视检查。
- 平板视口：820 × 1180（浏览器内容区 805px）；`scrollWidth` 与 `clientWidth` 均为 805，无横向溢出。
- 手机视口：390 × 844（浏览器内容区 375px）；`scrollWidth` 与 `clientWidth` 均为 375，无横向溢出。
- 浏览器审计：标题正确、正文可读取，控制台与页面错误为空。
- 自动检查：Project 001 为 11/11，Project 002 为 11/11，Pages 构建通过。
