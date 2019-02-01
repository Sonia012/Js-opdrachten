const readlineSync = require("readline-sync");

const min = readlineSync.questionInt("Enter your min number ");//"Int" at the end of "question" = to convert to an integer
console.log(min);
const max = readlineSync.questionInt("Enter your max number ");
const current = readlineSync.questionInt("Enter your current number ");

if (current < max && current > min) {
  console.log(`Your current number is between your min and max numbers`);
} else if (min > max) {
  console.log("You don't understand anything")
} else {
  console.log(`Your current number is NOT between your min and max numbers`)
}
