function twelveClock() {
    const now = new Date();
    let hours= now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let ampm;
    if(hours==0) {
        hours=12
        ampm="AM"
    }
    else if(hours>12) {
        hours=hours%12;
        ampm="PM"
    }
    else if(hours<12) {
        ampm="AM";
    }
    else {
        ampm="PM"
    }
    let formattedMint;
    if(minutes>=10) {
        formattedMint=minutes;
    }
    else {
        formattedMint='0'+minutes
    }
    let formattedSec;
    if(seconds>=10) {
        formattedSec=seconds;
    }
    else {
        formattedSec='0'+seconds
    }
    let timestring=document=`${hours}:${formattedMint}:${formattedSec} ${ampm}`
    document.getElementById(`clock`).textContent=timestring;
}
setInterval(twelveClock,1000)
twelveClock()
