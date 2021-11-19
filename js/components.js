export default function showPlayList(list) {
  let $list = document.querySelector(".list");
  list.map((item, index) => {
    let $item = document.createElement("BUTTON");
    $item.classList.add("item");
    $item.classList.add("btn");

    let $pos = document.createElement("DIV");
    $pos.classList.add("pos");
    let numPos = document.createTextNode(index + 1);
    $pos.appendChild(numPos);

    let $name = document.createElement("DIV");
    $name.classList.add("name");
    let nameSong = document.createTextNode(item.title_short);
    $name.appendChild(nameSong);

    let $snippet = document.createElement("DIV");
    $snippet.classList.add("snippet");
    let $duration = document.createElement("SPAN");
    $duration.classList.add("duration");
    let time = document.createTextNode(
      `${parseInt(item.duration / 60)}:${
        item.duration % 60 < 10
          ? "0" + (item.duration % 60)
          : item.duration % 60
      }`
    );
    $duration.appendChild(time);
    $snippet.appendChild($duration);

    $item.addEventListener("click", function () {
      console.log(item);
    });

    $item.appendChild($pos);
    $item.appendChild($name);
    $item.appendChild($snippet);
    $list.appendChild($item);
  });
}
