let btns = document.querySelectorAll("#btn");
let msg = document.querySelector(".winner")
let reset_btn=document.querySelector("#reset");
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
let count=0;

btns.forEach((btn)=> {
    btn.addEventListener("click",()=> {
        if(btnO) {
            btn.innerText="O"
            btn.style.color="blue"
            btnO=false
        }
        else {
            btn.innerText="X"
            btn.style.color="red"
            btnO=true;
        }
        btn.disabled=true;
        count++;
        check_winner();
        let issWinner=check_winner();
        if(count===9 && !issWinner) {
            draw();
        }
    })
})
const disabled_btn=()=> {
    for(let btn of btns) {
        btn.disabled=true;
    }
}
const enable_btn=()=> {
    for(let btn of btns) {
        btn.disabled=false;
        btn.innerText="";
}
}
const reset_game=()=> {
    count=0;
        btnO=true;
        msg.style.display="none"
        enable_btn();
    }
    const show_winner=(winner)=> {
        msg.style.display="block"
        msg.innerText = `Congratulation winner is ${winner}`
        disabled_btn();
    }
    const draw=()=> {
        msg.style.display="block"
        msg.innerText="Match is drawn"
    }
const check_winner=()=> {
    for (let pattern of winning_cases) {
        let pos1=btns[pattern[0]].innerText;
        let pos2=btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="") {
            if(pos1==pos2 && pos2==pos3) {
               show_winner(pos1)
            }
        }
    }
}
reset_btn.addEventListener("click",reset_game);