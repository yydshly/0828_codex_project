# Project 009 · GitHub 发布索引

发布日期：2026-08-29
上游基线：Sprite Studio `v0.3.2`，commit `336c7114f0fce7336ec17f6e9beb93980ed03b1d`

## 在线入口

| 内容 | GitHub Pages |
| --- | --- |
| Project 009 研究总结 | <https://yydshly.github.io/0828_codex_project/projects/sprite-maker-study/> |
| 五场景应用实验室 | <https://yydshly.github.io/0828_codex_project/demos/sprite-maker-application-lab/> |
| 复杂战斗试运行 | <https://yydshly.github.io/0828_codex_project/demos/sprite-maker-combat-trial/> |
| Revision 6 多动作能力关卡 | <https://yydshly.github.io/0828_codex_project/demos/sprite-maker-scene/> |
| Revision 5 冻结快照 | <https://yydshly.github.io/0828_codex_project/demos/sprite-maker-scene-r5/> |

## 本次发布内容

- 固定并审计 `JohnKinyanjui/sprite-maker` 上游仓库；
- 使用 Project 003 自有角色完成 native idle 实测；
- 准备 motion-ready master，版本化生成 run-v2 四帧与 pulse-cast-v1 五帧；
- 保留 Revision 5 快照，新增 Revision 6 横向能力关卡；
- 新增 Revision 7 Combat Trial：三段压力、护盾、闪避、同步施法和双阶段 Boss；
- 新增 Revision 8 Application Lab：桌面伙伴、互动故事/数字展厅、教学、营销动态人物和低成本游戏原型；
- 保留输入门禁、动作质量边界、资产/运行时职责和采用建议。

## 最终验证基线

| 范围 | 静态检查 | 真实浏览器 |
| --- | ---: | ---: |
| 研究页 | 53/53 | 66/66 |
| Revision 6 能力关卡 | 36/36 | 53/53 |
| Revision 7 Combat Trial | 30/30 | 46/46 |
| Revision 8 Application Lab | 26/26 | 32/32 |

`npm run build:pages` 已通过。桌面、平板、手机、键盘、触控、reduced-motion、无 JavaScript、无 Canvas（适用场景）、无外部运行请求和控制台错误均有自动化证据。

## 能力边界

Sprite Studio 提供角色源图管理、Rig、动作帧、质量诊断、版本和导出；桌面提醒、故事分支、课程、CTA、敌人 AI、碰撞、伤害和胜负属于上层业务或游戏运行时。

本项目不需要下载模型权重。上游生成路径需要已认证的 Agent / 图像 Provider；本次 Pages 演示只读取已经发布的本地资产，不调用模型或外部业务服务。

## 发布与回滚

推送到 `main` 后，`.github/workflows/pages.yml` 会构建 `.pages-dist/` 并部署 GitHub Pages。需要回滚时，对本次 Project 009 发布提交执行 `git revert <commit>` 并推送 `main`，Pages 工作流会重新部署上一状态。
