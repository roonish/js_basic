const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: 50,
    y: 50,
    width: 30,
    height: 30,
    speed: 5,
    dx: 0,
    dy: 0,
};

const items = [
    { x: 100, y: 100, radius: 10 },
    { x: 300, y: 150, radius: 10 },
    { x: 500, y: 200, radius: 10 },
];

const obstacles = [
    { x: 200, y: 50, width: 100, height: 20 },
    { x: 150, y: 250, width: 120, height: 20 },
    { x: 400, y: 100, width: 20, height: 100 },
];

let score = 0;

// Draw the player
function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Draw the items
function drawItems() {
    ctx.fillStyle = 'green';
    items.forEach(item => {
        ctx.beginPath();
        ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Draw the obstacles
function drawObstacles() {
    ctx.fillStyle = 'red';
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawItems();
    drawObstacles();
    drawScore();
}

// Update the player position
function update() {
    player.x += player.dx;
    player.y += player.dy;

    // Check wall collision
    if (player.x < 0) player.x = 0;
    if (player.y < 0) player.y = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;

    // Check item collection
    items.forEach((item, index) => {
        if (Math.hypot(player.x - item.x, player.y - item.y) < player.width) {
            items.splice(index, 1);
            score++;
        }
    });

    // Check obstacle collision
    obstacles.forEach(obstacle => {
        if (player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y) {
            alert('Game Over! Final Score: ' + score);
            document.location.reload();
        }
    });
}

// Draw the score
function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 20);
}

// Move player
function movePlayer(e) {
    if (e.key === 'ArrowRight' || e.key === 'd') {
        player.dx = player.speed;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        player.dx = -player.speed;
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        player.dy = -player.speed;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        player.dy = player.speed;
    }
}

// Stop player
function stopPlayer() {
    player.dx = 0;
    player.dy = 0;
}

// Key event listeners
document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);

// The game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
