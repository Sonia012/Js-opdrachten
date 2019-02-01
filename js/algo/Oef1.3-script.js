const readlineSync = require("readline-sync");

const name = readlineSync.question("Please enter your first name");
console.log(`Hello ${name}`);
