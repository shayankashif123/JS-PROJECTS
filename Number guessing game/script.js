
let gen=Math.ceil(Math.random()*100);
console.log(gen)
let maxAttempts=7
let input = null; 
let nums = null; 

for(let i=0;i<maxAttempts;i++) {
    console.log(i+1,"attempt")
     input=prompt("Number generated from 1-100.You have 7 chances")
    if (input == null) {
        console.log("Program terminated by the user.");
        break; 
    }
     nums=parseInt(input);
    if(isNaN(nums)) {
        console.log("Invalid input");
        continue;
    }
   
    let result=gen-nums;

if(gen==nums) {
    console.log(`You have successfully guess the number in ${i+1} attempts`)
    break;
}
if(result<=10 && result>0) {
    console.log("You are very close");
}
else if(result>=-10 && result<0) {
    console.log("You are very close");
}
else if(result>10) {
    console.log("You are low")
}
else if(result<-10 ) {
    console.log("You are high");
}    
}
if(input!=null && !isNaN(nums) && nums!=gen) {
    console.log(`You have failed to guess the number. The number is ${gen}.`);
}
