const startButton = document.querySelector('#startButton')
const startBoard = document.querySelector('.start')
const gameBoard = document.querySelector('.game')
const players = document.querySelectorAll('.player')
const player = document.querySelector('.playerActive')

for (let i = 0; i < players.length; i++) {
    players[i].addEventListener('click', (event) => {
        players[i].classList.toggle('checked');
    })
}

startButton.addEventListener('click', (event) => {
    if(players[0].classList.contains("checked") || players[1].classList.contains("checked") || players[2].classList.contains("checked")){
        startBoard.classList.add('hidden')
        gameBoard.classList.remove('hidden')
    }
    if (players[0].classList.contains("checked")) {
        player.classList.add('first')
    } else if (players[1].classList.contains("checked")) {
        player.classList.add('second')
    } else {
        player.classList.add('third')
    }
})

gameBoard.addEventListener('click', (event) => {
    player.style.top = player.offsetTop - 40 + "px";
    player.style.left = player.offsetLeft + 40 + "px";
    const t = setTimeout(down, 1000);

})
function down () {
    return player.style.top = '234px'
}

if (player.offsetLeft == 630 || player.offsetLeft <= 0 ) {
    player.style.left = 0
} 

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        player.style.left = player.offsetLeft + 20 + "px";
    }
    if (event.key == 'ArrowLeft') {
        player.style.left = player.offsetLeft - 20 + "px";
    }

})
