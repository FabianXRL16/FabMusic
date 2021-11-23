import { playList } from "./utils/const.js";

import song from "./components/item.js";
import listenMusic from "./components/music.js";

song(playList, listenMusic);
listenMusic(0, false);

document.querySelector("#random").addEventListener("click", function () {
  let padre = document.querySelector(".list");
  let item = document.querySelectorAll(".item");
  item.forEach((i) => padre.removeChild(i));
  let newPlayList = playList.sort(() => Math.random() - 0.5);
  song(newPlayList, listenMusic);
  console.log(newPlayList);
});

// import search from "./api.js";

// $input.addEventListener("keyup", (e) => {
//   if (e.keyCode === 13) {
//     search($input.value);
//     $input.value = "";
//   }
// });
