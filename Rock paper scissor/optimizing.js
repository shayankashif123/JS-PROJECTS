/*
in case of computer choice i should optimized my code a bit by making a seperate function for
comp choice*/
function getCompChoice() {
    const choice=["rock","paper","scissor"];
    const rand=Math.floor(Math.random * 3)
    return choice[rand];

}
compChoice=getCompChoice();
