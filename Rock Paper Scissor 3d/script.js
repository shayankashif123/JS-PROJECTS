let rock = document.querySelector(".rock-img");
let paper = document.querySelector(".paper-img");
let scissor = document.querySelector(".scissor-img");
let display = document.querySelector("#display");
let play_score=document.querySelector(".show");
let comp_score=document.querySelector(".compshow");
let active = document.querySelector(".active");
let playChoice;
let compChoice;
let choice = [rock,paper,scissor];
active.classList.toggle('on');
function compChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return choice[randomNum];
}
function winner() {
   if(playChoice=="rock" && compChoice=="scissor" || playChoice=="paper" && compChoice=="rock" || playChoice=="scissor" && compChoice=="paper") {
    active.textContent="You won"
   }
   
}
rock.addEventListener("click",()=> {
    active.textContent="You have selected rock"
    playChoice="rock";
})
paper.addEventListener("click",()=> {
    active.textContent="You have selected paper"
playChoice="paper";
})
scissor.addEventListener("click",()=> {
    active.textContent="You have selected scissors"
    playChoice="scissor"
})
let result=compChoice();
if(result==0) {
    active.textContent="Computer have selected rock";
    compChoice="rock";
} 
else if(result==1) {
    active.textContent="Computer have selected paper"
    compChoice="paper"
} 
else if(result==2) {
  active.textContent="Computer have selected scissor" 
  compChoice="scissor";
}


