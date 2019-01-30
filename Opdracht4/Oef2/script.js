const text = document.querySelector("#text");
console.log(text);

const links = document.querySelectorAll("a");
console.log(links);

// links[0].addEventListener(`click`, handleClickAnchor0);
// function handleClickAnchor0() {
//   text.style.display = "block";
// }
// links[1].addEventListener(`click`, handleClickAnchor1);
// function handleClickAnchor1() {
//   text.style.display = "none";
// }

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener(`click`, handleClickAnchor);
    function handleClickAnchor() {
     if(i === 0) {
      text.style.display = "block";
    } else if(i === 1) {
        text.style.display = "none";
    }
  }

}
