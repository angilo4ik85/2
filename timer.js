let timerId;
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");

start.addEventListener("click", function () {
    timerId = setInterval(timerPlay, 1000);
});

pause.addEventListener("click", function () {
    stopTimer();
});

const timer = 15;
let amountTime = timer * 60;

function timerPlay() {

    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }
}

function stopTimer() {
    clearInterval(timerId);
}
