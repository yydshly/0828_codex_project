(() => {
  const comparisonRoots = [...document.querySelectorAll('[data-pair-comparison], [data-source-comparison]')];
  const filterButtons = [...document.querySelectorAll('[data-case-filter]')];
  const caseCards = [...document.querySelectorAll('[data-case-card]')];
  const caseCount = document.querySelector('#caseCount');
  const resetComparisons = document.querySelector('#resetComparisons');
  const contractForm = document.querySelector('#contractForm');
  const sceneSelect = document.querySelector('#sceneSelect');
  const copyInputs = [...document.querySelectorAll('input[name="copyMode"]')];
  const exactCopy = document.querySelector('#exactCopy');
  const figureToggle = document.querySelector('#figureToggle');
  const resetContract = document.querySelector('#resetContract');
  const compiledContract = document.querySelector('#compiledContract');
  const contractLayers = document.querySelector('#contractLayers');
  const contractRevision = document.querySelector('#contractRevision');
  const contractStatus = document.querySelector('#contractStatus');
  const copyContract = document.querySelector('#copyContract');
  const gateList = document.querySelector('#gateList');
  const emotionDemo = document.querySelector('[data-emotion-demo]');
  const emotionButtons = [...document.querySelectorAll('[data-emotion-value]')];
  const emotionPanels = [...document.querySelectorAll('[data-emotion-panel]')];

  const scenes = {
    city: {
      label: '城市与住宅窗户',
      asset: 'vertical or horizontal urban night artwork',
      preserve: 'preserve the exact canvas ratio, crop, orientation, building silhouettes, window grid, street perspective, existing people, vehicles, signs and every key geometric relationship',
      lighting: 'let most architecture fall into near-black, deep navy and dark brown; use sparse amber window light as the main rhythm with optional tiny blue-violet accents',
      contour: 'trace only a few existing luminous window frames with imperfect chalk-white lines; never invent new windows or outline the whole building',
      autoCopy: 'generate one connected 12–28 word thought about windows, distance, waiting or light without inventing a specific relationship or event',
      gates: ['建筑轮廓与窗格没有漂移', '人物、车辆与招牌没有增删', '暗部仍能辨认结构']
    },
    coast: {
      label: '海面、天空与日落',
      asset: 'horizontal poetic coastal night artwork',
      preserve: 'preserve the exact canvas ratio, crop, level horizon, sun if present, boats, wave lines, shore silhouette, grass slope and every existing person at the same location and scale',
      lighting: 'transition daylight into deep navy and indigo night while retaining only a restrained warm afterglow along the existing horizon',
      contour: 'add sparse imperfect chalk-white accents only along a few existing wave crests, cloud edges or the sky swirl; do not create celestial bodies',
      autoCopy: 'generate one connected 12–28 word thought about the sea, the last light, waiting or distance without adding a new event',
      gates: ['地平线、船与人物位置准确', '没有新增月亮、星星、鸟或建筑', '海面与草坡暗部仍可读']
    },
    window: {
      label: '室内、车窗与雨景',
      asset: 'vertical or horizontal rainy-window night artwork',
      preserve: 'preserve the exact canvas ratio, crop, window frame, glass condensation, raindrops, existing passenger silhouettes, interior objects and all occlusion relationships',
      lighting: 'use warm orange as the dominant existing interior or exterior light with a restrained cyan-blue counterbalance; deepen surrounding negative space without turning rain into a literal star field',
      contour: 'use only a few rough white accents around existing glass edges, droplets or reflected light paths; do not outline every object',
      autoCopy: 'generate one connected 12–28 word thought about rain, glass, passing light or the quiet interior without inventing identities',
      gates: ['窗框、水汽、雨滴与乘客姿态保留', '雨点没有变成新增真实星空', '暖光与冷色平衡没有赛博化']
    }
  };

  let revision = 0;

  function updateComparison(root, value) {
    const split = Math.max(0, Math.min(100, Number(value) || 0));
    root.style.setProperty('--split', `${split}%`);
    const range = root.querySelector('.comparison-range');
    if (range && Number(range.value) !== split) range.value = String(split);
  }

  comparisonRoots.forEach((root) => {
    const range = root.querySelector('.comparison-range');
    range?.addEventListener('input', () => updateComparison(root, range.value));
    updateComparison(root, range?.value || 50);
  });

  function setEmotion(value, { focus = false } = {}) {
    if (!emotionDemo || emotionButtons.length === 0 || emotionPanels.length === 0) return;
    const allowed = emotionButtons.map((button) => button.dataset.emotionValue);
    const active = allowed.includes(value) ? value : allowed[0];
    emotionDemo.classList.add('is-enhanced');

    emotionButtons.forEach((button) => {
      const selected = button.dataset.emotionValue === active;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && focus) button.focus();
    });

    emotionPanels.forEach((panel) => {
      const selected = panel.dataset.emotionPanel === active;
      panel.hidden = !selected;
      panel.classList.toggle('is-active', selected);
    });
  }

  emotionButtons.forEach((button, index) => {
    button.addEventListener('click', () => setEmotion(button.dataset.emotionValue));
    button.addEventListener('keydown', (event) => {
      const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      let targetIndex = index;
      if (event.key === 'ArrowLeft') targetIndex = (index - 1 + emotionButtons.length) % emotionButtons.length;
      if (event.key === 'ArrowRight') targetIndex = (index + 1) % emotionButtons.length;
      if (event.key === 'Home') targetIndex = 0;
      if (event.key === 'End') targetIndex = emotionButtons.length - 1;
      setEmotion(emotionButtons[targetIndex].dataset.emotionValue, { focus: true });
    });
  });

  resetComparisons?.addEventListener('click', () => {
    document.querySelectorAll('[data-source-comparison]').forEach((root) => updateComparison(root, 50));
    resetComparisons.textContent = '已复位 50%';
    window.setTimeout(() => { resetComparisons.textContent = '全部复位 50%'; }, 1800);
  });

  function setFilter(filter) {
    const allowed = ['all', 'composition', 'lighting', 'text', 'figure'];
    const active = allowed.includes(filter) ? filter : 'all';
    let visible = 0;

    caseCards.forEach((card) => {
      const categories = (card.dataset.categories || '').split(/\s+/);
      const show = active === 'all' || categories.includes(active);
      card.hidden = !show;
      if (show) visible += 1;
    });

    filterButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.caseFilter === active));
    });

    const labels = { all: '全部', composition: '构图保护', lighting: '光色转换', text: '手写文字', figure: '人物荧光' };
    if (caseCount) caseCount.textContent = `${labels[active]} · 显示 ${visible} / 5 组上游对照`;
  }

  filterButtons.forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.caseFilter)));

  function activeCopyMode() {
    return copyInputs.find((input) => input.checked)?.value || 'auto';
  }

  function exactCopyContract() {
    const lines = (exactCopy?.value || '').split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    if (!lines.length) return 'Text: no exact copy supplied; pause before image editing because verbatim output is undefined.';
    return `Text (verbatim): ${lines.map((line) => `“${line}”`).join(' / ')}\nRender every word exactly, preserve capitalization and punctuation, and add no other words.`;
  }

  function automaticCopyContract(scene) {
    return `Text: ${scene.autoCopy}. Use three parts: one main statement / one parenthetical quiet aside / one closing line, optionally followed by one small rough asterisk.`;
  }

  function figureContract(enabled) {
    if (!enabled) return '';
    return `\n\nTARGETED PERSON TREATMENT:\n- change only every existing visible person, including cropped figures; preserve exact count, location, pose, scale, direction, silhouette and occlusion;\n- trace each actual outer silhouette with continuous rounded cold-white fluorescent tubing and a restrained pale-cyan halo;\n- keep the photographic fill as a dark recognizable silhouette; use only minimal inner gesture lines;\n- break tubing at occlusions; never invent limbs, fingers, people or props;\n- preserve everything outside the people exactly.`;
  }

  function renderLayers(scene, copyMode, figures) {
    if (!contractLayers) return;
    const layers = [
      '01 / COMPOSITION LOCK',
      `02 / ${scene.label}`,
      copyMode === 'exact' ? '03 / VERBATIM COPY' : '03 / AUTO MONOLOGUE',
      figures ? '04 / FIGURE BRANCH ON' : '04 / FIGURE BRANCH OFF',
      '05 / QA + ONE RETRY'
    ];
    contractLayers.replaceChildren(...layers.map((label) => {
      const chip = document.createElement('span');
      chip.textContent = label;
      return chip;
    }));
  }

  function renderGates(scene, copyMode, figures) {
    if (!gateList) return;
    const gates = [
      ['构图不变量', 'PENDING', scene.gates[0]],
      ['主体与新增物', 'PENDING', scene.gates[1]],
      ['暗部与光色', 'PENDING', scene.gates[2]],
      ['文字', 'PENDING', copyMode === 'exact' ? '逐字检查拼写、大小写、标点和额外文字' : '检查 12–28 词、三段完整念头与画面相关性'],
      ['人物分支', figures ? 'PENDING' : 'OFF', figures ? '检查全部人物、姿态、遮挡、肢体和背景光晕污染' : '不得自动出现灯管人物'],
      ['失败处理', 'READY', '只允许一次针对性重试，并重新声明全部关键不变量']
    ];

    gateList.replaceChildren(...gates.map(([name, state, note]) => {
      const item = document.createElement('li');
      const label = document.createElement('b');
      const badge = document.createElement('span');
      const detail = document.createElement('small');
      label.textContent = name;
      badge.textContent = state;
      detail.textContent = note;
      item.append(label, badge, detail);
      return item;
    }));
  }

  function compile({ announce = true } = {}) {
    if (!sceneSelect || !compiledContract) return;
    const scene = scenes[sceneSelect.value] || scenes.city;
    const copyMode = activeCopyMode();
    const figures = Boolean(figureToggle?.checked);
    const textBlock = copyMode === 'exact' ? exactCopyContract() : automaticCopyContract(scene);

    const output = [
      'Use case: style-transfer',
      `Asset type: ${scene.asset}`,
      'Input images: the latest supplied image is the edit target; an earlier approved Night Diary output may be style reference only.',
      `Primary request: transform the edit target into a quiet, restrained poetic night image with analog film texture, localized warm light and intimate white handwritten diary text.`,
      '',
      'NON-NEGOTIABLE COMPOSITION LOCK:',
      `- ${scene.preserve};`,
      '- do not add, remove, rotate, enlarge, shift or reconstruct scene elements.',
      '',
      'Lighting and palette:',
      `- ${scene.lighting};`,
      '- keep high contrast while preserving readable shadow detail.',
      '',
      'Texture and graphic treatment:',
      '- use subtle analog film grain, slight softness, restrained bloom and worn texture;',
      `- ${scene.contour}.`,
      '',
      textBlock,
      'Typography and placement: thick coarse off-white marker or chalk handwriting, lowercase when not supplied verbatim, slanted, connected, shaky, scratchy, irregular spacing and drifting baselines; place it only in existing negative space away from faces, key subjects and main lights.',
      figureContract(figures),
      '',
      'Avoid: altered composition, new people or objects, cyberpunk saturation, cartoon or vector rendering, polished digital fonts, thin signature script, uniform baselines, postage-stamp borders, logos, watermarks or extra words.'
    ].filter((line, index, array) => !(line === '' && array[index - 1] === '')).join('\n');

    revision += 1;
    compiledContract.textContent = output;
    if (contractRevision) contractRevision.textContent = `REV ${String(revision).padStart(2, '0')}`;
    if (contractStatus && announce) contractStatus.textContent = '已重新编译；尚未调用图片模型';
    renderLayers(scene, copyMode, figures);
    renderGates(scene, copyMode, figures);
  }

  copyInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (exactCopy) exactCopy.disabled = activeCopyMode() !== 'exact';
      compile();
    });
  });
  sceneSelect?.addEventListener('change', () => compile());
  figureToggle?.addEventListener('change', () => compile());
  exactCopy?.addEventListener('input', () => {
    if (activeCopyMode() === 'exact') compile({ announce: false });
  });
  contractForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    compile();
  });

  resetContract?.addEventListener('click', () => {
    if (sceneSelect) sceneSelect.value = 'city';
    copyInputs.forEach((input) => { input.checked = input.value === 'auto'; });
    if (exactCopy) {
      exactCopy.value = 'the windows remember the rain\n(even after midnight)\nuntil the last light comes home.';
      exactCopy.disabled = true;
    }
    if (figureToggle) figureToggle.checked = false;
    compile();
    if (contractStatus) contractStatus.textContent = '已恢复默认；尚未调用图片模型';
  });

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Fall through to the local selection path.
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
    try { copied = document.execCommand('copy'); } catch { copied = false; }
    textarea.remove();
    return copied;
  }

  copyContract?.addEventListener('click', async () => {
    const copied = await copyText(compiledContract?.textContent || '');
    if (copied) {
      copyContract.textContent = '已复制';
      if (contractStatus) contractStatus.textContent = '合同已复制；运行时仍未调用图片模型';
    } else {
      const range = document.createRange();
      range.selectNodeContents(compiledContract);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyContract.textContent = '已选中';
      if (contractStatus) contractStatus.textContent = '剪贴板未授权，合同已选中，请按 Ctrl/Cmd+C';
    }
    window.setTimeout(() => { copyContract.textContent = '复制合同'; }, 2600);
  });

  document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('error', () => {
      image.dataset.loadError = 'true';
      image.alt = `${image.alt || '研究图片'}（本地资源未加载）`;
    });
  });

  setFilter('all');
  setEmotion('lonely');
  compile({ announce: false });
})();
