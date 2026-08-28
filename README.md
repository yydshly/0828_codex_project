# 0828 Codex Project

用于持续研究、验证和展示多个子项目能力的总仓库。

[研究项目](#研究项目) · [研究方法](#研究方法) · [在线展示](https://yydshly.github.io/0828_codex_project/) · [参与方式](CONTRIBUTING.md)

## 仓库定位

- 根目录 `README.md` 是整个研究库的统一入口和项目索引。
- `projects/` 保存每个研究对象的资料、实验记录与结论；独立代码库可按需通过 Git submodule 引入。
- `docs/` 提供面向浏览者的 GitHub Pages 展示页。
- `.github/workflows/` 负责持续部署展示页。

## 研究项目

当前仓库刚完成初始化，尚未登记正式研究项目。

| 项目 | 研究方向 | 状态 | 研究记录 | 演示 |
| --- | --- | --- | --- | --- |
| _待添加_ | — | 规划中 | — | — |

状态统一使用：`规划中`、`研究中`、`已验证`、`已归档`。

## 研究方法

每个子项目都尽量保留以下可复现信息：

1. 研究目标与待验证问题；
2. 上游项目、版本与资料来源；
3. 环境、依赖和运行步骤；
4. 实验过程、证据与限制；
5. 结论、适用场景和后续计划；
6. 可访问的代码、截图或在线演示。

新增项目时，复制 [`projects/_template`](projects/_template/) 为 `projects/<project-slug>/`，完成项目页后同步更新上方索引及 [`docs/projects.json`](docs/projects.json)。完整约定见 [`projects/README.md`](projects/README.md)。

## 目录结构

```text
.
├─ .github/workflows/   # 自动化流程
├─ docs/                # GitHub Pages 静态展示页
├─ projects/            # 各子项目研究档案
│  └─ _template/        # 新研究项目模板
├─ CONTRIBUTING.md      # 协作与记录规范
└─ README.md            # 总入口与项目索引
```

## 在线展示

`main` 分支中 `docs/` 的变更会由 GitHub Actions 自动发布。首次发布前，需要在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。

预计访问地址：<https://yydshly.github.io/0828_codex_project/>

## 当前状态

- [x] 初始化 `main` 分支与基础目录
- [x] 建立统一研究模板
- [x] 建立 GitHub Pages 展示页及自动发布工作流
- [ ] 添加第一个研究项目
- [ ] 根据项目性质确定仓库许可证
