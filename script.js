// Likes et vues pour les histoires
function updateLikeView(histoireId) {
    let likes = localStorage.getItem(histoireId + "_likes") || 0;
    let vues = localStorage.getItem(histoireId + "_vues") || 0;

    vues++; // on incrémente les vues dès qu'on ouvre l'histoire

    localStorage.setItem(histoireId + "_likes", likes);
    localStorage.setItem(histoireId + "_vues", vues);

    return { likes, vues };
}

// Fonction pour charger une histoire via URL param
function loadHistoire() {
    const params = new URLSearchParams(window.location.search);
    const histoire = params.get('histoire');

    const titreMap = {
        chaperon: "Le Petit Chaperon Rouge",
        cochons: "Les Trois Petits Cochons",
        roule: "Roule Galette",
        canard: "Le Vilain Petit Canard"
    };

    const couleurMap = {
        chaperon: "#FFB6C1",
        cochons: "#FFD700",
        roule: "#90EE90",
        canard: "#87CEFA"
    };

    const imageMap = {
        chaperon: "https://via.placeholder.com/600x300?text=Chaperon+Rouge",
        cochons: "https://via.placeholder.com/600x300?text=Trois+Cochons",
        roule: "https://via.placeholder.com/600x300?text=Roule+Galette",
        canard: "https://via.placeholder.com/600x300?text=Vilain+Petit+Canard"
    };

    const texteMap = {
        chaperon: "Il était une fois une petite fille appelée le Petit Chaperon Rouge. Sa mère lui demanda d'apporter un panier de nourriture à sa grand-mère malade. En chemin, elle rencontra le loup qui prit un raccourci et trompa la grand-mère. Heureusement, un chasseur arriva à temps pour sauver tout le monde.",
        cochons: "Trois petits cochons construisaient chacun leur maison : l'un en paille, l'autre en bois, et le dernier en briques. Le grand méchant loup souffla et détruisit les deux premières maisons, mais la maison en briques résista et les cochons furent sauvés.",
        roule: "La galette était prête et voulait se promener. Elle rencontra différents animaux sur son chemin. Chaque animal voulait la manger, mais la galette roulait vite et échappait à tous. Finalement, elle fut avalée par un renard rusé, mais cela se termina bien grâce à la ruse des personnages.",
        canard: "Un petit canard naquit différent des autres et fut rejeté par tous. Il grandit et devint un magnifique cygne. Tout le monde fut surpris de voir combien il était beau et unique."
    };

    document.body.style.backgroundColor = couleurMap[histoire] || "#FFF8DC";

    const container = document.createElement('div');
    container.className = 'histoire-container';

    container.innerHTML = `
        <h2>${titreMap[histoire] || "Histoire"}</h2>
        <img src="${imageMap[histoire]}" alt="${titreMap[histoire]}">
        <p>${texteMap[histoire]}</p>
        <button class="like-btn">❤️ J'aime (<span id="like-count">0</span>)</button>
        <p>👁 Vues: <span id="view-count">0</span></p>

        <div class="forum-section">
            <h3>Inventer une suite :</h3>
            <textarea id="new-post" rows="3" cols="50" placeholder="Écris ta suite ici..."></textarea>
            <button id="submit-post">Publier</button>
            <div id="posts-container"></div>
        </div>
    `;

    document.body.appendChild(container);

    // Likes et vues
    let counts = updateLikeView(histoire);
    document.getElementById('like-count').innerText = localStorage.getItem(histoire + "_likes");
    document.getElementById('view-count').innerText = localStorage.getItem(histoire + "_vues");

    document.querySelector('.like-btn').addEventListener('click', () => {
        let likes = parseInt(localStorage.getItem(histoire + "_likes") || 0);
        likes++;
        localStorage.setItem(histoire + "_likes", likes);
        document.getElementById('like-count').innerText = likes;
    });

    // Forum
    const postsContainer = document.getElementById('posts-container');

    function renderPosts() {
        postsContainer.innerHTML = '';
        let posts = JSON.parse(localStorage.getItem(histoire + "_posts") || "[]");
        posts.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.className = 'forum-post';
            postDiv.innerHTML = `
                <p>${post.text}</p>
                <button onclick="likePost(${index}, '${histoire}')">❤️ ${post.likes}</button>
                👁 ${post.views}
            `;
            postsContainer.appendChild(postDiv);
        });
    }

    window.likePost = function(index, histoire) {
        let posts = JSON.parse(localStorage.getItem(histoire + "_posts") || "[]");
        posts[index].likes++;
        localStorage.setItem(histoire + "_posts", JSON.stringify(posts));
        renderPosts();
    };

    document.getElementById('submit-post').addEventListener('click', () => {
        const text = document.getElementById('new-post').value.trim();
        if(text === '') return;

        let posts = JSON.parse(localStorage.getItem(histoire + "_posts") || "[]");
        posts.push({ text, likes: 0, views: 0 });
        localStorage.setItem(histoire + "_posts", JSON.stringify(posts));
        document.getElementById('new-post').value = '';
        renderPosts();
    });

    renderPosts();
}

if(window.location.href.includes('histoire.html')){
    loadHistoire();
}
