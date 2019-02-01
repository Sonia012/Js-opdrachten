const readlineSync = require("readline-sync");

const number1 = Math.floor(readlineSync.question("what's your first number? "));
const number2 = readlineSync.question("What's your second number? ");

let multipl = number1 * number2;

console.log(`The result of ${number1} x ${number2} = ${multipl}`);
