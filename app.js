const startButton = document.querySelector(".start-btn");
const resetButton = document.querySelector(".reset-btn");
const countdown = document.querySelector("#countdown");

let min = 25;
let time = min * 60;
let counter;

startButton.addEventListener("click", () => {
  counter = setInterval(function updateCountDown() {
    let min = Math.floor(time / 60);
    let seconds = time % 60;
    time--;

    countdown.innerHTML = `${min}:${seconds}`;
  }, 1000);
});

resetButton.addEventListener("click", () => {
  clearInterval(counter);
  min = 25;
  time = min * 60;
  countdown.innerHTML = "25:00";
});
