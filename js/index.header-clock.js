const clockContainr = document.querySelector(".header__clock");
function updateClock() {
    clockContainr.innerText = new Date().toLocaleTimeString("uk-UA");

}
setInterval(updateClock, 1000);