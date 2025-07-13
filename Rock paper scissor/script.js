let rock = document.querySelector(".rock-img");
let paper = document.querySelector(".paper-img");
let scissor = document.querySelector(".scissor-img");
let active = document.querySelector(".active");
let display = document.querySelector("#display");
let playChoice;
let compChoice;
let play_score=0;
let comp_score=0;
let choice = ["rock","paper","scissor"];
active.classList.toggle('on');
function rand() {
    let randomNum = Math.floor(Math.random() * 3);
    return choice[randomNum];
}
function winner() {
   if(playChoice=="rock" && compChoice=="scissor" || playChoice=="paper" && compChoice=="rock" || playChoice=="scissor" && compChoice=="paper") {
    active.textContent=`You won! Computer has selected ${compChoice}`
    display.style.backgroundColor="green"
    play_score++;
    document.querySelector(".show").textContent=play_score;
   }
   else if(playChoice=="rock" && compChoice=="rock" || playChoice=="paper" && compChoice=="paper" || playChoice=="scissor" && compChoice=="scissor") {
    active.textContent=`Its a draw. You both have selected ${compChoice}`
    display.style.backgroundColor="gold"
   }
   else {
    active.textContent=`Computer win! Computer has selected ${compChoice}`
    display.style.backgroundColor="red"
    comp_score++;
    document.querySelector(".compshow").textContent=comp_score;
   }
}
function comp_choice () {
    compChoice=rand();
}
rock.addEventListener("click",()=> {
    active.textContent="You have selected rock"
    playChoice="rock";
    comp_choice();
    winner();

})
paper.addEventListener("click",()=> {
    active.textContent="You have selected paper"
playChoice="paper";
comp_choice();
winner();
})
scissor.addEventListener("click",()=> {
    active.textContent="You have selected scissors"
    playChoice="scissor"
    comp_choice();
    winner();
})


