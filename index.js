document.addEventListener('DOMContentLoaded',function(){
    const gameArena = document.getElementById('game-arena');
    const arenaSize = 600;
    const cellSize=20;
    let score = 0;
    let gameStarted = false;
    let food = {x:300,y:200};
    let snake = [{x:160,y:200},{x:140,y:200},{x:120,y:200}];

    function drawDiv(x,y,className){
        const divElement = document.createElement('div');
        divElement.classList.add(className);
        divElement.style.top=`${y}px`;
        divElement.style.left = `${x}px`;
        return divElement;
    }

    function drawFoodAndSnake(){
        gameArena.innerHTML='';

        snake.forEach((snakeCell)=>{
            const snakeElement = drawDiv(snakeCell.x,snakeCell.y,'snake');
            gameArena.appendChild(snakeElement);
        })

        const foodElement = drawDiv(food.x,food.y,'food');
        gameArena.appendChild(foodElement);
    
    }

    function runGame(){
        if(!gameStarted){
            gameStarted=true;
            drawFoodAndSnake();
            // gameLoop();
        }
    }

    function initiateGame(){
        const scoreBoard = document.createElement('div');
        scoreBoard.id='score-board';
        document.body.insertBefore(scoreBoard,gameArena);

        const startButton = document.createElement('button');
        startButton.textContent='Start Game';
        startButton.classList.add('start-button');

        startButton.addEventListener('click',function startGame(){
            startButton.style.display='none';
            runGame();
        });
        
        document.body.appendChild(startButton);
    }
    initiateGame();

})