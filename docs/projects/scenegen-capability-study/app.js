document.documentElement.classList.add('js');

const stageTabs = [...document.querySelectorAll('[data-stage]')];
const stagePanels = [...document.querySelectorAll('[data-stage-panel]')];

function activateStage(stage, focus = false) {
  stageTabs.forEach((tab) => {
    const selected = tab.dataset.stage === stage;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });

  stagePanels.forEach((panel) => {
    const selected = panel.dataset.stagePanel === stage;
    panel.classList.toggle('is-active', selected);
    panel.hidden = !selected;
  });
}

function moveStage(event, index) {
  let nextIndex = index;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % stageTabs.length;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + stageTabs.length) % stageTabs.length;
  else if (event.key === 'Home') nextIndex = 0;
  else if (event.key === 'End') nextIndex = stageTabs.length - 1;
  else return;

  event.preventDefault();
  activateStage(stageTabs[nextIndex].dataset.stage, true);
}

stageTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateStage(tab.dataset.stage));
  tab.addEventListener('keydown', (event) => moveStage(event, index));
});
if (stageTabs.length) activateStage('input');

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
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) markSection(visible.target.dataset.section);
  }, { rootMargin: '-18% 0px -66% 0px', threshold: [0, 0.1, 0.35] });
  observedSections.forEach((section) => sectionObserver.observe(section));
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

const viewerCard = document.querySelector('#viewerCard');
const viewerShell = document.querySelector('#viewerShell');
const viewerIdle = document.querySelector('#viewerIdle');
const viewerStatus = document.querySelector('#viewerStatus');
const loadViewerButton = document.querySelector('#loadViewer');
const resetViewButton = document.querySelector('#resetView');
const wireframeButton = document.querySelector('#toggleWireframe');

let viewerStarted = false;
let viewerModel;
let viewerCamera;
let viewerControls;
let viewerRenderer;
let initialCamera = null;
let wireframeEnabled = false;

function setViewerStatus(message) {
  if (viewerStatus) viewerStatus.textContent = message;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') resolve();
      else existing.addEventListener('load', resolve, { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      resolve();
    }, { once: true });
    script.addEventListener('error', () => reject(new Error(`无法加载 ${src}`)), { once: true });
    document.head.append(script);
  });
}

function fitModelToView(model, camera, controls) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z) || 1;
  const scale = 2.5 / maxDimension;
  model.scale.setScalar(scale);
  model.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
  model.updateMatrixWorld(true);

  controls.target.set(0, 0, 0);
  camera.position.set(3.15, 2.15, 3.45);
  camera.near = 0.01;
  camera.far = 100;
  camera.updateProjectionMatrix();
  controls.update();
  initialCamera = { position: camera.position.clone(), target: controls.target.clone() };
}

function startViewer() {
  if (!viewerShell || !viewerCard) return;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x08120f);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.01, 100);
  viewerCamera = camera;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  viewerRenderer = renderer;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.55;
  renderer.shadowMap.enabled = true;
  viewerShell.append(renderer.domElement);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  viewerControls = controls;
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.autoRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  controls.autoRotateSpeed = 0.65;

  scene.add(new THREE.HemisphereLight(0xf2fff7, 0x18231f, 1.65));
  const key = new THREE.DirectionalLight(0xffd7a0, 2.3);
  key.position.set(4, 7, 5);
  key.castShadow = true;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x86e8d7, 1.25);
  fill.position.set(-5, 3, -4);
  scene.add(fill);

  const ground = new THREE.GridHelper(5, 14, 0x346d61, 0x17362f);
  ground.position.y = -1.23;
  ground.material.opacity = 0.38;
  ground.material.transparent = true;
  scene.add(ground);

  const resize = () => {
    const width = Math.max(1, viewerShell.clientWidth);
    const height = Math.max(1, viewerShell.clientHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };
  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(viewerShell);

  const loader = new THREE.GLTFLoader();
  loader.load(
    viewerCard.dataset.modelUrl,
    (gltf) => {
      viewerModel = gltf.scene;
      viewerModel.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      scene.add(viewerModel);
      fitModelToView(viewerModel, camera, controls);
      viewerIdle.hidden = true;
      resetViewButton.disabled = false;
      wireframeButton.disabled = false;
      setViewerStatus('官方 GLB 已加载 · 可拖动查看多个独立 Mesh');
    },
    (event) => {
      if (!event.total) {
        setViewerStatus('正在加载官方 GLB…');
        return;
      }
      const percent = Math.round((event.loaded / event.total) * 100);
      setViewerStatus(`正在加载官方 GLB… ${percent}%`);
    },
    (error) => {
      console.error('SceneGen GLB load failed', error);
      viewerIdle.classList.remove('is-loading');
      loadViewerButton.disabled = false;
      loadViewerButton.textContent = '重新加载官方 GLB';
      viewerStarted = false;
      setViewerStatus('GLB 加载失败；正文与官方输入图仍可正常阅读。');
    }
  );

  function render() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();
}

loadViewerButton?.addEventListener('click', async () => {
  if (viewerStarted) return;
  viewerStarted = true;
  loadViewerButton.disabled = true;
  loadViewerButton.textContent = '准备查看器…';
  viewerIdle.classList.add('is-loading');
  setViewerStatus('正在加载本地 Three.js 查看器…');
  try {
    await loadScript('../../assets/project-010-media/three-r128.min.js');
    await loadScript('../../assets/project-010-media/OrbitControls-r128.js');
    await loadScript('../../assets/project-010-media/GLTFLoader-r128.js');
    loadViewerButton.textContent = '正在读取模型…';
    startViewer();
  } catch (error) {
    console.error('SceneGen viewer initialization failed', error);
    viewerIdle.classList.remove('is-loading');
    loadViewerButton.disabled = false;
    loadViewerButton.textContent = '重新加载官方 GLB';
    viewerStarted = false;
    setViewerStatus('查看器初始化失败；请确认浏览器支持 WebGL。');
  }
});

resetViewButton?.addEventListener('click', () => {
  if (!initialCamera || !viewerCamera || !viewerControls) return;
  viewerCamera.position.copy(initialCamera.position);
  viewerControls.target.copy(initialCamera.target);
  viewerControls.update();
  setViewerStatus('视角已重置');
});

wireframeButton?.addEventListener('click', () => {
  if (!viewerModel) return;
  wireframeEnabled = !wireframeEnabled;
  viewerModel.traverse((node) => {
    if (!node.isMesh) return;
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    materials.forEach((material) => { material.wireframe = wireframeEnabled; });
  });
  wireframeButton.setAttribute('aria-pressed', String(wireframeEnabled));
  wireframeButton.textContent = wireframeEnabled ? '关闭线框' : '显示线框';
  setViewerStatus(wireframeEnabled ? '线框模式已开启' : '纹理模式已恢复');
});

window.addEventListener('pagehide', () => {
  viewerRenderer?.dispose();
});
