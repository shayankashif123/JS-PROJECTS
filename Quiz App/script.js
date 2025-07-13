document.getElementById("submitBtn").addEventListener("click",()=> {
    const questions=document.querySelectorAll(".question");
    questions.forEach(question=> {
        const correctAns=question.dataset.correct;
        let selectedOpt = question.querySelector(`input[type="radio"]:checked`);
        if(selectedOpt) {
            if(selectedOpt.value===correctAns) {
                selectedOpt.parentElement.classList.add("correct");

            }
            else {
                selectedOpt.parentElement.classList.add("incorrect");
                const correctopt = question.querySelector(`input[type="radio"][value="${correctAns}"]`)
                if (correctopt) {
                    correctopt.parentElement.classList.add('correct'); 
                }
            }
        }

    });
});