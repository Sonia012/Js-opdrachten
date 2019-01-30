
const divs = document.querySelectorAll('.hoverMe');
console.log(divs);
divs.forEach(div => {
  div.addEventListener(`mouseover`, function(){
      div.style.display = "none"
  });
})
const reset = document.querySelector("#reset");
console.log(reset);
reset.addEventListener(`click`, handleResetDiv);

function handleResetDiv() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "block"
  }
}
