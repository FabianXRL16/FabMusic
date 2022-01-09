import song from "./components/item.js";
import listenMusic from "./components/music.js";

// import getSongs from "./getSongs.js";
import { playList, $socialNetwork } from "./utils/const.js";

// await getSongs();

// if(playList.length > 0){
//   song(playList, listenMusic);
//   listenMusic(0, false);
// }

song(playList, listenMusic);
listenMusic(0, false);

let colorScheme = matchMedia("(prefers-color-scheme: dark)").matches;

document.querySelector("#changeTheme").addEventListener("click", function () {
  let newStyle = document.documentElement.style;
  let logo = document.querySelectorAll(".logoTheme");
  let icon = document.querySelectorAll(".iconTheme");
  if (colorScheme) {
    newStyle.setProperty("--bg-1", "#f8f8f8");
    newStyle.setProperty("--bg-2", "#EAEAEA");
    newStyle.setProperty("--bg-3", "#afafaf");
    newStyle.setProperty("--bg-4", "#111111");
    newStyle.setProperty("--title", "#111111");
    newStyle.setProperty("--subtitle", "#353535");
    newStyle.setProperty("--text", "#525252");
    newStyle.setProperty("--shadow", "rgba(149, 157, 165, 0.377)");
    logo.forEach((n) => (n.src = "./assets/images/logo.svg"));
    icon.forEach((n) => {
      n.classList.remove("fa-moon");
      n.classList.add("fa-sun");
    });
  } else {
    newStyle.setProperty("--bg-1", "#111111");
    newStyle.setProperty("--bg-2", "#181818");
    newStyle.setProperty("--bg-3", "#2e2e2e");
    newStyle.setProperty("--bg-4", "#414141");
    newStyle.setProperty("--title", "#a7a7a7");
    newStyle.setProperty("--subtitle", "#a5a5a5");
    newStyle.setProperty("--text", "#696969");
    newStyle.setProperty("--shadow", "rgba(0, 0, 0, 0.849)");
    logo.forEach((n) => (n.src = "./assets/images/logo-dark.svg"));
    icon.forEach((n) => {
      n.classList.remove("fa-sun");
      n.classList.add("fa-moon");
    });
  }
  colorScheme = !colorScheme;
});

let socialN = false;
document.querySelector(".dev").addEventListener("click", function () {
  socialN = !socialN;
  socialN
    ? ($socialNetwork.style.transform = "scaleY(1)")
    : ($socialNetwork.style.transform = "scaleY(0)");
});
