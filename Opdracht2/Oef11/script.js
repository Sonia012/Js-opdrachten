function calcAverage() {
  let getal = parseFloat(prompt("Geef een geheel getal in"));
  console.log(getal);
  console.log(Number.isInteger(getal));
  let resultaat = 0;
  let counter = 0;
  while (getal >= 0) {
    if((getal-Math.floor(getal)) === 0) {
        counter++;
        resultaat += getal;
        getal = parseFloat(prompt("Geef een ander getal in"));
    } else {
        getal = parseFloat(prompt("Dit is geen geheel getal. Geef een geheel getal in"));
    }
  };
  alert("Het aantal ingevoerde waarden is " + counter);
  alert("Het gemiddelde is " + (resultaat/counter));
};
