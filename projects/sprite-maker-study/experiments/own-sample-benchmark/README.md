# Project 009 · 自有样例原生 Rig 实测

这组实验回答两个问题：Sprite Studio 的实际原理是什么，以及它能否处理我们已有的角色样例。它不是上游演示复述，而是在 Windows 上启动固定版本 `v0.3.2` 的真实 Tauri 应用，导入 Project 003 资产并调用原生 command 得到的结果。

## 结论

**CONDITIONAL / 有条件通过。** 透明正面全身角色可以稳定生成轻微 idle；脸、服装、轮廓和调色板保持一致，四帧重复渲染的 SHA-256 完全一致。但宽裤腿遮挡膝部、手臂贴近身体，不适合直接推导 walk/run。要做位移动作，应先准备四肢分离、关节可见的 motion-ready master。

本次没有调用 ImageGen，也没有安装或下载模型权重。仅调用一次 Codex 视觉规划来建议关节点、胶囊骨骼和关键姿势；实际像素分配、动作门禁、变形、渲染和 QA 全部由本地 Rust 引擎执行。

## 样例门禁

| 样例 | 来源 | 适配判断 | 原因 |
| --- | --- | --- | --- |
| `project003-anchor.png` | Project 003 身份锚点 | HIGH FIT | 透明、正面、全身、单角色、轮廓完整 |
| `project003-arms-crossed.png` | Project 003 全身贴纸 | CONDITIONAL | 交叉手臂造成遮挡，宽裤腿隐藏膝点 |
| `project001-scene.png` | Project 001 游戏截图 | REJECT | 场景截图不是独立透明角色，不能进入单角色 Rig |

`prepare_samples.py` 只做一次 Lanczos contain resize 和透明画布居中，不做生成式修改。尺寸、Alpha、哈希和观察记录在 `input-audit.json`。

## 真实执行链

```text
Project 003 原图
→ 160 × 224 透明测试画布
→ Codex 视觉规划：23 点 / 19 骨 / 4 帧建议
→ validate_rig_spec：结构通过
→ render #1：imperceptible_rig_motion，动作过小
→ render #2：missing_body_motion，只有手臂、躯干不动
→ render #3：手臂与上躯干反向 ±4°，生成 4 帧
→ 相同 Rig 再渲染：4 个文件哈希逐一相同
→ queue_quality_analysis / get_quality_report
```

真实调用过的原生入口：`create_workspace`、`import_asset`、`suggest_rig_points`、`validate_rig_spec`、`save_rig`、`render_rig_animation`、`queue_quality_analysis`、`get_quality_report`。

## 本地模板与视觉规划对照

| 指标 | 本地自动建议 | Codex 视觉规划 | 判断 |
| --- | ---: | ---: | --- |
| 关节点 | 15 | 23 | 视觉方案覆盖手臂与腿部更细 |
| 骨骼 | 10 | 19 | 视觉方案具备完整父子层级 |
| 肩跨度 | 7px | 36px | 本地模板过度吸附身体中轴 |
| 手跨度 | 17px | 57px | 视觉方案更符合可见轮廓 |
| 膝点置信度 | 0.97 / 0.97 | 0.25 / 0.25 | 视觉方案正确表达裤腿遮挡的不确定性 |

这个对照说明：仓库自带建议器可作为快速模板，但对非像素风、服装遮挡明显的人物不能把高置信度当成真实解剖证据；视觉 Provider 更适合提出初始 Rig，人仍需复核。

## 输出与 QA

- 4 帧，6 FPS，四个哈希互不相同；再次渲染时四个哈希逐一一致；
- 输出像素 100% 来自源图可见调色板，没有生成新颜色；
- native-v1：overall `94`、character consistency `100`、motion continuity `76`、alignment `100`、loop `95.12`、transparency `100`；
- 原生 QA 警告第 2→3 帧与第 3→4 帧过于接近，像素差分别为 `2.40%`、`2.79%`；
- 这些分数只描述像素统计，不能证明身份语义、解剖正确或艺术质量。最终 `CONDITIONAL` 来自像素指标与人工视觉复核的组合。

## 文件说明

- `benchmark-result.json`：结构化结论、三次门禁、哈希、指标与采用建议；
- `provider-rig-suggestion.json`：一次视觉规划原始结果；
- `native-auto-suggestion.json`：本地模板建议原始结果；
- `final-rig-input.json`：最终通过门禁的 RigInput；
- `native-quality-report.json`：真实 native-v1 QA；
- `native-workspace/`：真实工作区帧、动画 manifest 与本地 helper；
- `evidence/project003-idle-contact-sheet.png`：源图与四帧并排证据；
- `evidence/project003-idle.gif`：6 FPS 循环预览；
- `native-02-results.png`：真实 Sprite Studio Media Gallery 截图。

## 复现

准备输入和重建证据：

```powershell
python projects/sprite-maker-study/experiments/own-sample-benchmark/prepare_samples.py
python projects/sprite-maker-study/experiments/own-sample-benchmark/build_evidence.py
```

启动上游桌面应用时使用 `tauri-test.conf.json`，只把上游的 Bun 启动命令覆盖为 `npm run dev`。AI 建议不是本地离线模型结果；重新调用 Provider 会产生新的建议，因此固定原始 JSON 与最终 RigInput 才是本实验的复现边界。
