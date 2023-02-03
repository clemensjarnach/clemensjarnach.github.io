// JavaScript for a simple Pong Game. 
// you can move the paddle of player one with your mouse 
// player 2 is a random auto player with 95% success rate       
       
       
       // canvas variables
        var canvas = document.getElementById("pong");
        var ctx = canvas.getContext("2d");
        
        // color variables 
        var paddleColor = "black";
        var ballColor = "#fba92c";


        // ball variables
        var ballX = canvas.width / 2;
        var ballY = canvas.height / 2;
        var ballRadius = 10;
        var ballSpeedX = 4;
        var ballSpeedY = 4;
        
        
        // paddle variables
        var paddleWidth = 10;
        var paddleHeight = 75;
        var paddle1Y = (canvas.height - paddleHeight) / 2;
        var paddle2Y = (canvas.height - paddleHeight) / 2;
        
        // score variables
        var player1Score = 0;
        var player2Score = 0;
        
        // function to draw the ball
        function drawBall() {
            ctx.beginPath();
            ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = ballColor;
            ctx.fill();
            ctx.closePath();
        }
        
        // function to draw the paddles
        function drawPaddle1() {
            ctx.beginPath();
            ctx.rect(0, paddle1Y, paddleWidth, paddleHeight);
            ctx.fillStyle = paddleColor;
            ctx.fill();
            ctx.closePath();
        }
        
        function drawPaddle2() {
            ctx.beginPath();
            ctx.rect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight);
            ctx.fillStyle = paddleColor;
            ctx.fill();
            ctx.closePath();
        }
        
        // function to move the ball
        function moveBall() {
            ballX += ballSpeedX;
            ballY += ballSpeedY;
        }
        
        // function to handle collision with the walls
        function handleWallCollision() {
            if(ballY + ballSpeedY > canvas.height - ballRadius || ballY + ballSpeedY < ballRadius) {
                ballSpeedY = -ballSpeedY;
            }
        }
        
        // function to handle collision with the paddles
        function handlePaddleCollision() {
            if(ballX + ballSpeedX < paddleWidth) {
                if(ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
                    ballSpeedX = -ballSpeedX;
                }
                else {
                    player2Score++;
                    resetBall();
                }
            }
            if(ballX + ballSpeedX > canvas.width - paddleWidth) {
                if(ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
                    ballSpeedX = -ballSpeedX;
                }
                else {
                    player1Score++;
                    resetBall();
                }
            }
        }
        
        //function to flash the canvas when ball missed
        function flashScreen() {
            canvas.style.backgroundColor = "grey";
            setTimeout(function(){ canvas.style.backgroundColor = "white"; }, 100);
        }
        
        // function to reset the ball
        function resetBall() {
            ballX = canvas.width / 2;
            ballY = canvas.height / 2;
            ballSpeedX = -ballSpeedX;
            flashScreen();
        }
        
        // function to control player 2 (computer)
        //  increase or decrease the chance of missing by adjusting the number in the comparison operator (e.g. randomChance > 0.2 for 20% chance or randomChance > 0.4 for 40% chance).
        function computerMovement() {
            var paddle2YCenter = paddle2Y + (paddleHeight / 2);
            var randomChance = Math.random();
            if(paddle2YCenter < ballY - 35 && randomChance > 0.05) {
                paddle2Y += 5;
            } else if(paddle2YCenter > ballY + 35 && randomChance > 0.05) { 
                paddle2Y -= 5;
            }
        }
        
        
        
        
        
        // main game loop
        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();
            drawPaddle1();
            drawPaddle2();
            moveBall();
            handleWallCollision();
            handlePaddleCollision();
            computerMovement();
            // display scores
            ctx.font = "16px Arial";
            ctx.fillText("Player 1: " + player1Score, 8, 20);
            ctx.fillText("Computer: " + player2Score, canvas.width-100, 20);
        }
        
        // event listener to move paddle 1
        document.addEventListener("mousemove", function(e) {
            var relativeY = e.clientY - canvas.offsetTop;
            if(relativeY > 0 && relativeY < canvas.height) {
                paddle1Y = relativeY - paddleHeight/2;
            }
        });
        
        // event listener to move paddle 2
        document.addEventListener("keydown", function(e) {
            switch(e.keyCode) {
                case 38:   
                    paddle2Y -= 10;
                    break;
                case 40:
                    paddle2Y += 10;
                    break;
            }
        });
        
        // call the game loop every 10 milliseconds
        setInterval(gameLoop, 10);
        
        
        // select the start button
        var startButton = document.getElementById("start-button");
        
        // add a click event listener to the start button
        startButton.addEventListener("click", function() {
            // call the game loop function
            gameLoop();
        });
        
        startButton.addEventListener("click", function() {
            // call the game loop function
            gameLoop();
            // disable the button
            startButton.disabled = true;
        });
        
        
        function resetGame() {
            resetBall();
            player1Score = 0;
            player2Score = 0;
            startButton.disabled = false;
        }
        
        if (player1Score >= 10 || player2Score >= 10) {
            resetGame();
        }
        
          