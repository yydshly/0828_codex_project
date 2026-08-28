# OUTRUN THE LEVEL · Game

Project 001 的完整可玩游戏源码。零外部依赖，使用原生 HTML、CSS 和 Canvas 2D。

[在线游戏](https://yydshly.github.io/0828_codex_project/demos/outrun-the-level/) · [研究总结](https://yydshly.github.io/0828_codex_project/projects/outrun-the-level/) · [项目档案](../README.md)

## 运行

从仓库根目录运行完整发布结构：

```powershell
npm run build:pages
npm run preview:pages
```

或在当前目录运行：

```powershell
npm start
```

## 操作与流程

- 桌面端：空格或鼠标点击跳跃；移动端：点击游戏画面。
- 主模式 120 秒，每 20 秒提高速度和障碍密度。
- 关卡由受约束的安全模板生成，重力门会切换顶面/底面跑酷。
- 抵达出口后通关并永久解锁无限模式。
- 分数、距离、收集物、最高分和解锁状态保存在浏览器中。
- 主界面和结算页均可返回 Project 001 研究总结。

## 验证

```powershell
npm run check
```

也可在仓库根目录运行 `npm run test:project-001`。游戏暴露 `window.__OTL_TEST__`，用于确定性验证开始、跳跃、时间推进、重力门、出口和解锁流程。

## 发布

根构建脚本会把 `index.html`、`style.css` 和 `game.js` 复制到 `.pages-dist/demos/outrun-the-level/`，再由 GitHub Pages 工作流部署。
