let buttons=document.querySelectorAll(".btn");
let display=document.getElementById("display")
let interval;
let elaspedTime;
let running=false;
buttons.forEach((button)=> {
    button.addEventListener("click",(e)=> {
        if(e.target.classList.contains("btn1")) {
            if(!running) {
                running=true;
          interval=setInterval(() => {
            elaspedTime++;
            updateTime(elaspedTime);
           }, 1000);
        }
    }
    else if(e.target.classList.contains("btn2")) {
        running=false;
        clearInterval(interval);
    }
    else if(e.target.classList.contains("btn3")) {
        clearInterval(interval);
        running=false;
        elaspedTime=0;
        updateTime(elaspedTime);
    }
    })
})
function updateTime(seconds) {
    let hrs=Math.floor(seconds/3600);
    let mins= Math.floor((seconds%3600)/60);
    let secs=seconds%60;
    display.innerText = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

