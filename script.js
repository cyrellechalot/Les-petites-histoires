const stories = {
    chaperon: {
        title: "Le Petit Chaperon Rouge",
        text: "Version courte libre de droits : ... (je peux ajouter plus long si tu veux)"
    },
    belle: {
        title: "La Belle et la Bête",
        text: "Version courte libre de droits : ..."
    },
    galette: {
        title: "Roule Galette",
        text: "Résumé libre : ..."
    },
    elmer: {
        title: "Elmer",
        text: "Résumé libre : ..."
    }
};

let likes = 0;

// MODÉRATION automatiques mots interdits
const badWords = ["con", "merde", "put*", "salo*", "fdp"];

function cleanText(text) {
    let cleaned = text;
    badWords.forEach(bad => {
        const regex = new RegExp(bad.replace("*", ".*"), "gi");
        cleaned = cleaned.replace(regex, "★");
    });
    return cleaned;
}

function goToStory(key) {
    document.getElementById("story-title").textContent = stories[key].title;
    document.getElementById("story-text").textContent = stories[key].text;

    document.getElementById("like-section").classList.remove("hidden");
    document.getElementById("comment-section").classList.remove("hidden");
    document.getElementById("suite-section").classList.remove("hidden");
}

function addLike() {
    likes++;
    document.getElementById("like-count").textContent = likes;
}

function addComment() {
    const input = document.getElementById("comment-input").value;
    if (input.trim() === "") return;

    const safeText = cleanText(input);

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = safeText;

    document.getElementById("comments-list").appendChild(bubble);
    document.getElementById("comment-input").value = "";
}

function addSuite() {
    const input = document.getElementById("suite-input").value;
    if (input.trim() === "") return;

    const safeText = cleanText(input);

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = safeText;

    document.getElementById("suite-list").appendChild(bubble);
    document.getElementById("suite-input").value = "";
}
