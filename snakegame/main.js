let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let scoreNum = document.querySelector(".scoreNum")
let score = 0

let gridSize = 20
let moveX = 0
let moveY = 0

const defaultTailSize = 3
let tailSize = defaultTailSize

let snakeTrail = []
let snakeX = 10
let snakeY = 10

let appleX = 15
let appleY = 15


setInterval(draw, 125)

function draw() {
		
	ctx.fillStyle = "white"
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	
	grd = ctx.createLinearGradient(10.000, 350.000, 350.000, 150.000)
      
	grd.addColorStop(0.000, 'rgba(247, 149, 51, 1.000)');
	grd.addColorStop(0.151, 'rgba(243, 112, 85, 1.000)');
	grd.addColorStop(0.311, 'rgba(239, 78, 123, 1.000)');
	grd.addColorStop(0.462, 'rgba(161, 102, 171, 1.000)');
	grd.addColorStop(0.621, 'rgba(80, 115, 184, 1.000)');
	grd.addColorStop(0.748, 'rgba(16, 152, 173, 1.000)');
	grd.addColorStop(0.875, 'rgba(7, 179, 155, 1.000)');
	grd.addColorStop(1.000, 'rgba(111, 186, 130, 1.000)');
	
	ctx.fillStyle = grd
	

	snakeX += moveX
	snakeY += moveY


	if (snakeX < 0) {
		snakeX = gridSize;
	}
	if (snakeX > gridSize ) {
		snakeX = 0;
	}
	if (snakeY < 0) {
		snakeY = gridSize;
	}
	if (snakeY > gridSize) {
		snakeY = 0;
	}
        
	if (snakeX == appleX && snakeY == appleY) {
		tailSize++;
		score++
		scoreNum.innerHTML = score

		appleX = Math.floor(Math.random() * gridSize)
		appleY = Math.floor(Math.random() * gridSize)
	}
        
    

	for (let i = 0; i < snakeTrail.length; i++) {
		ctx.fillRect(snakeTrail[i].x * gridSize, snakeTrail[i].y * gridSize, gridSize, gridSize);
	
        
		if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
			tailSize = defaultTailSize;
			score = 0;
			scoreNum.innerHTML = score;
		}
    }
        
	
	ctx.fillStyle = grd
	ctx.fillRect(appleX * gridSize, appleY * gridSize, gridSize, gridSize)
        
	snakeTrail.push({ x: snakeX, y: snakeY })
	
	while (snakeTrail.length > tailSize) {
		snakeTrail.shift();
	}
	
	document.addEventListener("keydown", keyDownEvent)
	  
	function keyDownEvent(e) {
	switch (e.keyCode) {
		case 37:
			moveX = -1;
			moveY = 0;
		break;
		case 38:
			moveX = 0;
			moveY = -1;
		break;
		case 39:
			moveX = 1;
			moveY = 0;
		break;
		case 40:
			moveX = 0;
			moveY = 1;
		break;
	}
	}
}
      


