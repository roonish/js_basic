<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bouncing Ball Animation</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #282c34;
        }
        #ball {
            width: 50px;
            height: 50px;
            background-color: #61dafb;
            border-radius: 50%;
            position: absolute;
            top: 0;
        }
    </style>
</head>
<body>
    <div id="ball"></div>

    <script>
        const ball = document.getElementById('ball');
        let positionX = 0;
        let positionY = 0;
        let velocityX = 4;
        let velocityY = 4;
        const gravity = 0.2;
        const damping = 0.9;

        function updateBallPosition() {
            positionX += velocityX;
            positionY += velocityY;
            velocityY += gravity;

            // Bounce off the walls
            if (positionX + ball.clientWidth > window.innerWidth || positionX < 0) {
                velocityX = -velocityX * damping;
            }
            if (positionY + ball.clientHeight > window.innerHeight || positionY < 0) {
                velocityY = -velocityY * damping;
            }

            // Apply position
            ball.style.left = positionX + 'px';
            ball.style.top = positionY + 'px';

            // Request the next frame
            requestAnimationFrame(updateBallPosition);
        }

        // Start the animation
        updateBallPosition();
    </script>
</body>
</html>
