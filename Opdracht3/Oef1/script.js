let image = document.querySelector("img");

image.addEventListener(`mouseover`, handleMouseoverImg);

function handleMouseoverImg() {
  let imageId = image.id;
  switch (imageId) {
    case "image1":
      image.src = "images/image1_2.jpg";
      image.id = "image2"
      break;
    case "image2":
      image.src = "images/image1.jpg";
      image.id = "image1"
  }
}
