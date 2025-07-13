
const randomDelay= ()=>{ // we make a random delay function
    return new Promise((resolve, reject) => { // we are returning promise
        timeout= 1+6 * Math.random();  //we are equalling timeout to random number from 1 to 7;
        setTimeout (()=> {
              resolve() // we will resolve the promise
        },timeout*1000)
    })
}
const addItem=async(items)=> { //
    await randomDelay(); // we will wait for random delay
    let div=document.createElement("div"); // we will create element div
    div.innerHTML=items;   //we will put items to div
    document.body.append(div);// we will append the text
}
const displayMessage=async()=> { //a
    let t= setInterval(() => {
       let last =document.body.getElementsByTagName("div");
       last=last[last.length-1];
       if(last.innerHTML.endsWith("...")) {
        last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
       }
       else {
        last.innerHTML=last.innerHTML + ".";
       }

    }, 100);
let text = ["Initialized Hacking now reading your data...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up..."];
for (let element of text) {
    await addItem(element);
    
} 

setTimeout(() => {
    
    clearInterval(t);
}, 1000);

}
displayMessage();