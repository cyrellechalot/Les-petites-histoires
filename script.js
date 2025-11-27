const stories = [
  {
    id: 'chaperon',
    title: 'Le Petit Chaperon Rouge',
    summary: 'Une fillette traverse la forêt pour apporter une galette à sa grand-mère, mais un loup rusé rôde.',
    body: 'Le Petit Chaperon Rouge porte son panier à travers la forêt. En chemin, elle rencontre un loup qui la devance chez sa grand-mère. Grâce au courage d un chasseur, la fillette et sa grand-mère sont sauvées et le loup ne fait plus peur.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'cochons',
    title: 'Les Trois Petits Cochons',
    summary: 'Trois frères construisent des maisons différentes pour échapper au grand méchant loup.',
    body: 'Le premier cochon bâtit en paille, le second en bois, le troisième en briques. Le loup souffle, souffle encore, mais seule la maison en briques résiste. Ensemble, les cochons comprennent que l entraide et la patience construisent le meilleur abri.',
    image: 'https://images.unsplash.com/photo-1478071735433-5d8f19ad0fca?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'vilain',
    title: 'Le Vilain Petit Canard',
    summary: 'Un jeune caneton se sent différent jusqu à ce qu il découvre sa véritable nature.',
    body: 'Raillé par les autres animaux, le petit canard s éloigne et grandit seul. Lorsqu il se voit devenir un beau cygne, il comprend que la différence est une force et qu il a toujours eu une place dans ce monde éclatant.',
    image: 'https://images.unsplash.com/photo-1528838062871-5c1f10519034?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'merveilleux',
    title: 'Le Chat Botté',
    summary: 'Un chat malin transforme la vie de son jeune maître grâce à ses bottes magiques.',
    body: 'Avec un sac, des bottes et beaucoup d idées, le chat piège un ogre, impressionne le roi et offre à son maître un château. L intelligence, la gentillesse et un brin de chance ouvrent toutes les portes.',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'princesse',
    title: 'La Princesse au Petit Pois',
    summary: 'Une princesse prouve sa délicatesse grâce à un minuscule pois caché sous vingt matelas.',
    body: 'Le prince cherche une vraie princesse. Une jeune fille arrive trempée par la pluie et dort sur un lit empilé. Elle ne peut fermer l oeil à cause d un petit pois oublié. Sa sensibilité révèle sa royauté et le prince l épouse.',
    image: 'https://images.unsplash.com/photo-1529429617124-aee4c8c2c1a4?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'boucle',
    title: 'Boucle d Or et les Trois Ours',
    summary: 'Une petite fille découvre la maison de trois ours et apprend la politesse.',
    body: 'Boucle d Or goûte les bols, essaie les chaises et teste les lits. Les ours rentrent, surpris. Elle s excuse, comprend qu il faut demander avant d emprunter, et rentre chez elle plus sage que jamais.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'feves',
    title: 'Jack et le Haricot Magique',
    summary: 'Un haricot géant mène Jack vers un château dans les nuages.',
    body: 'En échange d une vache, Jack reçoit des fèves. Elles poussent jusqu au ciel ! Il y découvre un géant, récupère des trésors et apprend qu un cœur brave peut gravir toutes les montagnes.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'sirene',
    title: 'La Petite Sirène',
    summary: 'Une sirène curieuse rêve de marcher sur terre et de découvrir les humains.',
    body: 'La petite sirène échange sa voix contre des jambes pour rencontrer le prince. Même sans parole, elle prouve sa bonté. Sa famille l attend toujours dans la mer scintillante, rappelant que les choix ont un prix mais aussi une beauté.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'aladin',
    title: 'Aladin et la Lampe Merveilleuse',
    summary: 'Une lampe magique révèle un génie capable d exaucer trois vœux.',
    body: 'Aladin trouve une lampe et libère un génie. Il apprend à utiliser ses vœux avec sagesse, protège son royaume d un sorcier jaloux et découvre que la vraie richesse vient du cœur.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'mowgli',
    title: 'Le Livre de la Jungle',
    summary: 'Un enfant élevé par des loups découvre sa place entre la jungle et le village.',
    body: 'Mowgli, guidé par Bagheera et Baloo, affronte le tigre Shere Khan. Il apprend les lois de la jungle, l amitié et le courage. À la fin, il choisit son chemin en gardant deux familles : la jungle et les humains.',
    image: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=600&q=60'
  }
];

const defaults = {
  storyStats: stories.reduce((acc, story) => {
    acc[story.id] = { likes: 0, views: 0 };
    return acc;
  }, {}),
  endings: {},
  reviews: []
};

const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

let storyStats = storage.get('storyStats', defaults.storyStats);
let endings = storage.get('endings', defaults.endings);
let reviews = storage.get('reviews', defaults.reviews);
let likedStories = storage.get('likedStories', []);
let likedEndings = storage.get('likedEndings', []);

const storyList = document.getElementById('storyList');
const endingList = document.getElementById('endingList');
const endingForm = document.getElementById('endingForm');
const endingStorySelect = document.getElementById('endingStory');
const endingAuthor = document.getElementById('endingAuthor');
const endingText = document.getElementById('endingText');
const reviewForm = document.getElementById('reviewForm');
const reviewName = document.getElementById('reviewName');
const reviewStars = document.getElementById('reviewStars');
const reviewMessage = document.getElementById('reviewMessage');
const reviewList = document.getElementById('reviewList');
const reviewSummary = document.getElementById('reviewSummary');
const storyModal = document.getElementById('storyModal');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalImage = document.getElementById('modalImage');
const modalBody = document.getElementById('modalBody');
const modalLikeCount = document.getElementById('modalLikeCount');
const modalViewCount = document.getElementById('modalViewCount');
const modalLikeBtn = document.getElementById('modalLike');
const modalClose = document.querySelector('.modal__close');

function saveAll() {
  storage.set('storyStats', storyStats);
  storage.set('endings', endings);
  storage.set('reviews', reviews);
  storage.set('likedStories', likedStories);
  storage.set('likedEndings', likedEndings);
}

function renderStars(value) {
  const full = '★'.repeat(value);
  const empty = '☆'.repeat(5 - value);
  return `${full}${empty}`;
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('[data-target]').forEach(btn => {
  btn.addEventListener('click', () => scrollToSection(btn.dataset.target));
});

function renderStories() {
  storyList.innerHTML = '';
  stories.forEach(story => {
    const stats = storyStats[story.id] || { likes: 0, views: 0 };
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img class="card__image" src="${story.image}" alt="${story.title}">
      <h3>${story.title}</h3>
      <p>${story.summary}</p>
      <div class="card__metrics">
        <div class="chip"><span>👁️</span><strong>${stats.views}</strong></div>
        <button class="chip chip--action" data-like="${story.id}"><span>❤️</span><strong>${stats.likes}</strong></button>
      </div>
      <div class="card__actions">
        <button class="btn" data-read="${story.id}">Lire l'histoire</button>
      </div>
    `;
    storyList.appendChild(card);
  });
}

function openStory(id) {
  const story = stories.find(s => s.id === id);
  if (!story) return;
  storyStats[id] = storyStats[id] || { likes: 0, views: 0 };
  storyStats[id].views += 1;
  modalTitle.textContent = story.title;
  modalSummary.textContent = story.summary;
  modalImage.src = story.image;
  modalBody.textContent = story.body;
  modalLikeCount.textContent = storyStats[id].likes;
  modalViewCount.textContent = storyStats[id].views;
  modalLikeBtn.dataset.story = id;
  storyModal.hidden = false;
  saveAll();
  renderStories();
}

function toggleStoryLike(id) {
  const hasLiked = likedStories.includes(id);
  storyStats[id] = storyStats[id] || { likes: 0, views: 0 };
  if (hasLiked) {
    storyStats[id].likes = Math.max(0, storyStats[id].likes - 1);
    likedStories = likedStories.filter(s => s !== id);
  } else {
    storyStats[id].likes += 1;
    likedStories.push(id);
  }
  modalLikeCount.textContent = storyStats[id].likes;
  saveAll();
  renderStories();
}

function renderEndings() {
  endingList.innerHTML = '';
  const selectedId = endingStorySelect.value || stories[0].id;
  const items = (endings[selectedId] || []).slice().sort((a, b) => b.likes - a.likes);
  if (!items.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'Aucune fin pour le moment, lance-toi !';
    endingList.appendChild(empty);
    return;
  }

  items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'ending-card';
    const liked = likedEndings.includes(item.id);
    card.innerHTML = `
      <header>
        <strong>${item.author}</strong>
        <button class="like-ending" data-ending="${item.id}">${liked ? '💖' : '🤍'} ${item.likes}</button>
      </header>
      <p class="muted">Pour ${stories.find(s => s.id === item.storyId)?.title || 'une histoire'}</p>
      <p>${item.text}</p>
    `;
    endingList.appendChild(card);
  });
}

function renderEndingSelect() {
  endingStorySelect.innerHTML = stories.map(story => `<option value="${story.id}">${story.title}</option>`).join('');
}

function addEnding(event) {
  event.preventDefault();
  const storyId = endingStorySelect.value;
  const author = endingAuthor.value.trim();
  const text = endingText.value.trim();
  if (!storyId || !author || !text) return;

  const entry = { id: crypto.randomUUID(), storyId, author, text, likes: 0 };
  endings[storyId] = endings[storyId] || [];
  endings[storyId].push(entry);
  endingText.value = '';
  saveAll();
  renderEndings();
}

function toggleEndingLike(endingId) {
  const all = Object.values(endings).flat();
  const target = all.find(e => e.id === endingId);
  if (!target) return;
  const liked = likedEndings.includes(endingId);
  if (liked) {
    target.likes = Math.max(0, target.likes - 1);
    likedEndings = likedEndings.filter(id => id !== endingId);
  } else {
    target.likes += 1;
    likedEndings.push(endingId);
  }
  saveAll();
  renderEndings();
}

function renderReviews() {
  reviewList.innerHTML = '';
  if (!reviews.length) {
    reviewSummary.textContent = 'Aucun avis pour le moment.';
    return;
  }

  const avg = (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1);
  reviewSummary.textContent = `${reviews.length} avis, moyenne ${avg}★`;

  reviews.slice(-6).reverse().forEach(r => {
    const card = document.createElement('article');
    card.className = 'review-card';
    card.innerHTML = `
      <header>
        <strong>${r.name}</strong>
        <span>${renderStars(r.stars)}</span>
      </header>
      <p class="muted">${r.message || 'Un avis tout en étoiles !'}</p>
    `;
    reviewList.appendChild(card);
  });
}

function addReview(event) {
  event.preventDefault();
  const name = reviewName.value.trim();
  const stars = Number(reviewStars.value);
  const message = reviewMessage.value.trim();
  if (!name || !stars) return;
  reviews.push({ id: crypto.randomUUID(), name, stars, message });
  reviewName.value = '';
  reviewMessage.value = '';
  reviewStars.value = 5;
  updateStarVisual(reviewStars);
  saveAll();
  renderReviews();
}

function updateStarVisual(range) {
  const visual = range.parentElement.querySelector('.stars__visual');
  visual.textContent = renderStars(Number(range.value));
}

document.addEventListener('click', event => {
  const likeBtn = event.target.closest('[data-like]');
  const readBtn = event.target.closest('[data-read]');
  const endingLike = event.target.closest('[data-ending]');
  if (likeBtn) toggleStoryLike(likeBtn.dataset.like);
  if (readBtn) openStory(readBtn.dataset.read);
  if (endingLike) toggleEndingLike(endingLike.dataset.ending);
});

modalClose.addEventListener('click', () => (storyModal.hidden = true));
storyModal.addEventListener('click', e => { if (e.target === storyModal) storyModal.hidden = true; });
modalLikeBtn.addEventListener('click', () => toggleStoryLike(modalLikeBtn.dataset.story));

endingForm.addEventListener('submit', addEnding);
endingStorySelect.addEventListener('change', renderEndings);
reviewForm.addEventListener('submit', addReview);
reviewStars.addEventListener('input', () => updateStarVisual(reviewStars));

renderEndingSelect();
renderStories();
renderEndings();
renderReviews();
updateStarVisual(reviewStars);
