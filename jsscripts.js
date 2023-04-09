console.log("Welcome to music demo");

//intialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('myProgressBar');
let songs = [
    {songName: "Lag ja gale",filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Lag ja gale",filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Lag ja gale",filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Lag ja gale",filePath: "song/1.mp3", coverPath: "covers/1.jpg"},

]


// Listen to events
myProgressBar.addEventListener('timeupdate')