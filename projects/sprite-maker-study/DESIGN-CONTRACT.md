# Project 009 · Delivery record

## Design contract

```text
Entry mode: Brief-led implementation inside an existing research library
Request revision: 8
Target user and context: 我们的游戏、视觉 Skill 与生成式资产研究团队；需要快速判断 sprite-maker 能做什么、如何工作、是否值得采用，以及哪些机制值得迁移。
Desired first impression: 这不是“又一个生图工具”的宣传页，也不是单一游戏 mock；它是一份把原生 idle、版本化 run/cast、Rig、QA、导出合同和多种上层业务连起来的可操作研究档案。Revision 8 新增应用场景实验室，用同一组动作资产并排证明虚拟人/桌面伙伴、互动故事/数字展厅、教学演示、营销人物和低成本游戏原型五种复用方向。
Visual ambition: Immersive
Experience architecture: Spatial Stage for the standalone Combat Trial and Application Lab; Editorial Flow remains unchanged for the research page
Visual constraints: 延续研究总库的深色证据风格；用像素绿、暖橙和骨骼蓝区分本地引擎、AI Provider 与持久化资产；明确标记上游官方媒体与我们自己的原生输出；不引入外部字体、框架或运行时服务。
Information constraints: 明确区分上游声明、代码证据、官方演示、Project 009 研究模拟和 Project 009 自有样例实测；首屏回答“它不是模型、无需下载模型权重”；说明 README 的顺序 AI 帧叙述与当前 rig-first 代码路径之间的版本差异；不把像素指标说成语义身份或艺术质量判断；保留失败门禁和有条件结论。
Operation constraints: 无 JavaScript 时全部研究结论和官方媒体仍可阅读；工作流实验台是渐进增强；标签页、模式切换和复制操作支持键盘与可理解反馈。
State constraints: 研究页保留四类工作流与三种动画模式；能力关卡与 Combat Trial 的既有状态保持不变；Application Lab 覆盖 companion、story、teaching、marketing、prototype 五个场景及各自 default/active/complete 状态，窄屏说明抽屉覆盖 open/closed；companion 继续只使用 idle、run、cast；动作资产层与场景业务层必须始终可辨认。
Environment constraints: 零外部依赖静态页面；进入现有 GitHub Pages 构建；支持 1440px、820px、390px；单一深色主题；尊重 reduced-motion；官方 GIF/PNG 有静态文字说明作为降级。
Primary journey: 从总库进入 Project 009 → 进入 Application Lab → 在持续可见的角色舞台中切换五种应用场景 → 每个场景完成一次有业务含义的操作 → 观察同一 idle/run/cast 如何被不同上层状态调用 → 打开职责说明确认资产层与业务层边界 → 回到研究页比较 Combat Trial 与非游戏用途。
User-defined phases: 获取上游仓库；研究能力；使用自有样例实际测试；说明意义与场景；用真实输出构造游戏与复杂战斗；保存既有效果；新增独立试运行模块；继续展示虚拟人/桌面伙伴、互动故事/数字展厅、教学演示、营销动态人物和低成本游戏原型。
Required artifacts: 保留固定上游、研究档案、Revision 5 快照、Revision 6 能力关卡、Revision 7 Combat Trial 与多动作 benchmark；新增独立 Application Lab 路由、五个可切换场景、每场景至少一个可观察业务操作、深链接/fixture、snapshot API、窄屏说明抽屉、无 JavaScript 与 reduced-motion 降级；同步研究入口、README、职责边界、静态与真实浏览器验收、桌面和手机证据、Project 009 回归与 Pages 构建。
Autonomy authorization: 用户明确要求获取仓库并作为研究子项目完成研究和展示；允许直接新增 Project 009，并增量更新研究总库索引、构建和测试。
User-decision boundary: 允许用现有 Codex CLI 做一次只读视觉骨架规划并启动真实上游 Tauri 应用；Revision 6 允许基于现有样例做一次内置图像编辑以准备 motion-ready 输入，但必须与 Sprite Studio 动作输出分开标记；Revision 7/8 只复用已批准的 master/run/cast，不新增生成式资产；不宣称桌面提醒、故事分支、教学进度、营销转化或游戏规则是 Sprite Studio 产物，不修改上游 submodule，不覆盖工作区中其他在途项目，不提交或推送远端。
Observable completion criteria: 既有研究、idle 实测、Revision 5 快照、Revision 6 能力关卡与 Revision 7 Combat Trial 保持通过；Application Lab 在 `demos/sprite-maker-application-lab/` 独立运行；五个场景可通过点击、键盘和 query fixture 直接进入；每个场景至少有一次 default→active/complete 状态转换并同步改变舞台、反馈与 actor mode；真实 master/run/cast 全部加载且业务逻辑明确归属上层；窄屏说明使用可关闭抽屉并支持 Escape/焦点返回；桌面、平板、手机、reduced-motion、无 JavaScript、性能烟雾、控制台错误、Project 009 检查和 Pages 构建通过。
```

## Design direction

### Revision 8 · Application Lab contract

```text
Module isolation: Application Lab is a new route at /demos/sprite-maker-application-lab/; it does not replace the capability run, Combat Trial or frozen snapshot.
Scene base: semantic DOM + CSS spatial stage; the readable UI does not depend on Canvas, WebGL, external fonts or remote services.
Scene persistence: the current business scene and actor remain visible while users switch context, act and inspect the boundary.
Foreground control model: five keyboard-reachable scene tabs, one primary scene action group, status feedback and a responsibility inspector; mobile converts the inspector into a dismissible bottom sheet with Escape and focus return.
State-to-scene mapping: companion focus/break, story branch, teaching step/answer, marketing CTA/result and prototype ready/combat/clear each alter both stage composition and foreground feedback.
Mobile transformation: horizontal scene rail + fixed-as-needed compact inspector sheet; primary action stays adjacent to the stage.
Fallback: reduced-motion freezes actor frames without removing state; no JavaScript preserves the five use-case explanations and asset/business boundary.
Asset boundary: master/run-v2/cast-v1 are published Project 009 action assets; reminders, branching, curriculum, CTA analytics and game rules are simulated upper-layer business logic.
Reviewability: companion, story, teaching, marketing and prototype query fixtures plus default/complete state, snapshot API, event text and deterministic reset.
```

### Revision 8 coverage

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 展示其他方向 | 独立 Application Lab 路由 | default / deep links | HTTP、页面语义、研究入口 | 0–3 | pass | 无 |
| 虚拟人和桌面伙伴 | 专注/休息提醒 | companion default/complete | 提醒操作、反馈、actor state | 4–6 | pass | 无 |
| 互动故事、数字展厅 | 分支选择与展品解读 | story branch-a/branch-b | 分支按钮、舞台/文案变化 | 4–6 | pass | 无 |
| 教学演示 | 分步讲解与答案反馈 | teaching step/complete | 进度、回答、恢复 | 4–6 | pass | 无 |
| 营销动态人物 | CTA 与成功反馈 | marketing default/complete | CTA、结果、动态人物状态 | 4–6 | pass | 无 |
| 低成本游戏原型 | 最小战斗假设验证 | prototype ready/combat/clear | 开始、命中、清除、重置 | 4–6 | pass | 无 |
| 跨端与降级 | desktop/tablet/mobile/reduced-motion/no-js | stage / inspector | 截图、键盘、焦点、无溢出、fallback | 7–8 | pass | 无 |
| 研究与交付 | 研究页、README、测试、Pages | 项目页、Application Lab | 静态、浏览器、截图、构建 | 3、9 | pass | 无 |

### Revision 8 baseline record

- Current stage：Stage 9 · Verified delivery；revision-led。
- Browser environment：研究页 canonical runtime `http://127.0.0.1:4173/projects/sprite-maker-study/`，1440×1000；Application Lab `http://127.0.0.1:4173/demos/sprite-maker-application-lab/?scene=companion`，1440×1000、820×1180、390×844，2026-08-29。
- Observed evidence：Revision 7 已提供复杂战斗垂直切片，但非游戏用途仍只存在文字说明，没有共享舞台、真实动作状态和可操作业务反馈。
- Problem category：跨业务场景的可验证复用展示缺失。
- Root cause：此前研究聚焦资产生成和游戏接入，没有把同一组动作资产映射到提醒、叙事、教学、营销等状态机。
- Minimal coherent intervention：新增独立 DOM/CSS Spatial Stage，复用 master/run/cast，在五个标签内实现一个最小但有意义的业务状态转换，同时保持职责边界可见。
- Adjacent regression surfaces：研究页导航与密度、Revision 5/6/7 路由、动作资产哈希、桌面/平板/手机、键盘、抽屉焦点、reduced-motion、no-js、Pages 构建。
- Observed result：Application Lab 作为独立语义 DOM/CSS Spatial Stage 运行；桌面伙伴完成专注循环，故事支持 A/B 分支，教学完成问题与正确反馈，营销 CTA 明确只做本地模拟，轻量原型以两次权威命中验证规则。五个场景同时改变舞台、业务状态、角色动作与 event feed；移动职责检查器作为底部抽屉进入可视区域，并支持 Escape 和焦点返回。
- Visual calibration：首轮桌面证据发现桌面伙伴气泡被右缘截断、营销指标被人物遮挡，手机证据在抽屉过渡结束前截取；通过右对齐气泡、将营销指标内容上移和等待/测量抽屉边界修复，邻接状态复核通过。
- Verification：研究页静态 `53/53`、浏览器 `66/66`；能力关卡静态 `36/36`、浏览器 `53/53`；Combat Trial 静态 `30/30`、浏览器 `46/46`；Application Lab 静态 `26/26`、浏览器 `32/32`；10 项动作资源逐文件哈希一致；Pages 构建通过；桌面、平板、手机、键盘、抽屉焦点、reduced-motion、无 JavaScript、无外部请求与控制台错误均有自动证据。
- Adjacent regression audit：Revision 5 冻结快照、Revision 6 能力关卡、Revision 7 Combat Trial、研究工作流实验台和总库入口保持可用；没有修改固定上游 submodule 或其他在途项目。
- Decision：`pass` for Revision 8；用户要求的五类应用展示全部可操作，没有 `continue`、`defer` 或 `blocked` 项。

### Revision 7 · Combat Trial contract

```text
Module isolation: Combat Trial is a new route at /demos/sprite-maker-combat-trial/; it does not replace the Revision 6 capability run or the frozen Revision 5 snapshot.
Combat verbs: Pulse uses 80ms startup and one projectile contact; Dodge uses 180ms travel, 220ms invulnerability and 850ms cooldown; Sync Cast consumes 100 energy, contacts once after 167ms and then recovers.
Encounter pressure: wave 1 combines pursuit and ranged space control; wave 2 adds a four-point shield that rewards Sync Cast; wave 3 is a 14 HP boss whose second phase adds a three-projectile burst and shorter telegraph.
Authority: stable action identifiers and target state resolve damage, shield pressure, dodge reward and phase changes; particles, labels and sprite frames only visualize resolved state.
Asset boundary: Lin Jian master/run/cast are published experiment outputs; player, enemies, boss, level, AI, hit logic, energy and victory are programmatic game-runtime elements.
Reviewability: briefing, wave-1, wave-2, sync-ready, boss-1, boss-2, victory and failed fixtures expose direct deterministic review states; snapshot and event log show contact truth.
```

### Revision 7 coverage

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 新增试运行模块 | 独立 Combat Trial 路由 | briefing / launch | HTTP、页面语义、研究入口 | 0–3 | pass | 无 |
| 演示复杂场景 | 三 encounter、四 archetype、双阶段 Boss | wave-1/2、boss-1/2 | snapshot、event log、真实 Canvas | 4–6 | pass | 无 |
| 显式战斗合同 | Pulse / Dodge / Sync Cast | startup / active / contact / recovery | action id、命中守恒、护盾压力 | 3、5–7 | pass | 无 |
| 复用库能力 | companion idle/run/cast | follow / cast / settle | 10 项动作资产哈希、帧状态 | 2–7 | pass | 无 |
| 跨端与降级 | desktop / portrait / landscape / reduced-motion | live / fallback | 触控、无溢出、静态帧、no-canvas/no-js | 7–8 | pass | 无 |
| 研究与交付 | 研究页、README、测试、Pages | 项目页、Combat Trial | 静态、浏览器、截图、构建 | 3、9 | pass | 无 |

### Revision 7 baseline record

- Current stage：Stage 9 · Verified delivery；request-led。
- Browser environment：`http://127.0.0.1:4173/demos/sprite-maker-combat-trial/?state=briefing`，1280×900、390×844、844×390，2026-08-29。
- Observed evidence：Revision 6 已证明 companion 能在复杂横向关卡中跟随并切换 run/cast，但敌人仍是同一巡逻 archetype，cast 只是随玩家脉冲触发，尚未形成资源决策、护盾反制或 Boss 阶段。
- Problem category：战斗决策压力与动作事件合同不足。
- Root cause：上一版目标是资产状态接入，不是战斗垂直切片；没有把 startup、active、recovery、invulnerability、shield pressure 和 stable action id 变成可观察规则。
- Minimal coherent intervention：新增独立路线；复用既有动作资产；加入 Pulse、Dodge、Sync 三种差异化 verb、三个 encounter、四类敌人和 Warden Phase 2；所有接触由模拟状态结算。
- Adjacent regression surfaces：Revision 5/6 路由、多动作资产哈希、研究导航、键盘/触控、固定时间步、reduced-motion、no-canvas、no-js、Pages 构建。
- Observed result：Combat Trial 已作为独立路线运行；Pulse 在 80ms 后释放一枚投射物，Dodge 只在真实 180ms 移动窗口奖励 sync，普通受伤无敌不会冒充完美闪避；Sync Cast 在 167ms 后以稳定 action id 单次结算，对护盾造成 4 点、对生命造成 2 点压力；三波清除自动推进，Warden 半血进入 Phase 2 并实际生成三重脉冲。
- Verification：研究页静态 `52/52`、浏览器 `62/62`；能力关卡静态 `36/36`、浏览器 `53/53`；Combat Trial 静态 `30/30`、浏览器 `46/46`；10 项多动作资源逐文件哈希一致；Pages 构建通过；桌面、手机横竖屏、键盘、触控、reduced-motion、无 JavaScript、无 Canvas 与控制台错误均有自动证据。
- Adjacent regression audit：Revision 5 冻结快照、Revision 6 能力关卡和 Project 009 研究页定向回归保持通过；没有修改固定上游 submodule 或其他项目在途内容。
- Decision：`pass` for Revision 7；复杂场景接入目标完成。下一扩展若继续，应新增 production-grade attack/hit/death 资产、hitbox 事件导出和真正的髋—膝—踝骨链，而不是继续增加程序化敌人数。

### Revision 6 · Versioned companion contract

```text
Preservation: Revision 5 is frozen at /demos/sprite-maker-scene-r5/ with SHA-256 for HTML, CSS and game.js; the main route continues independently.
Asset representation: original native idle remains a verified fixed NPC; a generated motion-ready RGBA master is an explicitly separate input-preparation asset; run-v2 and pulse-cast-v1 are Sprite Studio helper outputs.
Runtime mapping: before Rig, Lin Jian stays at NPC_X using four native idle frames; after Rig, a non-colliding companion follows the player, selects run while closing distance, selects cast when the player fires, and returns to master idle when settled.
State ownership: the game owns follow position, facing, state selection, timing, projectile damage and combat; PNG pixel content, frame order, FPS and version provenance belong to the asset pipeline.
Quality boundary: all nine adopted extension frames must be unique and RGBA; exact source-color preservation is measured rather than assumed; run remains conditional until a hierarchical hip-knee-ankle rig passes production review.
Mobile and fallback: companion remains legible at gameplay camera distance; reduced-motion freezes its animated sequence; no Canvas and no JavaScript still explain three states and the provenance boundary.
```

### Revision 6 coverage

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 保存当前效果 | Revision 5 独立路由与哈希 | `sprite-maker-scene-r5` | HTTP、三文件 SHA-256、Revision 6 浏览器回归内的独立路由检查 | 0、9 | pass | 无 |
| 准备动作输入 | motion-ready RGBA master | generated-v1 rejected → v2 accepted → 256×384 | Alpha、尺寸、输入哈希、人工轮廓复核 | 2、3、7 | pass | 无 |
| 扩展库能力 | run-v1 / run-v2 / pulse-cast-v1 | helper check、render、version ownership | 9 adopted frames、哈希、帧差、接触表 | 3、5、7 | pass | 生产前升级 hip-knee-ankle rig |
| 接入复杂游戏 | Rig 后 companion 跟随、run、cast | terminal-1 / active / combat | snapshot、真实 Canvas、桌面截图 | 4–6 | pass | 无 |
| 更新能力证据 | 三终端改为三动作合同 | Rig / QA / Export modal | master、GIF、13 PNG manifest、conditional 边界 | 3、6 | pass | 无 |
| 跨端与降级 | desktop / portrait / landscape / reduced-motion | 多动作状态 | 无溢出、触控、静态帧、fallback | 7–8 | pass | 无 |
| 研究与交付 | 研究页、README、测试、Pages | 项目页、主游戏、快照 | 静态、浏览器、截图、构建 | 3、9 | pass | 无 |

### Revision 6 baseline record

- Current stage：Stage 9 · Delivery and preservation；revision-led。
- Browser environment：Revision 6 `http://127.0.0.1:4173/demos/sprite-maker-scene/?state=near` 与冻结的 Revision 5 `http://127.0.0.1:4173/demos/sprite-maker-scene-r5/?state=near`；1280×900、390×844、844×390，2026-08-29。
- Observed evidence：Revision 5 已作为独立路由冻结；Revision 6 的 Rig 会部署 companion，真实浏览器观察到 companion 从 idle 切到 run-v2、脉冲时切到 cast-v1、结束后恢复跟随，且仍只生成一枚玩家投射物。
- Problem category：资产表示与运行时状态映射缺口。
- Root cause：原始宽裤腿、贴身手臂 master 不具备独立肢体轮廓；上一版为了真实边界主动拒绝伪造 run/attack。
- Minimal coherent intervention：冻结上一版；准备独立 motion-ready 输入；用仓库附带 helper 生成版本化 run/cast；只把人工批准为 demo-ready 的九帧部署为非碰撞 companion。
- Adjacent regression surfaces：Revision 5 快照、native idle 哈希、helper Windows 提交、asset ownership、三终端、战斗、fixtures、桌面/手机、reduced-motion、no-canvas、no-js、Pages 构建。
- Observed result：生成式输入准备输出一张 256×384 真 RGBA motion-ready master；本地 helper 保留 run-v1 并采用 run-v2 四帧与 pulse-cast-v1 五帧；九张动作帧文件与解码哈希均唯一，发布副本逐文件一致，最少精确源 RGBA 保持为 93.962%。主游戏加载 13 张状态帧，并将 companion 跟随、状态选择和施法触发明确归属游戏运行时。
- Verification：研究页静态 `51/51`、浏览器 `58/58`；游戏静态 `36/36`、浏览器 `53/53`；Pages 构建通过；Revision 5 路由 HTTP 200；桌面、手机横竖屏、键盘、触控、modal 焦点、长帧钳制、reduced-motion、无 JavaScript、无 Canvas 和控制台错误均有自动证据。
- Adjacent regression audit：Project 009 定向回归与 Pages 构建通过；没有修改固定上游 submodule 或 Project 007/008 等相邻在途内容。
- Decision：`pass` for Revision 6；下一扩展需先以 rigVersion 2/3 建立经验证的髋—膝—踝骨链，再考虑 production locomotion、death 与 hitbox 事件。

### Revision 5 · Capability Run contract

```text
Scene base: Canvas 2D 横向世界，960×540 逻辑视口、约 2800px 世界宽度、平滑镜头跟随。
Scene persistence: 横向旧站从简报、探索、战斗、终端到信标始终可见；能力证据以场景上方 modal 展开，关闭后返回原位置。
Foreground control model: 顶部任务 / 生命 / 模块 / 小地图；底部对话；桌面键盘；移动端六键触控；能力 modal 支持关闭、Escape 与焦点返回。
State-to-scene mapping: available 为 NPC 简报；active 为三终端与敌人激活；combat 显示受伤、脉冲和清除；ready 点亮最终信标；complete 显示能力组合结论；failed 显示最近检查点恢复。
Mobile transformation: Canvas 保持主场景；HUD 压缩；六键触控分为移动、跳跃、攻击、交互、重置；能力证据改为可滚动紧凑 modal。
Fallback: 无 Canvas 时仍列出 Rig / QA / Export 三层真实证据和库 / 游戏职责；reduced-motion 关闭雨、粒子、镜头缓动与非必要漂浮，保留玩法。
Library truth boundary: 只有林简四帧 idle、benchmark QA 数值和导出元数据归属 Sprite Studio 产物；探索器、敌人、地形、镜头、物理、战斗、粒子和任务状态明确属于游戏层。
```

### Revision 5 design direction

| 决策 | 选择 | 可观察约束 | 验收标准 |
| --- | --- | --- | --- |
| 构图 | 横向世界 + 持续 HUD + 能力弹层 | 场景是主要操作面，不退化为页面下方说明 | 首屏能看到世界纵深、任务、生命、模块与操作入口 |
| 复杂度 | 跳跃、脉冲、故障体、检查点、三终端、信标 | 每种机制必须改变场景与 HUD，不增加无反馈按钮 | 主路径至少经历一次战斗、三次终端激活和一个完成态 |
| 能力呈现 | Rig / QA / Export 作为关卡目标 | 每个终端展示真实数据和边界，不用程序视觉冒充库产物 | 弹层分别显示四帧、94/76/95.12 与 4 PNG / 6 FPS / hashes |
| 视觉 | 雨夜旧站、视差城市、灯轨、粒子与终端色彩 | 视觉层服务空间方向和反馈；reduced-motion 可关闭 | 桌面有明显纵深，手机仍看清玩家、危险和目标 |
| 输入 | 键盘 + 六键触控 | 移动、跳跃、攻击、交互、重置均可触达 | 桌面和手机都能完成至少一次终端激活与敌人清除 |
| 边界 | 林简仍为原地 NPC idle | 不生成或伪造 run / attack；游戏层程序元素显式标注 | 任一能力说明都不会把玩法代码归给 Sprite Studio |

### Revision 5 coverage

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 升级复杂度 | 横向世界、镜头、跳跃与 HUD | 1280×900 / launch | 浏览器截图、玩家与 camera 坐标、DOM | 1–4 | pass | 无 |
| 升级复杂度 | 脉冲战斗、敌人、生命与失败恢复 | desktop / combat→failed→retry | 命中、生命、敌人状态、恢复路径 | 5–6 | pass | 无 |
| 展现库能力 | Rig / QA / Export 三终端 | terminal-1/2/3 modal | 真实帧、benchmark 数值、导出合同、焦点 | 3–6 | pass | 无 |
| 完整主循环 | 简报→三终端→信标→完成 | available→active→ready→complete | 确定性 fixture 与真实游玩路径 | 5–6 | pass | 无 |
| 跨端操作 | 键盘与六键触控 | 390×844 / 844×390 | 触控跳跃、攻击、交互、无溢出 | 4、7 | pass | 无 |
| 降级与性能 | reduced-motion / no-canvas / no-js / live scene | 多能力状态 | modal、fallback、帧计数、错误 | 7–8 | pass | 无 |
| 研究与交付 | 研究入口、README、测试、Pages | 项目页、游戏页、构建 | 静态、浏览器、截图、构建 | 3、9 | pass* | Project 009 范围通过；Project 007 聚合例外独立留档 |

### Revision 5 baseline record

- Current stage：Stage 1 · Runnable baseline；revision-led。
- Browser environment：`http://127.0.0.1:4173/demos/sprite-maker-scene/?state=near`，1280×900 与 390×844，深色主题，2026-08-29。
- Observed evidence：原版本 30/30 浏览器路径通过，能够领取、收集三枚碎片和提交；但世界只有单屏，玩家无跳跃/攻击/受伤，碎片只需调试坐标移动即可收集，库能力只以一条 provenance 标签出现。
- Problem category：整体体验和能力信息架构不足；不是单点视觉缺陷。
- Root cause：Revision 4 的目标是最小采用证明，场景范围主动限制为静态 NPC + 三个收集物，未把 Rig、QA、Export 变成可操作内容。
- Minimal coherent intervention：保留真实四帧和能力边界，升级为多屏横向能力关卡；复杂玩法全部由程序层实现，三能力终端只展示已留档证据。
- Adjacent regression surfaces：原有 fixtures、静态哈希、研究入口、桌面/手机横竖屏、键盘/触控、modal 焦点、reduced-motion、no-canvas、no-js、固定时间步与 Pages 构建。
- Observed result：独立路由已升级为 2800px 横向世界；玩家具备镜头跟随、跳跃、障碍碰撞、脉冲攻击、受伤、失败与检查点恢复；五个巡逻故障体形成战斗门禁；Rig、QA、Export 三终端分别呈现四张真实帧、94/76/95.12/100 benchmark 和 4 PNG / 6 FPS / hashes 导出合同；只有三终端上线且五个故障体全部清除后，最终信标才可完成。
- Verification：研究页静态 `47/47`、浏览器 `57/57`；游戏静态 `32/32`、浏览器 `47/47`；Pages 构建通过；桌面、390×844、844×390、键盘、触控、modal 焦点、长帧钳制、reduced-motion、无 JavaScript 与无 Canvas 均有自动证据。
- Adjacent regression audit：Project 009 范围和 Pages 构建通过；全库聚合仍在未跟随修改的 Project 007 两项过期断言停止，未修改或覆盖该子项目在途内容。
- Decision：`pass` for Revision 5；本轮复杂能力关卡无剩余可执行项。下一扩展若要求林简行走或攻击，应先制作四肢分离、可稳定 Rig 的 motion-ready master，再新增经验证的 run / attack 帧组。

### Revision 4 · Spatial Stage contract

```text
Scene base: Canvas 2D；背景、探索器、碎片、交互范围与真实 NPC 帧均在同一画布。
Scene persistence: 从进入到任务完成始终可见；说明与操作作为前景 HUD，不把主流程移到画布下方。
Foreground control model: 顶部任务状态与资产来源；底部键盘提示；移动端左右/交互/重置触控条。
State-to-scene mapping: available 显示 NPC 任务标记；active 显示三枚碎片与进度；ready 高亮返回 NPC；complete 显示完成信号与复玩入口；recovery 通过 R/重置恢复初始状态。
Mobile transformation: Canvas 保持 16:9 场景，HUD 压缩为上下叠层，触控按钮固定在场景下方且不遮挡主体。
Fallback: Canvas 不可用时保留任务说明、真实帧来源和返回研究页入口；reduced-motion 冻结 NPC 在首帧但不影响任务逻辑。
```

### Revision 4 coverage

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 构造简单游戏 | 独立可玩路由与真实四帧 NPC | 1280×900 / launch | HTTP、资源哈希、截图、Canvas 像素 | 1–3 | pass | 无 |
| 构造简单游戏 | 键盘移动、接近与领取任务 | desktop / available→active | 真实按键、状态文本、玩家坐标 | 4–6 | pass | 无 |
| 构造简单游戏 | 收集三枚碎片并提交 | desktop / active→ready→complete | 确定性 fixture 与完整游玩路径 | 5–6 | pass | 无 |
| 构造简单游戏 | 触控与窄屏 | 390×844 / portrait | 触控按钮、无溢出、截图 | 7 | pass | 无 |
| 构造简单游戏 | reduced-motion 与能力 fallback | reduce / no-canvas description | 首帧冻结、语义 fallback | 8 | pass | 无 |
| 构造简单游戏 | 回归与交付 | 项目页、游戏页、Pages | 静态检查、浏览器、全库、构建 | 9 | pass* | Project 007 聚合测试例外单独留档 |

### Revision 4 baseline record

- Current stage：Stage 0 · Goal lock。
- Browser environment：现有 `http://127.0.0.1:4173/projects/sprite-maker-study/#use-case-demo`，1440×1000，2026-08-29。
- Observed evidence：角色选择/NPC 对话/战斗阻断三态演示已证明合理用途，但仍是产品情境模拟；没有玩家控制、空间接近、收集或任务状态转换。
- Minimal intervention：新增一个隔离的 Canvas 微型游戏；玩家为程序化探索器，林简仅使用真实 idle 帧并保持原地，避免把未验证的 run 伪装成能力。
- Adjacent regression surfaces：Project 009 研究页入口、桌面/手机、键盘/触控、reduced-motion、资源加载、固定时间步和全库构建。
- Initial decision：`continue`；下一动作是创建可运行基线和四帧资源副本。
- Observed result：独立路由完成领取、三次收集、返回提交与重置；四张发布帧与 native-workspace 逐张哈希相同；桌面、390×844、844×390、键盘、触控、reduced-motion、无 JavaScript 和无 Canvas 降级均通过。
- Verification：研究页静态 `47/47`、浏览器 `56/56`；游戏静态 `21/21`、浏览器 `30/30`；Pages 构建与 HTTP 200 通过。
- Adjacent regression audit：`npm run test:all` 在 Project 007 停止；该未跟随修改的子项目当前已有 16 张实验 PNG，而其检查仍期待 12 张，且设计契约已是 Revision 4、检查仍期待 Revision 3。Project 001–005、008、009、010 的目标检查均通过。
- Decision：`pass` for Project 009；没有修改或覆盖 Project 007 的在途内容，聚合测试例外保留给该子项目独立收口。

### Revision 3 baseline record

- Current stage：Stage 3 · Information and layout calibration。
- User phase：构造合理使用场景演示。
- Browser environment：`http://127.0.0.1:4173/projects/sprite-maker-study/#own-test`，1440×1000，深色主题，2026-08-29。
- Observed evidence：`assets/project-009-own-sample.png` 已显示真实 idle、接触表与 Tauri UI，但用户仍需从技术证据自行推断它应该放进什么产品界面。
- Problem category：信息与使用语境缺口；不是渲染缺陷。
- Minimal intervention：新增一个三状态使用场景演示，复用同一真实 idle；角色选择与 NPC 对话标记为适用，战斗移动标记为阻断，不新增生成素材或后台系统。
- Adjacent regression surfaces：章节导航、现有实测区、1440/820/390px、键盘标签、reduced-motion、媒体加载和无横向溢出。
- Observed result：新增角色选择、NPC 对话、战斗移动三种状态；前两种复用真实 idle，第三种显示发布阻断；桌面与手机截图确认阅读层级和响应式布局。
- Decision：`pass`；无剩余可执行项。

| 决策 | 方向 | 可观察约束 | 验收标准 |
| --- | --- | --- | --- |
| 首屏层级 | 先回答“不是模型，需要 Provider，但核心资产与渲染在本地” | 标题、判断、依赖边界与官方演示入口首屏可见 | 第一次扫描不会误解为本地模型包 |
| 阅读路径 | 判断 → 官方证据 → 工作流实验 → 原理 → 场景 → 我们的价值 → 扩展与采用 | 固定章节导航和清晰编号 | 用户要求的每个问题有独立可定位章节 |
| 证据分层 | 上游官方媒体、源码事实、Project 009 研究模拟使用不同标签 | 不把实验台当成真实生成器，不把官方 GIF 说成我们的结果 | 每个演示都能看出来源和证据等级 |
| 视觉语言 | 像素工作台 + 技术档案；绿=本地、橙=AI、蓝=持久化 | 语义不只依赖颜色，所有状态同时有文字标签 | 图例、卡片和流程在各视口可读 |
| 响应式 | 宽屏双栏/三栏，窄屏单栏；实验台控制在上、结果在下 | 390px 页面无横向溢出，媒体保留正确比例 | 导航、标签、流程与表格均可访问 |
| 动效与媒体 | 只使用官方 GIF 证明外观；界面动效只解释状态切换 | reduced-motion 关闭滚动和非必要过渡；GIF 有文字说明 | 信息不依赖动画播放才能理解 |

## Coverage manifest

| 用户阶段 | 要求或产物 | 表面 / 状态 | 证据 | 阶段 | 状态 | 下一动作 |
| --- | --- | --- | --- | --- | --- | --- |
| 获取仓库 | v0.3.2 固定 submodule | Git / source | commit、tag、.gitmodules | 0、9 | pass | 无 |
| 研究能力 | 能力、原理、边界、成熟度 | README、专题页 | 文件、源码链接、DOM | 3、9 | pass | 无 |
| 展示能力 | 上游官方媒体与来源标签 | 桌面/平板/手机 | 六项哈希、媒体加载、截图、替代文字 | 2、3、7 | pass | 无 |
| 自有样例实测 | Project 003 透明全身角色 | 原图、Rig、4 帧、Tauri UI、QA | 三次门禁、四帧哈希、确定性复渲染、native-v1、人工复核 | 2、3、7、9 | pass | 原 native 结果保持 idle 用途 |
| 多动作扩展实测 | motion-ready master、run-v2、pulse-cast-v1 | 输入审计、版本化 rigs、9 帧、接触表、游戏 companion | 透明通道、哈希、帧差、93.962% 最少精确保持、人工边界 | 2–7、9 | pass | 生产前升级髋—膝—踝骨链 |
| 合理场景演示 | 角色选择 / NPC 对话 / 战斗移动 | 桌面、平板、手机、reduced-motion、键盘 | 三状态交互、真实 idle、阻断状态、截图、DOM 与无溢出 | 3、4、5、6、7、8、9 | pass | 无 |
| 可玩游戏场景 | 旧站能力横向关卡 | 桌面、手机横竖屏、键盘、触控、fallback | 13 帧加载、companion run/cast、跳跃/战斗/失败恢复、三终端证据、53 项浏览器检查 | 1–9 | pass | 生产前升级动作骨链与事件合同 |
| 复杂战斗试运行 | 三段压力 / 护盾 / 闪避 / 同步施法 / 双阶段 Boss | 桌面、手机横竖屏、reduced-motion、键盘、触控、fallback | 真实 run/cast 帧、动作窗口、稳定 action id、单次命中、三连弹幕、失败重试、46 项浏览器检查 | 1–9 | pass | 作为动作资产进入复杂玩法前的独立验证门 |
| 跨产品应用试运行 | 桌面伙伴 / 互动展厅 / 教学 / 营销 / 轻量原型 | 桌面、平板、手机、键盘、抽屉、reduced-motion、no-js | 五个业务状态机、真实动作帧、query fixture、snapshot、32 项浏览器检查 | 1–9 | pass | 无 |
| 展示能力 | 四类工作流与三种动画模式 | 默认/切换/复制反馈 | 点击、键盘、DOM 状态 | 4–7 | pass | 无 |
| 意义与价值 | 与 Project 001/003/002 的关系和采用建议 | 正文、价值矩阵 | DOM 文本、链接 | 3、7 | pass | 无 |
| 使用场景 | 高匹配、条件匹配、不适合 | 正文、决策卡 | DOM 文本 | 3、7 | pass | 无 |
| 扩展方向 | P0–P2 路线 | 正文、优先级列表 | DOM 文本 | 3、7 | pass | 无 |
| 总库集成 | Project 009 卡片、README、构建入口 | 首页、项目页、CI | 导航、文件、Pages 构建 | 1、9 | pass | 无 |
| 自动检查 | Project 009 与 Pages | Node、构建、HTTP | 研究静态 53/53、浏览器 66/66；游戏静态 36/36、浏览器 53/53；复杂战斗静态 30/30、浏览器 46/46；应用实验室静态 26/26、浏览器 32/32；构建成功 | 7、9 | pass | 无 |
| 自动检查 | 全库聚合测试 | Node | Project 001–005 通过后在未跟随修改的 Project 007 两项过期断言停止；008/009/010 定向复核通过 | 7、9 | external-blocker | Project 007 独立收口 Revision 4 与新增资产断言 |

## Runtime record

- Canonical runtime：研究页 `http://127.0.0.1:4173/projects/sprite-maker-study/`；应用实验室 `http://127.0.0.1:4173/demos/sprite-maker-application-lab/?scene=companion`；复杂战斗 `http://127.0.0.1:4173/demos/sprite-maker-combat-trial/?state=briefing`，本地 HTTP 200。
- `npm run test:project-009`：研究静态 53/53、游戏静态 36/36、复杂战斗静态 30/30、应用实验室静态 26/26 通过。
- `projects/sprite-maker-study/tests/browser-check.cjs`：66/66 通过；覆盖 1440、820、390px、自有样例媒体与门禁、三种合理场景、Revision 8 应用实验室入口、Revision 7 复杂战斗入口、Revision 6 多动作入口、Revision 5 对比入口、四任务、三动画模式、键盘、无 JavaScript、复制、首页入口、reduced-motion、横向溢出与控制台错误。
- `npm run test:project-009-game`：36/36 通过；四张 native idle、motion-ready master 和九张采用动作帧与实验哈希一致，横向世界、companion、战斗门禁、三终端、状态机、输入、固定时间步与降级合同完整。
- `projects/sprite-maker-study/game-demo/tests/browser-check.cjs`：53/53 通过；真实验证 companion 部署、run-v2 跟随、cast-v1 切换与单投射物边界，以及移动、镜头、跳跃、障碍、脉冲、清敌、受伤、失败恢复、三终端门禁和最终完成；并覆盖 Revision 5 路由、390×844、844×390、触控、modal 焦点、长帧钳制、reduced-motion、无 JavaScript 与无 Canvas。
- `npm run test:project-009-combat-trial`：30/30 通过；10 张采用动作资产与实验哈希一致，三段压力、四类敌人、护盾、同步能量、动作窗口、稳定 action id、失败重试和 Boss 二阶段合同完整。
- `projects/sprite-maker-study/combat-trial/tests/browser-check.cjs`：46/46 通过；真实验证 Pulse 启动窗与命中、Dodge 无敌与奖励、Sync Cast 单次接触、护盾破坏、波次推进、Boss 半血切相、Phase 2 三连弹、普通无敌不误记完美闪避、失败重试、胜利复位、性能与桌面/移动/fallback 状态。
- `npm run test:project-009-application-lab`：26/26 通过；10 张采用动作资产与实验哈希一致，五场景、三 fixture、资产业务边界、query、snapshot、键盘、抽屉与降级合同完整。
- `projects/sprite-maker-study/application-lab/tests/browser-check.cjs`：32/32 通过；真实完成专注、双故事分支、教学答题、营销 CTA 和两次原型命中，覆盖桌面/平板/手机、抽屉可视边界、Escape/焦点返回、reduced-motion、no-js、无外部请求、加载性能与控制台错误。
- `npm run build:pages`：通过，审计 JSON 与静态站点被正确组装到 `.pages-dist/`。
- `agent-browser` 首轮检查：页面有 5084 字符正文、无框架错误覆盖层、无页面错误；交互元素快照完整。
- 上游 Rust：全量 133 项中 107 通过；26 项仅因 Windows PATH 缺少 `python3` 命令而停止。`--skip bundled_rig` 后 107/107 通过。
- 全库 `npm run test:all`：本次在未跟随修改的 Project 007 停止，原因是该子项目已有 16 张实验 PNG 而检查仍期待 12 张、设计契约已是 Revision 4 而检查仍期待 Revision 3；Project 001–005、008、009、010 的目标检查通过，Project 009 未修改该在途子项目。
- 浏览器证据：`assets/project-009-agent-browser-full.png`、`assets/project-009-desktop.png`、`assets/project-009-lab.png`、`assets/project-009-mobile.png`。
- 自有样例：真实 Tauri UI 已启动；一次 Codex 视觉规划；0 次 ImageGen；第三次门禁通过并生成 4 帧；复渲染哈希一致；native-v1 overall 94 / motion 76；结论 CONDITIONAL。
- 合理场景演示：角色选择 `USE NOW`、NPC 对话 `REUSE`、战斗移动 `DO NOT SHIP`；桌面证据 `assets/project-009-use-case-demo.png`，手机证据 `assets/project-009-use-case-demo-mobile.png`。
- 可玩场景：`demos/sprite-maker-scene/`；冻结快照 `demos/sprite-maker-scene-r5/`；研究入口 `assets/project-009-game-entry.png`、companion 施法 `assets/project-009-game-companion.png`、Rig 证据 `assets/project-009-game-rig-module.png`、Export 合同 `assets/project-009-game-module.png`、手机 `assets/project-009-game-mobile.png`、完成态 `assets/project-009-game-complete.png`。
- 复杂战斗试运行：`demos/sprite-maker-combat-trial/`；研究入口 `assets/project-009-combat-trial-entry.png`、说明态 `assets/project-009-combat-trial-briefing.png`、Boss 压力态 `assets/project-009-combat-trial-boss.png`、手机态 `assets/project-009-combat-trial-mobile.png`、完成态 `assets/project-009-combat-trial-complete.png`。
- 应用场景实验室：`demos/sprite-maker-application-lab/`；研究入口 `assets/project-009-application-lab-entry.png`、桌面默认 `assets/project-009-application-lab-desktop.png`、故事分支 `assets/project-009-application-lab-story.png`、营销完成 `assets/project-009-application-lab-marketing.png`、手机抽屉 `assets/project-009-application-lab-mobile.png`。
- 边界：native-v1 只批准轻微 idle；多动作扩展批准小比例 companion 展示与状态切换，但 run-v2 仍是宽裤腿区域旋转，未声明为生产级髋—膝—踝 locomotion；Application Lab 的提醒、分支、课程、CTA 和规则全部是本地业务模拟，不冒充 Sprite Studio 产物。
