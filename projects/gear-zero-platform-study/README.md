# FROM SKILL TO STUDIO

> Project 002：以 Gear Zero 为公开产品参照，研究如何把单项 AI 能力组织成由用户意图驱动、可以持续迭代和交付的数字产品平台。

[在线研究总结](https://yydshly.github.io/0828_codex_project/projects/gear-zero-platform-study/) · [返回研究总库](https://yydshly.github.io/0828_codex_project/) · [Gear Zero](https://zero.alayalab.ai/) · [Alaya Lab](https://alayalab.ai/)

## 项目摘要

本项目不复刻 Gear Zero，也不把黑盒网页当作底层技术教材。研究重点是抽取其外部能力所代表的产品范式：用户表达创意，系统将意图编译成结构化规格，调度专业 Skills，生成可体验成果，再通过反馈、版本和 Fork 持续演化。

我们的核心结论是：

> 一个 AI 能力成为产品，不只需要模型或 Skill，还需要结构化项目状态、工作流、动态调度、执行环境、自动验证、版本与发布分发。

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 项目编号 | 002 |
| 研究对象 | Gear Zero 的公开产品能力与可泛化平台模式 |
| 研究性质 | 外部产品观察、架构推断与内部路线设计 |
| 状态 | 已形成产品研究结论 |
| 日期 | 2026-08-28 |
| 在线总结 | [FROM SKILL TO STUDIO](https://yydshly.github.io/0828_codex_project/projects/gear-zero-platform-study/) |

## 事实、推断与决策

### 公开事实

- Alaya Lab 将 Gear Zero 描述为通过多人对话规划并构建可玩游戏的产品。
- 官方公开方向还包括世界模型、生成式渲染、游戏智能体和数字人。
- Gear Zero 的内部代码、Skill 协议、调度策略和模型组合没有公开。

### 合理推断

- 持续对话与后台构建需要项目状态、异步任务队列和版本边界。
- 连续迭代需要将自然语言变化转换成结构化规格差异，而不只是重新发送全部聊天记录。
- 可玩交付需要隔离构建、运行检查、版本快照和预览发布。

### 我们的决策

- 不研究如何复制网页外壳，而研究其能力合同与产品闭环。
- 不从“生成任意游戏”起步，而从可控的 Three.js 动作游戏垂直场景起步。
- 把现有游戏 Skills 视为执行层，优先补齐 GameSpec、Skill Contract、Orchestrator、自动试玩和版本系统。

## 能力抽象

| 外部表现 | 系统抽象 | 我们的实现方向 |
| --- | --- | --- |
| 描述游戏 | 意图入口 | 创意对话与约束收集 |
| AI 追问 | 需求消歧 | GameSpec 编译器 |
| 给出方案 | 规划与确认 | Planner + Approval Gate |
| 自动开发 | 专业能力执行 | Skill Graph + Orchestrator |
| 构建时继续聊天 | 异步状态管理 | 当前构建与待处理需求分离 |
| 连续生成版本 | 增量开发 | Spec Diff + 回归验证 |
| 浏览器试玩 | 可运行交付 | Sandbox + Preview |
| Fork 与分享 | 分支与分发 | 版本快照 + 创作网络 |

## 对研究库的价值

Project 001 提供一个可直接试玩的游戏研究样本；Project 002 将单次作品上升为可泛化的平台方法。二者共同形成“做出成果—记录证据—抽象方法—指导下一项目”的研究循环。

本项目为后续工作提供：

- 产品能力地图；
- GameSpec 与 Skill Contract 的研究方向；
- Orchestrator 分层模型；
- 竞品黑盒验收维度；
- Web Pack、Game Pack 等 Domain Pack 的扩展框架；
- 下一阶段 AI Game Studio MVP 的范围边界。

## 下一步建议

1. 定义 `GameSpec v0.1`，只覆盖一种 Three.js 动作游戏。
2. 将相机、战斗、敌人、关卡和测试五个 Skills 改造成统一合同。
3. 实现 `Discover → Spec → Plan → Build → Verify → Playable` 状态机。
4. 用同一批需求对比通用代码 Agent、Skills、调度器、项目记忆和自动试玩的增量价值。
5. 先跑通从创意到 V2 的稳定闭环，再考虑多人房间、社区、市场和跨领域平台。

## 资料来源

- [Gear Zero](https://zero.alayalab.ai/) — 访问于 2026-08-28
- [Alaya Lab 官方方向与产品](https://alayalab.ai/) — 访问于 2026-08-28
- [AlayaWorld](https://github.com/AlayaLab/AlayaWorld) — 世界模型研究方向
- [AlayaRenderer](https://github.com/AlayaLab/AlayaRenderer) — 生成式渲染研究方向
- [AgenticSTS](https://github.com/AlayaLab/AgenticSTS) — 长程游戏智能体与有界记忆
- [WildWorld](https://github.com/AlayaLab/WildWorld) — 显式状态与动作条件的游戏世界数据

## 交付记录

设计契约、覆盖清单和浏览器验收记录见 [`DESIGN-CONTRACT.md`](DESIGN-CONTRACT.md)。
