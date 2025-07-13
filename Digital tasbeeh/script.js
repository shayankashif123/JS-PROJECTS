let counter=0;
let buttons=document.querySelectorAll(".b1");
let string=document.querySelector(".string")
function updateCont(number) {
    string.innerText=number;
}
buttons.forEach((button)=> {
    button.addEventListener("click",(e)=> {
        if(e.target.id==="increase") {
            counter++;
            updateCont(counter);
        }
        else if(e.target.id==="reset") {
            counter=0;
            updateCont(counter);
        }
        else if (e.target.id === "decrease") { // Ensure you check for the "decrease" button
            if (counter > 0) {
                counter--;
            }
            updateCont(counter);
        }
        
    })
})