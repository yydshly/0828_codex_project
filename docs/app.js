const projectGrid = document.querySelector('#project-grid');

function projectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card';

  if (project.image) {
    const visual = document.createElement('div');
    visual.className = 'project-visual';
    visual.style.backgroundImage = `url("${project.image}")`;
    visual.setAttribute('role', 'img');
    visual.setAttribute('aria-label', `${project.name} 项目预览`);
    article.append(visual);
  }

  const meta = document.createElement('div');
  meta.className = 'project-meta';

  const status = document.createElement('span');
  status.className = 'status';
  status.textContent = project.status;

  const category = document.createElement('span');
  category.textContent = `${project.number ? `PROJECT ${project.number} · ` : ''}${project.category}`;

  const title = document.createElement('h3');
  title.textContent = project.name;

  const summary = document.createElement('p');
  summary.textContent = project.summary;

  const actions = document.createElement('div');
  actions.className = 'project-actions';

  if (project.demoUrl) {
    const demoLink = document.createElement('a');
    demoLink.className = 'project-demo';
    demoLink.href = project.demoUrl;
    demoLink.textContent = '开始游戏 →';
    actions.append(demoLink);
  }

  const researchLink = document.createElement('a');
  researchLink.href = project.url;
  researchLink.textContent = '研究总结 →';
  actions.append(researchLink);

  meta.append(status, category);
  article.append(meta, title, summary, actions);
  return article;
}

fetch('./projects.json')
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((projects) => {
    projectGrid.replaceChildren();

    if (projects.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.innerHTML = '<strong>项目索引暂时为空。</strong><span>请检查项目数据或前往 GitHub 仓库查看。</span>';
      projectGrid.append(empty);
      return;
    }

    projects.forEach((project) => projectGrid.append(projectCard(project)));
  })
  .catch(() => {
    const error = document.createElement('p');
    error.className = 'empty-state';
    error.textContent = '项目索引暂时无法加载，请前往 GitHub 仓库查看。';
    projectGrid.replaceChildren(error);
  });
