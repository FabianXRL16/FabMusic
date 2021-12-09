import {
  $album,
  $singer,
  $albumName,
  $nameSong,
  audios,
  $back,
  $random,
  $play,
  $next,
  $repeat,
  playList,
} from "../utils/const.js";

import song from "./item.js";

import getSongs from "../getSongs.js";
await getSongs()

let currentSong = 0;
export default async function listen(i = 0, play = true) {
  toShowCurrentSong(playList[i]);
  if (play) {
    mediaPlayer(i);
    let bars = document.querySelectorAll(".bar");
    for (let i = 0; i < 4; i++) {
      bars[i].style.animationIterationCount = "infinite";
      bars[i].style.animationDuration = "2s";
      bars[i].style.animationName = "bars";
    }
  }
  currentSong = i;
  changeIconPlay();
  currentSongComponentUpdate(playList[i]);
  audios[currentSong].ontimeupdate = updateTime;
  document.querySelector(".bar1").addEventListener("click", changeTime);
  changeIconItem(currentSong);
}

$random.addEventListener("click", function () {
  let padre = document.querySelector(".list");
  let item = document.querySelectorAll(".item");
  item.forEach((i) => padre.removeChild(i));

  let currentItem = playList[currentSong];

  playList.splice(currentSong, 1);

  let newList = playList.sort(() => Math.random() - 0.5);

  newList.unshift(currentItem);

  song(newList, listen);
});

function changeIconItem(currentSong) {
  let items = document.querySelectorAll(".item");
  let pos = document.querySelectorAll(".pos");
  let icons = document.querySelectorAll(".playItem");
  for (let i = 0; i < playList.length; i++) {
    if (currentSong === i) {
      items[i].classList.add("active");
      pos[i].style.display = "none";
      icons[i].style.display = "block";
    } else {
      items[i].classList.remove("active");
      pos[i].style.display = "block";
      icons[i].style.display = "none";
    }
  }
}

function updateTime() {
  document.querySelector(".currentTime").innerText = `${parseInt(
    this.currentTime / 60
  )}:${
    this.currentTime % 60 < 10
      ? "0" + parseInt(this.currentTime % 60)
      : parseInt(this.currentTime % 60)
  }`;
  let percentage = (100 * this.currentTime) / this.duration;
  document.querySelector(".bar2").style.width = `${percentage}%`;
  if (this.ended) {
    currentSong += 1;
  }
}

function changeTime(e) {
  let locationCLick = e.offsetX;
  let widthTotal = this.offsetWidth;
  let percentage = (100 * locationCLick) / widthTotal;
  let pos = Math.floor(audios[currentSong].duration * (percentage / 100));
  audios[currentSong].currentTime = pos;
}

function toShowCurrentSong(item) {
  $album.style.backgroundImage = `url(${item.imgAlbum})`;
  $nameSong.innerHTML = item.title;
  $singer.innerHTML = item.singer;
  $albumName.innerHTML = item.album;
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
  let bars = document.querySelectorAll(".bar");
  if (!audios[currentSong].paused) {
    $idPlay.classList.remove("fa-play");
    $idPlay.classList.add("fa-pause");
    $paused.classList.remove("fa-play");
    $paused.classList.add("fa-pause");
    for (let i = 0; i < 4; i++) {
      bars[i].style.animationName = "bars";
      bars[i].style.animationDuration = "2s";
      bars[i].style.animationIterationCount = "infinite";
    }
  } else {
    $idPlay.classList.remove("fa-pause");
    $idPlay.classList.add("fa-play");
    $paused.classList.remove("fa-pause");
    $paused.classList.add("fa-play");
    for (let i = 0; i < 4; i++) {
      bars[i].style.animationIterationCount = "0";
    }
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
  $singerCurrentSong.src = item.imgSinger;
  let $titleCurrentSong = document.createElement("DIV");
  $titleCurrentSong.classList.add("titleCurrentSong");
  let $h2 = document.createElement("H2");
  $h2.classList.add("nameSingerCurrentSong");
  $h2.innerText = item.singer;
  let $span = document.createElement("SPAN");
  $span.classList.add("nameSongCurrentSong");
  $span.innerText = item.title_short;
  $titleCurrentSong.appendChild($h2);
  $titleCurrentSong.appendChild($span);
  $snippetCurrentSong.appendChild($singerCurrentSong);
  $snippetCurrentSong.appendChild($titleCurrentSong);

  let $timeCurrentSong = document.createElement("DIV");
  $timeCurrentSong.classList.add("timeCurrentSong");
  let $currentTime = document.createElement("SPAN");
  $currentTime.classList.add("currentTime");
  $currentTime.innerText = "0:00";
  let $bar1 = document.createElement("DIV");
  $bar1.classList.add("bar1");
  let $bar2 = document.createElement("DIV");
  $bar2.classList.add("bar2");
  $bar1.appendChild($bar2);
  let $currentTotal = document.createElement("SPAN");
  $currentTotal.classList.add("currentTotal");
  $currentTotal.innerText = "0:00";
  $timeCurrentSong.appendChild($currentTime);
  $timeCurrentSong.appendChild($bar1);
  $timeCurrentSong.appendChild($currentTotal);

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
  singerCurrentSong.src = item.imgSinger;
  let nameSingerCurrentSong = document.querySelector(".nameSingerCurrentSong");
  nameSingerCurrentSong.innerText = item.title;
  let nameSongCurrentSong = document.querySelector(".nameSongCurrentSong");
  nameSongCurrentSong.innerText = item.singer;
  let currentTime = document.querySelector(".currentTime");
  currentTime.innerText = `${parseInt(audios[currentSong].currentTime / 60)}:${
    audios[currentSong].currentTime % 60 < 10
      ? "0" + (audios[currentSong].currentTime % 60)
      : audios[currentSong].currentTime % 60
  }`;
  let currentTotal = document.querySelector(".currentTotal");
  currentTotal.innerText = `${parseInt(item.duration / 60)}:${
    item.duration % 60 < 10 ? "0" + (item.duration % 60) : item.duration % 60
  }`;
}