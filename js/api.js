const KEY = "0092fa3c45msh22e1efc93b8d941p1bebf3jsne23366531f9e";
const HOST = "deezerdevs-deezer.p.rapidapi.com";

export default function getMusic(findMusic) {
  fetch(`https://${HOST}/search?q=${findMusic}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
