let btns = document.querySelectorAll("#btn");
let msg=document.querySelector(".winner");
let reset= document.querySelector("#reset");

const winning_cases= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let btnO=true;
 const reset_game=()=> {
     btnO=true;
     msg.style.display="none"
     enableBoxes();
 }
const enableBoxes=()=>{
    for (const btn of btns) {
        btn.disabled=false
        btn.innerText="";
    }
}
btns.forEach((btn)=> {
    btn.addEventListener("click",()=> {
        if(btnO) {
            btn.innerText = "O"
            btnO=false;
        }
        else {
            btn.innerText= "X"
            btnO=true
        }
        btn.disabled=true
        winner_check();

    })
})
const show_winner=(winner)=> {
    msg.style.display="block"
    msg.innerText= `Congratulation winner is ${winner}`
}
const winner_check = ()=> {
    for (let pattern of winning_cases) {
    let pos1=btns[pattern[0]].innerText;
    let pos2=btns[pattern[1]].innerText;
    let pos3=btns[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!="") {
        if(pos1==pos2 && pos2==pos3) {
            show_winner(pos1);
        }
    }
}
};
reset.addEventListener("click",reset_game);


