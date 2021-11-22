import { playList } from "./utils/const.js";

import song from "./components/item.js";
import listenMusic from "./components/music.js";

song(playList, listenMusic);
listenMusic(0, false)

// import search from "./api.js";

// $input.addEventListener("keyup", (e) => {
//   if (e.keyCode === 13) {
//     search($input.value);
//     $input.value = "";
//   }
// });
