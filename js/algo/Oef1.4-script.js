const readlineSync = require("readline-sync");

const name = readlineSync.question("Please enter your last name ");
const firstName = readlineSync.question("Please enter your first name ");
const city = readlineSync.question("Please enter your city ");

console.log(`Your name is ${firstName} ${name} and you live in ${city}`);
