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

// let colorScheme = matchMedia("(prefers-color-scheme: dark)").matches;
// let body = document.querySelector("body");

// function themeDefault() {
//   if (colorScheme.matches) {
//     body.classList.add("dark");
//   } else {
//     body.classList.add("light");
//   }
// }

// themeDefault();

// document.querySelector("#changeTheme").addEventListener("click", function () {
//   if (colorScheme) {
//     body.classList.remove("dark");
//     body.classList.add("light");
//   } else {
//     body.classList.remove("light");
//     body.classList.add("dark");
//   }
//   colorScheme = !colorScheme;
// });
