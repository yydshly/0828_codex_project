# CAPABILITY RUN / 旧站能力试运行

这是 Project 009 的复杂可玩采用证明。Revision 6 保存了 Revision 5 的独立路由，并把真实 idle、run、pulse-cast、QA 和导出合同放进一条 2,800px 横向关卡，而不把程序化玩法冒充成 Sprite Studio 的产物。

## 主循环

1. 接近林简并领取能力试运行；
2. 横向探索、跳跃障碍、用脉冲处理五个巡逻故障体；
3. 激活 Rig 后部署林简动作投影；投影跟随玩家并在移动/脉冲时切换 run / cast 真实帧；
4. 按顺序激活 QA、Export 三个能力终端；
5. 在终端 modal 中阅读真实帧、真实指标和导出 Manifest；
6. 三个模块上线后启动最终信标；
7. 受伤归零时从最近终端检查点恢复，完成或失败均可重玩。

## 场景与能力边界

| 归属 | 内容 |
| --- | --- |
| 生成式输入准备 | 基于 Project 003 身份锚点制作 motion-ready RGBA master；不计入 Sprite Studio 动作能力 |
| Sprite Studio 真实产物 | native idle 4 帧 / 6 FPS；run-v2 4 帧 / 10 FPS；pulse-cast-v1 5 帧 / 12 FPS；版本所有权、哈希、QA 与导出元数据 |
| 游戏运行时 | 2,800px 世界、镜头、探索器、companion 跟随与状态选择、物理、跳跃、障碍、敌人、脉冲伤害、生命、检查点、modal、任务与粒子 |
| 明确未验证 | run-v2 的生产级髋—膝—踝 locomotion、完整近战动作集、由库生成的关卡或敌人 |

发布帧位于 [`docs/assets/project-009-game/`](../../../docs/assets/project-009-game/)。四张 idle 必须与 `own-sample-benchmark/native-workspace` 的第三次通过帧逐文件 SHA-256 一致；九张动作扩展必须与 `multi-action-benchmark/workspace` 的采用帧逐文件 SHA-256 一致。

冻结的 Revision 5 可从 `/demos/sprite-maker-scene-r5/?state=near` 独立访问，其 HTML、CSS 与 game.js 哈希记录在该路由的 `SNAPSHOT.md`。

## 操作

- `A / D` 或 `← / →`：移动；
- `W / ↑ / Space`：跳跃；
- `J / F`：发射脉冲；
- `E / Enter`：交互；
- `R`：完整重置；
- `Escape`：关闭能力终端并返回 Canvas 焦点；
- 触控：左、右、跳跃、脉冲、交互、重置六键。

## 确定性验收入口

- `?state=near`：林简交互范围；
- `?state=active`：任务已领取，位于 Rig 区入口；
- `?state=terminal-1`：Rig 终端范围；
- `?state=terminal-2`：Rig 已上线，QA 终端范围；
- `?state=terminal-3`：Rig / QA 已上线，Export 终端范围；
- `?state=combat`：首个故障体在脉冲射程；
- `?state=ready`：三模块上线，最终信标范围；
- `?state=complete`：能力链上线；
- `?state=failed`：完整度归零、可从检查点恢复。

测试 API `window.__SPRITE_GAME__` 提供快照、fixture、移动、跳跃、攻击、受伤、终端激活、关闭 modal、固定步模拟和长帧模拟；不属于玩家 UI。

## 验收矩阵

| 维度 | 验收内容 |
| --- | --- |
| 主路径 | 简报 → Rig → QA → Export → Beacon → Complete，顺序门禁有效 |
| 移动 | 左右移动、跳跃越障、镜头跟随、2,800px 世界位置与小地图同步 |
| 战斗 | 脉冲发射、两次命中清除、受伤、四格生命、失败与检查点恢复 |
| Companion | Rig 前未部署；Rig 后跟随玩家；移动切换 run-v2；脉冲切换 cast-v1；不额外伪造伤害 |
| 终端 | 三个 modal 展示 idle/run/cast、QA 与多状态 manifest；关闭按钮、Escape、焦点返回有效 |
| 时间 | 固定 `1/60s`；单帧最大 `100ms`，标签页恢复不产生数秒位移 |
| 资产 | 四张 idle 与原生帧哈希一致；九张 run/cast 与多动作实验哈希一致；13 张运行帧全部加载 |
| 输入 | 键盘和 Pointer Events 触控都覆盖移动、跳跃、攻击和交互 |
| 尺寸 | 1280×900、390×844、844×390 无横向溢出或不可达控制 |
| 降级 | reduced-motion 冻结 NPC 与 companion 动作帧并清除粒子；无 Canvas 和无 JS 仍解释三层能力 |
| 性能 | 代表性 active / combat 场景渲染持续、粒子有上限、无控制台错误和外部请求 |

## 运行验证

```powershell
npm run test:project-009-game
npm run build:pages
```

浏览器验收需要本地预览服务与 Playwright：

```powershell
npm run preview:pages
node projects/sprite-maker-study/game-demo/tests/browser-check.cjs
```

## 后续独立模块

Revision 6 保持在当前路由。更复杂的三波战斗、护盾、闪避、同步施法与双阶段 Boss 没有继续堆进这条能力关卡，而是进入独立的 [`../combat-trial/`](../combat-trial/) 与 `/demos/sprite-maker-combat-trial/`，便于分别验证“资产能力说明”和“复杂战斗接入”。
