# natural-disasters 能力地图

> 结论以固定提交 `849ff7f4199c9322d8ecafb48d62fc63f8d5af1d` 的真实运行效果、源码和浏览器证据为准。这里整理的是“这个库已经能做什么、怎样扩展、还缺什么”，不是自然灾害科学能力声明。

## 一句话定位

`natural-disasters` 是一套用 JavaScript、Three.js、WebGL2 与 GLSL Shader 实现的程序化海洋环境运行时。它把海洋、天空、云、天气、灾害特效、电影镜头和画质控制组合成可调度的实时演示；它不是 AI 模型，也不是气象、海啸或工程仿真软件。

## 六层能力栈

| 层 | 实际可见效果 | 主要实现 | 可复用输出 | 当前边界 |
| --- | --- | --- | --- | --- |
| 海洋 | 多尺度浪、尖锐浪峰、泡沫历史 | JONSWAP 频谱、GPU butterfly IFFT、位移和导数纹理 | 海面背景、航海场景、风暴基底 | 尚未验证船体浮力和岸线交互 |
| 天空与云 | 大气散射、太阳、体积云和远近层次 | 大气 LUT、Perlin-Worley 密度、ray marching、时域重投影 | 天气预设、时间段、气氛镜头 | 物理 GPU 成本仍需实测 |
| 天气 | 雨、飞沫、雾、闪电 | GPU 实例、共享天气状态、插值与后期合成 | 风暴状态、游戏环境反馈、动态背景 | 不是预测或真实气象数据 |
| 灾害特效 | 水龙卷、疯狗浪、海啸、飓风眼 | 解析式电影特效和事件触发 | 过场、演示、关卡事件、宣传镜头 | 不是 CFD、浅水方程或淹没计算 |
| 编排与交互 | 11 幕 Director、Sandbox、自由切换 | 状态机、时间轴、摄影机轨迹、事件 API | 可重复分镜、交互展厅、导演工具 | 外部宿主 Adapter 尚未抽取 |
| 质量与发布 | 五档画质、动态分辨率、TAA/Bloom/DOF | GPU profiler、preset、后期链和 Vite 构建 | 桌面 Web 演示、低档回退、证据采集 | 多实例、统一 dispose、跨浏览器仍未证明 |

## 已演示的扩展场景

这些场景不重写海洋或 Shader，只在真实上游运行时外增加业务语义层：

1. 港口台风预警：`storm` + `hurricane()`，叠加港区节点、预案等级和行动清单。
2. 近岸海啸疏散：`overcast` + `tsunami()`，叠加风险带、路线和演示倒计时。
3. 海上平台风暴作业：`night` + `lightning()`，叠加停工、人员清点和雷暴窗口。

业务覆盖层只是交互与叙事示意；它不提供预警、淹没或结构安全结论。

## 可扩展方向

| 级别 | 扩展内容 | 代价 | 适合先做吗 |
| --- | --- | --- | --- |
| L0 | 新天气、时间与画质预设 | 低 | 是，最快形成素材和视觉差异 |
| L1 | 新 Director 幕次、镜头和事件顺序 | 低—中 | 是，可形成连续内容和可重复演示 |
| L2 | 船只、浮标、平台、角色和任务 | 中 | 有明确游戏或产品用例时做 |
| L3 | 船尾波、风暴潮、冲击波组、新解析事件 | 高 | 需要改渲染/事件系统时做 |
| L4 | 岸线、城市、海床、真实淹没和科学校准 | 很高 | 不应作为当前库的自然延伸 |

## 对个人的三条落地线

- 游戏：用“海上风暴生存”5–10 分钟垂直切片证明环境能影响玩法，再补玩家、船舶、碰撞、伤害、任务和存档。
- 个人 IP：把深海档案、风暴观测或海洋异常调查做成互动主页、连续事件与固定视觉身份。
- 素材库：持续沉淀环境 preset、Director 幕次、循环视频、封面、UI、Three.js 模板和许可/性能元数据。

推荐顺序：`可玩切片 → IP 身份 → 素材封装 → Environment Director Kit`。三条线共享同一环境母体，避免分别重做。

## 采用判断

当前状态是 `WATCH`：真实运行、Director 调度和 Web 扩展示范已经成立；通用产品化尚需物理 GPU 数据、外部宿主控制、`init / applySpec / trigger / reset / dispose` 生命周期和首个真实下游需求。

## 在线交付

- [能力与扩展工作台](https://yydshly.github.io/0828_codex_project/projects/natural-disasters-environment-study/)
- [上游真实运行时](https://yydshly.github.io/0828_codex_project/demos/natural-disasters-environment-poc/)
- [Project 011 源码与研究证据](https://github.com/yydshly/0828_codex_project/tree/main/projects/natural-disasters-environment-study)
- [GitHub Pages 部署记录](https://github.com/yydshly/0828_codex_project/actions/workflows/pages.yml)

## 已验证证据

- 固定上游提交的生产构建与 11 幕 Director；
- 上游运行链路浏览器检查 14/14；
- Web 工作台、四个证据幕、三个扩展场景和个人路线浏览器检查 39/39；
- SwiftShader 只证明功能链路，不代表物理 GPU 性能。
