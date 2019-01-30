const text = document.querySelector("p");
console.log(text);

const divs = document.querySelectorAll("div");
console.log(divs);

divs.forEach(div => {
  div.addEventListener(`click`, handleClickDiv);
  function handleClickDiv() {
    let classNaam = div.className;
    switch (classNaam) {
      case "color green":
        text.style.color = "green";
        break;
      case "color red":
        text.style.color = "red";
        break;
      case "color blue":
        text.style.color = "blue";
    }
  }
})
