const readlineSync = require("readline-sync");
let counter = 3;
const naam = readlineSync.question(`Please enter your name . (Remaining questions = ${counter}) `);
counter--
const favFood = readlineSync.question(`What's your favorite food? (Remaining questions = ${counter}) `);
counter--
const favColor = readlineSync.question(`What's your favorite color? (Remaining questions = ${counter}) `);
counter--


console.log(`${favColor} ${favFood} ${naam}`);
