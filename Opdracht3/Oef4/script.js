const formInputs = document.querySelectorAll("input");

const reset = document.querySelector("#reset");

reset.addEventListener(`click`, handleClickButton);

function handleClickButton() {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].value = "";
  }
}
