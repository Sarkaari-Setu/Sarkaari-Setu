document.addEventListener("DOMContentLoaded", () => {


console.log("Sarkaari-Setu+ Loaded");

const boardsBtn = document.querySelector(".tabs button:first-child");
const formatBtn = document.getElementById("Formatbtn");

const boardsSection = document.querySelector(".container");
const boardsCards = document.querySelector(".cards");
const formatsSection = document.querySelector(".ApplicationS");

const boardSearch = document.querySelector(".search input");
const formatSearch = document.querySelector(".search-boxtwo input");

const countText = document.querySelector(".count");

let currentLanguage = "hindi";

if (formatsSection) {
    formatsSection.style.display = "none";
}


function showBoards() {

    if (boardsSection) {
        boardsSection.style.display = "block";
    }

    if (formatsSection) {
        formatsSection.style.display = "none";
    }

    boardsBtn.classList.add("active");
    formatBtn.classList.remove("active");
}

function showFormats() {

    if (boardsSection) {
        boardsSection.style.display = "none";
    }

    if (formatsSection) {
        formatsSection.style.display = "block";
    }

    formatBtn.classList.add("active");
    boardsBtn.classList.remove("active");
}

if (boardsBtn) {
    boardsBtn.addEventListener("click", showBoards);
}

if (formatBtn) {
    formatBtn.addEventListener("click", showFormats);
}

if (boardSearch) {

    boardSearch.addEventListener("keyup", () => {

        const value = boardSearch.value.toLowerCase();

        const cards =
            document.querySelectorAll(".cards .card, .cards .card-new");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}

if (formatSearch) {

    formatSearch.addEventListener("keyup", () => {

        const value = formatSearch.value.toLowerCase();

        const cards =
            document.querySelectorAll(".cards-grid .card");

        let visible = 0;

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "";
                visible++;

            } else {

                card.style.display = "none";

            }

        });

        if (countText) {
            countText.textContent =
                `Showing ${visible} formats`;
        }

    });

}

showBoards();


});

const searchInput = document.getElementById('searchInput');
const cardsContainer = document.getElementById('cardsContainer');
const resultCount = document.getElementById('resultCount');

function filterCards() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const cards = cardsContainer.querySelectorAll('.card, .card-new');
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p') ? 
                            card.querySelector('p').textContent.toLowerCase() : '';

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (searchTerm === '') {
        resultCount.textContent = `${visibleCount} बोर्ड दिखा रहे हैं`;
    } else {
        resultCount.textContent = `${visibleCount} बोर्ड मिले`;
    }
}
searchInput.addEventListener('input', filterCards);

document.getElementById("splusaime").style.display="block";
}
    document.querySelector("#splusaime").style.display="block";
})

function searchCards() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card, .card-new");

    cards.forEach(card => {
        let title = "";
        let desc = "";
        let category = "";

        let heading = card.querySelector("h2, h3");
        if (heading) title = heading.textContent.toLowerCase();

        let paragraph = card.querySelector("p");
        if (paragraph) desc = paragraph.textContent.toLowerCase();

        let cat = card.querySelector(".category");
        if (cat) category = cat.textContent.toLowerCase();

        let text = title + " " + desc + " " + category;

        if (text.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
