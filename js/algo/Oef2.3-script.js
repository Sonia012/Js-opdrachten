const readlineSync = require("readline-sync");

// for (let number = 2; number <= 100; number+=2) {
//   if (number % 2 === 0) {
//     console.log(number)
//   }
// }
let number = 1;
while (number <= 100) {
  if (number % 2 === 0) {
    console.log(number)
  }
  number++
}
