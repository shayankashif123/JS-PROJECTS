const alarm_audio=document.getElementById("alarm-audio");
let setAlarm=null;
function update_time() {
    const clock=document.getElementById("clock");
    const now= new Date();
    clock.innerText=now.toLocaleTimeString();
    if(setAlarm && now.getHours()===setAlarm.hours && now.getMinutes()===setAlarm.minutes) {
        play_alarm();
    }
}
function set_time() {
    const settime=document.getElementById("set-time").value;
    if(!settime) {
        alert("Invalid time for alarm")
    }
    else {
    const[hours,minutes]=settime.split(":");
    setAlarm={hours:parseInt(hours,10),minutes:parseInt(minutes,10)};
    alert(`Alarm has been set for ${settime}`);
}
}
function play_alarm() {
    alarm_audio.play();
    setAlarm=null;
    document.getElementById("stop-alarm").style.visibility = "visible"; 
}
function stop_alarm () {
    alarm_audio.pause();
    alarm_audio.currentTime = 0; // Reset audio to the beginning
    document.getElementById("stop-alarm").style.visibility = "hidden"; 
    
}
setInterval(update_time,1000);
document.getElementById("set-alarm").addEventListener("click",(e)=> {
    set_time();
}) 
document.getElementById("stop-alarm").addEventListener("click", stop_alarm);