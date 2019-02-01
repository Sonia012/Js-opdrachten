const readlineSync = require("readline-sync");

for (let number = 1; number <= 100; number++) {
  if (number % 2 === 0) {
    let result = number / 2;
    console.log(`${number}/2 = ${result}`)
  } else {
    let result = number / 3;
    console.log(`${number}/3 = ${result}`)
  }
}
