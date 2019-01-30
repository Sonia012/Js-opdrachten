
const divs = document.querySelectorAll('div');
console.log(divs);
divs.forEach(div => {
  div.addEventListener(`mouseover`, function(){
      div.style.display = "none"
  });
})
