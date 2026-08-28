const capabilityTabs = [...document.querySelectorAll('[data-capability-tab]')];
const capabilityPanels = [...document.querySelectorAll('[data-capability-panel]')];

function activateCapability(key, focus = false) {
  capabilityTabs.forEach((tab) => {
    const selected = tab.dataset.capabilityTab === key;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });

  capabilityPanels.forEach((panel) => {
    panel.hidden = panel.dataset.capabilityPanel !== key;
  });
}

function handleTabKeys(event, tabs, activeIndex, activate) {
  let nextIndex = activeIndex;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (activeIndex + 1) % tabs.length;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (activeIndex - 1 + tabs.length) % tabs.length;
  else if (event.key === 'Home') nextIndex = 0;
  else if (event.key === 'End') nextIndex = tabs.length - 1;
  else return;

  event.preventDefault();
  activate(tabs[nextIndex], true);
}

capabilityTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateCapability(tab.dataset.capabilityTab));
  tab.addEventListener('keydown', (event) => {
    handleTabKeys(event, capabilityTabs, index, (nextTab, focus) => activateCapability(nextTab.dataset.capabilityTab, focus));
  });
});

if (capabilityTabs.length) activateCapability('native');

const collectionData = [
  {
    id: 'fo',
    name: '佛藏',
    count: 5135,
    books: [
      '佛藏/乾隆藏/大乘般若部/金刚般若波罗蜜经.txt',
      '佛藏/乾隆藏/大乘五大部外重译经/妙法莲华经.txt',
      '佛藏/乾隆藏/此土著述/六祖大师法宝坛经.txt',
      '佛藏/乾隆藏/大乘涅槃部/大般涅槃经.txt',
      '佛藏/乾隆藏/此土著述/宋高僧传.txt',
      '佛藏/乾隆藏/大乘单译经/大佛顶如来密因修证了义诸菩萨万行首楞严经.txt'
    ]
  },
  {
    id: 'ru',
    name: '儒藏',
    count: 908,
    books: [
      '儒藏/四书/论语.txt',
      '儒藏/四书/孟子.txt',
      '儒藏/礼经/礼记.txt',
      '儒藏/孝经/孝经.txt',
      '儒藏/四书/四书章句集注.txt',
      '儒藏/尚书/尚书正义.txt',
      '儒藏/春秋/春秋左传正义.txt'
    ]
  },
  {
    id: 'yi',
    name: '医藏',
    count: 911,
    books: [
      '医藏/本草纲目.txt',
      '医藏/黄帝内经素问.txt',
      '医藏/伤寒论.txt',
      '医藏/金匮要略方论.txt',
      '医藏/备急千金要方.txt',
      '医藏/温病条辨.txt',
      '医藏/饮膳正要.txt'
    ]
  },
  {
    id: 'shi',
    name: '史藏',
    count: 2043,
    books: [
      '史藏/正史/史记.txt',
      '史藏/正史/前汉书.txt',
      '史藏/正史/后汉书.txt',
      '史藏/正史/三国志.txt',
      '史藏/编年/资治通鉴.txt',
      '史藏/正史/宋史.txt',
      '史藏/正史/明史.txt'
    ]
  },
  {
    id: 'zi',
    name: '子藏',
    count: 1463,
    books: [
      '子藏/诸子/墨子.txt',
      '子藏/法家/韩非子.txt',
      '子藏/兵家/孙子兵法.txt',
      '子藏/农家/齐民要术.txt',
      '子藏/农家/天工开物.txt',
      '子藏/笔记/梦溪笔谈.txt'
    ]
  },
  {
    id: 'zhouyi',
    name: '易藏',
    count: 343,
    books: [
      '易藏/易经/周易注疏.txt',
      '易藏/易经/周易本义.txt',
      '易藏/易经/周易正义.txt',
      '易藏/易经/伊川易传.txt',
      '易藏/易经/东坡易传.txt',
      '易藏/易经/京氏易传.txt'
    ]
  },
  {
    id: 'yiarts',
    name: '艺藏',
    count: 446,
    books: [
      '艺藏/饮馔/茶经.txt',
      '艺藏/绘画/宣和画谱.txt',
      '艺藏/棋技/棋经十三篇.txt',
      '艺藏/工艺/园冶.txt'
    ]
  },
  {
    id: 'poetry',
    name: '诗藏',
    count: 776,
    books: [
      '诗藏/诗集/全唐诗.txt',
      '诗藏/诗集/全宋诗.txt',
      '诗藏/诗集/乐府诗集.txt',
      '诗藏/楚辞/楚辞.txt',
      '诗藏/诗话/诗品.txt',
      '诗藏/词集/花间集.txt'
    ]
  },
  {
    id: 'dao',
    name: '道藏',
    count: 1721,
    books: [
      '道藏/正统道藏太清部/抱朴子内篇.txt',
      '道藏/正统道藏太玄部/云笈七签.txt',
      '道藏/正统道藏太清部/太上感应篇.txt',
      '道藏/藏外/老子道德经（晋王弼）.txt',
      '道藏/藏外/庄子.txt',
      '道藏/藏外/列子.txt'
    ]
  },
  {
    id: 'ji',
    name: '集藏',
    count: 1948,
    books: [
      '集藏/小说/红楼梦.txt',
      '集藏/小说/西游记.txt',
      '集藏/小说/水浒传.txt',
      '集藏/演义/三国演义.txt',
      '集藏/文总集/全唐文.txt',
      '集藏/文总集/古文观止.txt'
    ]
  }
];

const allBooks = collectionData.flatMap((collection) => collection.books.map((path) => {
  const segments = path.split('/');
  return {
    collectionId: collection.id,
    collectionName: collection.name,
    collectionCount: collection.count,
    title: segments.at(-1).replace(/\.txt$/i, ''),
    subclass: segments.slice(1, -1).join(' / ') || '未分子类',
    path
  };
}));

const collectionTabs = [...document.querySelectorAll('[data-collection]')];
const catalogSearch = document.querySelector('#catalogSearch');
const bookGrid = document.querySelector('#bookGrid');
const catalogEmpty = document.querySelector('#catalogEmpty');
const clearCatalog = document.querySelector('#clearCatalog');
const catalogScope = document.querySelector('#catalogScope');
const catalogResultCount = document.querySelector('#catalogResultCount');
const catalogLiveStatus = document.querySelector('#catalogLiveStatus');
let activeCollection = 'all';

function normalized(value) {
  return value.trim().toLocaleLowerCase('zh-CN');
}

function createBookCard(book) {
  const article = document.createElement('article');
  article.className = 'book-card';
  article.dataset.collection = book.collectionId;

  const meta = document.createElement('span');
  meta.textContent = `${book.collectionName} · ${book.subclass}`;

  const title = document.createElement('h3');
  title.textContent = book.title;

  const path = document.createElement('p');
  path.textContent = book.path.split('/').join(' / ');

  article.append(meta, title, path);
  return article;
}

function currentCollectionName() {
  if (activeCollection === 'all') return '全部门类';
  return collectionData.find((collection) => collection.id === activeCollection)?.name || '全部门类';
}

function renderCatalog() {
  if (!bookGrid || !catalogEmpty) return;
  const query = normalized(catalogSearch?.value || '');
  const books = allBooks.filter((book) => {
    const collectionMatches = activeCollection === 'all' || book.collectionId === activeCollection;
    const queryMatches = !query || normalized(`${book.title} ${book.path} ${book.collectionName}`).includes(query);
    return collectionMatches && queryMatches;
  });

  bookGrid.replaceChildren(...books.map(createBookCard));
  bookGrid.hidden = books.length === 0;
  catalogEmpty.hidden = books.length !== 0;

  const scopeName = currentCollectionName();
  if (catalogScope) catalogScope.textContent = scopeName;
  if (catalogResultCount) catalogResultCount.textContent = `${books.length} 个代表文件`;
  if (catalogLiveStatus) {
    catalogLiveStatus.textContent = books.length
      ? `正在显示${scopeName}${query ? `中匹配“${catalogSearch.value.trim()}”` : ''}的 ${books.length} 个已核对样本。`
      : `${scopeName}中没有匹配“${catalogSearch?.value.trim() || ''}”的代表样本。`;
  }
}

function activateCollection(id, focus = false) {
  activeCollection = id;
  collectionTabs.forEach((tab) => {
    const selected = tab.dataset.collection === id;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    tab.setAttribute('aria-controls', 'bookGrid');
    if (selected && focus) tab.focus();
  });
  renderCatalog();
}

collectionTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateCollection(tab.dataset.collection));
  tab.addEventListener('keydown', (event) => {
    handleTabKeys(event, collectionTabs, index, (nextTab, focus) => activateCollection(nextTab.dataset.collection, focus));
  });
});

catalogSearch?.addEventListener('input', renderCatalog);
catalogSearch?.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  catalogSearch.value = '';
  renderCatalog();
});

clearCatalog?.addEventListener('click', () => {
  if (catalogSearch) catalogSearch.value = '';
  activateCollection('all');
  catalogSearch?.focus();
});

if (collectionTabs.length && bookGrid) activateCollection('all');
