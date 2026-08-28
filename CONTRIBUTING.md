# 参与研究

本仓库优先保证研究记录可追溯、结论有证据、实验可复现。

## 新增项目

1. 从 `projects/_template/` 复制一份目录，命名为简短的英文小写 slug，例如 `projects/example-tool/`。
2. 填写项目 README，至少明确研究目标、上游来源、验证环境、实验记录和当前结论。
3. 将项目加入根目录 `README.md` 的项目索引。
4. 将展示信息加入 `docs/projects.json`，确保网页入口与仓库入口一致。
5. 若项目拥有独立远端代码库，可将其作为 Git submodule 放在该研究目录的 `source/` 下；不要直接复制无法追踪来源的大段代码。

## 记录原则

- 对外部资料附上原始链接和访问日期。
- 对关键结论保存命令、版本、日志、截图或测试结果。
- 明确区分事实、实验观察与个人判断。
- 失败实验同样保留，并说明失败条件与排查过程。
- 不提交密钥、令牌、个人数据或没有再分发权的资源。

## 提交建议

提交信息使用简短的动词开头，并标明影响范围，例如：

```text
docs: add project research notes
feat: add example project demo
test: record compatibility matrix
```

一个提交尽量只表达一个完整意图，并在提交前确认项目页中的复现步骤仍然有效。
