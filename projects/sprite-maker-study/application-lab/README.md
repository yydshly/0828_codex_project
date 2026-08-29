# Project 009 · Application Lab

Application Lab 是 Revision 8 新增的独立应用场景实验室。它复用 Project 009 已批准的 `motion-master-v1`、四帧 `run-v2` 和五帧 `pulse-cast-v1`，展示同一角色动作资产怎样进入五种完全不同的上层产品。

## 运行入口

- 本地：`http://127.0.0.1:4173/demos/sprite-maker-application-lab/?scene=companion`
- Pages：`https://yydshly.github.io/0828_codex_project/demos/sprite-maker-application-lab/`
- 研究说明：`/projects/sprite-maker-study/#application-lab`

## 五个可操作场景

| 场景 | 最小操作循环 | 动作映射 | 上层拥有的逻辑 |
| --- | --- | --- | --- |
| 虚拟人 / 桌面伙伴 | 开始专注 → 完成本轮 | idle → run → cast | 计时、提醒、偏好、记录 |
| 互动故事 / 数字展厅 | 选择信号线或档案线 | run 或 cast | 分支、展品、解锁与进度 |
| 教学演示 | 查看步骤 → 回答问题 | idle → cast | 课程、答案、学习记录 |
| 营销动态人物 | 展开产品 → 模拟预约 | run → cast | CTA、分析、提交与合规 |
| 低成本游戏原型 | 开始遭遇 → 两次脉冲 | run → cast | 输入、命中、伤害与胜负 |

所有业务结果均为本地确定性模拟。模块没有安装或调用模型，没有真实提交表单、分析事件或用户数据。

## 操作与 fixture

- 鼠标或触控：选择五个场景，使用舞台下方两个业务按钮。
- 键盘：场景标签支持方向键、Home 和 End；按钮支持 Enter / Space。
- 手机：`查看职责边界` 打开底部抽屉；Escape、关闭按钮和遮罩均可关闭并返回焦点。
- 深链接：`?scene=companion|story|teaching|marketing|prototype&state=default|active|complete`。

测试 API：

```js
window.__SPRITE_APPLICATION_LAB__.snapshot()
window.__SPRITE_APPLICATION_LAB__.setScene("teaching", "active")
window.__SPRITE_APPLICATION_LAB__.performAction("secondary")
window.__SPRITE_APPLICATION_LAB__.resetScene()
window.__SPRITE_APPLICATION_LAB__.openInspector()
window.__SPRITE_APPLICATION_LAB__.closeInspector()
```

## 资产与业务边界

Sprite Studio / Project 009 资产层只负责：透明角色帧、动作顺序、FPS、版本和来源。Application Lab 自己负责：场景切换、业务状态、按钮、反馈、抽屉、query fixture 和测试 API。

这意味着库提供的是动态角色资产生产与交付能力，不是桌面助手框架、叙事引擎、教学平台、营销平台或游戏引擎。

## 验收

```powershell
npm run test:project-009-application-lab
```

真实浏览器检查位于 `tests/browser-check.cjs`，覆盖五个操作循环、query fixture、键盘场景切换、桌面/平板/手机、移动抽屉焦点、reduced-motion、无 JavaScript、无外部请求、性能烟雾和控制台错误。
