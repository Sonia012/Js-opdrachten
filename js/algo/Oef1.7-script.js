const readlineSync = require("readline-sync");

const shoeSize = readlineSync.question("What is your shoe size? ");
const birthYear = readlineSync.question("What is your birth year? ");

let calculation = (((shoeSize * 2) + 5) * 50) - birthYear + 1766;

console.log(`The result is ${calculation}`);
