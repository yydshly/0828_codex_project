# PERSONAL IP ASSET SYSTEM

> Project 003：研究 `personal-ip-image-pack` 如何把一次性照片转卡通，组织成有授权门槛、人物锚点、版本语义、独立资产和验收记录的长期个人 IP 资产系统。

[在线能力实验台](https://yydshly.github.io/0828_codex_project/projects/personal-ip-image-pack-study/) · [返回研究总库](https://yydshly.github.io/0828_codex_project/) · [上游仓库](https://github.com/DoraRabbitYan/personal-ip-image-pack)

## 基本信息

| 项目字段 | 内容 |
| --- | --- |
| 项目编号 | 003 |
| 上游项目 | `DoraRabbitYan/personal-ip-image-pack` |
| 研究版本 | `97b10c8654b46807af131fd47076e8ca9f648070` |
| 研究状态 | 已完成能力拆解、十九项真实资产、完整生产流程与六风格真实矩阵 |
| 开始日期 | 2026-08-28 |
| 在线演示 | `projects/personal-ip-image-pack-study/` |

## 核心判断

这个仓库不是新的生图模型，而是一套 Codex Skill 形式的生产协议。它用结构化任务简报、人物锁、已确认原型、风格能力路由、`dN / vN / rN` 版本和交付清单，减少“下一张图就变脸”的无序生成。

它最有价值的能力不是六种风格，而是把以下对象连接为可持续项目状态：

```text
肖像授权
→ 输入预检
→ 风格与资产能力匹配
→ 人物原型确认
→ 身份锁与视觉锁冻结
→ 单变量资产扩展
→ 文件级校验与人工视觉验收
→ 可回退的版本化交付
```

### 目标与价值

它的目标是把“个人形象生成”升级为“个人 IP 资产运营”：下一次新增表情、动作、服装或渠道尺寸时，可以继承已确认的人物，而不是重新猜一次。

```text
可信人物锚点 × 可控增量变体 × 可审计交付 = 可复用 IP 资产
```

真正应观察的价值指标不是总共生成了多少张，而是：新增单张资产的时间/成本、首次通过率、人物一致性通过率、返工率，以及可直接用于目标渠道的资产覆盖率。

## 能力拆解

| 能力层 | 上游提供什么 | 真实边界 |
| --- | --- | --- |
| 输入治理 | 肖像授权、主身份图和辅助图职责、敏感属性限制 | 主要依赖 Skill 指令执行，不是独立隐私系统 |
| 风格路由 | 六种风格及其支持、条件支持和不支持资产 | 风格参考图当前均未清权，只能安全使用文字规范 |
| 人物一致性 | `identity_lock`、`visual_lock`、`do_not_change`、approved anchor | 没有训练、embedding、LoRA 或专门的一致性模型 |
| 增量扩展 | 每轮只改变表情、姿势、手势或必要道具 | 最终稳定性仍由底层图像工具决定 |
| 交付治理 | 角色卡、manifest、QA、哈希、透明通道、版本号 | Python 校验器只能验证机器可检查字段，不能判断像不像本人 |

## 完整生产演示

专题页以“知识课程发布包”为固定业务场景，可以逐步操作六个阶段：

```text
目标简报 → 冻结人物锚点 → 规划资产包 → 增量生产
→ QA 阻塞与局部修复 → 发布 manifest 与 lineage
```

每个阶段会同步更新流程解释、已生成/通过/阻塞数量、六项资产状态和右侧追踪证据。可以选择任一资产查看来源锚点、本轮变化、版本、尺寸、alpha、SHA-256、QA 和 lineage；QA 阶段会真实回放两张伪透明资产被阻塞的事件，发布阶段则显示最终 `6 / 6 PASSED`。

本项目实际生成了虚构知识博主“林简”的六个独立 PNG：

- `v1/r1`：透明背景全身人物锚点；
- `v1/r2`：继承人物锁的开心挥手全身资产；
- `v1/r3`：继承人物锁的思考 + 空白笔记本全身资产。
- `v1/r4`：用于 PPT 和课程讲解的指向动作；
- `v1/r5`：用于社群反馈的庆祝点赞动作；
- `v1/r6`：用于社交账号的方形头肩头像。

角色卡、历史 `r3` 快照、最终 `r6` manifest、lineage、文件尺寸、alpha、SHA-256、QA 和完整提示词保存在 [`experiments/synthetic-demo/`](experiments/synthetic-demo/CASE-STUDY.md)。人物为虚构原创，未输入真人照片或上游未清权图片，因此这是**真实资产生产流程演示**，不是**真人肖像还原测试**。

实验还捕获了一次真实失败：初始 `r2/r3` 把透明棋盘格烘焙进 RGB 背景，四角 alpha 均为 255。流程拒绝了这两张“看起来透明”的假贴纸，失败样本保留在 `experiments/synthetic-demo/evidence/`；最终把变体改成契约明确的实体底色 `full_body` 资产。这直接证明了文件级 QA 的价值。

## 真实风格矩阵

此前的完整生产演示只证明“同一人物在同一风格内持续追加”。修订 4 把版本拆成三个互不混淆的轴，修订 5 又让六种视觉系统全部进入真实回归：

```text
character vN（画谁） × style sN（怎么画、能交付什么） × release rN（本风格包追加了什么）
```

同一个林简 `character v1` 进入六种视觉系统：

- `s1 / IP-04` 彩铅换装小人：复用现有头像与全身锚点；`scene_card` 明确 BLOCKED 并路由到 IP-05；
- `s2 / IP-02` 清透扁平肖像：新增头像、条件全身和课程封面三张实际图片；
- `s3 / IP-05` 治愈手帐小剧场：新增透明半身贴纸、透明全身贴纸和备课场景卡三张实际图片；
- `s4 / IP-01` 简笔涂鸦头像：新增头像与透明半身贴纸；全身明确 BLOCKED 并路由 IP-03 / IP-04；
- `s5 / IP-03` 粉蜡笔撞色肖像：新增高饱和头像与透明全身动作贴纸；换装明确 BLOCKED 并路由 IP-04；
- `s6 / IP-06` 粗线撞色漫画：新增头像、透明半身讲解贴纸和无字营销封面。

十三张新增矩阵图片只使用本项目原创林简锚点和上游**文字风格规范**，没有把上游未清权风格图片传入模型；加上 IP-04 复用的两张，真实矩阵共有十五张图片。连同完整生产演示的六张资产，仓库提供十九张不重复生成图。注册表、三轴 manifest、完整提示词、三类 QA 和失败证据位于 [`experiments/style-matrix/`](experiments/style-matrix/style-matrix-qa-r6.md)。

修订 5 的三张新增贴纸首轮也都把棋盘格烘焙成 `Format24bppRgb`。首次背景提取获得真实 alpha；第二轮轮廓清理反而重新烘焙棋盘格，IP-03 的额外重试同样失败。七张新增失败输出全部保留。IP-03 最终贴纸虽四角 alpha 均为 0，但仍有轻微半透明外沿，因此登记为 provider 回归注记，而不是宣称完美抠图。

矩阵把 QA 拆成三类分别判断：

- 身份一致性：还是不是林简 v1；
- 风格一致性：是否符合当前风格的线条、色块、质感和构图；
- 任务完成度：资产形式、透明通道、安全边距和业务用途是否正确。

## 在线机制实验台

在线实验台使用本项目原创的参数化 SVG 虚构人物，不使用真实照片，也不复制上游参考图。它演示：

- 选择不同风格后，支持的资产形式会变化；
- 改变表情或道具只升级发布号 `rN`；
- 改变发型等身份锁字段会升级人物版本 `vN`；
- 请求不支持的资产形式会阻塞 QA；
- 角色卡和交付清单随状态同步变化。

这部分仍是一项**六风格通用路由与版本状态机制演示**；页面上方的完整生产演示负责解释同一风格内的长期追加，真实风格矩阵负责解释同一人物跨风格时的三轴版本与独立 QA，三者职责分开。

## 使用场景

当同一人物需要持续追加、跨渠道复用或经过多人验收时，这套方法最有价值：

- 知识博主和个人品牌：头像、封面、表情、讲解动作长期共用同一人物；
- 讲师、顾问和教练：个人形象进入 PPT、课件、海报与方法论图解；
- 小型 IP 工作室：用角色卡、版本和 manifest 管理客户确认、返工和正式交付；
- 社群和客户成功：持续生产欢迎、答疑、提醒、庆祝等长尾资产；
- 品牌人物与吉祥物：管理活动服装、节日动作和渠道规格。

如果只做一张头像、追求高写实数字人、需要连续动画，或素材权利尚未解决，直接生成或采用专门管线通常更合适。

浏览器证据：

- [`project-003-desktop.png`](assets/project-003-desktop.png) — 1440px 首屏；
- [`project-003-style-matrix.png`](assets/project-003-style-matrix.png) — 1440px 六风格选择器、IP-06 真实资产与三类 QA；
- [`project-003-style-matrix-mobile.png`](assets/project-003-style-matrix-mobile.png) — 390px 风格矩阵响应式状态；
- [`project-003-lab.png`](assets/project-003-lab.png) — 角色实验台与通过状态；
- [`project-003-mobile.png`](assets/project-003-mobile.png) — 390px 移动端阅读与实验台入口。

## 可扩展方向

### P0 · 先达到可安全复用

1. 为上游代码和文字模板补充明确许可证。
2. 替换或清权六组风格参考素材。
3. 为 YAML、版本跃迁、能力路由和校验器建立自动化测试。
4. 将隐私政策从 Skill 指令升级为明确的数据生命周期和供应商记录。

### P1 · 从流程协议升级为生产工具

1. 加入 GPT Image、Flux、ComfyUI 等 provider adapter，统一记录模型与生成参数。
2. 加入身份相似度、发型/眼镜、配色、OCR、水印、裁切和肢体异常 QA。
3. 建立风格回归基准：同一角色、同一资产清单、不同模型版本对比。
4. 自动导出微信表情、小红书封面、视频头像、PPT 人物等渠道规格。

### P2 · 从单人资产包升级为产品

1. 角色库、项目记忆、版本浏览、差异比较和一键回退。
2. 宠物、双人、家庭、品牌吉祥物和角色关系。
3. 设计师审核台、客户确认链接、失败资产单独重做和计费记录。
4. 将角色锚点、风格包、资产形式和 QA 规则开放为可组合插件。

## 对我们的意义

Project 001 证明我们能交付一个可运行成果；Project 002 把单项 Skills 上升为用户驱动的产品平台方法；Project 003 则补上一个此前缺失的中间层：**长期资产状态和可验收交付协议**。

它给我们的直接启发是：

- Skill 不应只保存提示词，还应定义输入门槛、状态、版本、失败策略和交付合同；
- “一致性”不能只靠更长的提示词，需要稳定锚点、可变字段和回归验证；
- 生成式产品的护城河可能不是一次生成质量，而是角色资产、历史版本、审核证据和更低的持续扩展成本；
- 本轮真实样例可作为后续模型/provider 回归的第一份固定基线，比较一致性、首次通过率与返工率；
- 我们现有的插画、游戏、美术和产品 Skills 都可以采用相同模式，把一次任务升级为长期项目资产。

因此，本项目可以成为我们后续设计 `Asset Pack`、`Character Pack` 和更通用 `Project Memory + Delivery Contract` 的研究样本。

## 环境与复现

页面是零依赖静态实现，随研究库统一构建：

```powershell
npm run test:project-003
npm run build:pages
npm run preview:pages
```

访问：

```text
http://127.0.0.1:4173/projects/personal-ip-image-pack-study/
```

## 资料与边界

- [上游 README](https://github.com/DoraRabbitYan/personal-ip-image-pack/blob/97b10c8654b46807af131fd47076e8ca9f648070/README.md)
- [上游 Skill 工作流](https://github.com/DoraRabbitYan/personal-ip-image-pack/blob/97b10c8654b46807af131fd47076e8ca9f648070/SKILL.md)
- [风格能力规范](https://github.com/DoraRabbitYan/personal-ip-image-pack/blob/97b10c8654b46807af131fd47076e8ca9f648070/references/style-specs.yaml)
- [交付契约](https://github.com/DoraRabbitYan/personal-ip-image-pack/blob/97b10c8654b46807af131fd47076e8ca9f648070/references/delivery-contract.md)
- [素材权利台账](https://github.com/DoraRabbitYan/personal-ip-image-pack/blob/97b10c8654b46807af131fd47076e8ca9f648070/references/style-asset-rights.yaml)
- [交付校验器](https://github.com/DoraRabbitYan/personal-ip-image-pack/blob/97b10c8654b46807af131fd47076e8ca9f648070/scripts/validate_delivery.py)
- [OpenAI API：本地与内联 Skills 数据结构](https://developers.openai.com/api/reference/cli/resources/beta/subresources/responses)

研究时未把上游仓库代码或参考图复制进本仓库。上游根目录在研究版本中未提供许可证，六组内置风格图片均标记为 `pending_clearance`；本项目只引用来源并进行独立分析和原创机制演示。

## 交付记录

设计契约、覆盖清单和浏览器验收记录见 [`DESIGN-CONTRACT.md`](DESIGN-CONTRACT.md)。
