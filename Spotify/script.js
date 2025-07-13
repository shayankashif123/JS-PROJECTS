let currentSong = new Audio();
let currFolder;
let songList = [];
function secondtominutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;

}
async function getSong(folder) {
    currFolder = folder;
    try {
        let a = await fetch(`/${folder}/`);
        if (!a.ok) {
            throw new Error(`HTTP error! status: ${a.status}`);
        }
        let response = await a.text();
        console.log('Response:', response);
        let div = document.createElement('div');
        div.innerHTML = response;
        let as = div.getElementsByTagName('a');
        console.log('As:', as);
        songList = Array.from(as)
            .filter(a => a.href.endsWith('.mp3'))
            .map(a => a.href.split(`/${folder}/`)[1]);
        console.log('Song list:', songList);

        let songUl = document.querySelector(".song_list ul");
        songUl.innerHTML = '';
        for (const song of songList) {
            songUl.innerHTML += `<li>
                <img class="invert logo" src="musical-note.png" alt=" ">
                <div class="info">
                    <div>${song.replaceAll("%20", " ")}</div>
                    <div>Shayan</div>
                </div>
                <div class="play">
                    <span>Play now</span>
                    <img class="invert logo play-btn" src="play-button.png" alt="">
                </div>
            </li>`;
        }
        Array.from(document.querySelector(".song_list ul").getElementsByTagName("li")).forEach(e => {
            e.addEventListener("click", () => {
                playSong(e.querySelector(".info").firstElementChild.innerHTML.trim());
            });
        });

    } catch (error) {
        console.error('Error fetching songs:', error);
    }
    return songList;
}

const playSong = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track;
    if (!pause) {
        document.querySelectorAll(".play-btn").forEach(btn => btn.src = "play-button.png");
        document.querySelectorAll(".info").forEach(info => {
            if (info.textContent.includes(decodeURI(track))) {
                const playBtn = info.parentElement.querySelector(".play-btn");
                if (playBtn) {
                    playBtn.src = "pause.png";
                }
            }
        });
    }
    document.querySelector('.song_info').innerHTML = decodeURI(track);
    document.querySelector('.song_time').innerHTML = "00:00";
    currentSong.play().catch((error) => {
        console.error('Error playing song:', error);
    });
}

async function displayAlbum() {
    try {
        let a = await fetch(`/songs/`);
        if (!a.ok) {
            throw new Error(`HTTP error! status: ${a.status}`);
        }
        let response = await a.text();
        console.log('Response:', response);
        let div = document.createElement('div');
        div.innerHTML = response;
        let as = div.getElementsByTagName('a');
        console.log('As:', as);

        let cardContainer = document.querySelector(".card-container");
        let array = Array.from(as);
        for (let e of array) {
            if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
                let folder = e.href.split("/").slice(-2)[0];

                try {
                    let a = await fetch(`/songs/${folder}/info.json`);
                    if (!a.ok) {
                        throw new Error(`HTTP error! status: ${a.status}`);
                    }
                    let response = await a.json();
                    cardContainer.innerHTML += `<div data-folder="${folder}" class="card">
                        <div class="play-gr">
                            <img src="play-button (1).png" alt="">
                        </div>
                        <img class="cover" src="/songs/${folder}/cover.jpg" alt=" ">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`;
                } catch (error) {
                    console.error(`Error fetching album info for folder ${folder}:`, error);
                }
            }
        }

        Array.from(document.getElementsByClassName("card")).forEach(e => {
            e.addEventListener("click", async event => {
                
                songs = await getSong(`songs/${event.currentTarget.dataset.folder}`)  
                console.log('Songs:', songs);
                playSong(songs[0]);
            });
        });

    } catch (error) {
        console.error('Error fetching albums:', error);
    }
}

async function main() {
    await getSong("songs");
    await displayAlbum();
    // playSong(songList[0], true);
    document.querySelector(".play-bar-btn").addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            document.querySelector(".play-bar-btn").src = "pause.png";
        } else {
            currentSong.pause();
            document.querySelector(".play-bar-btn").src = "play-button-arrowhead.png";
        }
    })
    currentSong.addEventListener("timeupdate",()=> {
        document.querySelector(".song_time").innerHTML = `${secondtominutes(currentSong.currentTime)} / ${secondtominutes(currentSong.duration)}`

        document.querySelector(".circle").style.left=(currentSong.currentTime/currentSong.duration) *100 + "%";
        document.querySelector(".seekbar").addEventListener("click",(e)=> {
            let percenetage = e.offsetX / e.target.offsetWidth;
            document.querySelector(".circle").style.left = percenetage * 100 + "%";
            currentSong.currentTime = percenetage * currentSong.duration;
        })
    })
    document.querySelector(".next-play-btn").addEventListener("click",()=> {
        currentSong.pause();
        let index=songList.indexOf(currentSong.src.split("/").pop());
        if((index+1)<songList.length) {
            playSong(songList[index+1]);
        }
    })
    document.querySelector(".prev-play-btn").addEventListener("click",()=> {
        currentSong.pause();
        let index = songList.indexOf(currentSong.src.split("/").pop());
        if((index-1)>=0) {
            playSong(songList[index-1]);
        }
})
currentSong.addEventListener("ended",()=> {
    let index= songList.indexOf(currentSong.src.split("/").pop());
    if((index+1)<songList.length) {
        playSong(songList[index+1]);
    }
    else {
        currentSong.pause();
    }
})
document.querySelector("#volume").addEventListener("input",(e)=> {
    currentSong.volume = (e.target.value)/100;
    if(currentSong.volume==0) {
        document.querySelector(".volume-logo").src = "mute.png";
    }
    else {
        document.querySelector(".volume-logo").src = "volume-up.png";
    }
})
document.querySelector(".volume-logo").addEventListener("click",(e)=> {
    if(e.target.src.includes("volume-up.png")) {
        e.target.src = "mute.png";
        currentSong.volume = 0;
        document.querySelector("#volume").value = 0;
    }
    else{
        e.target.src = "volume-up.png";
        currentSong.volume = 0.5;
        document.querySelector("#volume").value = 50;
    }
   
})
document.querySelector(".hamburger img").addEventListener("click",()=> {
    document.querySelector(".left").style.left = "0";
    document.querySelector(".close img").style.display = "block";
})
document.querySelector(".close img").addEventListener("click",()=> {
    document.querySelector(".left").style.left = "-100%";
    document.querySelector(".close img").style.display = "none";
})
}
main();

