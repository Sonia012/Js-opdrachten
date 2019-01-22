function calculation() {
  let height = document.getElementById("height").value;
  let birthYear = document.getElementById("birthdate").value;
  let calc = (((height*2)+5)*50-birthYear)+1766;
  alert("The result is "+calc);
}
