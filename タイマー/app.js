const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');

let startTime;
let pausedTime = 0;
let isPaused = true;
let isStarted = false;

function startTimer() {
  if (!isStarted) {
    startTime = Date.now();
    isStarted = true;
  } else {
    startTime = Date.now() - pausedTime;
  }
  isPaused = false;
  updateTimer();
}

function pauseTimer() {
  pausedTime = Date.now() - startTime;
  isPaused = true;
}

function updateTimer() {
  if (isPaused) return;

  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;
  const formattedTime = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds, 3)}`;
  timerDisplay.textContent = formattedTime;
  requestAnimationFrame(updateTimer);
}

function padNumber(number, length = 2) {
  return String(number).padStart(length, '0');
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
