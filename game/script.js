const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: canvas.width / 2 - 15,
    y: canvas.height - 30,
    width: 30,
    height: 30,
    color: 'blue'
};

const objects = [];
const objectColor = 'red';
const objectWidth = 20;
const objectHeight = 20;
const objectSpeed = 2;

let score = 0;
let gameOver = false;

function createObject() {
    const x = Math.random() * (canvas.width - objectWidth);
    objects.push({ x, y: 0 });
}

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawObjects() {
    ctx.fillStyle = objectColor;
    for (const obj of objects) {
        ctx.fillRect(obj.x, obj.y, objectWidth, objectHeight);
    }
}

function moveObjects() {
    for (const obj of objects) {
        obj.y += objectSpeed;
        if (obj.y > canvas.height) {
            gameOver = true;
        }
    }
}

function checkCollision() {
    for (const obj of objects) {
        if (
            player.x < obj.x + objectWidth &&
            player.x + player.width > obj.x &&
            player.y < obj.y + objectHeight &&
            player.y + player.height > obj.y
        ) {
            score++;
            objects.splice(objects.indexOf(obj), 1);
        }
    }
}

function update() {
    if (gameOver) {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(`Game Over! Score: ${score}`, 50, canvas.height / 2);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawObjects();
    moveObjects();
    checkCollision();

    requestAnimationFrame(update);
}

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const root = document.documentElement;
    const mouseX = e.clientX - rect.left - root.scrollLeft;
    player.x = mouseX - player.width / 2;
});

setInterval(createObject, 1000);

update();
