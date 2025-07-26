let startTime;
let elapsedTime = 0;  // memory need to remeber how much time passed even you are in pause
let timerInterval;
let running = false;

const hrDisplay = document.getElementById("hour");
const minDisplay = document.getElementById("min");
const secDisplay = document.getElementById("second");
const millisecDisplay = document.getElementById("millisec");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", function () {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(function () {
            elapsedTime = Date.now() - startTime;

            let ms = Math.floor((elapsedTime % 1000) / 10);
            let s = Math.floor((elapsedTime / 1000) % 60);
            let m = Math.floor((elapsedTime / (1000 * 60)) % 60);
            let h = Math.floor((elapsedTime / (1000 * 60 * 60)));

            hrDisplay.textContent = padZero(h);
            minDisplay.textContent = padZero(m);
            secDisplay.textContent = padZero(s);
            millisecDisplay.textContent = padZero(ms);
        }, 10);
    }
});

stopBtn.addEventListener("click", function () {
    running = false;
    clearInterval(timerInterval);
});

resetBtn.addEventListener("click", function () {
    running = false;
    clearInterval(timerInterval);
    elapsedTime = 0;

    hrDisplay.textContent = "00";
    minDisplay.textContent = "00";
    secDisplay.textContent = "00";
    millisecDisplay.textContent = "00";
});

function padZero(num) {
    return num < 10 ? "0" + num : num;
}
