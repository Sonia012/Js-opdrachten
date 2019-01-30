const textField = document.querySelector("input");
console.log(textField);
textField.addEventListener(`blur`, handleBlurInput);

function handleBlurInput() {
  alert("Dank u voor uw deelname");
}
