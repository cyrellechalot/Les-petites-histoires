const stories = [
  {
    title: 'Le Petit Chaperon Rouge',
    summary: 'Une fillette courageuse traverse la forêt pour rejoindre sa grand-mère.',
    full: "Le Petit Chaperon Rouge reçoit une galette et un petit pot de beurre pour sa grand-mère malade. En chemin, elle rencontre un loup rusé qui la devance et prend la place de la grand-mère. Heureusement, un bûcheron veille et libère les deux héroïnes, tandis que le loup s'enfuit piteusement dans la forêt.",
    img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80',
    views: 34,
    likes: 18
  },
  {
    title: 'Les Trois Petits Cochons',
    summary: 'Trois frères bâtissent des maisons pour se protéger du grand méchant loup.',
    full: "Chaque cochon construit sa maison: l'un en paille, l'autre en bois, le dernier en briques solides. Le loup souffle sur les deux premières mais échoue face à la maison de briques. Les trois cochons dansent de joie et comprennent l'importance de la patience et du travail bien fait.",
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
    views: 28,
    likes: 14
  },
  {
    title: 'Le Vilain Petit Canard',
    summary: 'Un caneton rejeté découvre qu’il est en fait un cygne magnifique.',
    full: "Moqué par les autres animaux pour sa différence, le petit canard s'enfuit et traverse les saisons. Un jour de printemps, il aperçoit son reflet: des plumes blanches et un long cou élégant. Il rejoint les cygnes et comprend que la patience révèle la vraie beauté.",
    img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=80',
    views: 19,
    likes: 11
  },
  {
    title: 'Boucle d’or et les Trois Ours',
    summary: 'Boucle d’or visite la maison des ours et découvre trois tailles pour tout.',
    full: "Perdue dans la forêt, Boucle d'or goûte la soupe des trois ours, s'assoit sur leurs chaises puis s'endort dans le lit du petit ours. À leur retour, les ours l'aperçoivent; effrayée, elle s'enfuit, promettant de toujours demander la permission avant d'entrer.",
    img: 'https://images.unsplash.com/photo-1522196822199-54e9fcb31083?auto=format&fit=crop&w=900&q=80',
    views: 22,
    likes: 12
  },
  {
    title: 'La Petite Sirène',
    summary: 'Une sirène rêve de découvrir le monde des humains et d’y danser.',
    full: "Fascinée par les navires, la petite sirène sauve un prince d'une tempête et tombe amoureuse. Elle échange sa voix contre des jambes auprès de la sorcière de la mer. Le prince, touché par sa bonté, l'invite à vivre au château; elle comprend que son courage l'a guidée vers un nouvel horizon.",
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    views: 17,
    likes: 9
  },
  {
    title: 'Jack et le Haricot Magique',
    summary: 'Jack grimpe à un haricot géant et découvre un château dans les nuages.',
    full: "Jack échange une vache contre des haricots mystérieux. Un matin, une tige gigantesque pousse jusqu'aux nuages. Dans un château, il aperçoit un ogre et un trésor. Avec courage, Jack récupère une harpe chantante, descend en vitesse et coupe la tige, sauvant sa maman de la pauvreté.",
    img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    views: 15,
    likes: 8
  },
  {
    title: 'Hansel et Gretel',
    summary: 'Deux enfants perdus trouvent une maison en pain d’épice gardée par une sorcière.',
    full: "Abandonnés dans la forêt, Hansel et Gretel suivent un chemin de cailloux puis découvrent une maison en sucre. La sorcière veut les croquer, mais Gretel la pousse dans le four. Les enfants rentrent chez eux avec des pierres précieuses et sont accueillis en héros.",
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    views: 21,
    likes: 10
  },
  {
    title: 'Raiponce',
    summary: 'Une jeune fille à la longue chevelure rêve de liberté depuis sa tour.',
    full: "Isolée dans une haute tour, Raiponce chante pour passer le temps. Un prince entend sa voix, grimpe grâce à ses cheveux et partage avec elle les étoiles. Ensemble, ils déjouent la garde de la sorcière et découvrent le monde, main dans la main.",
    img: 'https://images.unsplash.com/photo-1529429617124-aee6f2a2c1d5?auto=format&fit=crop&w=900&q=80',
    views: 14,
    likes: 7
  },
  {
    title: 'Le Chat Botté',
    summary: 'Un chat malin transforme son maître pauvre en marquis respecté.',
    full: "Héritier d'un chat, le jeune meunier pense être pauvre. Mais le chat, muni de bottes et d'un sac, piége les lapins et impressionne le roi. Grâce à sa ruse, il obtient un château et fait de son maître un marquis heureux et généreux.",
    img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80',
    views: 18,
    likes: 9
  },
  {
    title: 'Aladdin et la Lampe Merveilleuse',
    summary: 'Une lampe magique exauce les vœux d’Aladdin et l’emmène au palais.',
    full: "En frottant une vieille lampe, Aladdin libère un génie puissant. Il demande la liberté pour sa maman, un palais étincelant et la main de la princesse. Malheureusement, un sorcier vole la lampe. Avec courage, Aladdin la récupère et offre enfin sa liberté au génie reconnaissant.",
    img: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=900&q=80',
    views: 24,
    likes: 13
  }
];

const endings = [];
const reviews = [];
const likedStories = new Set();

const storiesGrid = document.getElementById('stories-grid');
const detailSection = document.getElementById('detail');
const detailTitle = document.getElementById('detail-title');
const detailStory = document.getElementById('detail-story');
const detailImage = document.getElementById('detail-image');
const detailViews = document.getElementById('detail-views');
const detailLike = document.getElementById('detail-like');
const detailLikeCount = document.getElementById('detail-like-count');
const storySelect = document.getElementById('story-select');
const endingsList = document.getElementById('endings-list');
const reviewsContainer = document.getElementById('reviews');

function renderStories() {
  storiesGrid.innerHTML = '';
  stories.forEach((story, index) => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <img class="story__img" src="${story.img}" alt="Illustration ${story.title}" />
      <h3 class="story__title">${story.title}</h3>
      <p class="story__summary">${story.summary}</p>
      <div class="story__actions">
        <button class="pill" data-index="${index}">Lire l'histoire</button>
        <button class="icon-button" data-like="${index}" aria-label="Liker ${story.title}">
          <span class="icon">❤</span>
          <span>${story.likes}</span>
        </button>
        <div class="stat">
          <span class="icon">👁</span>
          <span>${story.views}</span>
        </div>
      </div>
    `;

    card.querySelector('[data-index]').addEventListener('click', () => openStory(index));
    card.querySelector('[data-like]').addEventListener('click', () => likeStory(index));
    storiesGrid.appendChild(card);
  });
}

function openStory(index) {
  const story = stories[index];
  story.views += 1;
  renderStories();

  detailTitle.textContent = story.title;
  detailStory.textContent = story.full;
  detailImage.src = story.img;
  detailViews.textContent = story.views;
  detailLikeCount.textContent = story.likes;
  detailSection.classList.remove('hidden');
  detailLike.onclick = () => likeStory(index, true);
  detailSection.scrollIntoView({ behavior: 'smooth' });
}

function likeStory(index, fromDetail = false) {
  const key = `${index}-${fromDetail ? 'detail' : 'card'}`;
  if (likedStories.has(key)) return;
  likedStories.add(key);
  stories[index].likes += 1;
  detailLikeCount.textContent = stories[index].likes;
  renderStories();
}

function renderSelectOptions() {
  stories.forEach((story, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = story.title;
    storySelect.appendChild(option);
  });
}

function renderEndings() {
  endingsList.innerHTML = '';
  if (!endings.length) {
    endingsList.innerHTML = '<p class="card">Aucune fin partagée pour le moment. Lance-toi !</p>';
    return;
  }

  endings.forEach((idea, index) => {
    const card = document.createElement('article');
    card.className = 'idea';
    card.innerHTML = `
      <div class="idea__meta">${idea.author} · ${idea.storyTitle}</div>
      <p>${idea.text}</p>
      <div class="story__actions">
        <button class="icon-button" data-ending="${index}" aria-label="Liker cette idée">
          <span class="icon">❤</span>
          <span>${idea.likes}</span>
        </button>
      </div>
    `;
    card.querySelector('[data-ending]').addEventListener('click', () => likeEnding(index));
    endingsList.appendChild(card);
  });
}

function renderReviews() {
  reviewsContainer.innerHTML = '';
  if (!reviews.length) {
    reviewsContainer.innerHTML = '<p class="card">Pas encore d\'avis. Partage le tien !</p>';
    return;
  }

  reviews.forEach((review) => {
    const card = document.createElement('article');
    card.className = 'review';
    card.innerHTML = `
      <div class="review__meta">${review.name} · ${'⭐'.repeat(review.rating)}</div>
      <p>${review.text}</p>
    `;
    reviewsContainer.appendChild(card);
  });
}

function likeEnding(index) {
  endings[index].likes += 1;
  renderEndings();
}

function handleEndingSubmit(event) {
  event.preventDefault();
  const storyIndex = Number(storySelect.value);
  const author = document.getElementById('author').value.trim();
  const text = document.getElementById('ending').value.trim();
  if (!author || !text) return;

  endings.unshift({ storyTitle: stories[storyIndex].title, author, text, likes: 0 });
  event.target.reset();
  renderEndings();
}

function handleReviewSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('reviewer').value.trim();
  const rating = Number(document.getElementById('rating').value);
  const text = document.getElementById('review').value.trim();
  if (!name || !text) return;

  reviews.unshift({ name, rating, text });
  event.target.reset();
  renderReviews();
}

renderStories();
renderSelectOptions();
renderEndings();
renderReviews();

document.getElementById('ending-form').addEventListener('submit', handleEndingSubmit);
document.getElementById('review-form').addEventListener('submit', handleReviewSubmit);
