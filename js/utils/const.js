let playList = [
  {
    album: "Amar es Combatir",
    audio: "https://demo-fxrl16.s3.amazonaws.com/MANA-LabiosCompartidos.mp3",
    duration: 271,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/384fb92f4ad9c4f74297ac3a30aab36f/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/8471c0b3e261581bb4904ef41fd4852a/250x250-000000-80-0-0.jpg",
    singer: "Maná",
    title: "Labios Compartidos",
    score: 4.2,
  },
  {
    album: "Masterpiece : Commemorative Edition",
    audio: "https://demo-fxrl16.s3.amazonaws.com/RAKIM_Y_KEN_Y-Lloraras.mp3",
    duration: 241,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/8c617dd03b130cb3b7f83972b31d05a3/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/dc464366754ea4a04d3d543b87c95829/250x250-000000-80-0-0.jpg",
    singer: "R.K.M & Ken-Y",
    title: "Llorarás",
    score: 3.7,
  },
  {
    album: "Valio La Pena",
    audio: "https://demo-fxrl16.s3.amazonaws.com/MARC_ANTONHY-AhoraQuien.mp3",
    duration: 311,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/22af1faf316c4e61fbc890b750f28e1e/250x250-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/0fad6583d2baad8b8e8a27cef8688c25/500x500-000000-80-0-0.jpg",
    singer: "Marc Anthony",
    title: "Ahora Quien",
    score: 4.3,
  },
  {
    album: "Soy el Mismo",
    audio: "https://demo-fxrl16.s3.amazonaws.com/PRINCE_ROYCE-TeRobare.mp3",
    duration: 210,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/e36d44f72417bafc57a7ef7d78e018df/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/92982ac686986cc0247afb9d9ccc6531/250x250-000000-80-0-0.jpg",
    singer: "Prince Royce ",
    title: "Te Robaré",
    score: 4.1,
  },
  {
    album: "For You",
    audio:
      "https://demo-fxrl16.s3.amazonaws.com/SELENA_GOMEZ-LoveYouLikeALoveSongBaby.mp3",
    duration: 188,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/35b613129d9db8fb1ae47d285e139bc2/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/a4e8d3ca37569dccb17f7a3b2ebc950e/250x250-000000-80-0-0.jpg",
    singer: "Selena Gomez",
    title: "Love You Like A Love Song",
    score: 3.9,
  },
  {
    album: "Donde Vamos a Parar",
    audio: "https://demo-fxrl16.s3.amazonaws.com/RIO-TodoEstabaBien.mp3",
    duration: 287,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/275849fe117e4608c052244b42ae4b71/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/a9707ea80e5a8a903e1b4f87decf75ad/250x250-000000-80-0-0.jpg",
    singer: "Rio",
    title: "Todo Estaba Bien",
    score: 3.6,
  },
  {
    album: "Lo Que Andábamos Buscando (Special Para CEV)",
    audio:
      "https://demo-fxrl16.s3.amazonaws.com/ELEFANTE-DeLaNocheALaMa%C3%B1ana.mp3",
    duration: 266,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/e0e142e106bb9800db352cf1aab6ee48/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/11ab5eec566184ae1c339ad70b37fe0a/250x250-000000-80-0-0.jpg",
    singer: "Elefante",
    title: "De la Noche a la Mañana",
    score: 3.9,
  },
  {
    album: "Future Nostalgia",
    audio: "https://demo-fxrl16.s3.amazonaws.com/DUA_LIPA-BreakMyHeart.mp3",
    duration: 222,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/d0f8d853e871838a4a6d8e5b7cdd1432/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/250x250-000000-80-0-0.jpg",
    singer: "Dua Lipa",
    title: "Break My Heart",
    score: 4.0,
  },
  {
    album: "Libre",
    audio: "https://demo-fxrl16.s3.amazonaws.com/AMEN-TeQuiero.mp3",
    duration: 251,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/a6d4d2a108433612c5311a229973c1a2/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/66481c198e130c9e94a109334df01e0d/250x250-000000-80-0-0.jpg",
    singer: "Amén",
    title: "Te Quiero",
    score: 3.8,
  },
  {
    album: "Escapology",
    audio: "https://demo-fxrl16.s3.amazonaws.com/ROBBIE_WILLIAMS-Feel.mp3",
    duration: 259,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/147bdb75eec59a4cafe05bd2fb92e46d/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/e8400d3544e4720ba2c6e827d1de59b0/250x250-000000-80-0-0.jpg",
    singer: "Robbie Williams",
    title: "Feel",
    score: 4.0,
  },
  {
    album: "Lazarus",
    audio: "https://demo-fxrl16.s3.amazonaws.com/BRUNO_MARS-Billionaire.mp3",
    duration: 213,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/15d0fd6eb7c87a7e495a52f403bb1127/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/54d69cc301f3d86f4bda1876aecff178/250x250-000000-80-0-0.jpg",
    singer: "Travie McCoy, Bruno Mars",
    title: "Billionaire (feat. Bruno Mars)",
    score: 4.0,
  },
  {
    album: "Perfecta",
    audio: "https://demo-fxrl16.s3.amazonaws.com/REIK_ft_MALUMA-Perfecta.mp3",
    duration: 174,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/1ee8e15a7f17e711339947bacfa56ce8/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/32424c8189599c01667e724bf3eb64e7/250x250-000000-80-0-0.jpg",
    singer: "Reik, Maluma",
    title: "Perfecta",
    score: 3.9,
  },
  {
    album: "Flashdance (Original Soundtrack From The Motion Picture)",
    audio: "https://demo-fxrl16.s3.amazonaws.com/MICHAEL_SEMBELLO-Maniac.mp3",
    duration: 245,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/bfa5c96e4b7da2e78247ed2ee56d6d1a/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/aa1a7fb8e001c285e048d7f3fb1bb2ac/250x250-000000-80-0-0.jpg",
    singer: "Michael Sembello",
    title: "Maniac",
    score: 4.1,
  },
  {
    album: "Purpose (Deluxe)",
    audio:
      "https://demo-fxrl16.s3.amazonaws.com/JUSTIN_BIEBER-Company.mp3",
    duration: 232,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/340283aafac320864b207c420124ee46/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg",
    singer: "Justin Bieber",
    title: "Company",
    score: 3.9,
  },
  {
    album: "The Blueprint 3",
    audio: "https://demo-fxrl16.s3.amazonaws.com/JAY-Z-EmpireStateOfMind.mp3",
    duration: 282,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/e0edb930ad843bb002c04956a81ce7de/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/90fab088c4d091618e7386f688803673/250x250-000000-80-0-0.jpg",
    singer: "JAY-Z, Alicia Keys",
    title: "Empire State Of Mind",
    score: 3.9,
  },
  {
    album: "Butter",
    audio: "https://demo-fxrl16.s3.amazonaws.com/BTS+-Butter.mp3",
    duration: 165,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/0cc1c0ada6f9aab8128e7d8a7d61aec2/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/250x250-000000-80-0-0.jpg",
    singer: "BTS",
    title: "Butter",
    score: 4.0,
  },
];

let $input = document.querySelector(".input");

let $album = document.querySelector(".album");
let $singer = document.querySelector(".singer");
let $albumName = document.querySelector(".albumName");
let $point = document.querySelector(".point");

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
  $point,
  audios,
  $nameSong,
  $random,
  $back,
  $play,
  $next,
  $repeat,
  playList,
};
