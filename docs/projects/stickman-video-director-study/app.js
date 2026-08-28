const elements = {
  caseTabs: [...document.querySelectorAll('[data-case]')],
  patternBadge: document.querySelector('#patternBadge'),
  phaseBadge: document.querySelector('#phaseBadge'),
  caseTitle: document.querySelector('#caseTitle'),
  caseTitleZh: document.querySelector('#caseTitleZh'),
  caseSource: document.querySelector('#caseSource'),
  caseEvidence: document.querySelector('#caseEvidence'),
  ratioSelect: document.querySelector('#ratioSelect'),
  themeInputs: [...document.querySelectorAll('input[name="theme"]')],
  wordCount: document.querySelector('#wordCount'),
  compositionRule: document.querySelector('#compositionRule'),
  approveButton: document.querySelector('#approveButton'),
  resetButton: document.querySelector('#resetButton'),
  approvalStatus: document.querySelector('#approvalStatus'),
  sceneGrid: document.querySelector('#sceneGrid'),
  selectedSceneNumber: document.querySelector('#selectedSceneNumber'),
  selectedScenePurpose: document.querySelector('#selectedScenePurpose'),
  beatList: document.querySelector('#beatList'),
  firstFrame: document.querySelector('#firstFrame'),
  finalFrame: document.querySelector('#finalFrame'),
  selectedVo: document.querySelector('#selectedVo'),
  promptOutput: document.querySelector('#promptOutput'),
  copyPrompt: document.querySelector('#copyPrompt'),
  copyFeedback: document.querySelector('#copyFeedback'),
  styleTabs: [...document.querySelectorAll('[data-style]')],
  stylePreview: document.querySelector('#stylePreview'),
  adapterProfileId: document.querySelector('#adapterProfileId'),
  adapterSwatches: document.querySelector('#adapterSwatches'),
  adapterCaseBadge: document.querySelector('#adapterCaseBadge'),
  adapterName: document.querySelector('#adapterName'),
  styleRevisionBadge: document.querySelector('#styleRevisionBadge'),
  adapterFit: document.querySelector('#adapterFit'),
  lockedList: document.querySelector('#lockedList'),
  overrideList: document.querySelector('#overrideList'),
  adapterModelHandoff: document.querySelector('#adapterModelHandoff'),
  adapterQaList: document.querySelector('#adapterQaList'),
  approveStyleButton: document.querySelector('#approveStyleButton'),
  copyAdapter: document.querySelector('#copyAdapter'),
  styleApprovalStatus: document.querySelector('#styleApprovalStatus'),
  adapterOutput: document.querySelector('#adapterOutput'),
  adapterCopyFeedback: document.querySelector('#adapterCopyFeedback')
};

const compositionRules = {
  '16:9': '横向重构：左—中—右调度、侧向跟拍、水平匹配剪辑，并为后期文字保留有意识的负空间。',
  '9:16': '竖向重构：前后景纵深、层叠运动、上下揭示、前景擦镜，并避开移动端界面安全区。',
  '1:1': '方形重构：中心加权、短运动路径、放射或环形变化，关键动作不靠近极端边缘。'
};

const promptComposition = {
  '16:9': 'Stage the action across left, center, and right. Use lateral tracking, horizontal match cuts, and deliberate negative space.',
  '9:16': 'Use foreground and background depth, stacked vertical motion, upward and downward reveals, foreground passes, and interface-safe placement.',
  '1:1': 'Use a compact center-weighted composition, short travel paths, and radial or circular motion. Keep crucial action away from extreme edges.'
};

const themeContracts = {
  light: {
    label: '白底黑线',
    prompt: 'Use a completely flat, uniform, digitally pure-white canvas and identical black line art. Forbid gray or off-white tint, texture, grain, gradients, shadows, lighting, bloom, fog, and three-dimensional background depth.'
  },
  dark: {
    label: '黑底白线',
    prompt: 'Use a pure black background and identical white line art with no surface texture, lighting gradient, fog, or three-dimensional background treatment.'
  }
};

const state = {
  manifest: null,
  adapterManifest: null,
  caseId: 'motivation',
  ratio: '16:9',
  theme: 'dark',
  sceneIndex: 0,
  approved: false,
  directorRevision: 1,
  styleId: 'editorial-ice-blue',
  styleRevision: 1,
  visualApproved: false
};

function currentCase() {
  return state.manifest.cases.find((item) => item.id === state.caseId);
}

function currentStyle() {
  return state.adapterManifest?.style_profiles.find((item) => item.id === state.styleId);
}

function countWords(item) {
  return item.scenes
    .map((scene) => scene.vo)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function createSceneCard(scene, index) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'scene-card';
  button.setAttribute('aria-pressed', String(index === state.sceneIndex));
  button.dataset.sceneIndex = String(index);

  const top = document.createElement('span');
  top.className = 'scene-card__top';
  const clip = document.createElement('span');
  clip.textContent = `CLIP ${String(index + 1).padStart(2, '0')}`;
  const time = document.createElement('span');
  time.textContent = `${index * 10}–${(index + 1) * 10}s`;
  top.append(clip, time);

  const purpose = document.createElement('strong');
  purpose.textContent = scene.purpose;
  const summary = document.createElement('small');
  summary.textContent = scene.beats.join(' → ');
  button.append(top, purpose, summary);
  button.addEventListener('click', () => {
    state.sceneIndex = index;
    renderSceneSelection();
  });
  return button;
}

function renderSceneGrid() {
  const item = currentCase();
  const fragment = document.createDocumentFragment();
  item.scenes.forEach((scene, index) => fragment.append(createSceneCard(scene, index)));
  elements.sceneGrid.replaceChildren(fragment);
}

function renderSceneSelection() {
  const item = currentCase();
  const scene = item.scenes[state.sceneIndex];
  [...elements.sceneGrid.querySelectorAll('.scene-card')].forEach((card, index) => {
    card.setAttribute('aria-pressed', String(index === state.sceneIndex));
  });

  elements.selectedSceneNumber.textContent = `CLIP ${String(state.sceneIndex + 1).padStart(2, '0')} / ${state.sceneIndex * 10}–${(state.sceneIndex + 1) * 10}s`;
  elements.selectedScenePurpose.textContent = scene.purpose;
  elements.beatList.replaceChildren();
  ['0–3s', '3–7s', '7–10s'].forEach((time, index) => {
    const row = document.createElement('li');
    const label = document.createElement('span');
    label.textContent = time;
    const copy = document.createElement('div');
    copy.textContent = scene.beats[index];
    row.append(label, copy);
    elements.beatList.append(row);
  });
  elements.firstFrame.textContent = scene.first_frame;
  elements.finalFrame.textContent = scene.final_frame;
  elements.selectedVo.textContent = `“${scene.vo}”`;
  renderPrompt();
}

function compilePrompt() {
  const item = currentCase();
  const scene = item.scenes[state.sceneIndex];
  const palette = item.palette.join(', ');
  return `Create an approximately 10-second ${state.ratio} 2D kinetic line-animation clip targeting 720p at 24 FPS with synchronized audio.

THEME AND CHARACTER LOCK
${themeContracts[state.theme].prompt}
Use one minimalist stick figure with a hollow circular head, no face, no hair, no clothing, no filled body, stable human-like proportions, and uniform medium line weight. Preserve identical character design and strict temporal consistency.

PALETTE
Use only ${palette} as saturated accents, with the semantic roles established by the approved director proposal. Treat these ordinary color names as visual art direction only.

COMPOSITION
${promptComposition[state.ratio]}

FIRST FRAME
Inherit this exact visible state: ${scene.first_frame}.

[0–3s] ${scene.beats[0]}.
[3–7s] ${scene.beats[1]}.
[7–10s] ${scene.beats[2]}.

AUDIO-ONLY DIALOGUE, EXACTLY ONCE
“${scene.vo}”
Do not add, omit, paraphrase, repeat, reorder, caption, subtitle, or visually transcribe the dialogue.

VOICE AND SOUND
Use the same bright, energetic adult female narrator speaking natural American English. Adjust emotion for this scene without changing voice identity. Use ${scene.audio}; keep narration dominant over music and synchronized effects.

FINAL FRAME
End on this exact transition state for the next clip: ${scene.final_frame}.

NEGATIVE CONSTRAINTS
No photorealism, unwanted 3D rendering, facial features, hair, clothing, filled bodies, extra limbs, malformed anatomy, disconnected lines, changed proportions, broken line weight, inverted theme polarity, unexplained colors, unintended characters, irrelevant spectacle, visible words, letters, numbers, interface copy, production annotations, captions, subtitles, logos, or watermarks. Use rapid scene changes and frequent visual events without changing the drawing style.`;
}

const overrideLabels = {
  subject_language: '人物语言',
  surface_and_background: '材质与背景',
  palette_semantics: '色彩语义',
  camera_and_motion: '镜头与运动',
  vfx: '视觉效果',
  negative_constraints: '负面约束'
};

function appendListItems(list, values) {
  const fragment = document.createDocumentFragment();
  values.forEach((value) => {
    const item = document.createElement('li');
    item.textContent = value;
    fragment.append(item);
  });
  list.replaceChildren(fragment);
}

function compileAdapterContract() {
  const item = currentCase();
  const scene = item.scenes[state.sceneIndex];
  const profile = currentStyle();
  const invariants = state.adapterManifest.locked_invariants
    .map((entry) => `- ${entry.label}: ${entry.rule}`)
    .join('\n');
  const overrides = Object.entries(profile.style_overrides)
    .map(([key, value]) => `- ${overrideLabels[key]}: ${value}`)
    .join('\n');
  const qa = profile.qa_gates.map((gate) => `- ${gate}`).join('\n');

  return `${state.visualApproved ? 'APPROVED' : 'DRAFT'} STYLE ADAPTER CONTRACT
DIRECTOR LINEAGE: R${String(state.directorRevision).padStart(2, '0')} / ${item.id} / ${state.ratio}
VISUAL LINEAGE: R${String(state.styleRevision).padStart(2, '0')} / ${profile.id}
TARGET: CLIP ${String(state.sceneIndex + 1).padStart(2, '0')} / ${scene.purpose}

LOCKED DIRECTOR INVARIANTS
${invariants}

STYLE PACK OVERRIDES
${overrides}

CONTINUITY TRANSLATION
FIRST FRAME: Preserve the meaning of “${scene.first_frame}” in ${profile.name_en}.
FINAL FRAME: Preserve the handoff meaning of “${scene.final_frame}” in ${profile.name_en}.

MODEL ADAPTER
REFERENCE STRATEGY: ${profile.model_adapter.reference_strategy}
REQUIRED CAPABILITIES: ${profile.model_adapter.required_capabilities.join(', ')}
FALLBACK: ${profile.model_adapter.fallback}

VISUAL QA GATES
${qa}

PRODUCTION GATE
${state.visualApproved ? 'Director and visual approvals are present. A real run still requires a selected backend, budget, and approved reference assets.' : 'Visual approval is still required. Do not compile or send a backend-specific production request.'}`;
}

function renderAdapterOutput() {
  if (!state.adapterManifest) return;
  const profile = currentStyle();
  const revision = String(state.styleRevision).padStart(2, '0');
  elements.adapterCaseBadge.textContent = `${state.caseId.toUpperCase()} · CLIP ${String(state.sceneIndex + 1).padStart(2, '0')} · DIRECTOR R${String(state.directorRevision).padStart(2, '0')}`;

  if (!state.approved) {
    elements.styleRevisionBadge.textContent = `VISUAL R${revision} · WAITING`;
    elements.approveStyleButton.disabled = true;
    elements.approveStyleButton.textContent = '先批准上方导演预案';
    elements.copyAdapter.disabled = true;
    elements.adapterOutput.textContent = 'WAITING FOR DIRECTOR APPROVAL\n\n先在上方批准导演预案，风格适配器才会绑定到对应导演版本。';
    elements.adapterCopyFeedback.textContent = 'NO STYLE GENERATION · NO MODEL CALL';
    return;
  }

  elements.adapterOutput.textContent = compileAdapterContract();
  if (!state.visualApproved) {
    elements.styleRevisionBadge.textContent = `VISUAL R${revision} · REVIEW`;
    elements.approveStyleButton.disabled = false;
    elements.approveStyleButton.textContent = '批准当前风格合同';
    elements.copyAdapter.disabled = true;
    elements.adapterCopyFeedback.textContent = 'DRAFT ONLY · VISUAL APPROVAL REQUIRED';
    return;
  }

  elements.styleRevisionBadge.textContent = `VISUAL R${revision} · APPROVED`;
  elements.approveStyleButton.disabled = true;
  elements.approveStyleButton.textContent = '当前视觉版本已批准';
  elements.copyAdapter.disabled = false;
  elements.adapterCopyFeedback.textContent = 'ADAPTER READY · BACKEND / BUDGET / REFERENCES STILL UNRESOLVED';
}

function renderAdapter() {
  const profile = currentStyle();
  if (!profile) return;
  elements.styleTabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.style === profile.id)));
  elements.stylePreview.dataset.style = profile.id;
  elements.stylePreview.style.setProperty('--preview-bg', profile.preview.background);
  elements.stylePreview.style.setProperty('--preview-fg', profile.preview.foreground);
  elements.stylePreview.style.setProperty('--preview-accent', profile.preview.accent);
  elements.stylePreview.style.setProperty('--preview-secondary', profile.preview.secondary);
  elements.adapterProfileId.textContent = profile.id.toUpperCase();
  elements.adapterName.textContent = `${profile.name_zh} / ${profile.name_en}`;
  elements.adapterFit.textContent = `适用方向：${profile.fit}`;

  const swatches = document.createDocumentFragment();
  Object.values(profile.preview).forEach((color) => {
    const swatch = document.createElement('i');
    swatch.style.background = color;
    swatch.title = color;
    swatches.append(swatch);
  });
  elements.adapterSwatches.replaceChildren(swatches);
  appendListItems(elements.lockedList, state.adapterManifest.locked_invariants.map((entry) => `${entry.label}：${entry.rule}`));
  appendListItems(elements.overrideList, Object.entries(profile.style_overrides).map(([key, value]) => `${overrideLabels[key]}：${value}`));
  elements.adapterModelHandoff.textContent = `${profile.model_adapter.reference_strategy} 若目标模型能力不足：${profile.model_adapter.fallback}`;
  appendListItems(elements.adapterQaList, profile.qa_gates);
  renderAdapterOutput();
}

function resetVisualApproval(reason = '') {
  state.visualApproved = false;
  if (elements.styleApprovalStatus) {
    elements.styleApprovalStatus.textContent = reason || '当前风格合同待批准；导演结构保持不变。';
  }
  renderAdapterOutput();
}

function selectStyle(styleId) {
  const profile = state.adapterManifest.style_profiles.find((entry) => entry.id === styleId);
  if (!profile || profile.id === state.styleId) return;
  state.styleId = profile.id;
  state.styleRevision += 1;
  resetVisualApproval(`已切换为${profile.name_zh}；导演批准保持有效，视觉批准已失效。`);
  renderAdapter();
}

function approveCurrentStyle() {
  if (!state.approved) return;
  state.visualApproved = true;
  elements.styleApprovalStatus.textContent = `视觉 R${String(state.styleRevision).padStart(2, '0')} 已绑定导演 R${String(state.directorRevision).padStart(2, '0')}。真实生产仍需选择后端、预算与参考资产。`;
  renderAdapterOutput();
}

function renderPrompt() {
  if (!state.approved) {
    elements.promptOutput.textContent = 'LOCKED\n\nPhase B 只在当前 Phase A 获得明确批准后生成。\n切换案例、画幅或主题都会使批准失效。';
    elements.copyPrompt.disabled = true;
    elements.copyFeedback.textContent = 'NO MODEL CALL · NO VIDEO RENDER';
    renderAdapterOutput();
    return;
  }

  elements.promptOutput.textContent = compilePrompt();
  elements.copyPrompt.disabled = false;
  elements.copyFeedback.textContent = `PROMPT READY · CLIP ${String(state.sceneIndex + 1).padStart(2, '0')} · RESEARCH SIMULATION`;
  renderAdapterOutput();
}

function resetApproval(reason = '') {
  if (reason) state.directorRevision += 1;
  state.approved = false;
  elements.phaseBadge.textContent = 'PHASE A / REVIEW';
  elements.approveButton.disabled = false;
  elements.approveButton.textContent = '批准当前预案，解锁 Phase B';
  elements.approvalStatus.textContent = reason || '生产 Prompt 已锁定；请先检查六幕预案。';
  resetVisualApproval(reason ? `导演已进入 R${String(state.directorRevision).padStart(2, '0')}；旧视觉批准随之失效。` : '风格合同依赖已经批准的 Phase A；导演结构不会被这里的选择覆盖。');
  renderPrompt();
}

function applyCaseDefaults(item) {
  state.ratio = item.default_ratio;
  state.theme = item.default_theme;
  state.sceneIndex = 0;
  elements.ratioSelect.value = state.ratio;
  elements.themeInputs.forEach((input) => {
    input.checked = input.value === state.theme;
  });
}

function renderCase() {
  const item = currentCase();
  elements.caseTabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.case === item.id)));
  elements.patternBadge.textContent = item.pattern.toUpperCase();
  elements.caseTitle.textContent = item.title;
  elements.caseTitleZh.textContent = `《${item.title_zh}》`;
  elements.caseSource.textContent = item.source;
  elements.caseEvidence.textContent = item.evidence;
  elements.wordCount.textContent = String(countWords(item));
  elements.compositionRule.textContent = compositionRules[state.ratio];
  renderSceneGrid();
  renderSceneSelection();
}

function selectCase(caseId) {
  const item = state.manifest.cases.find((entry) => entry.id === caseId);
  if (!item) return;
  state.caseId = caseId;
  applyCaseDefaults(item);
  resetApproval('案例已切换；新的 Phase A 需要重新批准。');
  renderCase();
}

function approveCurrentProposal() {
  state.approved = true;
  elements.phaseBadge.textContent = 'PHASE B / READY';
  elements.approveButton.disabled = true;
  elements.approveButton.textContent = '当前导演预案已批准';
  elements.approvalStatus.textContent = 'Phase B 已解锁。选择任一镜头查看其独立生产合同。';
  resetVisualApproval(`导演 R${String(state.directorRevision).padStart(2, '0')} 已批准；请选择并批准一套独立视觉版本。`);
  renderPrompt();
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Use the local fallback below.
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.append(textarea);
  textarea.focus();
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

function bindMediaFallbacks() {
  document.querySelectorAll('.video-card, .user-sample-video').forEach((card) => {
    const video = card.querySelector('video');
    const fallback = card.querySelector('.media-fallback');
    video?.addEventListener('error', () => {
      if (fallback) fallback.hidden = false;
    });
  });
}

function bindInteractions() {
  elements.caseTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectCase(tab.dataset.case));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + direction + elements.caseTabs.length) % elements.caseTabs.length;
      elements.caseTabs[nextIndex].focus();
      selectCase(elements.caseTabs[nextIndex].dataset.case);
    });
  });

  elements.styleTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectStyle(tab.dataset.style));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + direction + elements.styleTabs.length) % elements.styleTabs.length;
      elements.styleTabs[nextIndex].focus();
      selectStyle(elements.styleTabs[nextIndex].dataset.style);
    });
  });

  elements.ratioSelect.addEventListener('change', () => {
    state.ratio = elements.ratioSelect.value;
    elements.compositionRule.textContent = compositionRules[state.ratio];
    resetApproval(`画幅已改为 ${state.ratio}；空间调度已重构，旧批准失效。`);
  });

  elements.themeInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (!input.checked) return;
      state.theme = input.value;
      resetApproval(`主题已改为${themeContracts[state.theme].label}；对比与背景合同已重构，旧批准失效。`);
    });
  });

  elements.approveButton.addEventListener('click', approveCurrentProposal);
  elements.approveStyleButton.addEventListener('click', approveCurrentStyle);
  elements.resetButton.addEventListener('click', () => {
    const item = currentCase();
    applyCaseDefaults(item);
    resetApproval('已恢复案例默认设置；请重新检查并批准导演预案。');
    renderCase();
  });

  elements.copyPrompt.addEventListener('click', async () => {
    if (!state.approved) return;
    const copied = await copyText(elements.promptOutput.textContent);
    if (copied) {
      elements.copyPrompt.textContent = '已复制 Prompt';
      elements.copyFeedback.textContent = 'PROMPT COPIED · STILL NO MODEL CALL';
    } else {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(elements.promptOutput);
      selection.removeAllRanges();
      selection.addRange(range);
      elements.copyPrompt.textContent = 'Prompt 已选中';
      elements.copyFeedback.textContent = 'CLIPBOARD BLOCKED · PRESS CTRL/CMD+C';
    }
    window.setTimeout(() => {
      elements.copyPrompt.textContent = '复制 Prompt';
      renderPrompt();
    }, 3200);
  });

  elements.copyAdapter.addEventListener('click', async () => {
    if (!state.visualApproved) return;
    const copied = await copyText(elements.adapterOutput.textContent);
    if (copied) {
      elements.copyAdapter.textContent = '已复制适配合同';
      elements.adapterCopyFeedback.textContent = 'ADAPTER COPIED · STILL NO MODEL CALL';
    } else {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(elements.adapterOutput);
      selection.removeAllRanges();
      selection.addRange(range);
      elements.copyAdapter.textContent = '适配合同已选中';
      elements.adapterCopyFeedback.textContent = 'CLIPBOARD BLOCKED · PRESS CTRL/CMD+C';
    }
    window.setTimeout(() => {
      elements.copyAdapter.textContent = '复制适配合同';
      renderAdapterOutput();
    }, 3200);
  });
}

async function initialize() {
  bindMediaFallbacks();
  try {
    const [caseResponse, adapterResponse] = await Promise.all([
      fetch('./representative-cases.json'),
      fetch('./style-adapter-blueprint.json')
    ]);
    if (!caseResponse.ok || !adapterResponse.ok) {
      throw new Error(`HTTP cases=${caseResponse.status} adapters=${adapterResponse.status}`);
    }
    [state.manifest, state.adapterManifest] = await Promise.all([
      caseResponse.json(),
      adapterResponse.json()
    ]);
    const firstCase = state.manifest.cases.find((item) => item.id === state.caseId) || state.manifest.cases[0];
    state.caseId = firstCase.id;
    applyCaseDefaults(firstCase);
    bindInteractions();
    renderCase();
    renderAdapter();
    resetApproval();
  } catch (error) {
    elements.approvalStatus.textContent = `案例数据加载失败：${error.message}。研究正文和上游视频仍可阅读。`;
    elements.caseTabs.forEach((tab) => { tab.disabled = true; });
    elements.ratioSelect.disabled = true;
    elements.themeInputs.forEach((input) => { input.disabled = true; });
    elements.approveButton.disabled = true;
    elements.resetButton.disabled = true;
    elements.styleTabs.forEach((tab) => { tab.disabled = true; });
    elements.approveStyleButton.disabled = true;
    elements.copyAdapter.disabled = true;
  }
}

initialize();
