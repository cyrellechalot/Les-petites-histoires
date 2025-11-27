const stories = [
  {
    id: 'chaperon',
    title: 'Le Petit Chaperon Rouge',
    summary: "Un voyage en forêt où le courage d'une petite fille déjoue le loup.",
    color: '#ff8fb8'
  },
  {
    id: 'cochons',
    title: 'Les Trois Petits Cochons',
    summary: 'Trois maisons, trois caractères et un loup qui souffle très fort.',
    color: '#ffd166'
  },
  {
    id: 'canard',
    title: 'Le Vilain Petit Canard',
    summary: 'Le parcours d’un petit caneton devenu beau cygne.',
    color: '#7bdff2'
  },
  {
    id: 'cendrillon',
    title: 'Cendrillon',
    summary: 'Une pantoufle de verre, un bal magique et une gentille marraine.',
    color: '#c7b8ff'
  },
  {
    id: 'blanche',
    title: 'Blanche-Neige',
    summary: 'Une pomme empoisonnée, sept amis et un amour sincère.',
    color: '#9bf6ff'
  },
  {
    id: 'hansel',
    title: 'Hansel et Gretel',
    summary: 'Deux enfants malins face à une maison en pain d’épices.',
    color: '#ffc09f'
  },
  {
    id: 'belle',
    title: 'La Belle et la Bête',
    summary: 'La beauté du cœur dévoilée derrière une apparence effrayante.',
    color: '#ffcad4'
  },
  {
    id: 'chatbotte',
    title: 'Le Chat Botté',
    summary: 'Un chat malin, des bottes et un marquis improvisé.',
    color: '#f0b8ff'
  },
  {
    id: 'raiponce',
    title: 'Raiponce',
    summary: 'Une tour cachée, de longs cheveux d’or et un chant qui éclaire.',
    color: '#ffe066'
  },
  {
    id: 'aladdin',
    title: 'Aladdin',
    summary: 'Une lampe merveilleuse, un génie joyeux et trois souhaits.',
    color: '#a0e7e5'
  }
];

const storage = {
  get(key, fallback) {
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      return saved ?? structuredClone(fallback);
    } catch (e) {
      return structuredClone(fallback);
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const defaultMetrics = stories.reduce((acc, story) => {
  acc[story.id] = { views: 12 + Math.floor(Math.random() * 20), likes: 3 + Math.floor(Math.random() * 8) };
  return acc;
}, {});

let metrics = storage.get('storyMetrics', defaultMetrics);
let likedStories = storage.get('likedStories', []);
let endings = storage.get('storyEndings', {});
let likedEndings = storage.get('likedEndings', []);
let reviews = storage.get('reviews', []);

let currentStoryId = null;

function saveState() {
  storage.set('storyMetrics', metrics);
  storage.set('likedStories', likedStories);
  storage.set('storyEndings', endings);
  storage.set('likedEndings', likedEndings);
  storage.set('reviews', reviews);
}

function createChildDrawing(title, color) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop stop-color='${color}' offset='0%'/>
        <stop stop-color='#ffffff' offset='100%'/>
      </linearGradient>
    </defs>
    <rect width='320' height='220' rx='32' fill='url(#g)'/>
    <circle cx='70' cy='60' r='28' fill='#fff9c4' stroke='#ff9f1c' stroke-width='6'/>
    <path d='M40 180 Q110 120 190 170 T310 170' fill='none' stroke='#7c5ac2' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/>
    <path d='M120 85 q30 -40 70 0 q-20 10 -35 25 q-20 -15 -35 -25Z' fill='#ff5d8f' stroke='#ff2d55' stroke-width='6' stroke-linejoin='round'/>
    <text x='160' y='200' text-anchor='middle' font-size='26' font-family='Fredoka, Nunito, sans-serif' fill='#2d1f3b'>${title}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function renderStories() {
  const grid = document.getElementById('storyGrid');
  grid.innerHTML = '';

  stories.forEach((story) => {
    const card = document.createElement('article');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = createChildDrawing(story.title.split(' ')[0], story.color);
    img.alt = `Dessin pour ${story.title}`;

    const title = document.createElement('h3');
    title.textContent = story.title;

    const summary = document.createElement('p');
    summary.textContent = story.summary;

    const metricsRow = document.createElement('div');
    metricsRow.className = 'card__metrics';
    metricsRow.innerHTML = `
      <div class="metric"><span>👁️</span><strong data-view="${story.id}">${metrics[story.id]?.views ?? 0}</strong></div>
      <button class="metric metric--action" data-like="${story.id}" aria-label="J'aime ${story.title}"><span>❤️</span><strong data-like-count="${story.id}">${metrics[story.id]?.likes ?? 0}</strong></button>
    `;

    const actions = document.createElement('div');
    actions.className = 'card__actions';
    actions.innerHTML = `
      <button class="pill" data-read="${story.id}">Lire l'histoire</button>
      <button class="pill pill--ghost" data-ending="${story.id}">Inventer la fin</button>
    `;

    card.append(img, title, summary, metricsRow, actions);
    grid.appendChild(card);
  });
}

function updateMetricDisplays(storyId) {
  const viewEls = document.querySelectorAll(`[data-view="${storyId}"]`);
  viewEls.forEach((el) => (el.textContent = metrics[storyId].views));

  const likeEls = document.querySelectorAll(`[data-like-count="${storyId}"]`);
  likeEls.forEach((el) => (el.textContent = metrics[storyId].likes));
}

function toggleStoryLike(storyId) {
  const hasLiked = likedStories.includes(storyId);
  if (hasLiked) {
    metrics[storyId].likes = Math.max(0, metrics[storyId].likes - 1);
    likedStories = likedStories.filter((id) => id !== storyId);
  } else {
    metrics[storyId].likes += 1;
    likedStories.push(storyId);
  }
  saveState();
  updateMetricDisplays(storyId);
  if (currentStoryId === storyId) {
    document.getElementById('modalLikeCount').textContent = metrics[storyId].likes;
    document.getElementById('modalLike').classList.toggle('is-liked', !hasLiked);
  }
}

function openModal(storyId) {
  currentStoryId = storyId;
  const story = stories.find((s) => s.id === storyId);
  if (!story) return;

  metrics[storyId].views += 1;
  saveState();
  updateMetricDisplays(storyId);

  document.getElementById('modalTitle').textContent = story.title;
  document.getElementById('modalSummary').textContent = story.summary;
  document.getElementById('modalImage').src = createChildDrawing(story.title, story.color);
  document.getElementById('modalViewCount').textContent = metrics[storyId].views;
  document.getElementById('modalLikeCount').textContent = metrics[storyId].likes;
  document.getElementById('modalLike').classList.toggle('is-liked', likedStories.includes(storyId));

  document.getElementById('endingPanel').hidden = true;

  document.getElementById('storyModal').hidden = false;
}

function closeModal() {
  document.getElementById('storyModal').hidden = true;
  currentStoryId = null;
}

function renderEndingsList() {
  if (!currentStoryId) return;
  const list = document.getElementById('endingList');
  list.innerHTML = '';
  const entries = endings[currentStoryId] || [];

  if (entries.length === 0) {
    list.innerHTML = '<p>Aucune fin imaginée pour le moment. Lance-toi !</p>';
    return;
  }

  entries
    .slice()
    .sort((a, b) => b.likes - a.likes || b.created - a.created)
    .forEach((ending) => {
      const article = document.createElement('article');
      article.className = 'ending';
      const header = document.createElement('div');
      header.className = 'ending__header';
      const author = document.createElement('strong');
      author.textContent = ending.author || 'Anonyme';
      const likeBtn = document.createElement('button');
      likeBtn.className = 'ending__like';
      likeBtn.innerHTML = `❤️ <span>${ending.likes}</span>`;
      likeBtn.addEventListener('click', () => toggleEndingLike(ending.id));
      header.append(author, likeBtn);

      const text = document.createElement('p');
      text.textContent = ending.text;

      article.append(header, text);
      list.appendChild(article);
    });
}

function addEnding(author, text) {
  if (!currentStoryId) return;
  const entry = {
    id: `${currentStoryId}-${Date.now()}`,
    author: author.trim() || 'Anonyme',
    text: text.trim(),
    likes: 0,
    created: Date.now()
  };
  endings[currentStoryId] = endings[currentStoryId] || [];
  endings[currentStoryId].push(entry);
  saveState();
  renderEndingsList();
}

function toggleEndingLike(endingId) {
  let targetStory = null;
  for (const [storyId, list] of Object.entries(endings)) {
    const found = list.find((e) => e.id === endingId);
    if (found) {
      targetStory = storyId;
      const hasLiked = likedEndings.includes(endingId);
      if (hasLiked) {
        found.likes = Math.max(0, found.likes - 1);
        likedEndings = likedEndings.filter((id) => id !== endingId);
      } else {
        found.likes += 1;
        likedEndings.push(endingId);
      }
      break;
    }
  }
  if (targetStory) {
    saveState();
    renderEndingsList();
  }
}

function renderReviews() {
  const container = document.getElementById('reviewList');
  container.innerHTML = '';
  if (reviews.length === 0) {
    container.innerHTML = '<p>Pas encore d\'avis. Laisse le premier message !</p>';
    return;
  }

  reviews
    .slice()
    .sort((a, b) => b.created - a.created)
    .forEach((review) => {
      const card = document.createElement('article');
      card.className = 'review';
      const title = document.createElement('p');
      title.className = 'review__title';
      title.textContent = review.name;
      const rating = document.createElement('p');
      rating.className = 'review__rating';
      rating.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
      const message = document.createElement('p');
      message.textContent = review.message;
      card.append(title, rating, message);
      container.appendChild(card);
    });
}

function addReview(name, rating, message) {
  reviews.push({ name: name.trim(), rating, message: message.trim(), created: Date.now() });
  saveState();
  renderReviews();
}

function bindEvents() {
  document.getElementById('storyGrid').addEventListener('click', (event) => {
    const read = event.target.closest('[data-read]');
    const like = event.target.closest('[data-like]');
    const endingBtn = event.target.closest('[data-ending]');

    if (read) {
      openModal(read.dataset.read);
    }
    if (like) {
      toggleStoryLike(like.dataset.like);
    }
    if (endingBtn) {
      openModal(endingBtn.dataset.ending);
      document.getElementById('endingPanel').hidden = false;
      renderEndingsList();
    }
  });

  document.getElementById('modalLike').addEventListener('click', () => {
    if (currentStoryId) toggleStoryLike(currentStoryId);
  });

  document.querySelector('.modal__close').addEventListener('click', closeModal);
  document.getElementById('storyModal').addEventListener('click', (event) => {
    if (event.target.id === 'storyModal') closeModal();
  });

  document.getElementById('openEndings').addEventListener('click', () => {
    const panel = document.getElementById('endingPanel');
    panel.hidden = !panel.hidden;
    if (!panel.hidden) renderEndingsList();
  });

  document.getElementById('endingForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const author = document.getElementById('endingAuthor');
    const text = document.getElementById('endingText');
    if (!text.value.trim()) return;
    addEnding(author.value || 'Anonyme', text.value);
    author.value = '';
    text.value = '';
  });

  document.getElementById('reviewForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('reviewName');
    const rating = document.getElementById('reviewRating');
    const message = document.getElementById('reviewMessage');
    if (!name.value.trim()) return;
    addReview(name.value || 'Anonyme', Math.max(1, Math.min(5, Number(rating.value))), message.value);
    name.value = '';
    rating.value = 5;
    message.value = '';
  });
}

function init() {
  renderStories();
  renderReviews();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
