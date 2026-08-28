# NATIVE PDF, STRUCTURED

> Project 006：研究 `nativePDF-structurer` 的能力、本质、适用场景、扩展方向与同类产品，并形成是否值得继续投入的选型判断。

[在线研究总结](https://yydshly.github.io/0828_codex_project/projects/nativepdf-structurer-analysis/) · [上游仓库](https://github.com/crunz-ai/nativePDF-structurer)

## 最终判断

`nativePDF-structurer` 不是新的 PDF 理论、OCR 模型或完整 RAG，而是一套面向数字原生技术手册的确定性结构恢复代码。它位于 PyMuPDF 读取对象与下游 RAG 检索之间：利用文字、字体、坐标、图片和矢量路径恢复表格、复合视觉区域、内容归属、阅读顺序与来源记录。

暂不把它列为通用 PDF 方向的核心研究。保留它作为：

- 数字原生工业手册的专用候选解析器；
- Claim 所有权、双 bbox 和 provenance 的工程参考；
- 与 PyMuPDF4LLM、Docling、MinerU 等方案进行真实语料 A/B 的对照基线。

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 项目编号 | 006 |
| 研究对象 | crunz-ai/nativePDF-structurer |
| 固定提交 | `39efc40f3ce5334539968a7818c03e68cb437c5f` |
| 上游版本 | 0.1.0 |
| 研究日期 | 2026-08-28 至 2026-08-29 |
| 研究性质 | 源码、架构、测试、最小运行与同类产品选型研究 |
| 当前状态 | 已形成采用判断，进入观察清单 |

## 我们的理解

### 它的本质

```text
PDF 原生对象
  → 几何与模板规则
  → 表格 / 视觉区 / 标题 / 公式候选
  → Claim 所有权仲裁
  → 阅读顺序恢复
  → Markdown + CSV + PNG + IR + provenance
```

它主要完成结构层，不完成完整 RAG：

- 上游：PyMuPDF 提取文字、字体、坐标、图片与矢量图元；
- 本库：恢复对象关系、内容归属和输出顺序；
- 下游：Chunk、Embedding、向量库、Rerank 与问答系统。

### 它的能力

- 数字原生文字、字体、坐标与方向提取；
- 多栏、旋转文字、编号窄列和复合对象阅读顺序；
- 原生表格检测、规则线补检以及 PNG/CSV 兜底；
- 位图、矢量、引线、标签与附近文字的视觉区域合并；
- 表格、视觉区域、原始图片和正文之间的 Claim 冲突仲裁；
- PDF 目录与可选字体规则辅助标题识别；
- 公式默认输出 PNG，简单公式保守尝试 LaTeX；
- 页面、bbox、图元 ID、Claim 和输出资源 provenance。

### 它明确不解决

- 纯扫描 PDF 和损坏文字层；
- 设备图、动作、故障和图表的业务语义；
- 复杂公式的可靠 LaTeX 恢复；
- 所有罕见、艺术化、语义依赖强的版式；
- Embedding、向量数据库、检索、Rerank 和问答；
- 统一公开数据集上的精度保证。

## 为什么比 OCR/VLM 路线快

“快”是相对 OCR 或模型解析而言，不是相对 `page.get_text()` 的纯文本提取。

它直接使用 PDF 已有对象，主要执行坐标比较、矩形相交、规则线归并、掩码形态学、连通区域和排序；不会对所有页面重新 OCR，也不会运行大规模模型或网络 API。它因此比直接提取慢、但通常比实现相近结构输出的 OCR/VLM 路线轻。

## 使用场景

高匹配：

- 数十至数百页的设备、维修、安装和电气手册；
- 工业产品目录、参数表、尺寸图和编号说明表；
- 需要本地、确定性、可回溯的 RAG 预处理；
- 只希望将少量复杂视觉区域交给 VLM 的混合流水线。

低匹配：

- 扫描档案、拍照件、手写文件；
- 公式密集的论文和教材；
- 需要图片语义理解的问答；
- 只有简单单栏正文、直接提取已经足够的 PDF。

## 可扩展方向

1. **混合路由：** 按页检测文字层健康度，原生、OCR 和 VLM 路线统一回写 IR。
2. **RAG Chunker：** 按章节和结构节点分块，保持表格、图题和说明的原子性。
3. **Domain Profiles：** 将厂商模板、页眉、字体层级和阈值变成可配置 Profile。
4. **语义关系：** 建立设备图、编号、图题和说明表之间的显式链接。
5. **公开评测：** 使用真实坏样本和最终问答指标，而不只比较输出文件 hash。
6. **生产化：** 批处理、并行、缓存、失败队列、服务化、跨平台 CI 与许可证治理。

## 同类产品

| 产品 | 路线 | 主要适用范围 |
| --- | --- | --- |
| [PyMuPDF4LLM](https://pymupdf.readthedocs.io/en/latest/pymupdf4llm/index.html) | 原生提取、布局分析、按需 OCR | 最接近的通用与成熟基线 |
| [Docling](https://docling.org/) | 布局模型、表格模型、OCR、结构文档树 | 通用企业文档和完整 RAG ingestion |
| [MinerU](https://github.com/opendatalab/MinerU) | OCR、布局、公式、表格与 VLM | 扫描件、论文与复杂混合文档 |
| [Marker](https://github.com/datalab-to/marker) | 深度模型、OCR、可选 LLM | 论文、教材、公式和复杂排版 |
| [Unstructured](https://docs.unstructured.io/open-source/concepts/partitioning-strategies) | 规则、hi-res 与 OCR 多策略 | 企业连接器、分块和多数据源摄取 |

## 独立验证记录

在 Windows、Python 3.12 环境使用项目固定依赖安装并运行：

- CLI 可以端到端生成 Markdown、视觉区域 PNG、IR 和调试报告；
- 一个三页合成数字原生 PDF 完成处理；该样本只用于验证运行链路，不代表真实精度；
- 183 个单元测试中 180 个通过；3 个失败来自 Windows 写出的 CRLF 与测试期望 LF 不一致；
- 当前上游 GitHub Actions 仅覆盖 Ubuntu 下的 Python 3.12、3.13 和 3.14；
- 上游未公开统一精度基准和真实回归 PDF 语料。

这说明代码不是空壳，但版本仍早，跨平台与真实语料生产成熟度需要自行验证。

## 建议的采用测试

如果未来拥有大量 OEM 手册：

1. 选取 10–20 份代表文档；
2. 每份选择 5–10 个最难页面；
3. 对比 nativePDF、PyMuPDF4LLM 和一条模型路线；
4. 检查文字覆盖、阅读顺序、表格完整性、视觉区域整体性、重复率、来源追踪、每页耗时和资源成本；
5. 只有当 nativePDF 在目标手册上持续胜出，才投入 Profile 和生产化适配。

## 来源与边界

- [nativePDF-structurer README](https://github.com/crunz-ai/nativePDF-structurer)
- [nativePDF-structurer 工程架构](https://github.com/crunz-ai/nativePDF-structurer/blob/main/docs/architecture.md)
- [固定研究提交 39efc40](https://github.com/crunz-ai/nativePDF-structurer/commit/39efc40f3ce5334539968a7818c03e68cb437c5f)
- [PyMuPDF Page API](https://pymupdf.readthedocs.io/en/latest/page.html)
- [Artifex Licensing](https://artifex.com/licensing)

上游项目自身采用 Apache-2.0，但 PyMuPDF 是 AGPL / Artifex 商业双授权运行时依赖；闭源或 SaaS 使用需要单独评估。页面中的研究优先级、采用建议与扩展排序属于本研究的判断，不是上游作者结论。

## 复现网页

在仓库根目录执行：

```powershell
npm run build:pages
$env:PORT = 4173
npm run preview:pages
```

访问：`http://127.0.0.1:4173/projects/nativepdf-structurer-analysis/`。
