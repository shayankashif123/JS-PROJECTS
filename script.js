let currentSong = new Audio();
let currFolder;
let songList = [];
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

        let songUl = document.querySelector(".song_list").getElementsByTagName('ul')[0];
        songUl.innerHTML = '';
        for (const song of songList) {
            songUl.innerHTML += `<li> <img class = "invert logo" src "musical-note.png" alt " ">
        <div class = "info">
        <div>${song.replaceAll("%20", " ")}</div>
        <div>Shayan</div>
        </div>
        <div class = "play" >
        <span>Play now</span>
        <img class="play-btn" src"play-button.png" alt"">
         </div>
         </li>`
        }
        Array.from(document.querySelector(".song_list").getElementsByTagName('li')).forEach(e => {
            e.addEventListener('click', () => {
                playSong(e.querySelector('.info').firstChild.innerHTML.trim());
            })
        })

    } catch (error) {
        console.error('Error fetching songs:', error);
    }
    return songList;

}
const playSong = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track;
    if (!pause) {
        currentSong.play();
        document.querySelector(".play-btn").src = "pause-button.png";
    }
    document.querySelector('.song_info').innerHTML = decodeURI(track);
    document.querySelector('.song_time').innerHTML= "00:00";
}
async function main() {
    let songList = await getSong("songs");
    console.log('Final song list:', songList);
}

main();
