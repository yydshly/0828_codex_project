const projectGrid = document.querySelector('#project-grid');

function projectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card';

  const meta = document.createElement('div');
  meta.className = 'project-meta';

  const status = document.createElement('span');
  status.className = 'status';
  status.textContent = project.status;

  const category = document.createElement('span');
  category.textContent = project.category;

  const title = document.createElement('h3');
  title.textContent = project.name;

  const summary = document.createElement('p');
  summary.textContent = project.summary;

  const link = document.createElement('a');
  link.href = project.url;
  link.textContent = '查看研究记录 →';

  meta.append(status, category);
  article.append(meta, title, summary, link);
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
      empty.innerHTML = '<strong>第一项研究即将开始。</strong><span>项目登记后会在这里展示。</span>';
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
