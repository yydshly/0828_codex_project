const progress = document.querySelector('#readingProgress');
const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
const sections = sectionLinks
  .map((link) => document.getElementById(link.dataset.sectionLink))
  .filter(Boolean);

window.__consoleErrors = window.__consoleErrors || [];
window.addEventListener('error', (event) => {
  window.__consoleErrors.push(event.message || 'Unknown page error');
});

const updateProgress = () => {
  if (!progress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  progress.style.width = `${ratio * 100}%`;
};

const setCurrentSection = (id) => {
  sectionLinks.forEach((link) => {
    const current = link.dataset.sectionLink === id;
    link.classList.toggle('is-current', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setCurrentSection(visible.target.id);
  }, {
    rootMargin: '-18% 0px -68% 0px',
    threshold: [0, 0.08, 0.25]
  });

  sections.forEach((section) => observer.observe(section));
}

const fallbackCopy = (text) => {
  const input = document.createElement('textarea');
  input.value = text;
  input.setAttribute('readonly', '');
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.append(input);
  input.select();
  const copied = document.execCommand('copy');
  input.remove();
  if (!copied) throw new Error('Copy command was rejected');
};

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  const originalText = button.textContent;
  button.setAttribute('aria-live', 'polite');
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;
    const text = target.innerText.trim();

    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else fallbackCopy(text);
      button.textContent = '已复制';
    } catch {
      button.textContent = '复制失败，请手动选择';
    }

    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1800);
  });
});

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress, { passive: true });
updateProgress();
if (sections[0]) setCurrentSection(sections[0].id);
