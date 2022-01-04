let playList = [
  {
    album: "RISE",
    audio: "https://demo-fxrl16.s3.amazonaws.com/LOL-Rise.mp3",
    duration: 193,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/4349e2eedfe96be5c76b5ad7fa13727f/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/21e53b8e8285f84f60601d895c39c900/250x250-000000-80-0-0.jpg",
    singer: "League of legends, The Glitch Mob",
    title: "RISE",
  },
  {
    album: "Smoke + Mirrors (Deluxe)",
    audio: "https://demo-fxrl16.s3.amazonaws.com/IMAGINE_DRAGONS-ImSoSorry.mp3",
    duration: 230,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/f778ecc964c57c30c082444c22bf3264/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/a9087f289c3bd826eb8c8bd48cd11f1e/250x250-000000-80-0-0.jpg",
    singer: "Imagine Dragons",
    title: "Im So Sorry",
  },
  {
    album: "Birds In The Trap Sing McKnight",
    audio: "https://demo-fxrl16.s3.amazonaws.com/TRAVIS_SCOTT-goosebumps.mp3",
    duration: 244,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/b4edc0fc32f430870375f8fb8f825ee7/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/79146f056c0ec39873ed2acd06fe1cf4/250x250-000000-80-0-0.jpg",
    singer: "Travis Scott",
    title: "Goosebumps",
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
  },
  {
    album: "Lo Que Andábamos Buscando (Special Para CEV)",
    audio:
      "https://demo-fxrl16.s3.amazonaws.com/ELEFANTE-DeLaNocheALaMa%C3%B1ana.mp3",
    duration: 271,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/e0e142e106bb9800db352cf1aab6ee48/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/11ab5eec566184ae1c339ad70b37fe0a/250x250-000000-80-0-0.jpg",
    singer: "Elefante",
    title: "De la Noche a la Mañana",
  },
  {
    album: "Don't You Wanna Know",
    audio:
      "https://demo-fxrl16.s3.amazonaws.com/NOAH_SCHNACKY-DontYouWannaKnow.mp3",
    duration: 211,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/8704ecbc306bad4bafeca9d042f5c8e8/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/c6e682dda9f3d0836d6dc64a2eae28a5/250x250-000000-80-0-0.jpg",
    singer: "Noah Schnacky, Jimmie Allen",
    title: "Dont You Wanna Know",
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
  },
  {
    album: "Future Nostalgia",
    audio: "https://demo-fxrl16.s3.amazonaws.com/DUA_LIPA-Physical.mp3",
    duration: 194,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/d0f8d853e871838a4a6d8e5b7cdd1432/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/250x250-000000-80-0-0.jpg",
    singer: "Dua Lipa",
    title: "Physical",
  },
  {
    album: "Feels Like Summer",
    audio:
      "https://demo-fxrl16.s3.amazonaws.com/SAMUEL_JACK-FeelsLikeSummer.mp3",
    duration: 187,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/5c04a779405dab12faa96784cec674a8/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/5842e90c035b7ec5e47269c89982f683/250x250-000000-80-0-0.jpg",
    singer: "Samuel Jack",
    title: "Feels Like Summer",
  },
  {
    album: "Todo De Ti",
    audio: "https://demo-fxrl16.s3.amazonaws.com/RAUW_ALEJANDRO-TodoDeTi.mp3",
    duration: 203,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/7167a61f54a62c453f4d99ee59c151a4/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/cbc5976deee3b1e86d44c1837486804f/250x250-000000-80-0-0.jpg",
    singer: "Rauw Alejandro",
    title: "Todo De Ti",
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
  },
  {
    album: "The Very Best of Billy Ocean",
    audio:
      "https://demo-fxrl16.s3.amazonaws.com/BILLY_OCEAN-CaribbeanQueen.mp3",
    duration: 232,
    imgAlbum:
      "https://e-cdns-images.dzcdn.net/images/cover/8ba46c9d4354710600f14508eaa76d8d/500x500-000000-80-0-0.jpg",
    imgSinger:
      "https://e-cdns-images.dzcdn.net/images/artist/6af6e846e59b5b1a34fca0d3a4fd5a41/250x250-000000-80-0-0.jpg",
    singer: "Billy Ocean",
    title: "Caribbean Queen (No More Love On the Run)",
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
  },
];

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
