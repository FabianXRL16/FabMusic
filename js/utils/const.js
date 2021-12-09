// import { firebaseConfig } from "../firebase/firebase.config.js";

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// const getSongs = () => db.collection("PlayList").get();

let playList = [];

// async function getPlayList() {
//   const querySnapshot = await getSongs();
//   querySnapshot.forEach((doc) => playList.push(doc.data()));
// }
// getPlayList();

let $input = document.querySelector(".input");

let $album = document.querySelector(".album");
let $singer = document.querySelector(".singer");
let $albumName = document.querySelector(".albumName");

let audios = [];

let $nameSong = document.querySelector(".nameSong");

let $random = document.querySelector("#random");
let $back = document.querySelector("#back");
let $play = document.querySelector(".play");
let $next = document.querySelector("#next");
let $repeat = document.querySelector("#repeat");

export {
  $input,
  $album,
  $singer,
  $albumName,
  audios,
  $nameSong,
  $random,
  $back,
  $play,
  $next,
  $repeat,
  playList,
};
