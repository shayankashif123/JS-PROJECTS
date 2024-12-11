let string ="";
let buttons=document.querySelectorAll(".button");
let memory=0;
buttons.forEach((button)=> {
    button.addEventListener("mouseover",(e)=> {
        e.target.style.backgroundColor="gold"
    })
    button.addEventListener("mouseout",(e)=> {
        e.target.style.backgroundColor=""
    })
  button.addEventListener("click",(e)=> {
    if(e.target.innerHTML== '=') {
        string=eval(string);
        document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="C") {
        string="";
        memory=0;
        document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="x") {
        string=string.slice(0,-1);
        document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="M+") {
        memory+=parseInt(string) || 0;
        document.querySelector("input").value=memory;
    
    }
    else if(e.target.innerHTML=="M-") {
        memory-=parseInt(string) || 0;
        document.querySelector("input").value=memory
    }

    else {
        string= string + e.target.innerHTML;
        document.querySelector("input").value=string;
    }
  })
})