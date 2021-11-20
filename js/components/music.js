import {
  $album,
  $nameSong,
  $random,
  $back,
  $play,
  $next,
  $repeat,
  playList,
} from "../utils/const.js";

export default function listen(item = playList[0]) {
  let audio = new Audio(item.preview);
  audio.autoplay = false;
  $play.addEventListener("click", function () {
    audio.paused ? audio.play() : audio.pause();
  });
  $album.style.backgroundImage = `url(${item.album.cover_big})`;
  $nameSong.innerHTML = item.title_short
}

