const readlineSync = require("readline-sync");

let n = readlineSync.questionInt("Please enter a number ");
let result = 0;
for (let i = 1; i <= n; i++) {
  let newNumbers = readlineSync.questionInt("Please enter an additional number ")
  result += newNumbers;
}
console.log(`The sum of your additional numbers is ${result}`)
