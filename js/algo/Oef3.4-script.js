const readlineSync = require("readline-sync");

const miniMax = array => {
  let max = Math.max.apply(null, array);
  let min = Math.min(...array);
  console.log(`Het maximum is ${max} en het minimum is ${min}`)
}

miniMax([15, 18, 43, 14, 23])
