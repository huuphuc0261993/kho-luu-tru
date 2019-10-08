var box = 32;
var ctx = document.getElementById('myCanvas').getContext("2d");

var ground = new Image();
ground.src = "../image/ground.png";

var foodImg = new Image();
foodImg.src = "../image/food.png";

var bodySnake = new Image();
bodySnake.src = "../image/body.png";

var headRight = new Image();
headRight.src = "../image/headRight.png";

var headLeft = new Image();
headLeft.src = "../image/headLeft.png";

var headUp = new Image();
headUp.src = "../image/headUp.png";

var headDown = new Image();
headDown.src = "../image/headDown.png";

var gameOverOne = new Image();
gameOverOne.src = "../image/gameOverClassic.png";

var snake = [];
snake[0] = { x: 9 * box, y: 5 * box }

var food = {
    x: Math.floor(Math.random() * 18 + 1) * box,
    y: Math.floor(Math.random() * 16 + 3) * box,
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

var drawScore = new Score(2.2, 1.5, "white", "30px Snake Chan")

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {

        if (name == "left") {
            ctx.drawImage(headLeft, snake[i].x, snake[i].y);
        } else if (name == "right") {
            ctx.drawImage(headRight, snake[i].x, snake[i].y);
        } else if (name == "up") {
            ctx.drawImage(headUp, snake[i].x, snake[i].y);
        } else if (name == "down") {
            ctx.drawImage(headDown, snake[i].x, snake[i].y);
        }
        if (i >= 1) {
            ctx.beginPath();
            ctx.drawImage(bodySnake, snake[i].x, snake[i].y);
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
            x: Math.floor(Math.random() * 18 + 1) * box,
            y: Math.floor(Math.random() * 16 + 3) * box,
        }

    } else {
        snake.pop();
    }

    let headSnake = {
        x: snakeX,
        y: snakeY,
    }

    if (collision(headSnake, snake)) {
        clearInterval(game);
        ctx.drawImage(gameOverOne, 3.5 * box, 5 * box);
    }

    if (headSnake.x == myCanvas.width) {
        headSnake.x = 0;
    } else if (headSnake.x == -box) {
        headSnake.x = myCanvas.width
    } else if (headSnake.y == myCanvas.height) {
        headSnake.y = 2 * box
    } else if (headSnake.y == box) {
        headSnake.y = myCanvas.height;
    }
    snake.unshift(headSnake);

    drawScore.draw();
}
var game = setInterval(draw, 90);