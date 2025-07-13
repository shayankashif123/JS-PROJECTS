const randomDelay=()=> {
    return new Promise((resolve, reject) => {
        const timeout=1+4*Math.random(); 
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    });
};
const addItem=async(items)=> {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML=items;
    document.body.append(div);
}
const displayMessage=async()=> {
    let t = setInterval(() => {
       let last=document.getElementsByTagName("div");
       last=last[last.length-1];
       if(last.innerHTML.endsWith("...")) {
        last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
       } 
       else {
        last.innerHTML+=".";
       }
    }, 100);
    let text=["Initialized Hacking now reading your data...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up..."]
    for(let element of text) {
       await addItem(element)
    }
    clearInterval(t);
} 
displayMessage();