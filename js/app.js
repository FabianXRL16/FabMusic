import {
  $input,
  $random,
  $back,
  $play,
  $next,
  $repeat,
  playList,
} from "./const.js";

import song from "./components.js";

song(playList)

// import search from "./api.js";

// $input.addEventListener("keyup", (e) => {
//   if (e.keyCode === 13) {
//     search($input.value);
//     $input.value = "";
//   }
// });
