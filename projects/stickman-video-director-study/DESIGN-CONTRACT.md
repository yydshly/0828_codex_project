# Project 008 · Delivery record

## Design contract

```text
Entry mode: Brief-led research subproject inside the existing 0828 research library
Request revision: 5
Target user and context: 我们的视觉 Skill、视频内容与生成式生产团队；需要快速判断 stickman-video-director 能做什么、不能做什么，以及哪些结构值得迁移到自有风格和生产链。
Desired first impression: 先看到“它是导演编译器，不是视频模型”，随后能对照观看上游官方演示、我们的首条 20 秒真实生成样例与八种静态替代形象，最后通过独立必要总结快速获得本质、证据、边界、采用判断和下一步。
Visual ambition: Editorial
Experience architecture: Editorial Flow
Visual constraints: 延续研究总库的深色证据风格；本项目用黑白主题对照、行动金与电蓝表示火柴人语言和流程状态；不引入外部字体、框架或运行时服务；上游视频、上游完整样例和 Project 008 研究模拟必须明确分层。
Information constraints: 必须覆盖能力、原理、代表性样例、使用场景、可扩展方向、对我们的参考价值和后期使用价值；必须明确上游不直接调用视频 API、不自动渲染或拼接；记录固定提交、许可证、测试类型与证据边界；用户实测 MP4 必须记录来源、SHA-256、时长、画幅、帧率、对应 CLIP、可观察转场和不能证明的事项；八种替代形象必须记录生成规格、适用场景、连续性锚点与“静态样张不证明视频效果”的边界；最终必要总结必须在一屏内回答本质、已证明、未证明、适用场景、对我们的意义、当前采用结论和三阶段行动。
Operation constraints: 无 JavaScript 时仍可阅读完整研究结论；导演实验台支持三种叙事案例、三种画幅、两种主题、六个镜头选择和研究审批门；风格适配实验台支持三套研究风格包、锁定项/覆盖项对照、独立视觉批准与可复制适配合同；审批后只展示确定性合同模拟，不调用模型；所有按钮可键盘操作。
State constraints: 三案例、三画幅、两主题、六镜头、三风格、八张静态替代形象、导演未审批/已审批、视觉未审批/已审批、复制成功/降级、图片可加载/替代文本、视频可播放/原生控件降级；切换全局画幅或主题必须重置导演与视觉批准；切换风格只使视觉批准失效，不推翻已确认的叙事结构。
Environment constraints: 零外部依赖静态页面；纳入现有 GitHub Pages 构建；上游作为 Git submodule 固定；支持 1440、820、390px；单一站点深色主题但演示区同时展示 light/dark 生成主题；尊重 reduced-motion；不要求真实 Gemini 凭据。
Primary journey: 从总库进入 Project 008 → 阅读一句话判断 → 对照观看两条上游官方预览与我们的 20 秒真实实验 → 理解该样例实际覆盖 CLIP 01–02 及约 8.58 秒转场 → 浏览八种静态替代形象、适用场景和连续性锚点 → 在三个案例之间查看六幕导演预案与生产 Prompt → 切换三套风格适配合同 → 阅读必要理解、A/B 指标、场景和扩展路线 → 用最终必要总结完成采用决策。
User-defined phases: 获取上游库作为研究子项目；演示库能力；提供代表性样例；描述使用场景；描述扩展方向；总结对我们的参考价值与后期使用价值；暂时只扩展和展示可替代火柴人的形象能力，不生成新视频；整理项目必要总结、部署网页并提交远端 GitHub。
Required artifacts: Git submodule 与精确版本记录、研究 README、独立 `SUMMARY.md`、设计契约、上游审计清单、三案例研究清单、三套风格适配蓝图、八种静态替代形象与机器可读清单、A/B 执行清单、用户实测审计 JSON、交互专题页及独立必要总结区、两条上游演示视频与一条用户实测 MP4 的站点副本、必要理解摘要、总库 Project 008 卡片与外部 README 关联、封面 SVG、静态检查、真实浏览器检查、样例证据截图、全库测试、Pages 构建、Git 提交、远端推送与 GitHub Pages 部署验证。
Autonomy authorization: 用户明确要求把我们的样例接入网页、整理必要理解、关联外部 README、生成静态替代形象、形成项目必要总结、提交远端 GitHub 并部署；允许增量更新 Project 008 页面/研究文档/测试/总库关联文件、为 Project 008 创建提交、推送 origin/main 并验证 GitHub Pages。
User-decision boundary: 不安装到用户全局 Codex Skills；不修改上游 submodule；允许按用户本轮要求生成静态角色样张，但不调用视频模型或生成新视频；不提交 Project 005/007/009/010 等无关并行改动；不覆盖或回退工作区既有未提交改动；若远端认证、分支保护或 Pages 权限拒绝，则保留本地提交并报告精确阻塞。
Observable completion criteria: source/ 指向上游固定提交；项目 README、独立 SUMMARY 与根 README 均关联 Project 008 的结论、专题页与证据；页面首屏明确 Director Skill ≠ Video Model；两条上游 MP4 与一条 20.01 秒用户实测 MP4 可通过本地及远端站点加载；实测区明确其对应 motivation CLIP 01–02、约 8.58 秒视觉切点、单一 20 秒文件流和证据限制；形象区完整加载八张 1000×1000 静态样张，每张包含描述、适用场景和注意项，并明确不证明视频结果；必要总结区一屏回答七类决策信息并给出现在/下一步/以后路线；既有导演和风格实验台无回归；1440、820、390px 无页面级横向溢出；键盘、媒体降级与 reduced-motion 可理解；Project 008 静态检查、浏览器检查和 Pages 构建通过；仅 Project 008 相关文件进入提交；origin/main 推送成功且 GitHub Pages 公开 URL 返回最终总结。
```

## Design direction

| 决策 | 方向 | 可观察约束 | 验收标准 |
| --- | --- | --- | --- |
| 首屏判断 | “导演编译器”先于功能列表 | 首屏同时出现输入、导演层、外部生成层与边界标签 | 不会被理解成视频模型或一键成片服务 |
| 演示证据 | 上游真实 MP4 与研究模拟分区 | 视频标注 upstream official；实验台标注 deterministic research simulation | 不把我们的模拟结果冒充上游输出或成片 |
| 形象扩展 | 用真实静态样张比较角色外壳 | 八张图统一单角色、全身、中性背景；图卡给出场景与连续性锚点 | 看到形象效果，同时不会误解为视频一致性已经验证 |
| 样例覆盖 | 励志、科普、商业三种叙事模式 | 三案例均有六幕，默认覆盖横、竖、方形与明暗主题 | 能观察叙事路由和画幅重构差异 |
| 交互核心 | 审批门 + 单镜头 Prompt 解剖 | 全局变化使 Phase B 重新锁定；选择镜头改变输出 | 交互体现真实合同，而不是装饰性标签切换 |
| 视觉语言 | 黑白极性、线性运动与剪辑标记 | 金色表示批准/行动，电蓝表示结构，红色表示边界 | 状态不只靠颜色传达，正文始终可读 |
| 响应式 | 宽屏双栏实验台，窄屏顺序流 | 390px 不横向溢出，横向控件可换行或安全滚动 | 主流程在桌面、平板和手机均可完成 |
| 动效与媒体 | 视频是渐进增强，动效解释状态 | 原生视频控件；reduced-motion 关闭非必要动画和平滑滚动 | 不播放视频也能获得完整研究结论 |

## Coverage manifest

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 获取仓库 | 上游作为固定版本子项目 | `source/`、`.gitmodules` | Git 状态、提交哈希、文件 | 0、9 | pass | 已固定 `6d7f8c8`，下一步形成审计记录 |
| 研究库能力 | 能力、原理、边界与测试性质 | README、专题页 | 文件、DOM | 3、9 | pass | README、审计 JSON 与完整专题正文已交付 |
| 演示真实能力 | 两条上游明暗主题预览 | 视频区、加载与控件状态 | 本地媒体、浏览器 | 1、7、8 | pass | 两条 1280×720、约 10.005 秒 MP4 已按 SHA-256 固定并通过浏览器加载 |
| 代表性样例 | 励志、科普、商业案例，各六幕 | 实验台案例/镜头状态 | 研究清单、DOM、交互 | 3–6 | pass | 三案例分别为 143、141、132 词，六幕与十八节拍均可操作 |
| 工作流门禁 | 画幅/主题/审批门/重构 | 未批准、已批准、全局修改 | 浏览器交互 | 4–6 | pass | 批准解锁、六镜头切换和全局修改重新锁定均通过 |
| 使用场景 | 高匹配、条件匹配、不适合 | 场景矩阵 | DOM、README | 3 | pass | HIGH FIT、CONDITIONAL、NOT A FIT 三层已交付 |
| 扩展与价值 | 扩展路线、参考价值、后期价值 | 路线与采用建议 | DOM、README | 3 | pass | P0–P5、自有风格迁移、当前/近期/长期价值与采用路线已交付 |
| 总库集成 | Project 008 卡片、README、构建与工作流 | 首页、项目页、CI | 导航、文件、构建 | 1、9 | pass | 总库卡片与项目入口、测试命令、三份 manifest 构建复制和 submodule checkout 已交付 |
| 跨表面验收 | 桌面、平板、390px、键盘、媒体、reduced-motion | 主路径与关键状态 | 浏览器、截图 | 7–8 | pass | 54/54 浏览器检查通过，三视口无溢出，键盘、复制、三类媒体降级和 reduced-motion 通过 |
| 自动检查 | Project 008、邻接项目与 Pages | Node、构建、HTTP | 命令输出 | 9 | pass | Project 008 静态 48/48；独立发布 worktree 从零初始化 submodule、构建 Pages 并完成 54/54 浏览器回归 |
| 风格解耦原型 | 三套自有风格适配器与不变量/覆盖项 | Style Adapter Lab、蓝图 JSON | 数据、DOM、交互 | 3–8 | pass | 三套研究适配合同、独立视觉批准、版本谱系和复制路径均已实现 |
| 真实 A/B 入口 | 3 内容 × 3 风格测试矩阵、指标与待决项 | A/B 清单、页面摘要 | 数据、DOM | 3、9 | pass | 已固定九单元、六项主指标和四项执行前决策；未在条件不完整时调用付费生成 |
| Phase 2 跨表面验收 | 三风格键盘切换、视觉批准、复制、三视口 | 适配器主路径 | 浏览器、截图 | 7–9 | pass | 真实 Chromium 验证两级批准、风格键盘切换、合同复制、全局失效与手机主路径，截图已保存 |
| 用户实测证据 | 20 秒 CLIP 01–02 样例、审计与证据边界 | 实测视频区、实验 JSON | 文件、ffprobe、DOM、浏览器 | 1、3、8 | pass | MP4、poster、接触表和审计 JSON 已固定；本地与远端均加载 20.01 秒、1280×720 视频并验证降级 |
| 静态形象扩展 | 八种火柴人替代形象、场景与连续性锚点 | 形象图卡、清单 JSON、README | 图片、DOM、浏览器 | 2、3、8 | pass | 八张 1000×1000 WebP 已生成并接入；图卡和清单明确本轮不生成视频、不证明跨镜头稳定性 |
| 必要总结 | 收束本质、证据、边界、场景、价值、采用与行动 | 页面总结区、`SUMMARY.md`、README 关联 | DOM、文档、浏览器、远端 HTTP | 3、7、9 | pass | 本地 56/56 静态、Pages 构建以及本地/远端 65/65 浏览器均通过；公开总结与仓库文档 HTTP 200 |
| 必要理解归纳 | 导演/风格/模型/剪辑职责与使用步骤 | 页面摘要、项目 README、根 README | DOM、文档 | 3、9 | pass | 页面与项目 README 均归纳五条必要理解；根 README 关联实测锚点、必要理解和机器审计 |
| Git 交付卫生 | 只提交 Project 008 及必要共享集成 | Git index、提交 | staged diff、commit | 9 | pass | 初始提交 `96442f2`、形象扩展提交 `df2453e` 与必要总结提交 `0c53da8` 均只包含 Project 008 及必要入口；独立 index 精确摘取根 README 的 Project 008 行，未覆盖并行成果 |
| 远端部署 | origin/main 与 GitHub Pages 可访问新样例 | GitHub、公开页面 | push、workflow、HTTP、浏览器 | 9 | pass | origin/main 已包含 `0c53da8`；Actions `33229977433` 成功；公开总结页与 `SUMMARY.md` 均 HTTP 200，远端浏览器 65/65 |

## Runtime record

- 当前阶段：Revision 5 / Stage 9；必要总结、跨表面验证、远端发布和证据写回均已完成，所有覆盖项为 `pass`。
- 审计对象：`kaomei/stickman-video-director`。
- 固定提交：`6d7f8c83a16c594c23bb73da832c8864ccd2aeb5`，提交时间 2026-08-20T09:51:21+08:00。
- 入口授权：用户明确要求接入我们的样例、整理必要理解、关联外部 README、提交远端 GitHub 并部署；无需第二次实现或推送确认。
- 现有工作区：根 README、docs 首页、projects.json、package.json 等已有用户改动；本项目只做增量编辑。
- 上游验证：`tests/verify-readmes.sh` 通过六份 README 合同；该测试只检查文档与资产，不是视频回归。
- 用户实测：`user-motivation-clips-01-02.mp4`，SHA-256 `5dd2efd0bbfc59b97c3697fb7bc42cf45632a3c2943f1fd0227e199a3ab25249`，20.01 秒、1280×720、24 FPS、480 帧；约 8.58 秒强视觉变化，覆盖 motivation CLIP 01–02。
- 静态验证：`npm run test:project-008`，56/56 通过。
- 全库回归：`npm run test:all` 已执行；Project 001–005 通过，在并行开发中的 Project 007 因其设计契约缺少可观察标准而停止。Project 008 独立通过；Project 006（22/22）、Project 009（30/30）和 Project 010（29/29）另行通过。未修改 Project 007。
- Pages 构建：当前工作区与独立提交 worktree 均通过 `npm run build:pages`；规范输出为 `.pages-dist`。
- 本地地址：`http://127.0.0.1:4173/projects/stickman-video-director-study/`，HTTP 200。
- 公开地址：`https://yydshly.github.io/0828_codex_project/projects/stickman-video-director-study/`，HTTP 200。
- 浏览器工具：`agent-browser` CLI 在当前环境不可用；使用 Codex workspace bundled Playwright 完成等价真实 Chromium 验证。
- 浏览器验证：Revision 5 本地与 GitHub Pages 远端均为 65/65；必要总结七项判断、三阶段路线、章节导航和 390px 手机路径均可见，控制台与页面错误为零。
- 交互验证：三案例、六镜头、画幅、明暗主题、导演批准、三风格、独立视觉批准、风格切换只重置视觉版本、全局修改重置两级批准、两类合同复制、键盘方向键和视频错误降级均通过。
- 视口验证：1440×1000、820×1180、390×844 的 `scrollWidth` 均等于 `clientWidth`。
- reduced-motion：浏览器计算 `html` 的 `scroll-behavior` 为 `auto`。
- 证据截图：`assets/project-008-desktop.png`、`assets/project-008-official-videos.png`、`assets/project-008-user-sample.png`、`assets/project-008-character-styles.png`、`assets/project-008-lab.png`、`assets/project-008-style-adapters.png`、`assets/project-008-summary.png`、`assets/project-008-mobile.png`。
- Git 交付：基础内容提交 `96442f2e22f144dbdd69f223c5100b0e1be4a523`、形象扩展提交 `df2453e37c6bfcc8f5e4fb0b0e521363f7e06546` 与必要总结提交 `0c53da803e107bf8145de5da7356cc937b0082c6` 已推送 `origin/main`；GitHub Pages workflow run `33229977433` 成功。
- 远端媒体：页面 HTML、`SUMMARY.md`、用户实测 MP4、两个审计 JSON 与八张形象 WebP 均返回 HTTP 200；八张图片的远端 `Content-Type` 均为 `image/webp`，形象清单为 `application/json`；远端完整浏览器回归 65/65。
- 终端审计：未安装全局 Skill；使用内置 imagegen 生成八张静态形象样张，未调用视频模型、未生成新视频；并行项目改动不进入 Project 008 提交。
