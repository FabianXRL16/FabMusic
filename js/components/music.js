import {
  $album,
  $nameSong,
  audios,
  //   $random,
  //   $back,
  $play,
  //   $next,
  $repeat,
  playList,
} from "../utils/const.js";

export default function listen(i = 0) {
  toShowCurrentSong(playList[i]);
  mediaPlayer(i);
}

function toShowCurrentSong(item) {
  $album.style.backgroundImage = `url(${item.album.cover_big})`;
  $nameSong.innerHTML = item.title_short;
}

function mediaPlayer(e) {
  for (let i = 0; i < audios.length; i++) {
    audios[i].currentTime = 0;
    i === e ? audios[i].play() : audios[i].pause();
  }
}

function playSong(player) {
  player.paused ? player.play() : player.pause();
}
// function repeatSong(player) {
//   player.currentTime = 0;
// }
