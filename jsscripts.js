console.log("Welcome to music demo");

//intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlays = document.getElementById('masterPlays');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "ringpin", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "we don't trust police", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "avcient", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "chale aao", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "na jana", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "rukh jao", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "bhut hua ab", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "so jan hum par", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },


]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//handle paly/pause click
masterPlays.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlays.classList.remove('fa-play-circle');
        masterPlays.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlays.classList.remove('fa-pause-circle');
        masterPlays.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {

    //udating seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitem-Play')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItem-Play')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlays.classList.remove('fa-play-circle');
        masterPlays.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})