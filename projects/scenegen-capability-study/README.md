# SCENE, GENERATED.

> Project 010：依据 SceneGen 官方仓库、论文、项目页和公开 GLB，研究它把带遮罩室内图联合生成多件 3D 资产与相对布局的效果、原理、适用边界、工程成本、扩展方向和采用时机。

[在线研究页](https://yydshly.github.io/0828_codex_project/projects/scenegen-capability-study/) · [返回研究总库](https://yydshly.github.io/0828_codex_project/) · [上游仓库](https://github.com/Mengmouxu/SceneGen) · [官方项目页](https://mengmouxu.github.io/SceneGen/)

## 基本信息

| 项目字段 | 内容 |
| --- | --- |
| 项目编号 | 010 |
| 研究对象 | `Mengmouxu/SceneGen` |
| 固定提交 | `605d1a0b51d2dab950c8131d584d875862c8a17f` |
| 论文 | SceneGen: Single-Image 3D Scene Generation in One Feedforward Pass |
| 许可证 | MIT |
| 研究状态 | 官方效果、方法、GLB 结构、依赖成本、适用边界与采用路线已完成分析 |
| 研究日期 | 2026-08-29 |

## 一句话结论

SceneGen 不是完整世界生成器。它接收一张或多张室内场景图及逐物体遮罩，在同一生成流程里得到多件带纹理静态 3D 资产和每件资产的相对位姿，最后组合为 GLB。

它的官方演示效果强，但当前更适合作为室内 3D 草模研究能力，而不是可直接接入产品的稳定 SDK。对我们最合理的策略是：保留能力档案，不为“也许有用”安装整套 CUDA 与模型依赖；真实 Three.js / 室内图转 GLB 任务出现后，再以单场景 POC 验证。

## 它实现的效果

```text
一张或多张室内图 + 每件物体的 Mask
→ DINOv2 视觉特征 + VGGT 几何特征
→ 每件物体局部生成
→ 全场景关系交互
→ 预测 translation + quaternion + uniform scale
→ 网格 / Gaussian 外观解码与纹理烘焙
→ 多物体静态 GLB
```

与“生成一张有 3D 感的图片”不同，最终结果可以在 Three.js 或 Blender 中旋转、检查线框并继续编辑。与“生成完整游戏关卡”也不同：官方 GLB 不包含碰撞体、导航、LOD、动画、骨骼、语义场景图或精确米制尺度。

Project 010 页面按需加载官方 `0002101.glb`。输入图、GLB、架构图和定性对比图都来自上游公开页面；Project 010 没有运行模型生成这些结果，也不把精选演示解释为稳定成功率。

## 原理

### 1. 以结构化 3D latent 生成物体

SceneGen 建立在 TRELLIS 的结构化 3D latent 上，联合表示物体的稀疏几何结构与外观。DINOv2 提取图像条件，VGGT 提供几何线索。

### 2. Local Attention 保持单件资产完整

每件物体的 token 优先与自己的图像和遮罩特征交互，用于生成独立物体，降低其他物体对形状和纹理的干扰。

### 3. Global Attention 建模物体关系

所有物体 token 和场景条件在全局层交换信息，使系统能够同时考虑家具之间的相对距离、朝向、尺度和遮挡关系。

### 4. Position Tokens 预测布局

位置头为每件物体预测 3 维平移、4 维四元数旋转和 1 维统一尺度。训练目标由 conditional flow matching、pose Huber loss 和 voxel collision loss 组成。

### 5. 导出不是零成本

“one feedforward pass”强调的是资产生成与布局推理被联合起来，不再采用资产检索和布局优化的串联管线。公开代码仍使用两段各 25 步的采样；GLB 阶段还包含网格简化、补洞、xatlas UV、100 视角 Gaussian 渲染和 1024 纹理优化。论文报告 A100 上 4 物体场景约 2 分钟。

## 官方 GLB 静态审计

对仓库内三个公开 GLB 的结构读取结果保存在 [`experiments/official-glb-audit.json`](./experiments/official-glb-audit.json)：

| 样本 | 文件体积 | Mesh | 三角形 | 动画 / 骨骼 / 摄像机 / 灯光 |
| --- | ---: | ---: | ---: | --- |
| `0004691.glb` | 6.58 MiB | 5 | 68,279 | 均无 |
| `0005153.glb` | 5.24 MiB | 4 | 52,828 | 均无 |
| `0005473.glb` | 8.05 MiB | 9 | 165,827 | 均无 |

这支持“可检查、可展示的多网格静态场景”结论，但不能直接推导“已达到生产级游戏资产”。

## 使用场景

### 高匹配

- 室内概念图快速转为 Blender / Three.js 场景草模；
- VR / AR 家居空间、展厅和陈列方案的早期预演；
- 游戏室内房间的独立道具与摆位初稿；
- embodied AI 的可变化合成环境原型；
- 需要从图像出发、又不想依赖固定 3D 资产库的研究。

### 条件匹配

- 精确空间配置器：需要额外尺度标定、碰撞与规则约束；
- 大规模数据生成：需要服务化、并发、缓存与稳定性统计；
- 多视图重建：官方实现支持，但论文明确是单视图训练后的涌现能力，尚非完整多视图训练方案。

### 不适合直接承担

- BIM、测量级数字孪生和工程制图；
- 室外地形、城市、复杂建筑壳体与任意开放世界；
- 带骨骼、蒙皮、动作和表情的角色；
- 无 Mask 的端到端一键世界生成；
- 不经人工检查就直接上线的可玩关卡。

## 依赖与现实成本

- 官方 README 建议至少 16GB NVIDIA GPU，测试硬件包括 A100 与 RTX 3090；
- 依赖 CUDA / PyTorch 生态、TRELLIS、DINOv2、VGGT 和可选 SAM2；
- 仅 SceneGen 在 Hugging Face 的公开模型文件约 4.71GB，另有其他模型权重和运行环境；
- 训练使用 3D-FUTURE，12K 训练场景与 4.8K 测试场景，经增强形成约 30K 训练样本；
- 训练中每个场景最多 7 个物体。推理接受更多物体不等于超过 7 时仍有相同性能保证；
- 生成结果仍需要 Blender / 引擎侧几何、纹理、碰撞和性能 QA。

## 对我们的价值

### 现在：低到中

当前仓库的已验证主线是 Canvas 2D 游戏、图像资产治理和 AI 工作流产品。没有明确 3D 下游时，安装和维护 SceneGen 环境不能直接提高这些项目的产出。

### 任务触发后：高

当我们开始 Three.js 室内场景、空间配置器、VR/AR 原型或“参考图 → 可编辑 GLB”的工作，SceneGen 能补上 2D 概念与 3D 运行时之间的重要中间层。

### 平台化：高

它与 Project 002 的 Skill-to-Studio 方向很契合：把分割、生成、资产检查、压缩、碰撞、语义、人工审核和发布组织成可追踪流水线。真正壁垒会来自这一整套资产生产合同，而非单独模型。

## 可扩展方向

1. **生产后处理**：米制尺度、pivot、命名、碰撞、LOD、Meshopt / Draco、KTX2 与引擎 Manifest。
2. **物理先验**：支撑关系、地面接触、稳定性、防穿插、导航和可达空间。
3. **语义场景图**：object ID、类别、父子和支撑关系、交互锚点。
4. **可控编辑**：锁住布局或满意物体，只重生失败对象，并指定尺寸、朝向与风格。
5. **多视图训练**：显式相机和对象对应，改善遮挡面与几何一致性。
6. **分割一体化**：从框选、文本选择或自动检测得到稳定 Mask，并暴露可修改边界。
7. **服务化与加速**：模型常驻、队列、缓存、少步采样、纹理烘焙加速与成本统计。
8. **领域扩展**：游戏模块化资产、室外场景、建筑壳体、可动对象与时间一致性。

## 采用建议

满足以下四个条件时才启动 POC：

1. 有合法可用的真实室内输入和明确物体范围；
2. 产物必须进入 Blender、Three.js、Unity 或具体空间产品；
3. 有至少 16GB NVIDIA GPU 或预算可控的云算力；
4. 接受人工清理、碰撞、LOD、尺度与性能优化。

最小 POC 应限制为一张图、3–5 个物体和一个目标引擎，并记录推理耗时、首次可用率、物体穿插、几何/纹理修复时间、最终三角形与纹理预算。四个条件未同时出现时，继续保留观察即可。

## 后期重新启用入口

半年后不要从重新阅读全部资料或安装依赖开始，按这个顺序恢复上下文：

1. 打开 [`REUSE-MANIFEST.json`](./REUSE-MANIFEST.json)，确认固定版本、证据入口、当前判断和仍未执行的工作；
2. 按 [`POC-RUNBOOK.md`](./POC-RUNBOOK.md) 先做上游差异检查，再确认四个触发条件；
3. 只有触发条件全部满足时，复制 [`experiments/poc-scorecard-template.md`](./experiments/poc-scorecard-template.md) 并预登记输入、预算和通过标准；
4. 用一个场景完成从 Mask、推理、原始 GLB、清理到目标引擎的完整闭环；
5. 最后选择 `ADOPT / WATCH / REJECT`，保留证据路径和下一次重新评估触发器。

本地官方媒体、Three.js 查看器依赖、字节数、SHA-256、来源和许可证边界记录在 [`docs/assets/project-010-media/manifest.json`](../../docs/assets/project-010-media/manifest.json)。未来替换官方样本或查看器文件前，应先更新并核对这个清单。

重新进入后的第一条只读命令：

```powershell
git ls-remote https://github.com/Mengmouxu/SceneGen.git HEAD
```

将结果与 `605d1a0b51d2dab950c8131d584d875862c8a17f` 比较。不要静默修改固定 commit；新的上游版本应建立新的实验修订。

## 本地验证

Project 010 的研究页不需要模型、GPU、账号或网络服务。运行：

```powershell
npm run test:project-010
npm run build:pages
npm run preview:pages
```

访问：

```text
http://127.0.0.1:4173/projects/scenegen-capability-study/
```

点击“加载官方 GLB”后才会从本地静态站点加载 Three.js 查看器和约 9.9MB 模型。

## 资料与证据

- [上游仓库](https://github.com/Mengmouxu/SceneGen)
- [官方项目页](https://mengmouxu.github.io/SceneGen/)
- [论文 HTML](https://arxiv.org/html/2508.15769v2)
- [Hugging Face 模型页](https://huggingface.co/haoningwu/SceneGen)
- [本项目媒体来源说明](../../docs/assets/project-010-media/NOTICE.md)
