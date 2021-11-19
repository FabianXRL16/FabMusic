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

// import axios from "axios";

// const URL = "https://deezerdevs-deezer.p.rapidapi.com/search";

// export default async function getDataApi(findMusic) {
//   try {
//     const response = await axios.get(URL, {
//       params: { q: `${findMusic}` },
//       headers: {
//         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//         "x-rapidapi-key": "118e940fd1mshae5c7ec4c61d02fp17f896jsn5361688cb6f2",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
