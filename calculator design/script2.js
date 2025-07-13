let buttons=document.querySelectorAll(".button");
let string="";
let memory=0;
function updateInput(exp) {
    document.querySelector("input").value=exp;
}
buttons.forEach((button)=> {
    button.addEventListener("mouseover",(e)=>{
        e.target.style.backgroundColor="gold";
    })
    button.addEventListener("mouseout",(e)=>{
        e.target.style.backgroundColor="";
    })
    button.addEventListener("click",(e)=> {
        if(e.target.innerHTML=="=") {
            try {
                string=eval(string);
                updateInput(string);
            }
            catch(error) {
                updateInput("Error")
                string="";
            }
        }
        else if(e.target.innerHTML=="C") {
            string="";
            updateInput(string);
        }
        else if(e.target.innerHTML=="x") {
            string=string.slice(0,-1);
            updateInput(string);
        }
        else if(e.target.innerHTML=="M+") {
            memory+=parseInt(string) || 0;
            updateInput(memory);
        }
        else if(e.target.innerHTML=="M-")  {
            memory-=parseInt(string) || 0;
            updateInput(memory);
        }
        else {
            string=string+e.target.innerHTML
            updateInput(string);
        }
    })
})
