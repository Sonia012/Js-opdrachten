document.addEventListener(`keydown`, handleKeydownDiv);
const divs = document.getElementsByTagName("div");
console.log(divs);
function handleKeydownDiv() {
  let pressedKey = event.key;
    if (pressedKey === "ArrowUp"||pressedKey === "ArrowDown"||pressedKey === "ArrowLeft"||pressedKey === "ArrowRight") {
      console.log(pressedKey);
      for (let i = 0; i < divs.length; i++) {
        divs[i].className = "highlight"
      }
      document.addEventListener(`keyup`, handleKeyupDiv);
      function handleKeyupDiv() {
        let unpressedKey = event.key;
        for (let i = 0; i < divs.length; i++) {
          divs[i].classList.remove("highlight")
        }
      }
    }
 }
