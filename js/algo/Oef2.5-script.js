const readlineSync = require("readline-sync");

let number = readlineSync.questionInt("What's your favorite number? ");

while (number !== 42) {
  number = readlineSync.questionInt("Are you sure? What's your favorite number? ")
}
