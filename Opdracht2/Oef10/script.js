function sum() {
    let resultaat = 0;
  for (let i = 1; i <= 3; i++) {
    let getal = prompt("Geef een getal");
    resultaat += parseInt(getal);
  };
  alert("De som van deze 3 getallen is " + resultaat);
}
