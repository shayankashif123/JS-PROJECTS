function timeUpdate() {
    const now= new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds= now.getSeconds();
    if(hours<10) {
        hours=`0`+hours;
    }
    if(minutes<10) {
        minutes=`0`+minutes;
    }
    if(seconds<10) {
        seconds=`0`+seconds
    }
    const timestring =`${hours}:${minutes}:${seconds}` 
    document.getElementById(`clock`).textContent=timestring
}
setInterval(timeUpdate,1000);
timeUpdate();