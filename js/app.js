import { $input } from "./const.js";
import search from "./api.js";

$input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    search($input.value);
    $input.value = "";
  }
});
