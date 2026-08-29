const { mkdir } = require("node:fs/promises");
const { join } = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.PROJECT008_BASE_URL || "http://127.0.0.1:4173";
const projectUrl = `${baseUrl}/projects/stickman-video-director-study/`;
const evidenceRoot = join(__dirname, "..", "assets");

async function layoutState(page) {
  return page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  }));
}

async function waitForLab(page) {
  await page.waitForFunction(() => document.querySelectorAll(".scene-card").length === 6);
}

async function run() {
  await mkdir(evidenceRoot, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  const errors = [];
  const externalRequests = new Set();
  const record = (label, passed, detail = "") => checks.push({ label, passed, detail });

  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      permissions: ["clipboard-read", "clipboard-write"]
    });
    const page = await context.newPage();
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(`console: ${message.text()}`);
    });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
    page.on("request", (request) => {
      const target = new URL(request.url());
      const base = new URL(baseUrl);
      if (target.origin !== base.origin) externalRequests.add(target.origin);
    });

    const response = await page.goto(projectUrl, { waitUntil: "networkidle" });
    await waitForLab(page);
    record("专题页返回成功", response && response.ok(), response ? String(response.status()) : "no response");
    record("标题正确", await page.title() === "DIRECTOR AS COMPILER · Project 008");
    record("页面不是空白", (await page.locator("body").innerText()).trim().length > 3000);
    record("无框架错误覆盖层", await page.locator("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay").count() === 0);
    record("首屏明确不是视频模型", await page.getByText("0 RENDERER", { exact: true }).isVisible() && await page.getByText("DIRECTOR SKILL ≠ VIDEO MODEL", { exact: true }).isVisible());
    record("没有外部运行请求", externalRequests.size === 0, [...externalRequests].join(", "));

    const videos = page.locator(".video-card video");
    record("上游视频卡为两张", await videos.count() === 2);
    await page.waitForFunction(() => [...document.querySelectorAll(".video-card video")].every((video) => video.readyState >= 1 && video.videoWidth > 0 && video.videoHeight > 0));
    const videoState = await videos.evaluateAll((items) => items.map((video) => ({ readyState: video.readyState, duration: video.duration, width: video.videoWidth, height: video.videoHeight })));
    record("两条本地 MP4 元数据加载", videoState.every((video) => video.readyState >= 1 && video.duration > 9 && video.duration < 11 && video.width > 0), JSON.stringify(videoState));
    await page.locator("#official-demos").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-008-official-videos.png"), fullPage: false });

    await page.locator("#user-sample").scrollIntoViewIfNeeded();
    const userVideo = page.locator(".user-sample-video video");
    await page.waitForFunction(() => {
      const video = document.querySelector(".user-sample-video video");
      return video && video.readyState >= 1 && video.videoWidth > 0;
    });
    const userVideoState = await userVideo.evaluate((video) => ({
      readyState: video.readyState,
      duration: video.duration,
      width: video.videoWidth,
      height: video.videoHeight
    }));
    record("用户实测 MP4 元数据加载", userVideoState.readyState >= 1 && userVideoState.duration > 20 && userVideoState.duration < 20.1 && userVideoState.width === 1280 && userVideoState.height === 720, JSON.stringify(userVideoState));
    record("用户实测明确映射 CLIP 01–02", await page.getByText("CLIP 01 + CLIP 02 · PROVISIONAL", { exact: true }).isVisible() && await page.locator(".sample-timeline li").count() === 3);
    record("用户实测显示可验证切点与证据限制", (await page.locator(".sample-audit").innerText()).includes("8.58s") && (await page.locator(".sample-limit").innerText()).includes("不能证明"));
    record("必要理解归纳为五项", await page.locator(".necessary-understanding li").count() === 5 && (await page.locator(".necessary-understanding").innerText()).includes("Phase B"));
    const auditResponse = await page.request.get(`${projectUrl}user-generated-sample.json`);
    const auditPayload = await auditResponse.json();
    record("机器可读实测审计可访问", auditResponse.ok() && auditPayload.media.sha256.startsWith("5dd2efd0") && auditPayload.content_mapping.covered_scenes.length === 2);
    await page.locator("#user-sample").evaluate((element) => window.scrollTo({
      top: window.scrollY + element.getBoundingClientRect().top - 86,
      behavior: "instant"
    }));
    await page.waitForTimeout(250);
    await page.screenshot({ path: join(evidenceRoot, "project-008-user-sample.png"), fullPage: false });

    await page.locator("#character-styles").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.querySelectorAll(".character-style-card img")].every((image) => image.complete && image.naturalWidth > 0));
    const characterImages = await page.locator(".character-style-card img").evaluateAll((images) => images.map((image) => ({
      width: image.naturalWidth,
      height: image.naturalHeight,
      alt: image.alt
    })));
    record("八种静态形象样张完整加载", characterImages.length === 8 && characterImages.every((image) => image.width === 1000 && image.height === 1000 && image.alt.length > 8), JSON.stringify(characterImages));
    record("形象卡覆盖描述、场景与注意项", await page.locator(".character-style-card").count() === 8 && await page.locator(".character-style-card dl").count() === 8 && (await page.locator(".character-priority").innerText()).includes("几何纸片人"));
    record("形象实验不冒充视频验证", (await page.locator("#character-styles").innerText()).includes("不能证明视频动作") && (await page.locator("#character-styles").innerText()).includes("本轮只确认形象方向"));
    const galleryResponse = await page.request.get(`${projectUrl}character-style-gallery.json`);
    const galleryPayload = await galleryResponse.json();
    record("机器可读形象清单可访问", galleryResponse.ok() && galleryPayload.generation_mode === "image_only" && galleryPayload.styles.length === 8);
    await page.locator("#character-styles").evaluate((element) => window.scrollTo({
      top: window.scrollY + element.getBoundingClientRect().top - 86,
      behavior: "instant"
    }));
    await page.waitForTimeout(250);
    await page.screenshot({ path: join(evidenceRoot, "project-008-character-styles.png"), fullPage: false });

    await page.locator("#lab").scrollIntoViewIfNeeded();
    record("默认案例是励志叙事", await page.locator("#patternBadge").textContent() === "MOTIVATIONAL" && await page.locator("#wordCount").textContent() === "143");
    record("默认六幕均已渲染", await page.locator(".scene-card").count() === 6);
    record("默认 Phase B 被锁定", (await page.locator("#promptOutput").textContent()).startsWith("LOCKED") && await page.locator("#copyPrompt").isDisabled());

    await page.getByRole("button", { name: "批准当前预案，解锁 Phase B", exact: true }).click();
    const defaultPrompt = await page.locator("#promptOutput").textContent();
    record("批准后解锁 16:9 dark Prompt", defaultPrompt.includes("10-second 16:9") && defaultPrompt.includes("pure black background") && defaultPrompt.includes("AUDIO-ONLY DIALOGUE"));
    await page.locator('.scene-card[data-scene-index="2"]').click();
    record("选择第三幕会重编 Prompt", (await page.locator("#promptOutput").textContent()).includes("red bars descend from the previous scene"));

    await page.locator("#ratioSelect").selectOption("9:16");
    record("画幅变化重置批准", (await page.locator("#promptOutput").textContent()).startsWith("LOCKED") && (await page.locator("#approvalStatus").textContent()).includes("旧批准失效"));
    record("竖屏构图说明发生变化", (await page.locator("#compositionRule").textContent()).includes("前后景纵深"));
    await page.getByRole("button", { name: "批准当前预案，解锁 Phase B", exact: true }).click();
    record("竖屏 Prompt 使用纵深合同", (await page.locator("#promptOutput").textContent()).includes("foreground and background depth"));

    await page.getByText("白底黑线", { exact: true }).click();
    record("主题变化重置批准", (await page.locator("#promptOutput").textContent()).startsWith("LOCKED") && (await page.locator("#approvalStatus").textContent()).includes("背景合同已重构"));
    await page.getByRole("button", { name: "批准当前预案，解锁 Phase B", exact: true }).click();
    record("light Prompt 使用纯白背景合同", (await page.locator("#promptOutput").textContent()).includes("digitally pure-white canvas"));

    await page.getByRole("tab", { name: /科普解释/ }).click();
    await waitForLab(page);
    record("科普案例加载 141 词与默认竖屏", await page.locator("#patternBadge").textContent() === "EDUCATIONAL" && await page.locator("#wordCount").textContent() === "141" && await page.locator("#ratioSelect").inputValue() === "9:16");
    record("切换案例重新锁定 Phase B", (await page.locator("#promptOutput").textContent()).startsWith("LOCKED"));

    const scienceTab = page.getByRole("tab", { name: /科普解释/ });
    await scienceTab.focus();
    await page.keyboard.press("ArrowRight");
    record("案例标签支持方向键", await page.locator("#patternBadge").textContent() === "COMMERCIAL" && await page.getByRole("tab", { name: /产品概念/ }).evaluate((element) => document.activeElement === element));
    record("商业案例加载 132 词与默认方形", await page.locator("#wordCount").textContent() === "132" && await page.locator("#ratioSelect").inputValue() === "1:1");

    await page.getByRole("button", { name: "批准当前预案，解锁 Phase B", exact: true }).click();
    await page.getByRole("button", { name: "复制 Prompt", exact: true }).click();
    await page.getByRole("button", { name: "已复制 Prompt", exact: true }).waitFor();
    record("Prompt 可复制", await page.getByRole("button", { name: "已复制 Prompt", exact: true }).isVisible());

    await page.locator("#adapters").scrollIntoViewIfNeeded();
    record("风格实验台加载三套适配器", await page.locator("#styleTabs [data-style]").count() === 3 && (await page.locator("#adapterName").textContent()).includes("极简冰蓝"));
    record("适配器区分锁定项与覆盖项", await page.locator("#lockedList li").count() === 5 && await page.locator("#overrideList li").count() === 6);
    record("导演批准后视觉合同仍需独立批准", await page.locator("#phaseBadge").textContent() === "PHASE B / READY" && await page.getByRole("button", { name: "批准当前风格合同", exact: true }).isEnabled() && await page.locator("#copyAdapter").isDisabled());
    await page.getByRole("button", { name: "批准当前风格合同", exact: true }).click();
    const approvedAdapter = await page.locator("#adapterOutput").textContent();
    record("视觉批准生成带谱系的适配合同", approvedAdapter.startsWith("APPROVED STYLE ADAPTER CONTRACT") && approvedAdapter.includes("DIRECTOR LINEAGE") && approvedAdapter.includes("VISUAL QA GATES"));
    await page.getByRole("button", { name: "复制适配合同", exact: true }).click();
    await page.getByRole("button", { name: "已复制适配合同", exact: true }).waitFor();
    record("适配合同可复制", await page.getByRole("button", { name: "已复制适配合同", exact: true }).isVisible());

    await page.getByRole("tab", { name: /暗调黑红/ }).click();
    record("切换风格只重置视觉批准", await page.locator("#phaseBadge").textContent() === "PHASE B / READY" && !(await page.locator("#promptOutput").textContent()).startsWith("LOCKED") && (await page.locator("#adapterOutput").textContent()).startsWith("DRAFT"));
    record("暗调黑红覆盖合同已替换", (await page.locator("#adapterName").textContent()).includes("DARK BLACK-RED") && (await page.locator("#overrideList").textContent()).includes("Red marks pressure"));

    const darkStyleTab = page.getByRole("tab", { name: /暗调黑红/ });
    await darkStyleTab.focus();
    await page.keyboard.press("ArrowRight");
    record("风格标签支持方向键且保留导演批准", (await page.locator("#adapterName").textContent()).includes("ORIENTAL BLUE-GREEN") && await page.locator("#phaseBadge").textContent() === "PHASE B / READY" && await page.getByRole("tab", { name: /东方青绿/ }).evaluate((element) => document.activeElement === element));
    await page.getByRole("button", { name: "批准当前风格合同", exact: true }).click();
    record("东方青绿 QA 阻止擅加文化断言", (await page.locator("#adapterQaList").textContent()).includes("historical assertion") && (await page.locator("#adapterOutput").textContent()).startsWith("APPROVED"));
    record("A/B 区展示九单元与六指标", await page.locator(".ab-matrix span").count() === 9 && await page.locator(".metric-strip li").count() === 6);
    await page.locator("#styleTabs").evaluate((element) => window.scrollTo({
      top: window.scrollY + element.getBoundingClientRect().top - 86,
      behavior: "instant"
    }));
    await page.waitForTimeout(300);
    await page.screenshot({ path: join(evidenceRoot, "project-008-style-adapters.png"), fullPage: false });

    await page.locator("#summary").evaluate((element) => window.scrollTo({
      top: window.scrollY + element.getBoundingClientRect().top - 86,
      behavior: "instant"
    }));
    await page.waitForTimeout(250);
    const summaryText = await page.locator("#summary").innerText();
    record("必要总结收束七项核心判断", await page.locator(".summary-grid li").count() === 7 && summaryText.includes("本质") && summaryText.includes("已经证明") && summaryText.includes("尚未证明") && summaryText.includes("当前结论"));
    record("必要总结给出三阶段采用路线", await page.locator(".summary-action-track article").count() === 3 && summaryText.includes("作为导演 benchmark") && summaryText.includes("四种形象做同题 A/B") && summaryText.includes("数据证明后再自动化"));
    record("必要总结采用判断明确", (await page.locator(".summary-verdict").innerText()).includes("采用导演协议，不直接照搬火柴人"));
    record("总结导航同步当前章节", await page.locator('[data-section-link="summary"]').getAttribute("aria-current") === "true");
    record("仓库短版总结入口存在", (await page.locator('.summary-links a[href*="SUMMARY.md"]').getAttribute("href")).includes("github.com/yydshly"));
    await page.screenshot({ path: join(evidenceRoot, "project-008-summary.png"), fullPage: false });

    await page.locator("#ratioSelect").selectOption("16:9");
    record("全局画幅变化同时重置两级批准", (await page.locator("#promptOutput").textContent()).startsWith("LOCKED") && (await page.locator("#adapterOutput").textContent()).startsWith("WAITING FOR DIRECTOR APPROVAL") && (await page.locator("#styleRevisionBadge").textContent()).includes("WAITING"));

    await page.screenshot({ path: join(evidenceRoot, "project-008-lab.png"), fullPage: false });
    const desktopLayout = await layoutState(page);
    record("桌面无横向溢出", !desktopLayout.overflow, JSON.stringify(desktopLayout));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(evidenceRoot, "project-008-desktop.png"), fullPage: false });

    await page.setViewportSize({ width: 820, height: 1180 });
    await page.reload({ waitUntil: "networkidle" });
    await waitForLab(page);
    const tabletLayout = await layoutState(page);
    record("平板无横向溢出", !tabletLayout.overflow, JSON.stringify(tabletLayout));
    record("平板视频仍可见", await page.locator(".video-card video").first().isVisible());

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    await waitForLab(page);
    const mobileLayout = await layoutState(page);
    record("390px 手机无横向溢出", !mobileLayout.overflow, JSON.stringify(mobileLayout));
    await page.locator("#user-sample").scrollIntoViewIfNeeded();
    record("手机用户实测视频与审计可见", await page.locator(".user-sample-video video").isVisible() && await page.locator(".sample-audit").isVisible());
    await page.locator("#character-styles").scrollIntoViewIfNeeded();
    record("手机八张形象卡顺序可见", await page.locator(".character-style-card").count() === 8 && await page.locator(".character-style-card").first().isVisible() && await page.locator(".character-style-card").last().isVisible());
    await page.locator("#lab").scrollIntoViewIfNeeded();
    record("手机案例与控制可见", await page.locator("#caseTabs").isVisible() && await page.locator("#ratioSelect").isVisible() && await page.locator("#approveButton").isVisible());
    await page.getByRole("tab", { name: /科普解释/ }).click();
    await page.getByRole("button", { name: "批准当前预案，解锁 Phase B", exact: true }).click();
    record("手机审批主流程可完成", (await page.locator("#promptOutput").textContent()).includes("AUDIO-ONLY DIALOGUE"));
    await page.locator("#adapters").scrollIntoViewIfNeeded();
    record("手机风格审批主流程可完成", await page.getByRole("button", { name: "批准当前风格合同", exact: true }).isVisible());
    await page.getByRole("button", { name: "批准当前风格合同", exact: true }).click();
    record("手机可形成视觉批准合同", (await page.locator("#adapterOutput").textContent()).startsWith("APPROVED STYLE ADAPTER CONTRACT"));
    await page.locator("#summary").scrollIntoViewIfNeeded();
    record("手机必要总结与三阶段路线可见", await page.locator(".summary-grid li").count() === 7 && await page.locator(".summary-verdict").isVisible() && await page.locator(".summary-action-track").isVisible());
    await page.locator("#adapters").scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(evidenceRoot, "project-008-mobile.png"), fullPage: false });

    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    record("研究总库已登记 Project 008", await page.getByText("DIRECTOR AS COMPILER", { exact: true }).count() > 0);
    record("首页卡片入口指向 Project 008", await page.locator('a[href*="stickman-video-director-study"]').count() > 0);

    await page.goto(projectUrl, { waitUntil: "networkidle" });
    await waitForLab(page);
    await page.locator(".video-card video").first().dispatchEvent("error");
    record("视频错误时显示可读降级", await page.locator(".video-card .media-fallback").first().isVisible());
    await page.locator(".user-sample-video video").dispatchEvent("error");
    record("用户实测视频错误时显示可读降级", await page.locator(".user-sample-video .media-fallback").isVisible());

    const reducedContext = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
    const reducedPage = await reducedContext.newPage();
    await reducedPage.goto(projectUrl, { waitUntil: "networkidle" });
    const scrollBehavior = await reducedPage.locator("html").evaluate((element) => getComputedStyle(element).scrollBehavior);
    record("reduced-motion 关闭平滑滚动", scrollBehavior === "auto", scrollBehavior);
    await reducedContext.close();

    record("控制台与页面错误为零", errors.length === 0, errors.join(" | "));
    await context.close();
  } finally {
    await browser.close();
  }

  let failures = 0;
  for (const check of checks) {
    console.log(`${check.passed ? "[PASS]" : "[FAIL]"} ${check.label}${check.detail ? ` · ${check.detail}` : ""}`);
    if (!check.passed) failures += 1;
  }

  if (failures > 0) {
    console.error(`Project 008 browser checks failed: ${failures}/${checks.length}`);
    process.exit(1);
  }

  console.log(`Project 008 browser checks passed: ${checks.length}/${checks.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
