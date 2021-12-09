import { playList } from "./utils/const.js";

import { firebaseConfig } from "./firebase/firebase.config.js";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const getListSongs = () => db.collection("PlayList").get();

export default async function getPlayList() {
  const querySnapshot = await getListSongs();
  querySnapshot.forEach((doc) => playList.push(doc.data()));
}
