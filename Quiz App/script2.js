document.getElementById("submitBtn").addEventListener("click",(e)=> {
    e.preventDefault()
    let score=0;
    const questions = document.querySelectorAll(".question");
    questions.forEach(question=> {
        const correctopt=question.dataset.correct;
        let selectedOpt=question.querySelector(`input[type="radio"]:checked`);
        if(selectedOpt) {
            if(selectedOpt.value===correctopt) {
                score++;
                selectedOpt.parentElement.classList.add("correct");
                
            }
            else {
                selectedOpt.parentElement.classList.add("incorrect");
                const correct=question.querySelector(`input[type="radio"][value="${correctopt}"]`)
                   if(correct) {
            correct.parentElement.classList.add("correct");
        }
            }
        }
    if(!selectedOpt) {
        const correct=question.querySelector(`input[type="radio"][value="${correctopt}"]`)
        if(correct) {
            correct.parentElement.classList.add("correct");
        }
        }
        document.querySelector(".score").textContent = `Your score: ${score}`;
    }) 
})