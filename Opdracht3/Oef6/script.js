const images = document.querySelectorAll("img");
console.log(images);

images.forEach(image => {
  let oldSource = image.src;
  let newSource = oldSource.replace(".jpg", "_2.jpg");
  image.addEventListener(`mouseover`, handleMouseoverImg);
  function handleMouseoverImg() {
     image.src = newSource;
  }
  image.addEventListener(`mouseout`, handleMouseoutImg);
  function handleMouseoutImg() {
    image.src = oldSource;
  }
})
