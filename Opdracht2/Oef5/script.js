let b=2;
let a=b++;
//a = b = 2/ b = b + 1 = 3
console.log("a is " + a);
console.log("b is " + b);

b=2;
a=++b;
//a = b +1 = 3/ b = b + 1 = 3
console.log("a is " + a);
console.log("b is " + b);

b=2;
a=b--;
//a = b = 2/ b = b - 1 = 1
console.log("a is " + a);
console.log("b is " + b);

b=2;
a=--b;
//a = b - 1 = 1/ b = b - 1 = 1
console.log("a is " + a);
console.log("b is " + b);

b=2;
a+=b++;
//a = b + 1 = 3/ b = b + 1 = 3
console.log("a is " + a);
console.log("b is " + b);

b=2;
a=1;
a+=++b;
//a = (b+1) + a = (2+1) + 1 = 4/ b = b + 1 = 3
console.log("a is " + a);
console.log("b is " + b);

b=2;
a=1;
a-=b++;
//a = a - b = 1 - 2 = -1/ b = b + 1 = 3
console.log("a is " + a);
console.log("b is " + b);

b=2;
a=1;
a-=++b;
//a = a - (b+1) = 1 - 3 = -2/ b = b + 1 = 3
console.log("a is " + a);
console.log("b is " + b);

b=2;
a=1;
a+=b--;
//a = a + b = 3/ b = b - 1 = 1
console.log("a is " + a);
console.log("b is " + b);

b=2;
a=1;
a+=--b;
//a = a + (b-1) = 1 + 1 = 2/ b = b - 1 = 1
console.log("a is " + a);
console.log("b is " + b);
