var box = 32;
var ctx = document.getElementById('myCanvas').getContext("2d");

var ground = new Image();
ground.src = "../image/map1.jpg";

var foodImg = new Image();
foodImg.src = "../image/biNgo.png";

var zoobie = new Image();
zoobie.src = "../image/headSnake.png";

var snake = [];
snake[0] = { x: 9 * box, y: 10 * box }

var gameOverTwo = new Image();
gameOverTwo.src = "../image/gameOverMordel.png";

var food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
}


var score = 0;

document.addEventListener("keydown", direction);

var name;

function direction(event) {
    if (event.keyCode == 37 && name != "right") {
        name = "left"
    } else if (event.keyCode == 38 && name != "down") {
        name = "up"
    } else if (event.keyCode == 39 && name != "left") {
        name = "right"
    } else if (event.keyCode == 40 && name != "up") {
        name = "down"
    }
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

class Score {
    constructor(_x, _y, _color, _fontSize) {
        this.x = _x * box;
        this.y = _y * box;
        this.color = _color;
        this.fontSize = _fontSize;
    }
    draw() {
        ctx.font = this.fontSize;
        ctx.fillStyle = this.color;
        ctx.fillText(score, this.x, this.y);
    }
}

var drawScore = new Score(2.2, 1.5, "white", "30px JI Pumpkins")

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.beginPath();
        ctx.drawImage(zoobie, snake[i].x, snake[i].y)
        ctx.closePath();
        if (i >= 1) {
            ctx.beginPath();
            ctx.drawImage(foodImg, snake[i].x, snake[i].y)
            ctx.closePath();
        }

    }
}

function draw() {
    ctx.drawImage(ground, 0, 0);
    drawSnake();
    ctx.drawImage(foodImg, food.x, food.y)

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;
    
    if (name == "left") {
        snakeX -= box;
    }
    if (name == "up") {
        snakeY -= box;
    }
    if (name == "right") {
        snakeX += box;
    }
    if (name == "down") {
        snakeY += box;
    }

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box,
        }
        
    } else {
        snake.pop();
    }
    
    let headSnake = {
        x: snakeX,
        y: snakeY,
    }

    if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box
        || snakeY > 17 * box || collision(headSnake, snake)) {
        clearInterval(game);
        ctx.drawImage(gameOverTwo, 3.5 * box, 5 * box);
    }

    snake.unshift(headSnake);

    drawScore.draw();
}

var game = setInterval(draw, 100)