function temperatureConversion() {
    let choice = prompt(
    `
     0. End of the program
     1. Celsius to Fahrenheit
     2. Celsius to Kelvin
     3. Fahrenheit to Celsius
     4. Fahrenheit to Kelvin
     5. Kelvin to Celsius
     6. Kelvin to Fahrenheit`)

     let temp = parseFloat(prompt("Welke temperatuur wenst u te converteren?"));

     switch (choice) {
       case "0":
          alert("Het programma is gestopt");
         break;
        case "1":
          alert(temp + " graden Celsius is " + ((temp*9/5)+32) + " graden Fahrenheit");
          break;
        case "2":
          alert(temp + " graden Celsius is " + (temp+273.15) + " graden Kelvin");
          break;
        case "3":
          alert(temp + " graden Fahrenheit is " + ((temp-32)/(9/5)) + " graden Celsius");
          break;
        case "4":
          alert(temp + " graden Fahrenheit is " + (((temp-32)*(5/9))+273.15) + " graden Kelvin");
          break;
        case "5":
          alert(temp + " graden Kelvin is " + (temp-273.15) + " graden Celsius");
          break;
        case "6":
          alert(temp + " graden Kelvin is " + (temp*(9/5)-459.67) + " graden Fahrenheit");
          break;
        default:
          alert("Gelieve één van de bovenstaande opties te kiezen");
        }
     }
