const textField = document.querySelector("input");
console.log(textField);

textField.addEventListener(`keydown`, handleKeydownInput);

function handleKeydownInput() {
  let input = textField.value;
  let pressedKey = event.key;
  alert(input + pressedKey);
}
