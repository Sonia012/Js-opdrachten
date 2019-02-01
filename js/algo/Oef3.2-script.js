const readlineSync = require("readline-sync");

const average = array => {
  let sum = 0;
  for (let element of array) {
  sum +=  element
  };
  console.log(sum/array.length)
};

average([1, 2, 3, 4, 5]);
average([100, 101, 102]);
