# 0828 Codex Project

一个用于持续开发、验证和公开展示独立研究子项目的仓库。当前收录三个项目：一个完整可玩的程序化跑酷游戏、一项从 Gear Zero 抽象“用户驱动数字产品平台”的产品模式研究，以及一项已经归档、在相关产品出现时按需启用的古籍候选资料源研究。

[在线研究总库](https://yydshly.github.io/0828_codex_project/) · [项目在线演示](#当前研究项目) · [参与方式](CONTRIBUTING.md)

## 当前研究项目

所有项目都在同一张表中提供线上入口。优先点击“在线演示”体验成果，再通过“研究与源码”查看形成过程、证据和边界。

| 项目 | 方向与成果 | 在线演示 | 研究与源码 | 状态 |
| --- | --- | --- | --- | --- |
| [**001 · OUTRUN THE LEVEL**](projects/outrun-the-level/) | [程序化跑酷、关卡公平性、删除浪与重力翻转](projects/outrun-the-level/README.md) | [▶ 在线试玩](https://yydshly.github.io/0828_codex_project/demos/outrun-the-level/) | [在线研究总结](https://yydshly.github.io/0828_codex_project/projects/outrun-the-level/) · [仓库档案](projects/outrun-the-level/README.md) · [游戏源码](projects/outrun-the-level/game/) | 已验证 · 后续开展真人试玩 |
| [**002 · FROM SKILL TO STUDIO**](projects/gear-zero-platform-study/) | [Gear Zero 产品参照、Skill 编排与用户驱动数字产品平台](projects/gear-zero-platform-study/README.md) | [▶ 在线查看](https://yydshly.github.io/0828_codex_project/projects/gear-zero-platform-study/) | [仓库档案](projects/gear-zero-platform-study/README.md) · [页面源码](docs/projects/gear-zero-platform-study/) | 已验证 · 研究结论已发布 |
| [**004 · DAIZHIGE CAPABILITY ATLAS**](projects/daizhige-capability-atlas/) | [古籍候选资料源、十大门类、代表书目与按需启用边界](projects/daizhige-capability-atlas/README.md) | [▶ 阅读归档总结](https://yydshly.github.io/0828_codex_project/projects/daizhige-capability-atlas/) | [在线研究总结](https://yydshly.github.io/0828_codex_project/projects/daizhige-capability-atlas/) · [仓库档案](projects/daizhige-capability-atlas/README.md) · [页面源码](docs/projects/daizhige-capability-atlas/) | 已归档 · 相关产品触发时启用 |

状态统一使用：`规划中`、`研究中`、`已验证`、`已归档`。

## 仓库定位

- 根目录 `README.md` 是整个研究库的对外入口。
- `projects/` 保存各子项目的实现、研究资料、证据与结论。
- `projects/outrun-the-level/game/` 是 Project 001 的零依赖 Canvas 游戏源码。
- `projects/gear-zero-platform-study/` 是 Project 002 的研究档案、设计契约与验收记录。
- `projects/daizhige-capability-atlas/` 是 Project 004 的古籍候选资料源、代表书目、来源边界与按需启用条件档案。
- `docs/` 是 GitHub Pages 展示层，包含总库首页和项目研究总结。
- `scripts/build-pages.mjs` 将展示层与游戏组装到 `.pages-dist/`。
- `.github/workflows/pages.yml` 负责自动构建和部署。

## 本地运行与验证

需要 Node.js 18 或更高版本。在仓库根目录执行：

```powershell
npm run test:project-001
npm run test:project-002
npm run test:project-004
npm run build:pages
npm run preview:pages
```

访问：

- 总库：`http://127.0.0.1:4173/`
- 研究总结：`http://127.0.0.1:4173/projects/outrun-the-level/`
- 产品模式研究：`http://127.0.0.1:4173/projects/gear-zero-platform-study/`
- 古籍语料能力图谱：`http://127.0.0.1:4173/projects/daizhige-capability-atlas/`
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
│  ├─ daizhige-capability-atlas/      # Project 004 古籍语料能力图谱
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
- Project 004：殆知阁原生能力、十大门类、61 个代表路径、使用边界与条件价值已完成整理并归档
- Project 004 验证：静态检查 23/23、浏览器检查 25/25、控制台与页面错误 0
- 120 秒主流程，每 20 秒提升阶段
- 20/20 重力门种子、10/10 出口与解锁流程
- 静态检查 11/11；浏览器与控制台错误 0
- 桌面、平板、390px 手机均已验证
- 下一步：真人试玩与失败热点统计

## 许可证

仓库许可证尚未确定。在许可证明确前，请勿假设代码或素材可以被重新分发、商用或再授权。
