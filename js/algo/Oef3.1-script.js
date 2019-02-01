const readlineSync = require("readline-sync");

const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

const addition = array =>{
  let result = 0;
  for (let element of array) {
    result += element;
  }
  console.log(result);
}

addition(array1)
addition(array2)
