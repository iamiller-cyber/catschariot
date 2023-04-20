const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

const images = {}
images.player = new Image();
images.player.src = "images/catwhite.png"
const characterActions = ['up', 'down', 'left', 'right']
const playerWidth = 32;
const playerHeight = 32;

let playerFrameX = 0;
let playerFrameY = 0;

let playerX = 0;
let playerY = 0;

const playerSpeed = 5;
let playerDirection;

function drawSprite(img, sx, sy, sw, sh, dx, dy, dw, dh) {
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
}

canvas.onload = () =>
{drawSprite(images.player, 0, 0, playerWidth, playerHeight, 400, 400, playerWidth, playerHeight)};



function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight)
    switch (playerDirection) {
        case "right":
            if (playerFrameX < 2) {
                playerFrameX++; 
            }
            else (playerFrameX = 0);
            if (playerX < canvas.width - playerWidth) {
                playerX += playerSpeed;
            }
            else (console.log("You bumped!"))
            // gameReset()
            break;
        case "left":
            if (playerFrameX < 2) {
                playerFrameX++;
            }
            else (playerFrameX = 0);
            if (playerX >= 0) {
                playerX -= playerSpeed;
            }
            else (console.log("You bumped!"))
            // gameReset()
            break;
        case "up":
            if (playerFrameX < 2) {
                playerFrameX++;
            }
            else (playerFrameX = 0);
            if (playerY >= 0) {
                playerY -= playerSpeed;
            }
            else (console.log("You bumped!"))
            //gameReset()
            break;
        case "down":
            if (playerFrameX < 2) {
                playerFrameX++;
            }
            else (playerFrameX = 0);
            if (playerY <= canvas.height - playerHeight) {
                playerY += playerSpeed;
            }
            else (console.log("You bumped!"))
            //gameReset()
            break;
}
}

window.onload = setInterval(animate, 1000/4);

window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

window.addEventListener('keydown', function(e) {
    if (e.key == "ArrowLeft") {
        playerFrameY = 3;
        playerDirection = "left"
        animate()
    }
    else if (e.key == "ArrowUp") {
        playerFrameY = 1;
        playerDirection = "up"
        animate()
    }
    else if (e.key == "ArrowRight") {
        playerFrameY = 0;
        playerDirection = "right"
        animate()
    }
    else if (e.key == "ArrowDown") {
        playerFrameY = 2;
        playerDirection = "down"
        animate()
    } 
})