const animeList = [
    {
        title: "Attack on Titan",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        rating: "9.1",
        description: "Humans fight against titans in a post-apocalyptic world."
    },
    {
        title: "One Piece",
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
        rating: "8.9",
        description: "Pirates seek the ultimate treasure in an adventurous world."
    },
    {
        title: "Demon Slayer",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        rating: "8.7",
        description: "A young boy fights demons to save his sister."
    },
    {
        title: "My Hero Academia",
        image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
        rating: "8.5",
        description: "Students train to become superheroes in a world of quirks."
    },
];

function scrollToCatalog() {
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function renderAnimeCatalog() {
    const animeContainer = document.getElementById('anime-list');
    animeList.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.className = 'anime-item';
        animeItem.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <p>Rating: ${anime.rating}</p>
            <p>${anime.description}</p>
        `;
        animeContainer.appendChild(animeItem);
    });
}

document.addEventListener('DOMContentLoaded', renderAnimeCatalog);
