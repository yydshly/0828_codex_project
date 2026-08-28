const copyThesisButton = document.querySelector('#copyThesis');
const copyThesisStatus = document.querySelector('#copyThesisStatus');

const projectThesis = '研究一个 AI Game Studio 最小闭环：用户描述一个 Three.js 动作游戏后，系统通过 GameSpec、统一 Skill Contract、Orchestrator、隔离构建和浏览器自动验证交付第一版，并在第二轮修改后保持旧功能成立。';

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the selection-based fallback.
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.append(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }
  textarea.remove();
  return copied;
}

copyThesisButton?.addEventListener('click', async () => {
  const copied = await copyText(projectThesis);
  copyThesisButton.textContent = copied ? '已复制研究命题' : '请手动复制';
  copyThesisStatus.textContent = copied
    ? '可以直接建立 Project 003 研究档案'
    : projectThesis;

  window.setTimeout(() => {
    copyThesisButton.textContent = '复制下一项目命题';
    copyThesisStatus.textContent = '可直接作为 Project 003 的研究起点';
  }, 4200);
});
