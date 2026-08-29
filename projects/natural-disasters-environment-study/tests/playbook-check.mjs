import { createRequire } from 'node:module';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const baseUrl = process.env.PROJECT_011_PLAYBOOK_URL
  || 'http://127.0.0.1:4173/projects/natural-disasters-environment-study/unknown-to-product/';
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
const evidenceRoot = join(tmpdir(), 'project-011-unknown-to-product-evidence-20260829');
mkdirSync(evidenceRoot, { recursive: true });

const checks = [];
const failures = [];
const record = (name, passed, detail = '') => {
  checks.push({ name, passed: Boolean(passed), detail });
  if (!passed) failures.push({ name, detail });
};

const browser = await chromium.launch({
  executablePath: chromeExecutable,
  headless: true
});

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    permissions: ['clipboard-read', 'clipboard-write']
  });
  const page = await context.newPage();
  const pageErrors = [];
  const consoleErrors = [];
  const failedRequests = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('requestfailed', (request) => failedRequests.push(`${request.url()} :: ${request.failure()?.errorText || 'failed'}`));

  const response = await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30_000 });
  record('playbook route returns HTTP 200', response?.status() === 200, String(response?.status()));
  record('page is not blank', (await page.locator('body').innerText()).length > 12_000, String((await page.locator('body').innerText()).length));
  record('first view states the product transformation', (await page.locator('h1').innerText()).includes('产品能力'));
  record('first view exposes both time horizons', await page.locator('text=NOW · CASE 001').count() === 1 && await page.locator('text=LATER · SYSTEM').count() === 1);
  record('no framework error overlay is present', await page.locator('[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay').count() === 0);

  const structure = await page.evaluate(() => ({
    loopSteps: document.querySelectorAll('.loop-map > li').length,
    evidenceClasses: document.querySelectorAll('.evidence-chain > article').length,
    sourceGroups: document.querySelectorAll('.source-group').length,
    visibleLayers: document.querySelectorAll('.layer-map > article').length,
    roadmapSteps: document.querySelectorAll('.roadmap > article').length,
    versions: document.querySelectorAll('.version-card').length,
    templates: document.querySelectorAll('.template-card').length,
    transferCases: document.querySelectorAll('.transfer-grid > article').length,
    headings: document.querySelectorAll('h2').length
  }));
  record('universal loop contains eight steps', structure.loopSteps === 8, JSON.stringify(structure));
  record('six evidence classes and four source groups are visible', structure.evidenceClasses === 6 && structure.sourceGroups === 4, JSON.stringify(structure));
  record('Case 001 maps six visible layers', structure.visibleLayers === 6, JSON.stringify(structure));
  record('from-zero roadmap contains twelve phases', structure.roadmapSteps === 12, JSON.stringify(structure));
  record('product plan exposes four gated versions', structure.versions === 4, JSON.stringify(structure));
  record('four transfer cases and five reusable templates are present', structure.transferCases === 4 && structure.templates === 5, JSON.stringify(structure));

  const sourceState = await page.evaluate(() => ({
    primarySources: [...document.querySelectorAll('.source-group a')].filter((link) => link.innerText.includes('PRIMARY_SOURCE')).length,
    fixedCommit: [...document.links].some((link) => link.href.includes('849ff7f4199c9322d8ecafb48d62fc63f8d5af1d')),
    runtimeEvidence: [...document.links].some((link) => link.href.endsWith('/upstream-runtime-observation.json')),
    targetImages: [...document.querySelectorAll('.target-strip img')].map((image) => ({ complete: image.complete, width: image.naturalWidth }))
  }));
  record('source ledger contains primary publications and the fixed commit', sourceState.primarySources >= 8 && sourceState.fixedCommit, JSON.stringify(sourceState));
  record('runtime evidence link resolves in the document', sourceState.runtimeEvidence, JSON.stringify(sourceState));
  record('all three target images load', sourceState.targetImages.length === 3 && sourceState.targetImages.every((image) => image.complete && image.width > 0), JSON.stringify(sourceState.targetImages));

  record('desktop has no horizontal overflow', await page.evaluate(() => document.documentElement.scrollWidth === document.documentElement.clientWidth));
  await page.screenshot({ path: join(evidenceRoot, 'desktop-hero.png') });
  await page.locator('#case').scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  record('desktop sticky index follows the current section', await page.locator('[data-section-link="case"]').evaluate((link) => link.classList.contains('is-current')));
  await page.screenshot({ path: join(evidenceRoot, 'desktop-case-map.png') });

  const copyButton = page.locator('[data-copy-target="briefTemplate"]');
  await copyButton.click();
  record('template copy control reports success', (await copyButton.innerText()) === '已复制', await copyButton.innerText());

  await copyButton.focus();
  await page.keyboard.press('Shift+Tab');
  await page.keyboard.press('Tab');
  const focusStyle = await copyButton.evaluate((button) => {
    const style = getComputedStyle(button);
    return { focusVisible: button.matches(':focus-visible'), outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth };
  });
  record('copy controls expose visible keyboard focus', focusStyle.focusVisible && focusStyle.outlineStyle !== 'none' && focusStyle.outlineWidth !== '0px', JSON.stringify(focusStyle));

  await page.emulateMedia({ reducedMotion: 'reduce' });
  const reducedMotion = await page.evaluate(() => ({
    scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    pulseDuration: getComputedStyle(document.querySelector('.pulse')).animationDuration
  }));
  record('reduced motion removes smooth scrolling and signal animation', reducedMotion.scrollBehavior === 'auto' && Number.parseFloat(reducedMotion.pulseDuration) <= 0.00001, JSON.stringify(reducedMotion));
  await page.emulateMedia({ reducedMotion: 'no-preference' });

  await page.setViewportSize({ width: 820, height: 1180 });
  const tabletState = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    contentsVisible: Boolean(document.querySelector('.contents')?.getClientRects().length),
    roadmap: document.querySelectorAll('.roadmap > article').length,
    templates: document.querySelectorAll('.template-card').length
  }));
  record('tablet keeps the full guide and sticky section index', tabletState.overflow === 0 && tabletState.contentsVisible && tabletState.roadmap === 12 && tabletState.templates === 5, JSON.stringify(tabletState));
  await page.locator('#roadmap').scrollIntoViewIfNeeded();
  await page.screenshot({ path: join(evidenceRoot, 'tablet-roadmap.png') });

  const phone = await context.newPage();
  await phone.setViewportSize({ width: 390, height: 844 });
  await phone.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30_000 });
  const phoneState = await phone.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    bodyLength: document.body.innerText.length,
    navLinks: document.querySelectorAll('.contents nav a').length,
    roadmapSteps: document.querySelectorAll('.roadmap > article').length,
    templates: document.querySelectorAll('.template-card').length,
    targetImages: document.querySelectorAll('.target-strip img').length
  }));
  record('phone retains the complete guide without overflow', phoneState.overflow === 0 && phoneState.bodyLength > 11_000 && phoneState.navLinks === 10 && phoneState.roadmapSteps === 12 && phoneState.templates === 5 && phoneState.targetImages === 3, JSON.stringify(phoneState));
  await phone.locator('#product').scrollIntoViewIfNeeded();
  await phone.screenshot({ path: join(evidenceRoot, 'phone-product-plan.png') });
  await phone.close();

  const parent = await context.newPage();
  const parentUrl = new URL('../', baseUrl).href;
  await parent.goto(parentUrl, { waitUntil: 'domcontentloaded', timeout: 30_000 });
  record('canonical Project 011 page links the playbook', await parent.locator('a[href="./unknown-to-product/"]').count() >= 2);
  await parent.close();

  record('no page exceptions across the guide journey', pageErrors.length === 0, pageErrors.join(' | '));
  record('no browser console errors across the guide journey', consoleErrors.length === 0, consoleErrors.join(' | '));
  record('no failed resource requests across the guide journey', failedRequests.length === 0, failedRequests.join(' | '));

  console.log(JSON.stringify({
    summary: `${checks.filter((check) => check.passed).length}/${checks.length}`,
    canonicalUrl: baseUrl,
    environment: {
      browser: 'Google Chrome via bundled Playwright',
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
