import { playList } from "./utils/const.js";

import song from "./components/item.js";
import listenMusic from "./components/music.js";

listenMusic()

song(playList, listenMusic);

// import search from "./api.js";

// $input.addEventListener("keyup", (e) => {
//   if (e.keyCode === 13) {
//     search($input.value);
//     $input.value = "";
//   }
// });
