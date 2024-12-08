let direction = {x:0,y:0};
const board = document.querySelector("#board");
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let snakeArr = [
    {x:13,y:15}
];

food = {x:6,y:7};
const speed = 10;
let lastPaintTime=0;
let scoreBox = document.querySelector(".score");
let score=0;
let hi_scorebox = document.querySelector(".hi-score");
let hi_score=0;
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}
function isCollide(snake) {
    if(snake[0].x >=18 || snake[0].x<=0) {
        return true;
    }
    if(snake[0].y >=18 || snake[0].y<=0) {
        return true;
    }
    for(let i=1;i<snakeArr.length;i++) {
    if(snake[i].x===snake[0].x && snake[i].y===snake[0].y) {
        return true;
    }
}
  return false;
}
function gameEngine() {
    if(isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        direction={x:0,y:0};
        alert("Game over ! Press any key to start");
        snakeArr=[{x:13,y:15}];
        musicSound.play();
        score= 0;
        scoreBox.innerHTML = "SCORE: " + score;

        
    }
    //moving the snake
    for(let i = snakeArr.length-2;i>=0;i--) {
        snakeArr[i+1]={...snakeArr[i]};
    }
   // moving the head
    snakeArr[0].x += direction.x;
    snakeArr[0].y += direction.y;
    board.innerHTML = "";
    // If you have eaten the food
 if(snakeArr[0].x===food.x && snakeArr[0].y === food.y) {
      foodSound.play();
      score+=1;
      if(score>hi_score) {
          hi_score=score;
          hi_scorebox.innerHTML = "HIGH-SCORE: " + hi_score;
          localStorage.setItem('high-score',JSON.stringify(hi_score));
        }
        scoreBox.innerHTML = "SCORE: " + score;
    snakeArr.unshift({x:snakeArr[0].x + direction.x,y:snakeArr[0].y + direction.y});
    let a =2;
    let b= 16;
    food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
 }
 //displaying the snake
    snakeArr.forEach((e,index)=> {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);       
    })
    //displaying the snake
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}
musicSound.play();
let hiscores = localStorage.getItem('high-score');
hi_score= JSON.parse(hiscores);
hi_scorebox.innerHTML = "HIGH-SCORE: " + hi_score;
window.requestAnimationFrame(main);
window.addEventListener("keydown",(e)=> {
    direction={x:0,y:1};
    musicSound.play();
    switch(e.key) {
        case  "ArrowUp":
            direction.x = 0;
            direction.y =-1;
            break;
            case "ArrowDown":
                direction.x=0;
                direction.y=1;
                break;
                case "ArrowRight":
                    direction.x=1;
                    direction.y=0;
                    break;
                    case "ArrowLeft":
                        direction.x=-1;
                        direction.y=0;
                        break;
                        default:
                         break;
    }
})
