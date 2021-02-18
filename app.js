console.log("Hello World");

console.log("Hello");

//alert('Hello from file js');

//confirm('Do you agree?')
//prompt('Enter your name');

let a = 5;

console.log(a);

let b;
console.log(b);

console.log(typeof a);
console.log(typeof b);

let firstName = "Josh";
let lastName = "Doe";
let age = null;
b = 10;
let isActive = true;

console.log("Addition of a+b is" + (a + b));

console.log(a + b);

console.log(firstName + lastName);

console.log(typeof age);

console.log(typeof isActive);

const pi = 3.14;
//pi = 4;
console.log(pi);

//let a = 5;
//let name = prompt('Enter your name');

//let isFeedback = confirm("Do you agree");

//console.log(isFeedback);
//console.log(typeof isFeedback);

/**
 *
 *
 * if x > y is coming as the fact then
 * the above statement will change into a boolean value which is true
 *
 * otherwise
 * if that statement is coming as wrong
 * then the above statement( x>y) will change into a boolean value which is false
 *
 *
 */

// if (x > y) {
//   console.log("X is greater");
// } else {
//   console.log("Y is greater");
// }

// if (isFeedback) {
//   console.log("Agreed");
// } else {
//   console.log("Disagree");
// }

console.log("-------------------------");

let x = 20;
let y = 10;
let z = 15;

if (x > y) {
  console.log("X is greater than Y");
} else if (x > z) {
  console.log("X is greater than Z");
} else {
  console.log("X is smaller than Y and Z");
}
console.log("End of If else Block");

console.log("-------Switch-----");

let condition = 1;

switch (condition) {
  case 1:
    console.log("Value is " + condition);
    break;
  case 2:
    console.log("Value is " + condition);
    break;
  case 3:
    console.log("Value is " + condition);
    break;
  default:
    console.log("Value is not from 1 2 and 3 " + condition);
    break;
}

//Loops

//While loop
console.log("-----While Loop-----");
let i = 0; // Initialization

//Condition
while (i < 5) {
  console.log("Value of i is " + i);
  i++; //Inc/Dec
}

console.log("-----------------");

//Do - while
console.log("---Do While----");
let j = 0;
do {
  console.log("Value of is " + j);
  j++;
} while (j < 5);

//For Loop
console.log("----------For Loop---------");

for (let k = 0; k < 5; k++) {
  console.log("Value of k is " + k);
}

let arr = [1, 2, 3, 4, 5];

console.log("Length of arr is " + arr.length);

for (let p = 0; p < arr.length; p++) {
  console.log("Value of arr at position " + p + " is " + arr[p]);
}

let arr1 = [1, 2, "firstName", "lastName", true];
console.log("--------------");
for (let q = 0; q < arr1.length; q++) {
  console.log("Value of arr1 at position " + q + " is " + arr1[q]);
}

let num = 10;
let result = 1;
console.log("-------Factorial Logic---------");
if (num === 0) {
  console.log("Factorial of 0 is " + result);
} else {
  for (let f = 1; f <= num; f++) {
    result = result * f;
  }
  console.log("Factorial of " + num + " is " + result);
}

// let obj = [{ name: "Karik" }, { name: "Rahul" }];
// obj.forEach((e) => {
//   console.log(e);
// });
/**
 *
 * Types in JS
 *
 */
//Number
//String
//Boolean
//Undefined
//Null  ---

//DataTypes
//If Statements
