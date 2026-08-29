# COMBAT TRIAL / 同步穹顶

这是 Project 009 新增的复杂战斗试运行模块。它与 `demos/sprite-maker-scene/` 并列，不覆盖 Revision 6；页面路由为 `demos/sprite-maker-combat-trial/`。

## 目的

验证同一套真实角色资产能否进入更复杂的游戏状态：跟随 run、协同 cast、显式 startup / active / recovery、单次权威接触、护盾压力、闪避窗口、三波 encounter 与双阶段 Boss。

## 资产与运行时边界

| 归属 | 内容 |
| --- | --- |
| Sprite Studio 输出 | `lin-jian-motion-master-v1.png`、run-v2 四帧、pulse-cast-v1 五帧 |
| 游戏运行时 | 玩家、三波调度、stalker / ranger / bulwark / boss、攻击窗口、碰撞、伤害、护盾、同步能量、Boss 阶段、镜头、粒子与胜负 |
| 审计 | action id、snapshot、event log、fixture、静态检查、Playwright 浏览器检查 |

敌人全部是程序化场景元素，不是 Sprite Studio 生成资产。当前角色动作批准复杂状态接入和小比例战斗投影，不批准身份关键近景或生产级人体 locomotion。

## 战斗合同

| 动作 | Startup | Active / contact | Recovery / cooldown | 结果 |
| --- | ---: | --- | ---: | --- |
| Pulse | 80ms | 单枚投射物 | 220ms cooldown | 生命/护盾压力 1，命中积累 25% sync |
| Dodge | 即时 | 180ms 位移、220ms 无敌 | 850ms cooldown | 回避接触或投射物时额外积累 sync |
| Sync Cast | 167ms | 稳定 action id 单次结算 | 总长约 417ms | 生命伤害 2、护盾压力 4，消耗 100% sync |
| Enemy attack | 按 archetype 可见预警 | 一次接触或投射物生成 | 显式 recovery | 不在同一 action 内重复结算 |

## Fixtures

- `?state=briefing`
- `?state=wave-1`
- `?state=wave-2`
- `?state=sync-ready`
- `?state=boss-1`
- `?state=boss-2`
- `?state=victory`
- `?state=failed`

`window.__SPRITE_COMBAT_TRIAL__` 暴露只用于测试的 snapshot、fixture、固定步模拟、攻击、闪避、协同、受伤、清波和测试投射物入口。

## 验证

```powershell
npm run test:project-009-combat-trial
npm run build:pages
node projects/sprite-maker-study/combat-trial/tests/browser-check.cjs
```
