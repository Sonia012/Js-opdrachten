function testWhile() {
  let string = prompt("Voer een string in die de letter p bevat");
  let pString = string.includes('p');
  let resultaat = string;
  while (pString == false) {
    string = prompt("Probeer opnieuw. String moet de letter p bevatten");
    resultaat += string;
    pString = string.includes('p');
  };
  alert('"' + resultaat + '"');
}
