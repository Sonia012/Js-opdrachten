//Oef1
// const body = document.getElementsByTagName("body");
//
// console.log(body);
// body[0].classList.remove("bg-aqua");
// body[0].classList.add("bg-olive");
// console.log(body);
//
// const firstPar = document.getElementById("first-paragraph");
// console.log(firstPar);
//
// firstPar.classList.remove(("bg-lime"),("gray"));
// console.log(firstPar);
//
// firstPar.classList.add("aqua");
// console.log(firstPar);
//
// const silver = document.getElementsByClassName("bg-silver");
// for (let i = 0; i < silver.length; i++) {
//   silver[i].className += " bg-teal"
// };
// console.log(silver);
//
// for (let i = 0; i < silver.length; i++) {
//    silver[i].classList.remove("bg-silver");
// };
// console.log(silver);
//
// const block = document.getElementsByTagName("blockquote");
// block[0].classList.add("bg-white");


//oef 2
//const table = document.querySelector("#my-table");
// table.classList.add("bg-purple");
// const container = document.querySelectorAll(".container");
// console.log(container);
// container[0].classList.add("shadow");


//OEF3
// const pre = document.getElementsByTagName("pre");
// pre[0].style.color = "silver";
// pre[0].style.borderTop = "3px solid red";
// pre[0].style.borderBottom = "3px solid red";
//
// const header3 = document.querySelector("h3");
// header3.innerHTML = "<em>Italic title ! yeah !</em>";
//
// const header2 = document.querySelector("h2");
// header2.innerHTML = "<strong>HTML doesn't work !</strong>";


//OEF4
// const ul = document.getElementsByTagName("ul");
// const eersteUl = ul[0];
// console.log(eersteUl);
// const listItem = document.createElement("li");
// listItem.innerHTML = "My best friend is <a href='http://www.google.com'>Google</a>";
// eersteUl.appendChild(listItem);
// const eersteLink = document.getElementsByTagName("a");
// console.log(eersteLink);
// eersteLink[1].style.color = "yellow";



//OEF5
const ol = document.querySelector("ol");
console.log(ol);
const allLis = ol.children;
console.log(allLis);
while(ol.hasChildNodes()) {
  ol.removeChild(ol.lastChild);
};
const array = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (let i = 0; i < array.length; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML = array[i];
  ol.appendChild(listItem);
};
