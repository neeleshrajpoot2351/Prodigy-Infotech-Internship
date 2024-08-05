// scripts.js

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapsList = document.getElementById('laps');

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Pause';
        running = true;
    } else {
        clearInterval(tInterval);
        startStopButton.textContent = 'Start';
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopButton.textContent = 'Start';
    difference = 0;
    display.textContent = '00:00:00';
    lapsList.innerHTML = '';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const time = new Date(difference);
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();
    const milliseconds = time.getUTCMilliseconds();

    display.textContent = 
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds) + ':' +
        (milliseconds < 100 ? '0' + Math.floor(milliseconds / 10) : Math.floor(milliseconds / 10));
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
