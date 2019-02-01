const readlineSync = require("readline-sync");

const number1 = readlineSync.question("What's your first integer? ");
const number2 = readlineSync.question("What's your second integer? ");
let divisionRest = number1 % number2;
console.log(`The rest of ${number1} / ${number2} is ${divisionRest}`);
