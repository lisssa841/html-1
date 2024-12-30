const headerTitle = document.querySelector(".header__title");

headerTitle.classList

const greetings = [
    "Привіт",
    "Вітаю",
    "Доброго дня",
    "Слава Україні!",
    "Героям Слава!",
    "Доброго ранку",
    "Доброго вечора"
];

function updateGreet() {
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
headerTitle.innerText = randomGreeting;
}
setInterval(updateGreet, 1);