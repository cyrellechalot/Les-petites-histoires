/* ========= CONFIG ==========
  Pour activer Firebase, remplace l'objet firebaseConfig ci-dessous
  par ta vraie config (les clés) provenant de la console Firebase.
  Si tu laisses les champs vides, le site utilisera localStorage en
  fallback (donc rien de partagé entre visiteurs).
*/
const firebaseConfig = {
  apiKey: "",           // <-- remplace ici
  authDomain: "",
  databaseURL: "",      // important pour Realtime Database
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

/* ====== Données des histoires (remplace par le texte complet si tu veux) ====== */
const STORIES = {
  chaperon: {
    id: "chaperon",
    title: "Le Petit Chaperon Rouge",
    // texte court d'exemple — tu peux remplacer par le texte complet
    text: "C'était une fois une petite fille que tout le monde aimait...",
    img: "/mnt/data/A_colorful,_child-friendly_web_page_design_titled_.png"
  },
  belle: {
    id: "belle",
    title: "La Belle et la Bête",
    text: "Il était une fois une jeune fille pleine de bonté...",
    img: "/mnt/data/A_colorful,_child-friendly_web_page_design_titled_.png"
  },
  galette: {
    id: "galette",
    title: "Roule Galette",
    text: "Une galette qui roule, qui roule...",
    img: "/mnt/data/A_colorful,_child-friendly_web_page_design_titled_.png"
  },
  elmer: {
    id: "elmer",
    title: "Elmer",
    text: "Elmer était un éléphant aux couleurs vives...",
    img: "/mnt/data/A_colorful,_child-friendly_web_page_design_titled_.png"
  }
};

/* ====== Modération simple ====== */
const BAD_WORDS = ["con", "merde", "putain", "salope", "fdp", "encul"]; // /!\ simple list
function moderate(text){
  if(!text) return "";
  let out = text;
  BAD_WORDS.forEach(b=>{
    const r = new RegExp(b.replace(/\*/g,".*"),"gi");
    out = out.replace(r, "★");
  });
  if(out.length>400) out = out.slice(0,400) + "…";
  return out;
}

/* ====== Storage (Firebase Realtime DB if configured, else localStorage) ====== */
let useFirebase=false;
let database = null;
function initFirebaseIfConfigured(){
  const ok = firebaseConfig && firebaseConfig.apiKey;
  if(!ok) return console.log("Firebase config absent — fallback localStorage");
  try{
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    useFirebase = true;
    console.log("Firebase initialisé (Realtime DB) — données partagées en ligne");
  } catch(e){
    console.warn("Impossible d'initialiser Firebase, fallback localStorage", e);
    useFirebase=false;
  }
}
initFirebaseIfConfigured();

/* helpers pour clés locales */
function localKey(k){ return `histoires_app__${k}`; }

/* ====== CRUD ====== */
async function getData(kind, storyId){
  if(useFirebase){
    const snapshot = await database.ref(`${storyId}/${kind}`).once('value');
    return snapshot.val() || null;
  } else {
    const raw = localStorage.getItem(localKey(`${storyId}__${kind}`));
    return raw ? JSON.parse(raw) : null;
  }
}
async function setData(kind, storyId, value){
  if(useFirebase){
    await database.ref(`${storyId}/${kind}`).set(value);
  } else {
    localStorage.setItem(localKey(`${storyId}__${kind}`), JSON.stringify(value));
  }
}

/* ====== UI & routing ====== */
const homeEl = document.getElementById('home');
const storyView = document.getElementById('story-view');
const titleEl = document.getElementById('story-title');
const textEl = document.getElementById('story-text');
const imgEl = document.getElementById('story-image');

const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

const commentInput = document.getElementById('comment-input');
const commentSend = document.getElementById('comment-send');
const commentsList = document.getElementById('comments-list');

const suiteInput = document.getElementById('suite-input');
const suiteSend = document.getElementById('suite-send');
const suitesList = document.getElementById('suites-list');

let currentStory = null;

function showHome(){ homeEl.classList.remove('hidden'); storyView.classList.add('hidden'); }
async function showStory(id){
  const s = STORIES[id];
  if(!s) return showHome();
  currentStory = s;
  homeEl.classList.add('hidden');
  storyView.classList.remove('hidden');

  titleEl.textContent = s.title;
  textEl.textContent = s.text;
  imgEl.src = s.img;
  imgEl.alt = s.title;

  // charger likes / commentaires / suites
  const likes = (await getData('likes', id)) || 0;
  likeCount.textContent = likes;

  const comments = (await getData('comments', id)) || [];
  renderComments(comments);

  const suites = (await getData('suites', id)) || [];
  renderSuites(suites);
}

/* ====== render helpers ====== */
function renderComments(comments){
  commentsList.innerHTML = "";
  (comments||[]).slice().reverse().forEach(c=>{
    const d = document.createElement('div'); d.className='bubble';
    d.textContent = c;
    commentsList.appendChild(d);
  });
}
function renderSuites(suites){
  suitesList.innerHTML = "";
  (suites||[]).slice().reverse().forEach(s=>{
    const d = document.createElement('div'); d.className='bubble';
    d.textContent = s;
    suitesList.appendChild(d);
  });
}

/* ====== actions ====== */
likeBtn.addEventListener('click', async ()=>{
  if(!currentStory) return;
  const id = currentStory.id;
  let count = (await getData('likes', id)) || 0;
  count = Number(count) + 1;
  await setData('likes', id, count);
  likeCount.textContent = count;
  // petit effet
  likeBtn.animate([{transform:'scale(1)'},{transform:'scale(1.12)'},{transform:'scale(1)'}],{duration:220});
});

commentSend.addEventListener('click', async ()=>{
  if(!currentStory) return;
  const raw = commentInput.value.trim();
  if(!raw) return;
  const safe = moderate(raw);
  const id = currentStory.id;
  let comments = (await getData('comments', id)) || [];
  comments.push(safe);
  await setData('comments', id, comments);
  commentInput.value = '';
  renderComments(comments);
});

suiteSend.addEventListener('click', async ()=>{
  if(!currentStory) return;
  const raw = suiteInput.value.trim();
  if(!raw) return;
  const safe = moderate(raw);
  const id = currentStory.id;
  let suites = (await getData('suites', id)) || [];
  suites.push(safe);
  await setData('suites', id, suites);
  suiteInput.value = '';
  renderSuites(suites);
});

/* ====== router (hash) ====== */
function router(){
  const hash = location.hash.replace(/^#/,'') || '';
  if(!hash) return showHome();
  showStory(hash);
}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
