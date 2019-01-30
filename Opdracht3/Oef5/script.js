const image = document.querySelectorAll("img");
console.log(image);

for(let i = 0; i < image.length; i++) {
    image[i].addEventListener(`mouseover`, handleMouseoverImg);
    console.log(image[i]);
      function handleMouseoverImg() {
        let imageId = image[i].id;
        console.log(imageId);
        switch (imageId) {
          case "image1":
            image[i].src = "images/image2.jpg";
            image[i].id = "image2";
            break;
          case "image2":
            image[i].src = "images/image3.jpg";
            image[i].id = "image3";
            break;
          case "image3":
            image[i].src = "images/image4.jpg";
            image[i].id = "image4";
            break;
          case "image4":
            image[i].src = "images/image5.jpg";
            image[i].id = "image5";
            break;
          case "image5":
            image[i].src = "images/image1.jpg";
            image[i].id = "image1";
        }
      }
}
