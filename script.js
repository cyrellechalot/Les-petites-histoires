const makeSvg = ({ title, background, accent, icon }) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
      <rect width="600" height="400" rx="32" fill="${background}"/>
      <circle cx="520" cy="60" r="32" fill="${accent}" opacity="0.8"/>
      <circle cx="80" cy="70" r="24" fill="${accent}" opacity="0.5"/>
      ${icon}
      <text x="300" y="360" font-family="Fredoka, sans-serif" font-size="28" text-anchor="middle" fill="#6b4a8f">${title}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const stories = [
  {
    id: 'chaperon',
    title: 'Le Petit Chaperon Rouge',
    summary: 'Une fillette traverse la forêt pour apporter une galette à sa grand-mère, mais un loup rusé rôde.',
    body: 'Le Petit Chaperon Rouge porte son panier à travers la forêt. En chemin, elle rencontre un loup qui la devance chez sa grand-mère. Grâce au courage d un chasseur, la fillette et sa grand-mère sont sauvées et le loup ne fait plus peur.',
    image: makeSvg({
      title: 'Chaperon rouge',
      background: '#ffe9f1',
      accent: '#ff7b7b',
      icon: `
        <circle cx="210" cy="190" r="70" fill="#ffd9e8"/>
        <path d="M140 190 Q210 70 280 190" fill="#ff4d6d"/>
        <circle cx="210" cy="220" r="30" fill="#fff1f7"/>
        <rect x="330" y="230" width="90" height="60" rx="12" fill="#ffc857"/>
        <path d="M330 230 Q375 190 420 230" fill="none" stroke="#f4a261" stroke-width="10" stroke-linecap="round"/>
      `
    })
  },
  {
    id: 'cochons',
    title: 'Les Trois Petits Cochons',
    summary: 'Trois frères construisent des maisons différentes pour échapper au grand méchant loup.',
    body: 'Le premier cochon bâtit en paille, le second en bois, le troisième en briques. Le loup souffle, souffle encore, mais seule la maison en briques résiste. Ensemble, les cochons comprennent que l entraide et la patience construisent le meilleur abri.',
    image: makeSvg({
      title: 'Trois petits cochons',
      background: '#fff0f6',
      accent: '#ff9ad9',
      icon: `
        <circle cx="160" cy="200" r="45" fill="#ffb3c6"/>
        <circle cx="300" cy="200" r="45" fill="#ffb3c6"/>
        <circle cx="440" cy="200" r="45" fill="#ffb3c6"/>
        <circle cx="160" cy="210" r="14" fill="#ffd6e0"/>
        <circle cx="300" cy="210" r="14" fill="#ffd6e0"/>
        <circle cx="440" cy="210" r="14" fill="#ffd6e0"/>
        <circle cx="145" cy="185" r="8" fill="#ff85a1"/>
        <circle cx="175" cy="185" r="8" fill="#ff85a1"/>
        <circle cx="285" cy="185" r="8" fill="#ff85a1"/>
        <circle cx="315" cy="185" r="8" fill="#ff85a1"/>
        <circle cx="425" cy="185" r="8" fill="#ff85a1"/>
        <circle cx="455" cy="185" r="8" fill="#ff85a1"/>
      `
    })
  },
  {
    id: 'vilain',
    title: 'Le Vilain Petit Canard',
    summary: 'Un jeune caneton se sent différent jusqu à ce qu il découvre sa véritable nature.',
    body: 'Raillé par les autres animaux, le petit canard s éloigne et grandit seul. Lorsqu il se voit devenir un beau cygne, il comprend que la différence est une force et qu il a toujours eu une place dans ce monde éclatant.',
    image: makeSvg({
      title: 'Vilain petit canard',
      background: '#fff7e6',
      accent: '#ffd166',
      icon: `
        <ellipse cx="290" cy="230" rx="90" ry="55" fill="#ffe8a3"/>
        <circle cx="220" cy="170" r="40" fill="#fff2bf"/>
        <polygon points="260,190 320,210 260,230" fill="#ffb703"/>
        <circle cx="205" cy="160" r="6" fill="#6b4a8f"/>
        <path d="M330 255 Q360 230 390 255" stroke="#f4a261" stroke-width="10" fill="none" stroke-linecap="round"/>
      `
    })
  },
  {
    id: 'merveilleux',
    title: 'Le Chat Botté',
    summary: 'Un chat malin transforme la vie de son jeune maître grâce à ses bottes magiques.',
    body: 'Avec un sac, des bottes et beaucoup d idées, le chat piège un ogre, impressionne le roi et offre à son maître un château. L intelligence, la gentillesse et un brin de chance ouvrent toutes les portes.',
    image: makeSvg({
      title: 'Chat botté',
      background: '#e6f7ff',
      accent: '#7ad7ff',
      icon: `
        <circle cx="270" cy="170" r="60" fill="#ffd6a5"/>
        <polygon points="220,140 240,90 260,140" fill="#ffc78a"/>
        <polygon points="280,140 300,90 320,140" fill="#ffc78a"/>
        <circle cx="250" cy="170" r="8" fill="#6b4a8f"/>
        <circle cx="290" cy="170" r="8" fill="#6b4a8f"/>
        <path d="M255 190 Q270 205 285 190" stroke="#6b4a8f" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="210" y="250" width="70" height="80" rx="14" fill="#7ad7ff"/>
        <rect x="300" y="250" width="70" height="80" rx="14" fill="#7ad7ff"/>
      `
    })
  },
  {
    id: 'princesse',
    title: 'La Princesse au Petit Pois',
    summary: 'Une princesse prouve sa délicatesse grâce à un minuscule pois caché sous vingt matelas.',
    body: 'Le prince cherche une vraie princesse. Une jeune fille arrive trempée par la pluie et dort sur un lit empilé. Elle ne peut fermer l oeil à cause d un petit pois oublié. Sa sensibilité révèle sa royauté et le prince l épouse.',
    image: makeSvg({
      title: 'Princesse au petit pois',
      background: '#f5edff',
      accent: '#cdb4db',
      icon: `
        <rect x="160" y="230" width="280" height="45" rx="12" fill="#cdb4db"/>
        <rect x="160" y="190" width="280" height="35" rx="12" fill="#bde0fe"/>
        <rect x="160" y="155" width="280" height="30" rx="12" fill="#ffc8dd"/>
        <circle cx="190" cy="145" r="10" fill="#6ee7b7"/>
        <polygon points="300,110 320,150 340,110" fill="#ffd166"/>
        <circle cx="300" cy="110" r="10" fill="#ffe066"/>
      `
    })
  },
  {
    id: 'boucle',
    title: 'Boucle d Or et les Trois Ours',
    summary: 'Une petite fille découvre la maison de trois ours et apprend la politesse.',
    body: 'Boucle d Or goûte les bols, essaie les chaises et teste les lits. Les ours rentrent, surpris. Elle s excuse, comprend qu il faut demander avant d emprunter, et rentre chez elle plus sage que jamais.',
    image: makeSvg({
      title: 'Boucle d’or',
      background: '#fff1e6',
      accent: '#ffb703',
      icon: `
        <circle cx="190" cy="190" r="55" fill="#d4a373"/>
        <circle cx="300" cy="210" r="45" fill="#c58f5c"/>
        <circle cx="410" cy="230" r="35" fill="#b07d4a"/>
        <circle cx="170" cy="170" r="12" fill="#e9c46a"/>
        <circle cx="210" cy="170" r="12" fill="#e9c46a"/>
        <circle cx="285" cy="195" r="10" fill="#e9c46a"/>
        <circle cx="315" cy="195" r="10" fill="#e9c46a"/>
        <circle cx="398" cy="220" r="8" fill="#e9c46a"/>
        <circle cx="422" cy="220" r="8" fill="#e9c46a"/>
      `
    })
  },
  {
    id: 'feves',
    title: 'Jack et le Haricot Magique',
    summary: 'Un haricot géant mène Jack vers un château dans les nuages.',
    body: 'En échange d une vache, Jack reçoit des fèves. Elles poussent jusqu au ciel ! Il y découvre un géant, récupère des trésors et apprend qu un cœur brave peut gravir toutes les montagnes.',
    image: makeSvg({
      title: 'Jack et le haricot',
      background: '#e6fff1',
      accent: '#6ee7b7',
      icon: `
        <rect x="120" y="80" width="140" height="60" rx="30" fill="#e0f7ff"/>
        <circle cx="170" cy="80" r="30" fill="#d0f4ff"/>
        <path d="M360 300 Q330 240 350 190 Q370 140 350 90" stroke="#34d399" stroke-width="16" fill="none" stroke-linecap="round"/>
        <circle cx="350" cy="190" r="14" fill="#10b981"/>
        <circle cx="370" cy="140" r="12" fill="#10b981"/>
      `
    })
  },
  {
    id: 'sirene',
    title: 'La Petite Sirène',
    summary: 'Une sirène curieuse rêve de marcher sur terre et de découvrir les humains.',
    body: 'La petite sirène échange sa voix contre des jambes pour rencontrer le prince. Même sans parole, elle prouve sa bonté. Sa famille l attend toujours dans la mer scintillante, rappelant que les choix ont un prix mais aussi une beauté.',
    image: makeSvg({
      title: 'Petite sirène',
      background: '#e6f7ff',
      accent: '#7ad7ff',
      icon: `
        <circle cx="240" cy="150" r="35" fill="#ffd6a5"/>
        <path d="M240 185 Q210 230 250 280 Q300 240 280 200 Z" fill="#7ad7ff"/>
        <path d="M260 240 L330 280 L270 300 Z" fill="#63c5ff"/>
        <circle cx="230" cy="145" r="6" fill="#6b4a8f"/>
        <circle cx="250" cy="145" r="6" fill="#6b4a8f"/>
        <path d="M230 165 Q240 175 250 165" stroke="#6b4a8f" stroke-width="5" fill="none" stroke-linecap="round"/>
      `
    })
  },
  {
    id: 'aladin',
    title: 'Aladin et la Lampe Merveilleuse',
    summary: 'Une lampe magique révèle un génie capable d exaucer trois vœux.',
    body: 'Aladin trouve une lampe et libère un génie. Il apprend à utiliser ses vœux avec sagesse, protège son royaume d un sorcier jaloux et découvre que la vraie richesse vient du cœur.',
    image: makeSvg({
      title: 'Lampe magique',
      background: '#fff6e0',
      accent: '#ffb703',
      icon: `
        <path d="M150 250 Q220 170 320 190 Q420 210 450 250 Q380 270 300 270 Q220 270 150 250 Z" fill="#ffd166"/>
        <circle cx="420" cy="210" r="20" fill="#ff9f1c"/>
        <rect x="120" y="240" width="60" height="30" rx="10" fill="#ffcf66"/>
        <path d="M270 160 Q300 120 340 160" stroke="#f77f00" stroke-width="10" fill="none" stroke-linecap="round"/>
      `
    })
  },
  {
    id: 'mowgli',
    title: 'Le Livre de la Jungle',
    summary: 'Un enfant élevé par des loups découvre sa place entre la jungle et le village.',
    body: 'Mowgli, guidé par Bagheera et Baloo, affronte le tigre Shere Khan. Il apprend les lois de la jungle, l amitié et le courage. À la fin, il choisit son chemin en gardant deux familles : la jungle et les humains.',
    image: makeSvg({
      title: 'Livre de la jungle',
      background: '#e8fff4',
      accent: '#34d399',
      icon: `
        <rect x="170" y="180" width="40" height="140" fill="#a16207"/>
        <circle cx="190" cy="150" r="60" fill="#34d399"/>
        <rect x="310" y="190" width="35" height="130" fill="#8b5e34"/>
        <circle cx="330" cy="160" r="55" fill="#6ee7b7"/>
        <circle cx="430" cy="230" r="12" fill="#6b4a8f"/>
        <circle cx="470" cy="230" r="12" fill="#6b4a8f"/>
        <circle cx="450" cy="210" r="14" fill="#6b4a8f"/>
        <circle cx="430" cy="250" r="10" fill="#6b4a8f"/>
        <circle cx="470" cy="250" r="10" fill="#6b4a8f"/>
      `
    })
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
