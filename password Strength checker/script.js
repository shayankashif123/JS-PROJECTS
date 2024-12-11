function containsSpecialCharacter(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
  }
  function containsNumber(password) {
    const numberPattern = /[0-9]/;
    return numberPattern.test(password);
  }
  function containsUpperAndLower(password) {
    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;
    return upperCasePattern.test(password) && lowerCasePattern.test(password);
  }
  const container= document.querySelector(".container");
  let progress=0;
const password_input= document.querySelector("input");
const progress_bar=document.querySelector(".progress-bar");
password_input.addEventListener("input",()=> {
    progress=0;
    const password=password_input.value;
    if (password.length < 8) {
      container.classList.add("active");
  } else {
      container.classList.remove("active");
  }
  if(password.length>=8) {
    progress+=5;
    if(containsSpecialCharacter(password)) {
        progress+=34
    }
    if (containsNumber(password)) {
        progress += 33;
      }
      if (containsUpperAndLower(password)) {
        progress += 33; 
      } 
    }
      progress = Math.min(progress, 100);   
      progress_bar.style.width =`${progress}%`;
      if (progress<33) {
        progress_bar.style.backgroundColor = 'red';  
      } else if (progress<73) {
        progress_bar.style.backgroundColor = 'yellow'; 
      } else {
        progress_bar.style.backgroundColor = 'green';
      }
});