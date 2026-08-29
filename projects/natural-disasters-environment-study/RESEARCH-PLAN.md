# Project 011 Research Plan

## 研究原则

以目标演示效果为准，但所有说明必须回到固定提交的真实运行：先让库本身产生画面，再从画面反推状态、镜头、渲染系统和算法。独立写一个相似效果不能证明这个库的能力。

## 决策目标

研究最终只允许三种结论：

- `ADOPT_BOUNDED`：真实运行、真实需求、宿主解耦、性能和生命周期均通过；
- `WATCH`：库的效果成立，但抽取成本或下游需求尚未证明；
- `REJECT`：运行、许可、稳定性或耦合成本不可接受。

当前结论：`WATCH`。固定提交的运行门禁已通过；物理 GPU、产品宿主和生命周期门禁未通过。

## 目标效果链

```text
DEAD CALM / 定标
→ CLOUD + GALE / 建立体积和风力
→ VIOLENT STORM / 组合威胁
→ WATERSPOUT + ROGUE WAVE + HURRICANE / 事件升级
→ TSUNAMI / 英雄事件
→ NIGHT LIGHTNING
→ AFTERMATH / 恢复
```

这条链来自上游 11 幕 Director，总时长 352 秒。研究中的四个固定抽样点为 `DEAD CALM`、`VIOLENT STORM`、`TSUNAMI`、`AFTERMATH`。

## 证据类型

| 标签 | 含义 | 可以证明什么 |
| --- | --- | --- |
| `TARGET_DEMO_MEDIA` | 固定提交内的官方截图 | 目标构图和视觉标准 |
| `UPSTREAM_SOURCE` | 固定提交源码、配置、许可证 | 架构、算法、依赖和实现边界 |
| `UPSTREAM_RUNTIME` | 固定提交的本地浏览器运行 | 能否启动、切幕、输出状态、报错和限定环境帧时间 |
| `INVALIDATED_PROJECT_011_POC` | Revision 3 自写近似 | 只记录错误研究路径，不支持库能力结论 |
| `INFERENCE` | 从以上证据推导 | 有边界的产品判断 |

## 阶段与状态

### Phase 0 · 固定目标与版本 — 完成

- 仓库：`Token-Gremlin/natural-disasters`；
- commit：`849ff7f4199c9322d8ecafb48d62fc63f8d5af1d`；
- version：`1.0.0`；
- license：MIT；
- 三张官方目标图完成来源和哈希冻结。

### Phase 1 · 上游真实运行 — 完成

- 固定提交依赖已安装；
- `npm test` 通过；
- `npm run build` 通过；
- Chrome / WebGL2 中 `App`、`Director`、`Sandbox` 启动；
- 11 个 acts 被读取；
- 四个关键 acts 由上游 `gotoAct()` 切换；
- boot error、页面异常、资源失败均为 0；
- 自动检查 14/14。

边界：浏览器自动化使用 SwiftShader，只能作为功能烟测，不能当物理 GPU 性能结论。

### Phase 2 · 效果反推 — 完成

对每个可见结果建立：

```text
画面特征 → 天气/海况参数 → 渲染模块 → 算法 → 镜头 → 验收证据
```

详细矩阵见 [`experiments/target-effect-reverse-engineering.md`](./experiments/target-effect-reverse-engineering.md)。

### Phase 3 · 演示集成 — 完成

- 演示路由发布固定提交的上游构建产物；
- 上游源码保存在 `vendor/natural-disasters/`；
- 保留 MIT 许可证；
- 演示不使用 Project 011 自写 Shader；
- 查询参数直接传给上游：`preset`、`adaptive`、`act`、`director`、`debug`、`paused`。

### Phase 4 · 物理 GPU 基线 — 待执行

在命名明确的 Windows / Chrome / GPU 环境执行：

| 轴 | 样本 |
| --- | --- |
| Act | 0、4、8、10 |
| Preset | low、medium、high |
| Adaptive | on、off |
| 证据 | GPU/驱动、DPR、render buffer、frame time、截图、console、状态样本 |

通过条件：目标主体在降级后仍可读，且无持续 Shader 错误、黑帧、资源泄漏或状态漂移。

### Phase 5 · Environment Adapter — 产品触发后才开始

只有一个真实下游项目需要运行时海洋/天气时，才验证：

```ts
interface EnvironmentAdapter {
  init(host: EnvironmentHost): Promise<void>;
  applySpec(spec: EnvironmentSpec): void;
  trigger(event: EnvironmentEvent): void;
  update(dt: number): void;
  reset(): void;
  captureEvidence(): EnvironmentEvidence;
  dispose(): void;
}
```

禁止把整个上游 `App + UI + Director` 原封不动包装成 Adapter 后声称完成抽取。

## 停止规则

遇到以下任一情况，立即报告并停止扩展：

- 同一启动或 Shader 阻塞连续出现，且一次明确重试不能排除环境问题；
- 必须大改上游渲染内核才能跑通；
- reset / dispose 无法清理状态或 GPU 资源；
- 性能只能靠删除目标主体维持；
- 需求滑向科学灾害模拟；
- 没有真实下游任务，只是在收藏技术 Demo。

## 下一条可执行动作

不要继续重写视觉。下一步是在一台命名明确的物理 GPU 上运行当前固定提交演示，完成 4 acts × 3 presets 的基线；之后再决定是否设计 Adapter。
