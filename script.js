const animeList = [
    {
        title: "Attack on Titan",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        rating: "9.1",
        description: "Humans fight against titans in a post-apocalyptic world.",
        genre: "action",
    },
    {
        title: "One Piece",
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
        rating: "8.9",
        description: "Pirates seek the ultimate treasure in an adventurous world.",
        genre: "adventure",
    },
    {
        title: "Demon Slayer",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        rating: "8.7",
        description: "A young boy fights demons to save his sister.",
        genre: "fantasy",
    },
];

const favorites = [];

function scrollToCatalog() {
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
}

function renderAnimeCatalog(filteredAnime = animeList) {
    const animeContainer = document.getElementById("anime-list");
    animeContainer.innerHTML = ""; // Clear previous items
    filteredAnime.forEach((anime) => {
        const animeItem = document.createElement("div");
        animeItem.className = "anime-item";
        animeItem.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <p>Rating: ${anime.rating}</p>
            <p>${anime.description}</p>
            <button onclick="addToFavorites('${anime.title}')">Add to Favorites</button>
        `;
        animeContainer.appendChild(animeItem);
    });
}

function addToFavorites(title) {
    const anime = animeList.find((a) => a.title === title);
    if (!favorites.includes(anime)) {
        favorites.push(anime);
        alert(`${title} added to favorites!`);
        updateFavorites();
    }
}

function updateFavorites() {
    const favoritesContainer = document.getElementById("favorites-list");
    if (!favoritesContainer) return; // Only update on favorites page
    favoritesContainer.innerHTML = "";
    favorites.forEach((anime) => {
        const favoriteItem = document.createElement("div");
        favoriteItem.className = "anime-item";
        favoriteItem.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <p>Rating: ${anime.rating}</p>
        `;
        favoritesContainer.appendChild(favoriteItem);
    });
}

function searchAnime() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredAnime = animeList.filter((anime) =>
        anime.title.toLowerCase().includes(query)
    );
    renderAnimeCatalog(filteredAnime);
}

function filterAnime() {
    const genre = document.getElementById("filter").value;
    const filteredAnime =
        genre === "all"
            ? animeList
            : animeList.filter((anime) => anime.genre === genre);
    renderAnimeCatalog(filteredAnime);
}

document.addEventListener("DOMContentLoaded", () => renderAnimeCatalog());
