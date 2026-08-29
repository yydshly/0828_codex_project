# ENVIRONMENT AS RUNTIME

> Project 011：以 `Token-Gremlin/natural-disasters` 的实际演示效果为研究对象，直接运行固定提交，再反推能力、原理、适用场景和产品落地边界。

[能力地图](./CAPABILITIES.md) · [运行上游真实演示](../../docs/demos/natural-disasters-environment-poc/) · [在线研究页](../../docs/projects/natural-disasters-environment-study/) · [上游仓库](https://github.com/Token-Gremlin/natural-disasters) · [固定提交](https://github.com/Token-Gremlin/natural-disasters/commit/849ff7f4199c9322d8ecafb48d62fc63f8d5af1d)

## 先说清楚：当前演示是什么

当前 `/demos/natural-disasters-environment-poc/` 运行的是固定提交 `849ff7f4199c9322d8ecafb48d62fc63f8d5af1d` 的真实构建产物，不是 Project 011 自己重写的相似效果。

- 上游源码完整保存在 [`vendor/natural-disasters/`](./vendor/natural-disasters/)；
- 演示页直接执行上游 `App`、`Director`、`Sandbox`、Shader 与 Three.js；
- 我们只负责固定版本、构建、发布、浏览器验证和研究说明；
- MIT 许可证随源码和演示产物保留；
- Revision 3 的独立 WebGL2 近似不符合“展示这个库本身效果”的要求，已撤出演示路由并记录为无效方案。

纠正经过见 [`experiments/runtime-correction.md`](./experiments/runtime-correction.md)。

## Web 理解与演示工作台

Revision 5 将研究页收束为同一条 Web 旅程；Revision 6 在同一个真实运行时上加入三个业务扩展演示；Revision 7 增加面向个人的游戏、IP 与素材复利路线：

```text
能力边界
→ 固定提交真实运行时
→ 四个关键 Director 场景 / 三个扩展场景
→ 六层能力栈
→ 使用场景边界
→ 个人增长飞轮
→ 五级扩展成本
→ Environment Lab 落地判断
```

桌面与平板页面通过同源 iframe 运行上游实际构建，场景按钮直接调用 iframe 中上游自己的 `director.gotoAct()`；`SANDBOX` 按钮调用上游 `sandbox.setActive()`。手机和节省流量模式不强制启动高成本 WebGL，保留完整研究内容和真实演示外链。外层页面没有另写海洋或灾害渲染器。

### 三个扩展场景

| 场景 | 实际调用的上游能力 | Project 011 增加的业务层 |
| --- | --- | --- |
| 港口台风预警 | `storm` condition + `hurricane()` | 港区节点、预案等级、封港/停靠/撤离动作 |
| 近岸海啸疏散 | `overcast` condition + `tsunami()` | 三级风险带、疏散路线、演示倒计时 |
| 海上平台风暴作业 | `night` condition + `lightning()` | 平台轮廓、停工状态、人员清点与雷暴窗口 |

扩展场景会隐藏 iframe 内重复的 Sandbox 控制面板，但保留 Sandbox 运行状态和所有实际环境/事件调用。港区位置、风险带、倒计时、平台图形与检查项均明确标记为业务界面示意，不是预测、淹没或结构安全结果。

### 个人复利路线

Web 页现在把个人意义拆成三个共享同一环境核心的输出方向：

- `GAME`：先做 5–10 分钟海上风暴生存垂直切片；仍需玩家、船舶、碰撞、伤害、任务与存档。
- `PERSONAL IP`：将深海档案、风暴观测或海洋异常调查发展成互动主页、连续事件和动态内容；仍需身份、主角、标志物与更新节奏。
- `ASSET LIBRARY`：把环境预设、灾害事件、镜头、UI、封面、循环视频和 Three.js 模板持续封装；仍需元数据、版本、格式、预算与许可说明。

推荐顺序不是同时启动三个项目，而是：`可玩切片 → IP 身份 → 素材封装 → Environment Director Kit`。一次制作同时沉淀游戏作品、个人品牌和可复用资产。

本地入口：`http://127.0.0.1:4173/projects/natural-disasters-environment-study/`

浏览器验收记录见 [`experiments/web-workbench-validation.md`](./experiments/web-workbench-validation.md)：真实内嵌 App、四个证据幕、三个扩展场景、个人复利路线、Sandbox、Director reset、桌面/平板/手机、键盘、减少动态与禁用内嵌回退共 39/39 通过。

## 陌生领域 → 产品能力规划指导页

新增独立页面 [`unknown-to-product/`](../../docs/projects/natural-disasters-environment-study/unknown-to-product/)，把 Project 011 从“研究一个仓库”提升为“沉淀一套可以迁移的能力孵化方法”。

- 当下目标：以 `natural-disasters` 为 Case 001，记录目标效果如何拆解、原始资料从哪里获取、各渲染层如何从零实现、如何验收以及如何抽成稳定能力；
- 长期目标：复用同一套目标简报、来源账本、效果反推卡、实验卡、证据标签、产品门禁和停止规则，探索火焰、角色、地形、空间音频等陌生领域；
- 页面明确区分 `PRIMARY_SOURCE`、`UPSTREAM_SOURCE`、`TARGET_MEDIA`、`RUNTIME_EVIDENCE`、`OUR_METHOD` 和 `PLANNED`；
- 待实现产品路线分为 Research Kit、Environment Runtime、AI Scenario Compiler 和 Domain Exploration Workbench 四个版本，不把规划描述成已有能力；
- 自动修复预算为同一阻塞最多 2–3 轮；没有新增证据时停止并输出阻塞报告。

本地入口：`http://127.0.0.1:4173/projects/natural-disasters-environment-study/unknown-to-product/`

浏览器验收见 [`experiments/playbook-validation.md`](./experiments/playbook-validation.md)：目标与长期方向、八步通用闭环、资料账本、六层效果映射、十二阶段路线、四个产品版本、五个复用模板、复制交互、键盘、减少动态和桌面/平板/手机共 25/25 通过。

## GitHub 远端交付

- Web 能力与扩展工作台：<https://yydshly.github.io/0828_codex_project/projects/natural-disasters-environment-study/>
- 陌生领域能力孵化指南：<https://yydshly.github.io/0828_codex_project/projects/natural-disasters-environment-study/unknown-to-product/>
- 上游真实运行时：<https://yydshly.github.io/0828_codex_project/demos/natural-disasters-environment-poc/>
- 远端研究档案：<https://github.com/yydshly/0828_codex_project/tree/main/projects/natural-disasters-environment-study>
- Pages 部署记录：<https://github.com/yydshly/0828_codex_project/actions/workflows/pages.yml>

部署由 `.github/workflows/pages.yml` 在 `main` 更新后自动执行：检出固定源码、运行 `node scripts/build-pages.mjs`、上传 `.pages-dist`，再发布到 GitHub Pages。Web 页、真实运行时、能力地图和验证证据必须在同一次提交中保持一致。

## 真实运行结论

固定提交已经完成：

1. `npm test`：上游自适应质量逻辑测试通过；
2. `npm run build`：31 个模块完成生产构建；
3. Chrome / WebGL2 启动：`App.running === true`；
4. `Director` 与 `Sandbox` 均已安装；
5. 11 个上游 acts 可见；
6. 用库自己的 `director.gotoAct()` 成功切换 `DEAD CALM`、`VIOLENT STORM`、`TSUNAMI`、`AFTERMATH`；
7. 无 boot error、页面异常或资源请求失败；
8. 浏览器检查 14/14 通过。

自动检查使用 SwiftShader，所以它证明功能链路，不代表物理显卡性能。结构化证据见 [`experiments/upstream-runtime-observation.json`](./experiments/upstream-runtime-observation.json)。

## 这个库的能力

| 可见效果 | 实际系统 | 核心原理 |
| --- | --- | --- |
| 多尺度海面、尖锐浪峰、持续泡沫 | `OceanFFT`、`OceanMesh` | 三层 JONSWAP 频谱、GPU butterfly IFFT、位移/导数与泡沫历史 |
| 有体积和远近层次的云 | `ProceduralTextures`、`Clouds` | Perlin-Worley 体积密度、ray marching、时域重投影与上采样 |
| 天空、太阳和空气透视 | `Atmosphere`、`SkyRenderer` | 大气查找表、多重散射近似与环境光更新 |
| 雨、飞沫、闪电、雾 | `Weather` 与天气子系统 | GPU 实例、共享天气状态、插值和后期合成 |
| 水龙卷、疯狗浪、海啸、飓风眼 | `Director` 事件系统 | 解析式电影特效场；不是 CFD 或灾害预测 |
| 自动电影镜头和自由探索 | `Director`、`CinematicCamera`、`Sandbox` | 状态机、时间轴、镜头轨迹与事件触发 |
| 画质与性能自适应 | `Quality`、`GpuProfiler`、`PostFX` | 五档 preset、动态分辨率、GPU 计时、TAA/Bloom/DOF/曝光等 |

它是算法驱动的 GPU 程序，不是 AI 模型。Cursor 很可能参与了开发：提交记录带有 Cursor co-author trailer；但 Cursor 是开发工具，不是运行时原理。实际运行依赖是 JavaScript、Three.js、WebGL2 和 GLSL Shader。

## 使用场景

- 网页电影化海洋、风暴和灾害镜头；
- 游戏主菜单、过场、环境背景和气氛预演；
- 导演分镜、天气状态和质量档的技术原型；
- 无外部美术资产的程序化视觉 Demo；
- GPU 渲染、Shader、FFT 海面和体积云的教学研究。

不适合直接用于气象预报、海啸预测、真实岸线淹没、工程仿真或通用游戏物理。

## 对我们的意义

1. **Project 002 / Environment Pack**：它提供一个真实的环境垂直包案例，但需先把全局状态和 UI 解耦。
2. **Project 008 / Director**：它证明天气、事件与摄影机可以由同一时间轴编排。
3. **Projects 009–010 / 资产组合**：静态角色与 GLB 可和运行时海洋、云、天气组合。
4. **验收体系**：固定镜头、质量 preset、状态采样、截图和 GPU 证据可以进入自动验收。

## 落地判断

当前判断仍为 `WATCH`，但原因已经变化：不再怀疑库能否运行，而是尚未证明它能低成本变成我们的通用能力包。

下一步门禁：

- 在命名明确的物理 GPU 上测 `low / medium / high` 与关键 acts；
- 验证外部宿主能否控制天气和镜头，而不复制整套 UI；
- 补齐 `init / applySpec / trigger / reset / dispose` 生命周期；
- 只有真实下游项目需要运行时海洋或天气，才开始抽取 Adapter。

## 本地运行

研究库的 Pages 预览：

```powershell
npm run build:pages
npm run preview:pages
```

打开：

```text
http://127.0.0.1:4173/demos/natural-disasters-environment-poc/?preset=low&adaptive=0
```

直接进入海啸幕：

```text
http://127.0.0.1:4173/demos/natural-disasters-environment-poc/?preset=low&adaptive=0&act=8
```

演示是上游原始 UI。可点击 `SANDBOX` 进入自由控制，或用时间轴/幕次控制 Director。

## 证据标签

- `TARGET_DEMO_MEDIA`：固定提交内的官方图，只支持目标画面判断；
- `UPSTREAM_SOURCE`：固定提交源码与配置；
- `UPSTREAM_RUNTIME`：我们实际启动固定提交得到的运行证据；
- `INVALIDATED_PROJECT_011_POC`：Revision 3 独立近似，仅保留错误路径记录；
- `INFERENCE`：从证据推导出的产品判断。
