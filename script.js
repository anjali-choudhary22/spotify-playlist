console.log("Welcome to spotify");

//Initilize the variables
let songIndex = 0;
let audioElement = new Audio('songs/alag-aasman.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  {songname: "Alag-Aasmaan",filepath: "songs/alag-aasman.mp3",coverpath: "cover/alag aasam.webp"} ,
  {songname: "Baarishein",filepath: "songs/Baarishein.mp3",coverpath: "cover/Baarishein.jpeg"} ,
  {songname: "kahani suno 2.0",filepath: "songs/Kahani Suno.mp3",coverpath: "cover/kahanisuno.jpeg"} ,
  {songname: "mere sawal ka",filepath: "songs/Mere Sawaal Ka.mp3",coverpath: "cover/mere sawal ka.jpeg"} ,
  {songname: "voh lamhe",filepath: "songs/Woh Lamhe Zeher.mp3",coverpath: "cover/voh lamhe.jpg"},
  {songname: "Asal mein",filepath: "songs/Asal Mein.mp3",coverpath: "cover/asal mein.jpeg"} ,
  {songname: "Tera-zikr",filepath: "songs/Tera Zikr.mp3",coverpath: "cover/tera zikr.jpeg"} ,
  {songname: "Raatan lambiyan",filepath: "songs/raatan Lambiyan.mp3",coverpath: "cover/raatan lambiyan.jpeg"} ,
  {songname: "sach keh raha hai",filepath: "songs/Sach keh raha hai.mp3",coverpath: "cover/sach keh raha h.jpeg"} ,
  {songname: "Ranjha",filepath: "songs/Ranjha.mp3",coverpath: "cover/ranjha.jpeg"} ,
  {songname: "Ajab-si",filepath: "songs/Ajab Si.mp3",coverpath: "cover/ajab si.jpeg"} ,
  {songname: "Baarish",filepath: "songs/Baarish.mp3",coverpath: "cover/baarish.jpeg"} ,
  {songname: "Tu chaiye",filepath: "songs/Tu Chaiye.mp3",coverpath: "cover/tu chaiye.jpeg"} ,
  {songname: "Ishq wala love",filepath: "songs/Ishq Wala Love.mp3",coverpath: "cover/ishq wala love.jpeg"} ,
  {songname: "Surili aakhiyon wale",filepath: "songs/Surili Akhiyon Wale.mp3",coverpath: "cover/surili akhiyon wale.jpeg"} 
]

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img").src = songs[i].coverpath;
    element.getElementsByClassName("songname").innerText = songs[i].songname;
})

//handle play/pause click
masterplay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
})
//listen to Events
audioElement.addEventListener('timeupdate', () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=> {
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100; 
})

const makeallplays = ()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeallplays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
  })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex >= 9){
    songIndex = 0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  mastersongname.innerText = songs[songIndex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
  
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex <= 0){
    songIndex = 0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  mastersongname.innerText = songs[songIndex].songname; 
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
  
})

