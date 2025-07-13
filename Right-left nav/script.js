let btn = document.querySelector("#right");
const right_side = document.querySelector(".right-side");
const list = document.querySelector(".list");
const left_side = document.querySelector(".left-side");
btn.addEventListener("click",()=> {
right_side.classList.toggle("open");
list.classList.toggle("open");

})
let left_btn = document.querySelector("#left-side");
left_btn.addEventListener("click",()=> {
    left_side.classList.toggle('left-open');
})