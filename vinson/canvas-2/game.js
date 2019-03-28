const context = canvas.getContext('2d');
const player1 = new Player(0, 0, 100, 100, context);
const bg = new Bg(0, 0, width, height, context);
const bg2 = new Bg(width, 0, width, height, context);
const pipe = new Pipe(width, 0, 100, 300, context);
let frame = 0;
let score = 0;
const flapAudio = document.createElement('audio');
let isPaused = true;
let gameOver = false;
flapAudio.src = './flap.mp3';


document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && gameOver !== true) {
        player1.moveUp();
        if ( isPaused ) {
            isPaused = false;
        }
    }
} );


function gameLoop() {
    ++frame;

    // context.fillStyle = 'blue';
    // context.fillRect(0, 100, width, 100);
    context.clearRect(0, 0, width, height);


    if (!isPaused) {
        pipe.update();
        bg.update();
        bg2.update();
        player1.update();
    }

    checkCollision(player1, pipe);
    bg.draw();
    bg2.draw();

    player1.draw();
    pipe.draw();
    context.font = "30px Arial";
    context.fillText(`score: ${score}`  , 200, 50);

    if (gameOver) {
        context.fillStyle = 'black';
        context.fillRect(80, 200, 200, 200)
        context.fillStyle = 'white';
        context.fillText(`game over: ${score}`  , 82, 300);
    }
    window.requestAnimationFrame(gameLoop)
}

gameLoop();

function checkCollision(player, pipe) {

    const xPossible = (pipe.x <= player.x + player.w) && (pipe.x + pipe.w >= player.x);
    const yPossible = (pipe.y < player.y + player.h) && (pipe.y + pipe.h >= player.y );
    const yPossibleForBottom = (pipe.y + pipe.h + pipe.gap  < player.y  + player.h) && (pipe.y + pipe.h + pipe.gap  + pipe.bottom + 100 >= player.y );
    if ( xPossible && yPossible || xPossible && yPossibleForBottom ) {
        console.log('collision');
        gameOver = true;
    }



}