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
export default function listen(i = 0) {
  toShowCurrentSong(playList[i]);
  mediaPlayer(i);
  currentSong = i;
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
$play.addEventListener("click", () => playSong(audios[currentSong]));
$repeat.addEventListener("click", () => repeatSong(audios[currentSong]));
$back.addEventListener("click", () => backSong());
$next.addEventListener("click", () => nextSong());
function playSong(player) {
  player.paused ? player.play() : player.pause();
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
