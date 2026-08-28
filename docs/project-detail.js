const progressBar = document.querySelector('#readingProgress');
const backToTop = document.querySelector('.back-to-top');
const navLinks = [...document.querySelectorAll('[data-section-link]')];
const sections = [...document.querySelectorAll('[data-section]')];
const promptDisclosure = document.querySelector('.prompt-disclosure');
const copyButton = document.querySelector('#copyPrompt');
const copyStatus = document.querySelector('#copyStatus');
const originalPrompt = document.querySelector('#originalPrompt');

let scrollFramePending = false;

function updateScrollState() {
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollRange)) : 0;

  if (progressBar) progressBar.style.width = (progress * 100).toFixed(2) + '%';
  if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 900);
  scrollFramePending = false;
}

function requestScrollUpdate() {
  if (scrollFramePending) return;
  scrollFramePending = true;
  window.requestAnimationFrame(updateScrollState);
}

function setActiveSection(id) {
  navLinks.forEach((link) => {
    if (link.dataset.sectionLink === id) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActiveSection(visible.target.id);
    },
    { rootMargin: '-18% 0px -64% 0px', threshold: [0, 0.15, 0.35] }
  );

  sections.forEach((section) => observer.observe(section));
}

async function copyPrompt() {
  if (!originalPrompt || !copyStatus || !copyButton) return;
  const text = [...originalPrompt.querySelectorAll('p')]
    .map((paragraph) => paragraph.textContent.trim())
    .join('\n\n');

  let copied = false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      copied = false;
    }
  }

  if (!copied) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.append(textarea);
    textarea.focus();
    textarea.select();

    try {
      copied = document.execCommand('copy');
    } catch {
      copied = false;
    }

    textarea.remove();
  }

  if (copied) {
    copyButton.textContent = '已复制';
    copyStatus.textContent = '完整提示词已复制到剪贴板';
  } else {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(originalPrompt);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = '已选中';
    copyStatus.textContent = '剪贴板未授权，正文已选中，请按 Ctrl/Cmd+C';
  }

  window.setTimeout(() => {
    copyButton.textContent = '复制提示词';
    copyStatus.textContent = '共 6 个约束段落';
  }, 4200);
}

if (promptDisclosure) {
  const summaryLabel = promptDisclosure.querySelector('summary strong');
  promptDisclosure.addEventListener('toggle', () => {
    if (summaryLabel) summaryLabel.textContent = promptDisclosure.open ? '收起完整原始提示词' : '展开完整原始提示词';
  });
}

copyButton?.addEventListener('click', copyPrompt);
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
updateScrollState();