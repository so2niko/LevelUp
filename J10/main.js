let seconds = document.querySelector(".seconds");
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let sec = 0;
let hrs = 0;
let min = 0;
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const pauseButton = document.querySelector('.pause');
const circleButton = document.querySelector('.circle');


startButton.onclick = timerStart // Почему тут функция должна быть без скобок?
stopButton.onclick = timerStop
pauseButton.onclick = timerPause
// circleButton.onclick = doCircle


function timerStart() {
    t = setInterval(addTime, 1000);
}

function addTime() {
    sec++;
    seconds.innerHTML = sec
    minutes.innerHTML = min
    hours.innerHTML = hrs

    if (sec >= 59) {
        sec = 0;
        min++;
        if (min >= 59) {
            min = 0;
            hrs++;
        }
    }
}
function timerPause() {
    clearTimeout(t);
}

function timerStop() {
    clearTimeout(t);
    seconds.innerHTML = 0
    minutes.innerHTML = 0
    hours.innerHTML = 0
}