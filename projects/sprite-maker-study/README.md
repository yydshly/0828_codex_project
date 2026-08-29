# SPRITE PRODUCTION, LOCAL FIRST

> Project 009：固定研究 `JohnKinyanjui/sprite-maker`，用上游真实演示、源码审计和一个可操作的工作流实验台，判断它如何把 AI 生图推进为可动画、可检查、可版本化、可导出的本地游戏资产生产系统。

[发布索引](./RELEASE.md) · [在线研究演示](https://yydshly.github.io/0828_codex_project/projects/sprite-maker-study/) · [五场景应用实验室](https://yydshly.github.io/0828_codex_project/demos/sprite-maker-application-lab/) · [复杂战斗试运行](https://yydshly.github.io/0828_codex_project/demos/sprite-maker-combat-trial/) · [返回研究总库](https://yydshly.github.io/0828_codex_project/) · [上游仓库](https://github.com/JohnKinyanjui/sprite-maker)

## 基本信息

| 项目字段 | 内容 |
| --- | --- |
| 项目编号 | 009 |
| 研究对象 | `JohnKinyanjui/sprite-maker` / Sprite Studio |
| 固定版本 | `v0.3.2` |
| 固定提交 | `336c7114f0fce7336ec17f6e9beb93980ed03b1d` |
| 获取方式 | Git submodule：[`source/`](./source/) |
| 许可证 | MIT |
| 研究状态 | 源码级拆解与 Project 003 自有角色原生 Rig 实测已完成 |
| 研究日期 | 2026-08-29 |

## 一句话结论

Sprite Studio **不是模型，也不附带模型权重**。它是一套桌面资产工作台：外部 AI Provider 负责理解需求、生成源图或可选润色；本地 Rust 引擎负责骨骼、IK、确定性动画、质量诊断和导出；SQLite 与普通项目文件负责保存长期状态。

```text
Prompt / 参考图
→ Agent CLI 与生成 Harness
→ 一张可运动的源资产
→ AI 建议骨骼与关键姿势
→ Rust 确定性变形、IK 与逐帧渲染
→ 像素级质量诊断
→ PNG 帧、Sprite Sheet、JSON、Godot Terrain
```

所以它真正解决的不是“怎样生成一张好看的图”，而是“怎样把生成结果变成可持续使用的游戏资产”。

## 需要安装模型吗

不需要下载 Stable Diffusion、Flux 等模型权重。使用发布版时仍需要一个可用的 AI Provider：

- Codex CLI、Claude Code、Gemini CLI 或 Grok CLI；
- 或 OpenAI-compatible 图像 API；
- 生成过程通常需要联网，并受对应账号、额度和数据政策约束；
- Rig 编辑、确定性渲染、像素检查、资产管理和导出属于本地能力。

如果从源码构建，还需要 Bun、Stable Rust 与 Tauri 2 的平台依赖。仓库没有提供“安装后完全离线生图”的模型包。

## 已获取的上游项目

`source/` 是正式 Git submodule，固定到 `v0.3.2`，而不是复制出来的无版本源码。审计时观察到：

- 21 个提交、171 个被跟踪文件；
- 22 个 Rust 源文件、37 个 Svelte 组件；
- 84 个 Tauri command 入口；
- Tauri 2 + Svelte 5 + Rust + SQLite；
- macOS、Windows、Linux 桌面目标，不包含 Android/iOS；
- MIT 许可证允许研究、修改和再分发，但须保留许可证声明。

结构化审计数据保存在 [`experiments/upstream-audit.json`](./experiments/upstream-audit.json)。

## 能力地图

| 能力层 | 已实现内容 | 主要交付物 | 真实边界 |
| --- | --- | --- | --- |
| 输入与生成 | 对话、参考图、尺寸、风格、帧数、FPS、Provider 选择 | 静态 Sprite、源角色、道具、VFX | 生图质量仍由外部 Provider 决定 |
| 工作流路由 | Character、Creature、Game Object、Environment、Tileset、UI、VFX harness | 分类资产和对应生成合同 | 英文关键词和规则路由仍占较大比例 |
| 动作规划 | walk、run、attack、cast、death、dodge、VFX 等阶段模板 | Motion plan、关键阶段和帧预算 | 不是通用物理仿真或端到端动作模型 |
| Rig 与动画 | AI/模板/手工关节点、胶囊骨骼、父子层级、关键姿势、接触点 IK | 可重复渲染的 PNG 动画帧 | 平面像素变形可能产生关节拉伸和遮挡问题 |
| 编辑与预览 | 时间线、洋葱皮、逐帧时长、循环播放、Playground | 可人工验收的动作循环 | 最终艺术判断仍依赖人 |
| 资产生产 | 同风格 Pack、完整 Terrain Atlas、程序化和 ImageGen VFX | 独立 PNG、Pack manifest、terrain atlas | Terrain 仍需项目侧切片和运行时接入 |
| QA 与版本 | 尺寸、Alpha、边缘、质心、重复帧、帧差、调色板、循环检查；内容哈希版本与非破坏修复 | Quality report、repair、历史版本 | 像素指标不能判断“像不像同一个角色” |
| 导出与恢复 | 横/竖/网格 Sprite Sheet、padding、pivot、JSON、Godot 4 Terrain、备份/恢复 | 游戏可消费文件 | 不是 Unity/Phaser/Canvas 的一键运行时插件 |

## 实现原理

### 1. Agent 是编排层，不是模型本体

Rust 侧检测本机 Provider CLI，发现可用模型和能力，再把当前对话、参考资产和生成设置编译成严格的 Sprite Director / Harness 提示词。外部 Provider 执行需要视觉理解或图像生成的部分。

### 2. 动作规划是规则与视觉判断的混合

固定帧模式下，Rust 根据动作关键词选择 walk、run、attack 等阶段模板并分配帧数；自动模式允许 Agent 在查看源图和形态后推荐最小完整帧数。它的价值是把“做个跑步动画”拆成机械阶段，但仍应把它看成生产规则，而不是通用动作智能。

### 3. 当前核心是 rig-first 动画

AI 或用户提供关节点、胶囊骨骼、层级和关键姿势。Rust 引擎把所有非透明像素分配给骨骼，用最多四个骨骼影响构造确定性变形网格，通过父子仿射变换和双骨骼解析式 IK 固定脚或手。相同源图、Rig 和姿势可得到相同像素结果。

README 仍保留“顺序生成高质量 AI 帧”的较早叙述；当前 `sprite_harness.rs` 与 native rig 合同则明确：Rig 帧是动作姿势权威，AI Polish 和 Full Redraw 是可选后处理。Project 009 以当前代码路径作为结论依据。

### 4. QA 是诊断层，不是审美模型

质量系统读取每帧尺寸、透明边界、质心、边缘像素、感知哈希、平均颜色和相邻帧差，发现背景烘焙、尺寸不一致、主体漂移、重复帧、调色板突变和首尾跳变。这些检查可稳定复现，但不能直接证明身份一致、肢体正确或美术品质。

### 5. Local-first 是状态所有权，不是完全离线

图片、动画、导出和修复文件保存在普通工作区；SQLite 保存项目、对话、工作树、时间线、版本、任务和质量报告。用户可以备份、Git 版本化或直接让游戏读取文件。不过选择云端 Provider 后，提示词和参考图仍可能离开本机。

## 上游真实能力证据

本项目展示的工作台、兔子跳跃、龙飞行、蜈蚣爬行、草地资产包和 terrain atlas 均来自上游 `docs/media/`。上游 provenance 文件说明 v0.2 演示由其端到端工作区中的确定性导出生成。Project 009 只做引用和研究展示，**没有把这些媒体声明为我们的生成结果，也不由此推断稳定成功率**。

## 自有样例实测

我们没有停在官方样片。2026-08-29 在 Windows 上启动固定提交的真实 Tauri 应用，导入 Project 003 的透明正面全身身份锚点，完成了一次 `视觉骨架建议 → 原生结构校验 → 本地渲染 → 原生 QA → 重复渲染`。

### 输入门禁

| 我们的样例 | 判断 | 原因 |
| --- | --- | --- |
| Project 003 身份锚点 | HIGH FIT / 进入实测 | 透明、正面、全身、单角色、轮廓完整 |
| Project 003 交叉手臂全身贴纸 | CONDITIONAL / 保留困难集 | 手臂与躯干遮挡，宽裤腿隐藏膝点 |
| Project 001 完整游戏截图 | REJECT / 不进入 Rig | 场景截图不是独立透明角色 |

样例只做一次 Lanczos contain resize 到 `160 × 224` 透明画布，没有生成式修图。尺寸、Alpha、源文件与归一化文件哈希记录在 [`experiments/own-sample-benchmark/input-audit.json`](./experiments/own-sample-benchmark/input-audit.json)。

### 一次视觉建议，三次本地门禁

1. Codex 视觉规划一次性返回 `23` 点、`19` 根胶囊骨、父子层级和四帧轻微 idle；没有调用 ImageGen，也没有下载模型权重。
2. `validate_rig_spec` 结构通过；第一次渲染因 `0.1–0.3°` 动作不可感知，被 Rust 以 `imperceptible_rig_motion` 拒绝。
3. 第二次将双臂提高到 `±4°`，又因躯干没有有效动作被 `missing_body_motion` 拒绝。
4. 第三次加入上躯干反向 `±4°` 后生成四帧；再次用同一输入渲染，四个 SHA-256 逐一相同。

这恰好说明真实分工：**视觉 Provider 负责看图和提出结构；本地代码不盲信建议，而是执行硬门禁、像素归属、骨骼变换、IK、渲染和 QA。**

### 本地建议器与视觉规划的差异

| 指标 | 本地自动建议 | Codex 视觉规划 |
| --- | ---: | ---: |
| 关节点 / 骨骼 | 15 / 10 | 23 / 19 |
| 肩跨度 | 7px | 36px |
| 手跨度 | 17px | 57px |
| 被宽裤遮挡的膝点置信度 | 0.97 / 0.97 | 0.25 / 0.25 |

本地模板速度快，但这次明显吸附在身体中轴，且对不可见膝点过度自信；视觉规划更接近可见轮廓，也更诚实地表达不确定性。结论不是“让 AI 全自动完成”，而是“视觉初稿 + 人工复核 + 原生门禁”更可靠。

### 结果

- **结论：CONDITIONAL。** 轻微 idle 有条件通过；身份、服装、轮廓和调色板保持，暂不批准 walk/run；
- 4 帧、6 FPS、4 个不同哈希；确定性复渲染通过；输出可见颜色 `100%` 来自同一 master 调色板；
- native-v1：overall `94`、character consistency `100`、motion continuity `76`、alignment `100`、loop `95.12`、transparency `100`；
- 原生 QA 警告第 2→3、3→4 帧过于接近；这些像素分数不能替代身份、解剖和审美复核；
- 对当前资产的正确采用方式是 idle / UI 展示。位移动作应先制作四肢分离、关节可见的 motion-ready master。

完整方法、输入、原始骨架建议、最终 Rig、四帧、QA 和可视证据保存在 [`experiments/own-sample-benchmark/`](./experiments/own-sample-benchmark/)，结构化结论见 [`benchmark-result.json`](./experiments/own-sample-benchmark/benchmark-result.json)。

## 合理使用场景演示

专题页的 [`#use-case-demo`](https://yydshly.github.io/0828_codex_project/projects/sprite-maker-study/#use-case-demo) 把同一组真实四帧 idle 放进三个产品上下文：

| 场景 | 采用判断 | 为什么合理或不合理 |
| --- | --- | --- |
| 角色选择 / 个人资料 | USE NOW | 用户停留观察角色，轻微重心变化足以避免僵硬；不需要位移或新视角 |
| NPC 对话 / 任务面板 | REUSE | 对话承担叙事，角色只需保持生命感；同一 idle 可以低成本复用 |
| 战斗跑动 | DO NOT SHIP | 跑步必须表达腾空、触地、推进和方向；当前宽裤腿隐藏膝点，不能把 idle 循环冒充 run |

这个演示体现了库的三层意义：

1. **复用**：一个已确认身份 master 可以进入角色选择、NPC 对话、商店和任务面板，而不是每个界面重新生图；
2. **控制**：Provider 的建议必须经过 schema、动作门禁、本地渲染、QA 和人工审核，错误用途可以在发布前阻断；
3. **交付**：图片被提升为包含帧、FPS、循环、pivot、版本和质量证据的游戏资产合同。

因此最合理的首个生产落点不是复杂战斗角色，而是独立游戏中的大厅角色、NPC、商店角色、任务发布者和收藏图鉴。它们能立即利用当前 idle 的优势，同时避开平面 Rig 在大幅度关节运动上的短板。

## 可玩游戏场景：旧站能力试运行

[`CAPABILITY RUN / 旧站能力试运行`](https://yydshly.github.io/0828_codex_project/demos/sprite-maker-scene/) 已进入 Revision 6。Revision 5 被保存为独立快照；主路由在同一条 2,800px 横向关卡中加入了真实多动作 companion：

1. 控制探索器接近林简，按 `E` 接受能力试运行；
2. 用 `W / ↑ / Space` 跳过信号障碍，用 `J / F` 发射脉冲清理五个巡逻故障体；
3. 激活 Rig 后部署林简动作投影；投影跟随玩家并在移动/发射时切换 run-v2 / pulse-cast-v1；
4. 继续激活 QA、Export；每个终端都会暂停场景并展开真实证据；
5. 三个模块全部上线后，到最右侧启动最终信标；
6. 完整度归零时从最近能力终端恢复，完成或失败都可以重玩。

桌面使用 `A / D` 或左右方向键移动、`W / ↑ / Space` 跳跃、`J / F` 脉冲、`E / Enter` 交互、`R` 重置；手机和平板提供六个触控按钮。`?state=near|active|terminal-1|terminal-2|terminal-3|combat|ready|complete|failed` 提供确定性验收状态。

三个终端直接展示我们已经留档的库能力：

| 终端 | 真实内容 | 结论 |
| --- | --- | --- |
| RIG | native idle 4 帧；motion-ready master；run-v2 4 帧 / 10 FPS；pulse-cast-v1 5 帧 / 12 FPS | 同一角色可进入版本化的多动作状态机；run 仍只批准小比例演示 |
| QA | idle overall `94`、motion `76`、loop `95.12`；新增动作 9 / 9 帧唯一、最少 `93.962%` 精确 RGBA 保持 | 能发现像素、边缘混合和循环问题，但不是审美或动作语义模型 |
| EXPORT | 13 PNG、state、FPS、loop、pivot、version、provenance manifest | 图片被提升为可追溯的多状态游戏资产合同 |

场景仍然故意分开职责：

| 层 | 实际贡献 | 没有声称的能力 |
| --- | --- | --- |
| 生成式输入准备 | 基于身份锚点生成并提取 motion-ready RGBA master | 不把输入编辑说成 Sprite Studio 的动作能力 |
| Sprite Studio | 林简四张 native idle、四张 run-v2、五张 pulse-cast-v1、版本所有权、QA 与导出元数据 | 没有生成探索器、敌人、地形、跟随 AI 或脉冲伤害 |
| 游戏代码 | companion 跟随与动作选择、镜头、物理、跳跃、障碍、脉冲伤害、敌人、生命、检查点、终端 modal、任务状态机 | 没有修改或冒充角色动画质量 |
| 组合结果 | 一个有探索、战斗、失败恢复和能力证据的横向关卡 | 不是自动游戏生成器，也不等于库已经生成整套战斗资产 |

因此它对游戏开发的现实意义是：**资产生产管线可以进入复杂运行时，但不会替代运行时。** 这次已经完成 motion-ready master、run 与 pulse-cast 的真实接入；但 run-v2 仍是宽裤腿区域旋转，而不是生产级髋—膝—踝骨链。完整实验、两个被保留的 run 版本和采用边界见 [`experiments/multi-action-benchmark/`](./experiments/multi-action-benchmark/)。

可随时对比冻结的 Revision 5：`/demos/sprite-maker-scene-r5/?state=near`。

实现、职责边界、fixtures 和验收矩阵见 [`game-demo/`](./game-demo/)。

## 复杂战斗试运行：同步穹顶

[`COMBAT TRIAL / 同步穹顶战斗试运行`](https://yydshly.github.io/0828_codex_project/demos/sprite-maker-combat-trial/) 是在 Revision 6 之外新增的独立试运行模块，不覆盖既有能力关卡。它验证的不是“多放几个敌人”，而是同一组真实 master / run-v2 / pulse-cast-v1 如何进入显式战斗状态机：

1. `PRESSURE 01` 同时部署追击哨兵和远程中继，要求读取攻击预警并用脉冲积累同步；
2. `PRESSURE 02` 增加四点护盾的壁垒，普通脉冲只造成一点护盾压力，林简协同施法造成四点；
3. `PRESSURE 03` 部署 14 HP 的 Signal Warden，半血后进入 Phase 2，并把单次攻击改为三重远程脉冲；
4. 玩家动作具有固定合同：Pulse 为 `80ms startup / 220ms cooldown`，Dodge 为 `180ms travel / 220ms invulnerable / 850ms cooldown`，Sync Cast 为 `167ms startup / single contact / 250ms recovery`；
5. 每次攻击使用稳定 action id，视觉反馈只跟随已经解决的命中、护盾、回避和阶段事件；
6. 失败后重试当前压力段，完成后显示资产层与运行时层的最终职责结论。

桌面使用 `A / D` 移动、`J` 脉冲、`K / Shift` 闪避、`L / C` 协同施法、`E / Enter` 开始、`R` 重置；手机提供对应七键触控。`?state=briefing|wave-1|wave-2|sync-ready|boss-1|boss-2|victory|failed` 提供确定性复核入口。

| 层 | Combat Trial 中的真实贡献 |
| --- | --- |
| Sprite Studio 资产 | motion-ready master、run-v2 四帧、pulse-cast-v1 五帧、FPS 与版本来源 |
| 游戏战斗运行时 | 三个 encounter、四类敌人、攻击时序、投射物、护盾、闪避、同步能量、Boss Phase 2、伤害与胜负 |
| 可观测合同 | snapshot、event log、action windows、八个 fixtures、静态与真实浏览器验收 |

结论仍是 `CONDITIONAL / COMPLEX-SCENE READY`：它证明多动作资产可以进入复杂战斗状态和权威命中事件，但不把当前 run-v2 宣称为生产级髋—膝—踝 locomotion。实现与验收说明见 [`combat-trial/`](./combat-trial/)。

## 应用场景实验室：同一动作资产进入五种业务

[`APPLICATION LAB / 应用场景实验室`](https://yydshly.github.io/0828_codex_project/demos/sprite-maker-application-lab/) 在游戏证明之外增加五个可操作产品壳层。它不新增生成式资产，也不把 Sprite Studio 说成业务框架；它验证的是同一组真实 master / run-v2 / cast-v1 怎样通过状态适配器被不同产品复用：

1. **虚拟人 / 桌面伙伴**：开始专注、提醒喝水和完成反馈会切换 idle、run、cast；计时、提醒策略和用户偏好属于桌面应用；
2. **互动故事 / 数字展厅**：观众选择信号线或档案线，角色移动或讲解；分支、展品数据和访问进度属于内容系统；
3. **教学演示**：角色分步讲解“谁拥有施法时机”，回答正确后触发反馈；课程、答案和学习记录属于教学系统；
4. **营销页面中的动态人物**：访客展开产品系列或模拟预约，角色强化 CTA 反馈；产品声明、分析和表单提交属于营销系统；
5. **低成本游戏原型**：先开始遭遇，再用两次脉冲清除目标；输入、伤害、胜负和关卡属于游戏运行时。

实验室采用语义 DOM + CSS Spatial Stage，不依赖 Canvas、WebGL、外部字体或远程服务。桌面显示持续可见的职责检查器；手机将它转换为支持 Escape、焦点返回和遮罩关闭的底部抽屉。`?scene=companion|story|teaching|marketing|prototype&state=default|active|complete` 提供确定性复核入口。

| 层 | Application Lab 中的贡献 |
| --- | --- |
| Sprite Studio 资产 | motion-ready master、run-v2 四帧、pulse-cast-v1 五帧、版本与来源 |
| 状态适配器 | 把“开始专注”“移动到展品”“回答正确”“CTA 完成”“规则通过”映射到 idle/run/cast |
| 上层业务 | 提醒、分支、课程、CTA、分析、输入、伤害、胜负及持久化 |

这组展示的核心结论是：**库降低了动态人物资产的制作与复用成本，但每个产品仍需按自身需要构造业务状态、数据和规则。** 实现、fixture、测试 API 与验收说明见 [`application-lab/`](./application-lab/)。

## 使用场景

### 高匹配

- 独立游戏、Game Jam、小团队快速建立可用 2D 资产基线；
- 已有一张透明角色或怪物，需要 idle、walk、run、attack、death；
- 同一美术方向下批量制作怪物、道具、环境或 UI Pack；
- 需要完整 terrain atlas、Sprite Sheet、pivot、FPS 和 JSON 的 Canvas、Phaser 或 Godot 项目；
- 需要本地资产历史、可回退修复和可审计生成上下文的工作流。

### 条件匹配

- 非像素风 2D：支持 cel-shaded、painterly 等方向，但 rig 仍然是平面像素变形；
- 严格角色一致性：Rig-only 能锁住源像素，但无法凭空产生完美的新视角；AI 重绘则重新引入身份漂移；
- 商业资产生产：适合作为草稿和中间生产层，仍需要人工版权、构图和最终质量验收。

### 不适合直接承担

- 只生成一张头像或插画；
- Spine、Live2D 等运行时骨骼和蒙皮资产；
- AAA 级复杂角色、表情、布料、面部和多角色交互动画；
- 3D 资产、移动端原生编辑或大型多人协作 DAM；
- 无人工复核的批量正式交付；
- 完全离线且不自行部署兼容 Provider 的生图流程。

## 对我们的意义与价值

### 对 Project 001：从程序化形状走向可维护的游戏资产

`OUTRUN THE LEVEL` 已验证玩法、固定时间步与公平关卡，但角色和效果仍是 Canvas 程序化视觉。Sprite Studio 可以作为独立资产生产端，先试做角色 run/death、重力门、收集物和一组 VFX，再由游戏侧实现轻量 Sprite Sheet 播放器。它不会替代玩法代码，只补充资产层。

### 对 Project 003：补上“可动画资产工作台”

`PERSONAL IP ASSET SYSTEM` 已有身份锁、风格锁、`character vN × style sN × release rN`、lineage 与文件级 QA。Sprite Studio 恰好提供桌面浏览、时间线、Rig、动画、质量报告和导出。两者结合后，可以形成比单次生图更完整的 Character Asset Workbench。

### 对 Project 002：验证 Skill 产品化公式

它是 `Skill / Harness + 项目状态 + 原生确定性工具 + QA + 导出` 的真实产品样本，验证 AI 原生产品的壁垒不只来自提示词，而来自资产历史、可重复计算、审核证据和下游交付。

### 可直接复用的四种机制

1. **Harness 编译层**：把普通语言编译成分类、尺寸、帧数、质量门禁与交付合同。
2. **确定性后处理层**：让模型负责不确定的创造，让代码负责可验证的变形、检查和导出。
3. **Artifact + Manifest**：每次生成都成为可寻址、可恢复、可追踪的项目资产。
4. **人机验收闭环**：自动指标负责发现异常，播放和人工审核负责最终判断。

## 可扩展方向

### P0 · 先把它变成稳定平台

- 统一并版本化 Provider adapter、Harness schema、Rig schema 和 Manifest；
- 提供 headless CLI / SDK，让批处理和 CI 不依赖桌面 UI；
- 补齐 Windows `python3`/`python` 探测、源码依赖说明和跨平台集成测试；
- 解决 README 版本、帧范围和当前 rig-first 路径的文档漂移。

### P1 · 接入真实游戏生产

- 导出 Canvas、Phaser、Three.js、Godot 和 Unity 可直接读取的动画配置；
- 增加 hitbox、hurtbox、攻击帧、脚步事件、root motion 和状态机；
- 支持 4/8 方向动作、装备/武器分层、调色换装、动画组合与批量变体；
- terrain atlas 自动切片、碰撞、多层 TileMap 和完整 Godot 示例场景。

### P1 · 提升一致性与质量验证

- 引入角色卡、身份锁、风格锁和跨版本 lineage；
- 增加语义身份相似度、OCR、水印、肢体异常、透明毛边和安全边距 QA；
- 建立固定角色 × 固定动作 × 多 Provider 的回归集，测首次通过率、返工率、耗时和成本；
- 为 AI Polish 提供局部区域重做，而不是整帧身份重采样。

### P2 · 从个人工作台扩展为资产平台

- 多人审核、客户确认链接、评论、失败帧单独重做和发布审批；
- Provider 成本、缓存、并发队列、失败恢复与生成 provenance；
- 角色库、动作模板市场、项目级设计系统和跨游戏资产复用；
- 许可证、来源、训练素材声明和交付用途记录。

## 建议采用路线

现在不建议把它直接嵌入我们的仓库或把内部 Rust 模块当稳定 SDK。第一轮自有样例已经验证轻微 idle，下一步建议：

1. 保持上游桌面应用作为隔离的独立生产工具，不直接耦合游戏仓库；
2. 保留当前 motion-ready master 与 run/cast 版本，下一轮改用 rigVersion 2/3 的髋—膝—踝链完成 `run + death + 1 VFX`；
3. 记录首次通过率、角色漂移、手工修正时间、循环质量、Provider 成本和 Canvas 接入成本；
4. 与直接 ImageGen + Project 003 资产协议做 A/B；
5. 只有当持续追加成本明显下降，再决定 fork、贡献上游或抽取 SDK。

## 成熟度与边界

- 当前是 `0.3.2` 早期公开版本，文件格式、Provider adapter 和生成 Harness 仍可能变化；
- 它是完整桌面应用，不是 npm 包或独立 Rust crate；
- 官方演示证明“做出过这些结果”，不证明不同 Provider、角色和机器上的稳定成功率；
- 上游质量分数是启发式诊断，不是人物身份、动作正确性或艺术质量基准；
- `local-first` 需要和具体 Provider 的数据政策一起理解；
- 第一轮 native idle 调用一次 Codex 视觉规划且没有调用 ImageGen；Revision 6 另调用图像编辑准备 motion-ready 输入。run/cast 帧来自仓库附带的本地确定性 Rig helper，二者的职责与哈希均分开留档。

## 本地实测记录

- Project 009 研究页静态契约：`53/53` 通过；真实浏览器回归：`66/66` 通过，覆盖自有媒体、输入与渲染门禁、三种合理场景、Revision 5–8 入口、键盘切换、1440/820/390px、无 JavaScript、复制和 reduced-motion；
- Revision 5 横向能力关卡曾以静态 `32/32`、浏览器 `47/47` 通过并已冻结；Revision 6 游戏静态 `36/36`、真实浏览器 `53/53` 通过，覆盖 motion-ready master、9 张动作帧哈希、13 帧加载、companion 部署/跟随/run/cast、单投射物边界、三终端、桌面/手机横竖屏与降级路径；
- Revision 7 Combat Trial 静态 `30/30`、真实浏览器 `46/46` 通过，覆盖三 encounter、四 archetype、Boss Phase 2 三重脉冲、Pulse startup、真实 Dodge 奖励、Sync Cast 单次接触、护盾压力差异、失败重试、桌面/手机横竖屏与降级路径；
- Revision 8 Application Lab 静态 `26/26`、真实浏览器 `32/32` 通过，覆盖桌面伙伴、双故事分支、教学答题、营销 CTA、两次原型命中、query fixture、桌面/平板/手机、移动抽屉焦点、reduced-motion、无 JavaScript 和无外部请求；
- GitHub Pages 构建通过；桌面、实验台与手机截图保存在 [`assets/`](assets/)；
- 上游 Rust 全量运行 `133` 项：`107` 项通过，`26` 项在进入 renderer / MCP 断言前因 Windows PATH 没有 `python3` 命令而停止；过滤这 26 项后，剩余 `107/107` 通过；
- 使用 npm 覆盖上游 Bun dev command 后，真实 Tauri UI 已启动并完成上述自有样例原生 command 链；一次 Codex 视觉规划成功，但单次结果不能代表 Provider 成功率；
- 本次全库 `npm run test:all` 在未跟随修改的 Project 007 停止：该子项目已有 16 张实验 PNG 而检查仍期待 12 张，设计契约已是 Revision 4 而检查仍期待 Revision 3。Project 001–005、008、009、010 的目标检查通过；Project 009 没有修改或覆盖 Project 007 的在途实现。

## 环境与复现

初始化上游子模块：

```powershell
git submodule update --init --recursive projects/sprite-maker-study/source
git -C projects/sprite-maker-study/source describe --tags --exact-match
git -C projects/sprite-maker-study/source rev-parse HEAD
```

运行 Project 009 和完整站点验证：

```powershell
npm run test:project-009
npm run test:all
npm run build:pages
npm run preview:pages
```

复核不依赖 `python3` 的上游 Rust 单元：

```powershell
cargo test --manifest-path projects/sprite-maker-study/source/src-tauri/Cargo.toml --lib -- --skip bundled_rig
```

访问：

```text
http://127.0.0.1:4173/projects/sprite-maker-study/
http://127.0.0.1:4173/demos/sprite-maker-application-lab/?scene=companion
http://127.0.0.1:4173/demos/sprite-maker-scene/
```

上游源码运行需要 Bun、Rust、Tauri 2 平台依赖以及至少一个已认证 Agent CLI；Project 009 的静态研究页面不需要模型、账号或网络服务。

## 资料与证据

- [上游 README](https://github.com/JohnKinyanjui/sprite-maker/tree/336c7114f0fce7336ec17f6e9beb93980ed03b1d#readme)
- [上游 Changelog](https://github.com/JohnKinyanjui/sprite-maker/blob/336c7114f0fce7336ec17f6e9beb93980ed03b1d/CHANGELOG.md)
- [Provider 适配](https://github.com/JohnKinyanjui/sprite-maker/blob/336c7114f0fce7336ec17f6e9beb93980ed03b1d/src-tauri/src/providers.rs)
- [生成 Harness](https://github.com/JohnKinyanjui/sprite-maker/blob/336c7114f0fce7336ec17f6e9beb93980ed03b1d/src-tauri/src/sprite_harness.rs)
- [动作规划](https://github.com/JohnKinyanjui/sprite-maker/blob/336c7114f0fce7336ec17f6e9beb93980ed03b1d/src-tauri/src/motion_planner.rs)
- [Rust Rig 引擎](https://github.com/JohnKinyanjui/sprite-maker/blob/336c7114f0fce7336ec17f6e9beb93980ed03b1d/src-tauri/src/rig.rs)
- [质量诊断](https://github.com/JohnKinyanjui/sprite-maker/blob/336c7114f0fce7336ec17f6e9beb93980ed03b1d/src-tauri/src/quality.rs)
- [上游媒体 provenance](https://github.com/JohnKinyanjui/sprite-maker/blob/336c7114f0fce7336ec17f6e9beb93980ed03b1d/docs/media/README.md)
- [MIT License](https://github.com/JohnKinyanjui/sprite-maker/blob/336c7114f0fce7336ec17f6e9beb93980ed03b1d/LICENSE)
