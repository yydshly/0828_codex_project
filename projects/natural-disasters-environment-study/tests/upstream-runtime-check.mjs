import { createRequire } from 'node:module';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const baseUrl = process.env.PROJECT_011_UPSTREAM_URL
  || 'http://127.0.0.1:4174/?preset=potato&adaptive=0&act=0';
const playwrightPackage = join(
  process.env.LOCALAPPDATA || '',
  'OpenAI',
  'Codex',
  'runtimes',
  'cua_node',
  'e4d75eceaa042f20',
  'bin',
  'node_modules',
  'playwright',
  'package.json'
);
const chromeExecutable = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

if (!existsSync(playwrightPackage) || !existsSync(chromeExecutable)) {
  throw new Error('The bundled browser runtime is unavailable on this host.');
}

const requireFromPlaywright = createRequire(playwrightPackage);
const { chromium } = requireFromPlaywright('playwright');
const evidenceRoot = join(tmpdir(), 'project-011-upstream-evidence-20260829');
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
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const requestFailures = [];

  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('requestfailed', (request) => {
    requestFailures.push(`${request.url()} :: ${request.failure()?.errorText || 'failed'}`);
  });

  const response = await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30_000 });
  record('upstream route returns HTTP 200', response?.status() === 200, String(response?.status()));

  let bootFailure = '';
  try {
    await page.waitForFunction(() => window.__app?.running && window.__app?.director, null, {
      timeout: 55_000
    });
  } catch {
    bootFailure = await page.locator('#booterr').textContent().catch(() => '') || '';
  }

  const initial = await page.evaluate(() => {
    const canvas = document.querySelector('#gl');
    const gl = canvas?.getContext('webgl2');
    const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info');
    const app = window.__app;
    return {
      running: Boolean(app?.running),
      hasDirector: Boolean(app?.director),
      acts: app?.director?.acts?.map((act) => act.name) || [],
      actIndex: app?.director?.actIndex,
      preset: app?.quality?.presetName,
      frameMs: app?.frameMs,
      canvas: canvas ? { width: canvas.width, height: canvas.height } : null,
      webgl2: Boolean(gl),
      renderer: gl
        ? (debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER))
        : null,
      bootError: document.querySelector('#booterr')?.textContent?.trim() || '',
      hudVisible: document.querySelector('#hud')?.classList.contains('on') || false,
      sandboxInstalled: Boolean(app?.sandbox),
      debug: app?.debugStats?.() || null
    };
  });

  record('actual upstream App is running', initial.running, bootFailure || initial.bootError);
  record('actual upstream Director is installed', initial.hasDirector);
  record('Director exposes eleven authored acts', initial.acts.length === 11, initial.acts.join(' | '));
  record('WebGL2 canvas has a render buffer', initial.webgl2 && initial.canvas?.width > 0 && initial.canvas?.height > 0, JSON.stringify(initial.canvas));
  record('quality query selected the upstream potato preset', initial.preset === 'potato', initial.preset || 'missing');
  record('actual upstream Sandbox is installed', initial.sandboxInstalled);

  const targetActs = [
    { index: 0, name: 'DEAD CALM', file: 'upstream-dead-calm.png' },
    { index: 4, name: 'VIOLENT STORM', file: 'upstream-violent-storm.png' },
    { index: 8, name: 'TSUNAMI', file: 'upstream-tsunami.png' },
    { index: 10, name: 'AFTERMATH', file: 'upstream-aftermath.png' }
  ];
  const samples = [];

  if (initial.running && initial.hasDirector) {
    for (const target of targetActs) {
      await page.evaluate((index) => window.__app.director.gotoAct(index), target.index);
      await page.waitForTimeout(2_400);
      const sample = await page.evaluate(() => {
        const app = window.__app;
        const director = app.director;
        return {
          actIndex: director.actIndex,
          actName: director.acts[director.actIndex]?.name,
          actTime: Number(director.actTime.toFixed(2)),
          frameMs: Number((app.frameMs || 0).toFixed(2)),
          stats: app.debugStats?.() || null,
          hudShot: document.querySelector('#hShot')?.textContent?.trim() || ''
        };
      });
      samples.push(sample);
      record(`Director switches to ${target.name}`, sample.actIndex === target.index && sample.actName === target.name, JSON.stringify(sample));
      await page.screenshot({ path: join(evidenceRoot, target.file) });
    }
  }

  record('no boot error is displayed', !initial.bootError && !bootFailure, initial.bootError || bootFailure);
  record('no page exceptions', pageErrors.length === 0, pageErrors.join(' | '));
  record('no failed resource requests', requestFailures.length === 0, requestFailures.join(' | '));

  console.log(JSON.stringify({
    source: {
      repository: 'https://github.com/Token-Gremlin/natural-disasters',
      commit: '849ff7f4199c9322d8ecafb48d62fc63f8d5af1d',
      url: baseUrl
    },
    summary: `${checks.filter((check) => check.passed).length}/${checks.length}`,
    checks,
    initial,
    samples,
    consoleErrors,
    pageErrors,
    requestFailures,
    evidenceRoot,
    failures
  }, null, 2));
} finally {
  await browser.close();
}

if (failures.length) process.exitCode = 1;
