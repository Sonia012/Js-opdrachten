const paswoord = document.querySelector("#password");
console.log(paswoord);
const bevestiging = document.querySelector("#confirmation");
console.log(bevestiging);
const inputs = document.querySelectorAll("input");
console.log(inputs);

const button = document.querySelector("button");
console.log(button);

button.addEventListener(`click`, handleClickButton);
function handleClickButton() {
  if(bevestiging.value === paswoord.value) {
    inputs.forEach(input =>
      input.style.borderColor = "green")
  } else {
      inputs.forEach(input =>
        input.style.borderColor = "red")
  }
}
