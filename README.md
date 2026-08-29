# 0828 Codex Project

一个用于持续开发、验证和公开展示独立研究子项目的仓库。当前收录七个项目：一个完整可玩的程序化跑酷游戏，以及面向产品模式、个人 IP 资产、古籍资料源、PDF 结构恢复、idea-to-video 导演协议和单图 3D 场景生成的六项研究。

[在线研究总库](https://yydshly.github.io/0828_codex_project/) · [项目在线演示](#当前研究项目) · [参与方式](CONTRIBUTING.md)

## 当前研究项目

所有项目都在同一张表中提供线上入口。优先点击“在线演示”体验成果，再通过“研究与源码”查看形成过程、证据和边界。

| 项目 | 方向与成果 | 在线演示 | 研究与源码 | 状态 |
| --- | --- | --- | --- | --- |
| [**001 · OUTRUN THE LEVEL**](projects/outrun-the-level/) | [程序化跑酷、关卡公平性、删除浪与重力翻转](projects/outrun-the-level/README.md) | [▶ 在线试玩](https://yydshly.github.io/0828_codex_project/demos/outrun-the-level/) | [在线研究总结](https://yydshly.github.io/0828_codex_project/projects/outrun-the-level/) · [仓库档案](projects/outrun-the-level/README.md) · [游戏源码](projects/outrun-the-level/game/) | 已验证 · 后续开展真人试玩 |
| [**002 · FROM SKILL TO STUDIO**](projects/gear-zero-platform-study/) | [Gear Zero 产品参照、Skill 编排与用户驱动数字产品平台](projects/gear-zero-platform-study/README.md) | [▶ 在线查看](https://yydshly.github.io/0828_codex_project/projects/gear-zero-platform-study/) | [仓库档案](projects/gear-zero-platform-study/README.md) · [页面源码](docs/projects/gear-zero-platform-study/) | 已验证 · 研究结论已发布 |
| [**003 · PERSONAL IP ASSET SYSTEM**](projects/personal-ip-image-pack-study/) | [人物锚点、能力路由、版本语义与生成式资产治理](projects/personal-ip-image-pack-study/README.md) | [▶ 操作六风格矩阵](https://yydshly.github.io/0828_codex_project/projects/personal-ip-image-pack-study/#style-matrix) | [在线研究总结](https://yydshly.github.io/0828_codex_project/projects/personal-ip-image-pack-study/) · [仓库档案](projects/personal-ip-image-pack-study/README.md) · [页面源码](docs/projects/personal-ip-image-pack-study/) | 已验证 · 六风格真实回归完成 |
| [**004 · DAIZHIGE CAPABILITY ATLAS**](projects/daizhige-capability-atlas/) | [古籍候选资料源、十大门类、代表书目与按需启用边界](projects/daizhige-capability-atlas/README.md) | [▶ 阅读归档总结](https://yydshly.github.io/0828_codex_project/projects/daizhige-capability-atlas/) | [在线研究总结](https://yydshly.github.io/0828_codex_project/projects/daizhige-capability-atlas/) · [仓库档案](projects/daizhige-capability-atlas/README.md) · [页面源码](docs/projects/daizhige-capability-atlas/) | 已归档 · 相关产品触发时启用 |
| [**006 · NATIVE PDF, STRUCTURED**](projects/nativepdf-structurer-analysis/) | [nativePDF-structurer 的能力、本质、适用边界、扩展方向与同类产品](projects/nativepdf-structurer-analysis/README.md) | [▶ 阅读最终判断](https://yydshly.github.io/0828_codex_project/projects/nativepdf-structurer-analysis/) | [在线研究总结](https://yydshly.github.io/0828_codex_project/projects/nativepdf-structurer-analysis/) · [仓库档案](projects/nativepdf-structurer-analysis/README.md) · [页面源码](docs/projects/nativepdf-structurer-analysis/) | 已验证 · 进入观察清单 |
| [**008 · DIRECTOR AS COMPILER**](projects/stickman-video-director-study/) | [Idea-to-video 导演协议、六幕分镜、批准门、首条 20 秒外部实测与自有风格迁移](projects/stickman-video-director-study/README.md) | [▶ 观看我们的 CLIP 01–02 实测](https://yydshly.github.io/0828_codex_project/projects/stickman-video-director-study/#user-sample) | [在线研究总结](https://yydshly.github.io/0828_codex_project/projects/stickman-video-director-study/) · [必要理解](projects/stickman-video-director-study/README.md#必要理解) · [实测审计](projects/stickman-video-director-study/experiments/user-generated-sample.json) · [上游子模块](projects/stickman-video-director-study/source/) | 已验证 · 官方/实测/模拟三层证据 |
| [**010 · SCENE, GENERATED.**](projects/scenegen-capability-study/) | [SceneGen 的官方效果、联合资产与布局生成、工程边界和触发式采用路线](projects/scenegen-capability-study/README.md) | [▶ 查看官方 3D 证据](https://yydshly.github.io/0828_codex_project/projects/scenegen-capability-study/#effect) | [在线研究总结](https://yydshly.github.io/0828_codex_project/projects/scenegen-capability-study/) · [仓库档案](projects/scenegen-capability-study/README.md) · [页面源码](docs/projects/scenegen-capability-study/) | 已验证 · 按真实 3D 任务触发 |

状态统一使用：`规划中`、`研究中`、`已验证`、`已归档`。

## 仓库定位

- 根目录 `README.md` 是整个研究库的对外入口。
- `projects/` 保存各子项目的实现、研究资料、证据与结论。
- `projects/outrun-the-level/game/` 是 Project 001 的零依赖 Canvas 游戏源码。
- `projects/gear-zero-platform-study/` 是 Project 002 的研究档案、设计契约与验收记录。
- `projects/personal-ip-image-pack-study/` 是 Project 003 的个人 IP 资产系统研究、权利边界和验收记录。
- `projects/daizhige-capability-atlas/` 是 Project 004 的古籍候选资料源、代表书目、来源边界与按需启用条件档案。
- `projects/nativepdf-structurer-analysis/` 是 Project 006 的 PDF 结构恢复、RAG 预处理边界、同类产品与采用判断档案。
- `projects/stickman-video-director-study/` 是 Project 008 的视频导演 Skill、用户 20 秒外部生成实测、代表性案例、自有风格迁移与后期生产路线档案。
- `projects/scenegen-capability-study/` 是 Project 010 的单图 3D 场景生成效果、原理、GLB 证据、工程边界、复用手册与采用判断档案。
- `docs/` 是 GitHub Pages 展示层，包含总库首页和项目研究总结。
- `scripts/build-pages.mjs` 将展示层与游戏组装到 `.pages-dist/`。
- `.github/workflows/pages.yml` 负责自动构建和部署。

## 本地运行与验证

需要 Node.js 18 或更高版本。在仓库根目录执行：

```powershell
npm run test:project-001
npm run test:project-002
npm run test:project-003
npm run test:project-004
node projects/nativepdf-structurer-analysis/tests/static-check.mjs
npm run test:project-008
npm run test:project-010
npm run build:pages
npm run preview:pages
```

访问：

- 总库：`http://127.0.0.1:4173/`
- 研究总结：`http://127.0.0.1:4173/projects/outrun-the-level/`
- 产品模式研究：`http://127.0.0.1:4173/projects/gear-zero-platform-study/`
- 个人 IP 资产实验台：`http://127.0.0.1:4173/projects/personal-ip-image-pack-study/`
- 古籍语料能力图谱：`http://127.0.0.1:4173/projects/daizhige-capability-atlas/`
- nativePDF 结构恢复研究：`http://127.0.0.1:4173/projects/nativepdf-structurer-analysis/`
- 视频导演工作流研究：`http://127.0.0.1:4173/projects/stickman-video-director-study/`
- SceneGen 能力研究：`http://127.0.0.1:4173/projects/scenegen-capability-study/`
- 游戏：`http://127.0.0.1:4173/demos/outrun-the-level/`

`preview:pages` 读取 `.pages-dist/`，修改后需先重新构建。

## GitHub Pages 部署

工作流见 [`.github/workflows/pages.yml`](.github/workflows/pages.yml)。向 `main` 推送 `docs/**`、Project 001、构建脚本、根 `package.json` 或工作流变更时，会自动：

1. 检出对应提交；
2. 运行 `node scripts/build-pages.mjs`；
3. 上传 `.pages-dist/`；
4. 发布到 <https://yydshly.github.io/0828_codex_project/>。

仓库首次启用时，需要在 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。如需回滚，执行 `git revert <release-commit>` 并推送到 `main`，同一工作流会重新发布回滚版本。

## 研究方法

每个子项目应保留：原始想法与提示词、环境与复现步骤、核心机制与禁止项、实验方法与证据、结论与价值、限制与下一步，以及源码、截图、研究总结和在线演示。

新增项目时，复制 [`projects/_template`](projects/_template/) 到 `projects/<project-slug>/`，并同步更新本 README、[`docs/projects.json`](docs/projects.json) 和 Pages 构建脚本。根 README 的“当前研究项目”表格必须同时登记在线演示、研究档案与源码入口，避免成果上线后仍只能从目录中寻找。完整约定见 [`projects/README.md`](projects/README.md)。

## 目录结构

```text
.
├─ .github/workflows/                 # GitHub Pages 自动部署
├─ docs/                              # 对外展示页
├─ projects/
│  ├─ _template/                     # 新项目模板
│  ├─ gear-zero-platform-study/      # Project 002 产品模式研究
│  ├─ personal-ip-image-pack-study/  # Project 003 个人 IP 资产系统研究
│  ├─ daizhige-capability-atlas/      # Project 004 古籍语料能力图谱
│  ├─ nativepdf-structurer-analysis/ # Project 006 PDF 结构恢复研究
│  ├─ stickman-video-director-study/ # Project 008 视频导演工作流研究
│  ├─ scenegen-capability-study/     # Project 010 单图 3D 场景生成研究
│  └─ outrun-the-level/
│     ├─ README.md                    # Project 001 研究档案
│     ├─ assets/                      # 截图与证据
│     └─ game/                        # 完整可玩游戏
├─ scripts/                           # 构建与预览
├─ package.json                       # 根级命令
└─ README.md                          # 总入口
```

## 当前发布基线

- Project 001：`v0.1.0`
- Project 002：产品模式研究页、能力地图、系统模型和行动建议已发布
- Project 003：十九项实际资产、六风格真实矩阵、三轴版本和 QA 生产流程已完成验证
- Project 003 验证：静态检查 36/36、浏览器检查 41/41、控制台与页面错误 0
- Project 004：殆知阁原生能力、十大门类、61 个代表路径、使用边界与条件价值已完成整理并归档
- Project 004 验证：静态检查 23/23、浏览器检查 25/25、控制台与页面错误 0
- Project 006：nativePDF-structurer 的能力、本质、适用场景、同类方案与扩展方向已完成研究，当前作为专用能力和 A/B 基线进入观察清单
- Project 006 验证：静态检查 22/22、桌面/平板/390px 浏览器检查通过、控制台与页面错误 0
- Project 008：已固定上游仓库，完成两条官方视频、用户 CLIP 01–02 二十秒实测、三类六幕导演案例、两级批准门、画幅/主题重构和采用路线研究
- Project 010：已固定 SceneGen 上游证据，完成官方输入 / GLB 实时对照、方法拆解、三件 GLB 静态审计、复用包、工程边界与触发式采用路线；静态检查 38/38
- 120 秒主流程，每 20 秒提升阶段
- 20/20 重力门种子、10/10 出口与解锁流程
- 静态检查 11/11；浏览器与控制台错误 0
- 桌面、平板、390px 手机均已验证
- 下一步：真人试玩与失败热点统计

## 许可证

仓库许可证尚未确定。在许可证明确前，请勿假设代码或素材可以被重新分发、商用或再授权。
