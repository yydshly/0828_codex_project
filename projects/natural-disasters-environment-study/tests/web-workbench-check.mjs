import { createRequire } from 'node:module';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const baseUrl = process.env.PROJECT_011_WEB_URL
  || 'http://127.0.0.1:4173/projects/natural-disasters-environment-study/?embedPreset=potato';
const playwrightPackage = join(
  process.env.LOCALAPPDATA || '',
  'OpenAI', 'Codex', 'runtimes', 'cua_node', 'e4d75eceaa042f20',
  'bin', 'node_modules', 'playwright', 'package.json'
);
const chromeExecutable = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

if (!existsSync(playwrightPackage) || !existsSync(chromeExecutable)) {
  throw new Error('Bundled browser runtime is unavailable.');
}

const requireFromPlaywright = createRequire(playwrightPackage);
const { chromium } = requireFromPlaywright('playwright');
const evidenceRoot = join(tmpdir(), 'project-011-web-workbench-evidence-20260829');
mkdirSync(evidenceRoot, { recursive: true });

const checks = [];
const failures = [];
const record = (name, passed, detail = '') => {
  checks.push({ name, passed: Boolean(passed), detail });
  if (!passed) failures.push({ name, detail });
};

const browser = await chromium.launch({
  executablePath: chromeExecutable,
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist']
});

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const pageErrors = [];
  const consoleErrors = [];
  const failedRequests = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('requestfailed', (request) => failedRequests.push(`${request.url()} :: ${request.failure()?.errorText || 'failed'}`));

  const response = await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30_000 });
  record('research route returns HTTP 200', response?.status() === 200, String(response?.status()));
  record('first view states the product boundary', (await page.locator('h1').innerText()).includes('海洋环境运行时'));
  record('first view labels actual upstream evidence', await page.locator('text=UPSTREAM_RUNTIME').count() > 0);

  await page.waitForFunction(() => document.querySelector('#runtimeStage')?.dataset.runtime === 'ready', null, { timeout: 75_000 });
  const embedded = await page.evaluate(() => {
    const frame = document.querySelector('#upstreamRuntime');
    const app = frame?.contentWindow?.__app;
    return {
      ready: document.querySelector('#runtimeStage')?.dataset.runtime,
      running: Boolean(app?.running),
      acts: app?.director?.acts?.length || 0,
      sandbox: Boolean(app?.sandbox),
      preset: app?.quality?.presetName,
      sourceTitle: frame?.contentDocument?.title || '',
      canvas: {
        width: frame?.contentDocument?.querySelector('#gl')?.width || 0,
        height: frame?.contentDocument?.querySelector('#gl')?.height || 0
      }
    };
  });
  record('embedded stage runs the actual upstream App', embedded.running && embedded.sourceTitle.includes('ABYSSAL'), JSON.stringify(embedded));
  record('embedded upstream exposes eleven Director acts', embedded.acts === 11, String(embedded.acts));
  record('embedded upstream installs Sandbox', embedded.sandbox);
  record('embedded WebGL canvas has a render buffer', embedded.canvas.width > 0 && embedded.canvas.height > 0, JSON.stringify(embedded.canvas));
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: join(evidenceRoot, 'desktop-default-workbench.png') });

  const actCases = [
    { index: 0, title: 'DEAD CALM' },
    { index: 4, title: 'VIOLENT STORM' },
    { index: 8, title: 'TSUNAMI' },
    { index: 10, title: 'AFTERMATH' }
  ];

  for (const act of actCases) {
    await page.locator(`[data-act="${act.index}"]`).click();
    await page.waitForFunction((index) => {
      const frame = document.querySelector('#upstreamRuntime');
      return frame?.contentWindow?.__app?.director?.actIndex === index;
    }, act.index, { timeout: 10_000 });
    const state = await page.evaluate(() => ({
      outerTitle: document.querySelector('#actTitle')?.textContent,
      innerIndex: document.querySelector('#upstreamRuntime')?.contentWindow?.__app?.director?.actIndex,
      activeControls: document.querySelectorAll('.act-control[aria-current="step"]').length
    }));
    record(`evidence control enters upstream ${act.title}`, state.outerTitle === act.title && state.innerIndex === act.index && state.activeControls === 1, JSON.stringify(state));
  }

  await page.locator('[data-act="8"]').click();
  await page.waitForFunction(() => document.querySelector('#upstreamRuntime')?.contentWindow?.__app?.director?.actIndex === 8, null, { timeout: 10_000 });
  await page.screenshot({ path: join(evidenceRoot, 'desktop-tsunami-workbench.png') });

  const scenarioCases = [
    { key: 'port', title: '港口台风预警', runtimeEvent: 'hurricane' },
    { key: 'tsunami', title: '近岸海啸疏散', runtimeEvent: 'tsunami' },
    { key: 'platform', title: '平台风暴作业', runtimeEvent: 'lightning' }
  ];

  for (const scenario of scenarioCases) {
    await page.locator(`[data-scenario="${scenario.key}"]`).click();
    await page.waitForFunction((key) => {
      const frame = document.querySelector('#upstreamRuntime');
      const app = frame?.contentWindow?.__app;
      if (document.body.dataset.activeScenario !== key || !app?.sandbox?.active) return false;
      if (key === 'port') return Boolean(app.director?._hurricane);
      if (key === 'tsunami') return (app.director?._solitons?.length || 0) > 0;
      return app.weather?.target?.sunElevation < 0
        && ((app.lightning?._pending?.length || 0) > 0 || (app.lightning?.bolts?.length || 0) > 0 || app.lightning?.ambientFlash > 0);
    }, scenario.key, { timeout: 10_000 });
    const state = await page.evaluate((key) => {
      const frame = document.querySelector('#upstreamRuntime');
      const app = frame?.contentWindow?.__app;
      const overlay = document.querySelector(`[data-scenario-overlay="${key}"]`);
      return {
        activeScenario: document.body.dataset.activeScenario,
        outerTitle: document.querySelector('#actTitle')?.textContent,
        sandbox: app?.sandbox?.active,
        sandboxChromeHidden: app?.sandbox?.root?.style?.display === 'none',
        hurricane: Boolean(app?.director?._hurricane),
        solitons: app?.director?._solitons?.length || 0,
        night: app?.weather?.target?.sunElevation < 0,
        lightning: (app?.lightning?._pending?.length || 0) + (app?.lightning?.bolts?.length || 0),
        overlayVisible: Boolean(overlay && !overlay.hidden && overlay.getClientRects().length),
        businessBoundary: overlay?.innerText.includes('PROJECT 011 / BUSINESS LAYER'),
        activeControls: document.querySelectorAll('.scenario-control[aria-pressed="true"]').length
      };
    }, scenario.key);
    const runtimePassed = scenario.key === 'port'
      ? state.hurricane
      : scenario.key === 'tsunami'
        ? state.solitons > 0
        : state.night && state.lightning > 0;
    record(`extension scenario runs upstream ${scenario.runtimeEvent} for ${scenario.title}`,
      state.activeScenario === scenario.key
        && state.outerTitle === scenario.title
        && state.sandbox
        && state.sandboxChromeHidden
        && runtimePassed
        && state.overlayVisible
        && state.businessBoundary
        && state.activeControls === 1,
      JSON.stringify(state));
    await page.waitForTimeout(900);
    await page.locator('.runtime-grid').screenshot({ path: join(evidenceRoot, `extension-${scenario.key}.png`) });
  }

  await page.locator('#returnEvidence').click();
  const scenarioReset = await page.evaluate(() => ({
    scenario: document.body.dataset.activeScenario || '',
    sandbox: document.querySelector('#upstreamRuntime')?.contentWindow?.__app?.sandbox?.active,
    actIndex: document.querySelector('#upstreamRuntime')?.contentWindow?.__app?.director?.actIndex,
    visibleOverlays: [...document.querySelectorAll('[data-scenario-overlay]')].filter((node) => !node.hidden).length,
    outerTitle: document.querySelector('#actTitle')?.textContent
  }));
  record('extension scenarios return cleanly to upstream evidence', !scenarioReset.scenario && !scenarioReset.sandbox && scenarioReset.actIndex === 0 && scenarioReset.visibleOverlays === 0 && scenarioReset.outerTitle === 'DEAD CALM', JSON.stringify(scenarioReset));

  await page.locator('#openSandbox').click();
  const sandboxState = await page.evaluate(() => ({
    active: document.querySelector('#upstreamRuntime')?.contentWindow?.__app?.sandbox?.active,
    outerTitle: document.querySelector('#actTitle')?.textContent,
    activeControls: document.querySelectorAll('.act-control[aria-current="step"]').length
  }));
  record('Sandbox handoff uses the upstream Sandbox object', sandboxState.active && sandboxState.outerTitle === 'SANDBOX' && sandboxState.activeControls === 0, JSON.stringify(sandboxState));

  await page.locator('#resetDirector').click();
  const resetState = await page.evaluate(() => ({
    sandbox: document.querySelector('#upstreamRuntime')?.contentWindow?.__app?.sandbox?.active,
    actIndex: document.querySelector('#upstreamRuntime')?.contentWindow?.__app?.director?.actIndex,
    outerTitle: document.querySelector('#actTitle')?.textContent
  }));
  record('Director reset returns to upstream DEAD CALM', !resetState.sandbox && resetState.actIndex === 0 && resetState.outerTitle === 'DEAD CALM', JSON.stringify(resetState));

  record('capability stack contains six evidence-backed layers', await page.locator('.capability-row:not(.capability-row--head)').count() === 6);
  record('use cases are separated into three boundaries', await page.locator('.scenario-card').count() === 3);
  const personalMap = await page.evaluate(() => ({
    tracks: document.querySelectorAll('.personal-track').length,
    sequence: document.querySelectorAll('.personal-sequence li').length,
    outputs: document.querySelectorAll('.personal-output').length,
    gaps: document.querySelectorAll('.personal-gap').length,
    order: [document.querySelector('#scenarios'), document.querySelector('#personal'), document.querySelector('#extensions')]
      .map((node) => node?.offsetTop || 0),
    thesis: document.querySelector('.personal-thesis')?.innerText || ''
  }));
  record('personal map connects three tracks to one four-step route', personalMap.tracks === 3 && personalMap.sequence === 4 && personalMap.outputs === 3 && personalMap.gaps === 3 && personalMap.order[0] < personalMap.order[1] && personalMap.order[1] < personalMap.order[2] && personalMap.thesis.includes('游戏作品'), JSON.stringify(personalMap));
  const priorScrollBehavior = await page.evaluate(() => {
    const prior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    scrollTo(0, Math.max(0, document.querySelector('#personal').offsetTop - 76));
    return prior;
  });
  await page.screenshot({ path: join(evidenceRoot, 'desktop-personal-map.png') });
  await page.evaluate((prior) => { document.documentElement.style.scrollBehavior = prior; }, priorScrollBehavior);
  record('extension ladder contains five cost levels', await page.locator('.extension-ladder > li').count() === 5);
  record('evidence route exposes six re-entry artifacts', await page.locator('#evidence .evidence-grid > a').count() === 6);
  record('desktop has no horizontal overflow', await page.evaluate(() => document.documentElement.scrollWidth === document.documentElement.clientWidth));

  await page.locator('.topbar__brand').focus();
  let keyboardFocus = false;
  for (let step = 0; step < 12; step += 1) {
    await page.keyboard.press('Tab');
    keyboardFocus = await page.evaluate(() => document.activeElement?.matches('[data-act="0"]:focus-visible'));
    if (keyboardFocus) break;
  }
  record('act controls expose visible keyboard focus', keyboardFocus);

  await page.locator('[data-scenario="port"]').focus();
  record('extension scenario controls are keyboard focusable', await page.evaluate(() => document.activeElement?.matches('[data-scenario="port"]:focus-visible')));

  await page.emulateMedia({ reducedMotion: 'reduce' });
  record('reduced motion disables smooth scrolling', await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior === 'auto'));
  await page.emulateMedia({ reducedMotion: 'no-preference' });

  await page.setViewportSize({ width: 820, height: 1180 });
  record('tablet keeps the actual stage visible', await page.locator('#runtimeStage').isVisible());
  record('tablet keeps the personal map in document flow', await page.locator('#personal').isVisible() && await page.locator('.personal-track').count() === 3);
  record('tablet has no horizontal overflow', await page.evaluate(() => document.documentElement.scrollWidth === document.documentElement.clientWidth));
  await page.evaluate(() => scrollTo(0, Math.max(0, document.querySelector('#personal').offsetTop - 76)));
  await page.screenshot({ path: join(evidenceRoot, 'tablet-workbench.png') });

  const phone = await context.newPage();
  await phone.setViewportSize({ width: 390, height: 844 });
  const phoneUrl = new URL(baseUrl);
  phoneUrl.searchParams.set('embedPreset', 'potato');
  await phone.goto(phoneUrl.href, { waitUntil: 'networkidle' });
  await phone.locator('[data-scenario="tsunami"]').click();
  const phoneState = await phone.evaluate(() => ({
    runtime: document.querySelector('#runtimeStage')?.dataset.runtime,
    iframeSrc: document.querySelector('#upstreamRuntime')?.getAttribute('src'),
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    fullDemo: document.querySelector('#openFullDemo')?.href || '',
    contentLength: document.body.innerText.length,
    activeScenario: document.body.dataset.activeScenario,
    scenarioOverlay: !document.querySelector('[data-scenario-overlay="tsunami"]')?.hidden
  }));
  record('phone uses the explicit lightweight runtime mode', phoneState.runtime === 'disabled' && !phoneState.iframeSrc, JSON.stringify(phoneState));
  record('phone keeps a real-demo launch path', phoneState.fullDemo.includes('/demos/natural-disasters-environment-poc/'));
  record('phone keeps the complete readable research content', phoneState.contentLength > 1800, String(phoneState.contentLength));
  record('phone keeps a readable extension-scenario preview', phoneState.activeScenario === 'tsunami' && phoneState.scenarioOverlay, JSON.stringify(phoneState));
  record('phone stacks all three personal directions', await phone.locator('.personal-track').count() === 3 && await phone.locator('.personal-sequence li').count() === 4);
  record('phone has no horizontal overflow', phoneState.overflow === 0, String(phoneState.overflow));
  await phone.evaluate(() => scrollTo(0, Math.max(0, document.querySelector('#personal').offsetTop - 66)));
  await phone.screenshot({ path: join(evidenceRoot, 'phone-workbench.png') });
  await phone.close();

  const fallback = await context.newPage();
  await fallback.setViewportSize({ width: 1440, height: 1000 });
  const fallbackUrl = new URL(baseUrl);
  fallbackUrl.searchParams.set('embed', '0');
  await fallback.goto(fallbackUrl.href, { waitUntil: 'networkidle' });
  const fallbackState = await fallback.evaluate(() => ({
    runtime: document.querySelector('#runtimeStage')?.dataset.runtime,
    iframeSrc: document.querySelector('#upstreamRuntime')?.getAttribute('src'),
    fullDemoVisible: Boolean(document.querySelector('#openFullDemo')?.getClientRects().length),
    headings: document.querySelectorAll('h2').length
  }));
  record('forced no-embed fallback remains operable', fallbackState.runtime === 'disabled' && !fallbackState.iframeSrc && fallbackState.fullDemoVisible && fallbackState.headings >= 7, JSON.stringify(fallbackState));
  await fallback.close();

  record('no page exceptions across the primary journey', pageErrors.length === 0, pageErrors.join(' | '));
  record('no browser console errors across the primary journey', consoleErrors.length === 0, consoleErrors.join(' | '));
  record('no failed resource requests across the primary journey', failedRequests.length === 0, failedRequests.join(' | '));

  console.log(JSON.stringify({
    summary: `${checks.filter((check) => check.passed).length}/${checks.length}`,
    canonicalUrl: baseUrl,
    environment: {
      browser: 'Google Chrome via Playwright 1.57.0',
      embeddedRenderer: 'ANGLE SwiftShader functional smoke',
      desktop: '1440x1000',
      tablet: '820x1180',
      phone: '390x844'
    },
    checks,
    failures,
    evidenceRoot
  }, null, 2));
} finally {
  await browser.close();
}

if (failures.length) process.exitCode = 1;
