document.querySelectorAll(".txt").forEach((txt)=> {
    const svg = txt.querySelector(".svg");
    svg.addEventListener("click",()=> {
        txt.classList.toggle("active");
    })
})