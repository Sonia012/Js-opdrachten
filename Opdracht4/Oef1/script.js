const image = document.querySelector("img");
console.log(image);

image.addEventListener(`mouseover`, handleMouseoverImg);
function handleMouseoverImg() {
  image.style.border = "3px solid red";
  image.addEventListener(`mouseout`, handleMouseoutImg);
  function handleMouseoutImg() {
    image.style.border = "none"
  }
}
