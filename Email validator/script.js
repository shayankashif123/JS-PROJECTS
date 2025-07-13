let btn = document.querySelector("#btn");
let resultCont = document.querySelector(".resultCont");
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

btn.addEventListener("click",async(e)=> {
    e.preventDefault();
    resultCont.innerHTML = `<img width="123" src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="Loading...">`;
    let key = `ema_live_d1MJJOfuf56S2XcftTjauPxwfbxr4TNvngEbaDms`;
    let user_name= document.querySelector("#user-mail").value
    if (!isValidEmail(user_name)) {
        resultCont.innerHTML = `<div style="color: red;">Please enter a valid email address.</div>`;
        return;
    }
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${user_name}`
    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }
        let result = await res.json();
        let str = ``
        for(key of Object.keys(result)) {
           if(result[key]!=="" && result[key]!==" ") {
               str = str + `<div>${key}:${result[key]}</div>`
           }
        }
        resultCont.innerHTML = str || `<div>No valid data available.</div>`;

    } catch(error) {
        resultCont.innerHTML = `<div>Error: ${error.message}</div>`;
    }

})