import {
  $album,
  $singer,
  $albumName,
  $nameSong,
  audios,
  $back,
  $play,
  $next,
  $repeat,
  playList,
} from "../utils/const.js";
let currentSong = 0;
export default function listen(i = 0, play = true) {
  toShowCurrentSong(playList[i]);
  if(play){
    mediaPlayer(i);
  }
  currentSong = i;
  changeIconPlay();
  currentSongComponentUpdate(playList[i]);
}

function toShowCurrentSong(item) {
  $album.style.backgroundImage = `url(${item.album.cover_big})`;
  $nameSong.innerHTML = item.title_short;
  $singer.innerHTML = item.artist.name;
  $albumName.innerHTML = item.album.title;
}

function mediaPlayer(e) {
  for (let i = 0; i < audios.length; i++) {
    audios[i].currentTime = 0;
    i === e ? audios[i].play() : audios[i].pause();
  }
}

let $idPlay = document.querySelector("#play");
$play.addEventListener("click", () => {
  playSong(audios[currentSong]);
});

$repeat.addEventListener("click", () => repeatSong(audios[currentSong]));
$back.addEventListener("click", () => backSong());
$next.addEventListener("click", () => nextSong());

function playSong(player) {
  player.paused ? player.play() : player.pause();
  changeIconPlay();
}

function changeIconPlay() {
  let $paused = document.querySelector(".paused");
  if (!audios[currentSong].paused) {
    $idPlay.classList.remove("fa-play");
    $idPlay.classList.add("fa-pause");
    $paused.classList.remove("fa-play");
    $paused.classList.add("fa-pause");
  } else {
    $idPlay.classList.remove("fa-pause");
    $idPlay.classList.add("fa-play");
    $paused.classList.remove("fa-pause");
    $paused.classList.add("fa-play");
  }
}

function repeatSong(player) {
  player.currentTime = 0;
}

function backSong() {
  currentSong === 0 ? (currentSong = audios.length - 1) : (currentSong -= 1);
  listen(currentSong);
}

function nextSong() {
  currentSong === audios.length - 1 ? (currentSong = 0) : (currentSong += 1);
  listen(currentSong);
}

let $currentSongContainer = document.querySelector(".currentSong");
currentSongComponent(playList[0]);

function currentSongComponent(item) {
  let $snippetCurrentSong = document.createElement("DIV");
  $snippetCurrentSong.classList.add("snippetCurrentSong");
  let $singerCurrentSong = document.createElement("IMG");
  $singerCurrentSong.classList.add("singerCurrentSong");
  $singerCurrentSong.src = item.artist.picture_medium;
  let $titleCurrentSong = document.createElement("DIV");
  $titleCurrentSong.classList.add("titleCurrentSong");
  let $h2 = document.createElement("H2");
  $h2.classList.add("nameSingerCurrentSong");
  $h2.innerText = item.artist.name;
  let $span = document.createElement("SPAN");
  $span.classList.add("nameSongCurrentSong");
  $span.innerText = item.title_short;
  $titleCurrentSong.appendChild($h2);
  $titleCurrentSong.appendChild($span);
  $snippetCurrentSong.appendChild($singerCurrentSong);
  $snippetCurrentSong.appendChild($titleCurrentSong);

  let $timeCurrentSong = document.createElement("DIV");
  $timeCurrentSong.classList.add("timeCurrentSong");
  $timeCurrentSong.innerText = "02:46 ----- 4:05";

  let $soundCurrentSong = document.createElement("BUTTON");
  $soundCurrentSong.classList.add("soundCurrentSong");
  $soundCurrentSong.classList.add("btnMain");
  $soundCurrentSong.classList.add("playCurrent");
  let $icon = document.createElement("I");
  $icon.classList.add("paused");
  $icon.classList.add("fas");
  $icon.classList.add("fa-play");
  $soundCurrentSong.appendChild($icon);
  $soundCurrentSong.addEventListener("click", () =>
    playSong(audios[currentSong])
  );

  let $animationCurrentSong = document.createElement("DIV");
  $animationCurrentSong.classList.add("animationCurrentSong");
  let $containerAnimation = document.createElement("DIV");
  $containerAnimation.classList.add("containerAnimation");
  for (let i = 0; i < 4; i++) {
    let $bar = document.createElement("DIV");
    $bar.classList.add("bar");
    $containerAnimation.appendChild($bar);
  }
  $animationCurrentSong.appendChild($containerAnimation);

  $currentSongContainer.appendChild($snippetCurrentSong);
  $currentSongContainer.appendChild($timeCurrentSong);
  $currentSongContainer.appendChild($soundCurrentSong);
  $currentSongContainer.appendChild($animationCurrentSong);
}

function currentSongComponentUpdate(item) {
  let singerCurrentSong = document.querySelector(".singerCurrentSong");
  singerCurrentSong.src = item.artist.picture_medium;
  let nameSingerCurrentSong = document.querySelector(".nameSingerCurrentSong");
  nameSingerCurrentSong.innerText = item.artist.name;
  let nameSongCurrentSong = document.querySelector(".nameSongCurrentSong");
  nameSongCurrentSong.innerText = item.title_short;
}
