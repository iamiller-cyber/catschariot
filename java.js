const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

const images = {}
images.player = new Image();
images.player.src = "images/catwhite.png"
const characterActions = ['up', 'down', 'left', 'right']
const playerWidth = 32;
const playerHeight = 34;

let playerFrameX = 0;
let playerFrameY = 0;

let playerX = 0;
let playerY = 0;

const playerSpeed = 5;
let playerLoc;

function drawSprite(img, sx, sy, sw, sh, dx, dy, dw, dh) {
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
}

function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight)
    // animates sprite
    if (playerFrameX < 2) {
        playerFrameX++; 
    }
    else (playerFrameX = 0);
    // move player
    if (playerX < canvas.width + playerWidth) {
        playerX += playerSpeed;
    }
    else playerX = 0 - playerWidth;
}

window.onload = setInterval(animate, 1000/4);

window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

window.addEventListener('keydown', function(e) {
    if (e.target.key = "ArrowLeft") 


}
)

/* images.forEach((state, index) => { 
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames;
})


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

    /*    if (gameFrame % staggerFrames == 0) {
    if (frameX < 6) frameX ++;
    else frameX = 0;
    } 
    gameFrame++
    requestAnimationFrame(animate);
};

animate() */