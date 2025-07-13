let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
setInterval(() => {
    let d = new Date();
    let htime= d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
     let hrotation = 30 * htime + mtime/2;
     let mrotation = 6*mtime;
     let srotation = 6*stime;
    hours.style.transform=`rotate(${hrotation}deg)`
    minutes.style.transform=`rotate(${mrotation}deg)`
    seconds.style.transform=`rotate(${srotation}deg)`
}, 1000);