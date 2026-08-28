document.documentElement.classList.add('js');

const routeTabs = [...document.querySelectorAll('[data-route]')];
const routePanels = [...document.querySelectorAll('[data-route-panel]')];

function activateRoute(route, focus = false) {
  routeTabs.forEach((tab) => {
    const selected = tab.dataset.route === route;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });

  routePanels.forEach((panel) => {
    const selected = panel.dataset.routePanel === route;
    panel.classList.toggle('is-active', selected);
    panel.hidden = !selected;
  });
}

function moveRoute(event, index) {
  let nextIndex = index;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % routeTabs.length;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + routeTabs.length) % routeTabs.length;
  else if (event.key === 'Home') nextIndex = 0;
  else if (event.key === 'End') nextIndex = routeTabs.length - 1;
  else return;

  event.preventDefault();
  activateRoute(routeTabs[nextIndex].dataset.route, true);
}

routeTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateRoute(tab.dataset.route));
  tab.addEventListener('keydown', (event) => moveRoute(event, index));
});

if (routeTabs.length) activateRoute('structure');

const navLinks = [...document.querySelectorAll('[data-nav]')];
const observedSections = [...document.querySelectorAll('[data-section]')];

function markSection(id) {
  navLinks.forEach((link) => {
    const active = link.dataset.nav === id;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) markSection(visible.target.dataset.section);
  }, { rootMargin: '-18% 0px -66% 0px', threshold: [0, 0.1, 0.35] });
  observedSections.forEach((section) => observer.observe(section));
}

const readingProgress = document.querySelector('#readingProgress');
function updateProgress() {
  if (!readingProgress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  readingProgress.style.width = `${ratio * 100}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

const copyButton = document.querySelector('#copyJudgment');
const copyStatus = document.querySelector('#copyStatus');
const judgment = 'nativePDF-structurer 不是新的 PDF 理论或完整 RAG，而是一套面向数字原生技术手册的确定性结构恢复代码。暂不列为通用方向的核心研究；保留为专用能力、工程参考与真实语料 A/B 基线。';

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(judgment);
    copyStatus.textContent = '最终判断已复制。';
  } catch (_) {
    copyStatus.textContent = '浏览器未授权剪贴板，请直接复制首屏结论。';
  }
});
