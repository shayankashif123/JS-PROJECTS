const password=document.getElementById("Password")
const username=document.getElementById("username");
const sign_up=document.getElementById("submit");
const message=document.getElementById("message");
sign_up.addEventListener("click",(e)=> {
    e.preventDefault()
    let user_name=username.value.trim()
    let Password_value=password.value.trim();
    const passwordRequirement={
        min_length:8,
        hasUppercase:/[A-Z]/,
        hasSpecialChar:/[!@#$%^&*(),.?":{}|<>]/,
        hasNumber:/[0-9]/,
        hasLowercase:/[a-z]/,
    }
    const user_requirement={
        hasNumber:/\d/,
        hasalpha:/[a-zA-Z]/
    }
    if(validatePass(Password_value,passwordRequirement) && validateUser(user_name,user_requirement)) {
        message.textContent="Sign-up successfully"
        message.style.color="green"
    }
    else if(!validatePass(Password_value,passwordRequirement)){
        message.textContent = "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.";
        message.style.color="red"; 
    }
    else {
        message.textContent="Invalid username!"
        message.style.color="red";
    }
});
function validatePass(password,Requirement) {
    if(password.length<Requirement.min_length) return false;
    if(!Requirement.hasUppercase.test(password)) return false;
    if(!Requirement.hasLowercase.test(password)) return false;
    if(!Requirement.hasSpecialChar.test(password)) return false;
    if(!Requirement.hasNumber.test(password)) return false;
    
    return true;
}
function validateUser(user,Requirement) {
    if(user.length<3) return false;
    if(!Requirement.hasNumber.test(user)) return false;
    if(!Requirement.hasalpha.test(user)) return false;
    return true;
}