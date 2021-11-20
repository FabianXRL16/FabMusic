import {
  $album,
  $random,
  $back,
  $play,
  $next,
  $repeat,
  playList
} from "../utils/const.js";

export default function listen(item = playList[0]) {
  $album.style.backgroundImage = `url(${item.album.cover_big})`;
}
