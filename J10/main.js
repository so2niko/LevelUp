let seconds = document.querySelector(".seconds");
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const pauseButton = document.querySelector('.pause');
const circleButton = document.querySelector('.circle');


seconds.textContent = "58";
// startButton.onclick = timerStart()
// stopButton.onclick = timerStop()
// pauseButton.onclick = timerPause()
// circleButton.onclick = doCircle()




function timerStart() {
    t = setTimeout(addTime(), 1000);
}

// function addTime() {

// }

