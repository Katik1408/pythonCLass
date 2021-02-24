// // console.log("Hello World");

// // console.log("Hello");

// // //alert('Hello from file js');

// // //confirm('Do you agree?')
// // //prompt('Enter your name');

// // let a = 5;

// // console.log(a);

// // let b;
// // console.log(b);

// // console.log(typeof a);
// // console.log(typeof b);

// // let firstName = "Josh";
// // let lastName = "Doe";
// //let age = null;
// // b = 10;
// // let isActive = true;

// // console.log("Addition of a+b is" + (a + b));

// // console.log(a + b);

// // console.log(firstName + lastName);

// // console.log(typeof age);

// // console.log(typeof isActive);

// //const pi = 5;

// // console.log(pi)
// // //pi = 4;
// // console.log(pi);

// // //let a = 5;
// // //let name = prompt('Enter your name');

// // //let isFeedback = confirm("Do you agree");

// // //console.log(isFeedback);
// // //console.log(typeof isFeedback);

// // /**
// //  *
// //  *
// //  * if x > y is coming as the fact then
// //  * the above statement will change into a boolean value which is true
// //  *
// //  * otherwise
// //  * if that statement is coming as wrong
// //  * then the above statement( x>y) will change into a boolean value which is false
// //  *
// //  *
// //  */

// // // if (x > y) {
// // //   console.log("X is greater");
// // // } else {
// // //   console.log("Y is greater");
// // // }

// // // if (isFeedback) {
// // //   console.log("Agreed");
// // // } else {
// // //   console.log("Disagree");
// // // }

// // console.log("-------------------------");

// // let x = 20;
// // let y = 10;
// // let z = 15;

// // if (x > y) {
// //   console.log("X is greater than Y");
// // } else if (x > z) {
// //   console.log("X is greater than Z");
// // } else {
// //   console.log("X is smaller than Y and Z");
// // }
// // console.log("End of If else Block");

// // console.log("-------Switch-----");

// // let condition = 1;

// // switch (condition) {
// //   case 1:
// //     console.log("Value is " + condition);
// //     break;
// //   case 2:
// //     console.log("Value is " + condition);
// //     break;
// //   case 3:
// //     console.log("Value is " + condition);
// //     break;
// //   default:
// //     console.log("Value is not from 1 2 and 3 " + condition);
// //     break;
// // }

// // //Loops

// // //While loop
// // console.log("-----While Loop-----");
// // let i = 0; // Initialization

// // //Condition
// // while (i < 5) {
// //   console.log("Value of i is " + i);
// //   i++; //Inc/Dec
// // }

// // console.log("-----------------");

// // //Do - while
// // console.log("---Do While----");
// // let j = 0;
// // do {
// //   console.log("Value of is " + j);
// //   j++;
// // } while (j < 5);

// // //For Loop
// // console.log("----------For Loop---------");

// // for (let k = 0; k < 5; k++) {
// //   console.log("Value of k is " + k);
// // }

// // let arr = [1, 2, 3, 4, 5];

// // console.log("Length of arr is " + arr.length);

// // for (let p = 0; p < arr.length; p++) {
// //   console.log("Value of arr at position " + p + " is " + arr[p]);
// // }

// // let arr1 = [1, 2, "firstName", "lastName", true];
// // console.log("--------------");
// // for (let q = 0; q < arr1.length; q++) {
// //   console.log("Value of arr1 at position " + q + " is " + arr1[q]);
// // }

// // let num = 10;
// // let result = 1;
// // console.log("-------Factorial Logic---------");
// // if (num === 0) {
// //   console.log("Factorial of 0 is " + result);
// // } else {
// //   for (let f = 1; f <= num; f++) {
// //     result = result * f;
// //   }
// //   console.log("Factorial of " + num + " is " + result);
// // }

// // // let obj = [{ name: "Karik" }, { name: "Rahul" }];
// // // obj.forEach((e) => {
// // //   console.log(e);
// // // });
// // /**
// //  *
// //  * Types in JS
// //  *
// //  */
// // //Number
// // //String
// // //Boolean
// // //Undefined
// // //Null  ---

// // //DataTypes
// // //If Statements

// let a = 7;
// let b = 8;

// // function add() {
// //   let a = 5;
// //   let b = 6;
// //   let c = a + b;
// //   console.log(c);
// // }

// function add(a, b) {
//   let c = a + b;
//   return c;
// }
// let result;
// //add(2.8, 3.4);
// //console.log(result);

// // function sub() {
// //   let a = 6;
// //   let b = 7;
// //   let c = a - b;
// //   console.log(c);
// // }
// // sub();

// //add();
// let fact = 1;

// function factorial(num) {
//   if (num === 0) {
//     console.log("Factorial of 0 is " + fact);
//   } else {
//     for (let f = 1; f <= num; f++) {
//       fact = fact * f;
//     }
//     console.log("Factorial of " + num + " is " + fact);
//   }
// }

// //factorial(10);

// function square1(num) {
//   return num * num;
// }
// let s1 = square1(5);
// console.log("Normal Function " + s1);

// let square = (num) => num * num;

// let s = square(5);
// console.log("Arrow Function " + s);

// let addArrow = (x, y) => x + y;

// console.log(addArrow(2, 3));
// //Closure

// // let s = square(5);
// // console.log(s);

// // function showValue(value) {
// //   setTimeout(
// //     console.log(value)
// // , 2000);
// // }

// // function showValue2(value) {
// //   console.log(value);
// // }

// // showValue(1);
// // showValue2(2);

// // // function practise(subject, callback) {
// // //   console.log(`Started Practise for ${subject}`);
// // //   callback();
// // // }

// // // function callback() {
// // //   console.log("JS is Done");
// // // }

// // // practise("JS", callback);

function showValue(value) {
  setTimeout(() => {
    console.log(value);
  }, 3000);
}
showValue(100);
// function showValue2(value) {
//   console.log(value);
// }

// showValue(1);
// showValue2(2);
// function showInfo() {
//   let puser = document.getElementById("errorUser");
//   console.log(puser);
//   puser.innerHTML = "Username should not have spaces";
//   puser.style.color = "red";
// }

function show() {
  let a = 5;
  console.log("Value of a is " + a);
}
show();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 10);
function addNumber(num1, num2) {
  return num1 + num2;
}
let result = addNumber(2, 3);
console.log(result);

let addArrow = (x, y) => {
  return x + y;
};
console.log(addArrow(1, 2));

function validateForm() {
  let user = document.getElementById("txtUser");
  let email = document.getElementById("emailid");
  let puser = document.getElementById("errorUser");
  let pemail = document.getElementById("errorEmail");
  let pswd = document.getElementById("pwd");
  let cpwd = document.getElementById("cpwd");
  let pcpwd = document.getElementById("errorCpwd");
  console.log("Length of pwd" + pswd.value.length);
  let ppswd = document.getElementById("errorpwd");
  if (user.value == "") {
    user.style.border = "2px solid red";
    puser.innerHTML = "Username cannot be blank";
    puser.style.color = "red";
    return false;
  } else if (email.value == "") {
    email.style.border = "2px solid red";
    pemail.innerHTML = "Email id cannot be blank";
    pemail.style.color = "red";
    return false;
  } else if (pswd.value == "") {
    pswd.style.border = "2px solid red";
    ppswd.style.color = "red";
    ppswd.innerHTML = "Password cannot be blank";
    return false;
  } else if (pswd.value.length < 6 || pswd.value.length > 20) {
    pswd.style.border = "2px solid red";
    ppswd.style.color = "red";
    ppswd.innerHTML = "Password should be between 6 and 20";
    return false;
  } else if (cpwd.value == "") {
    cpwd.style.border = "2px solid red";
    pcpwd.style.color = "red";
    pcpwd.innerHTML = "Password cannot be blank";
    return false;
  }
  else if(pswd.value !== cpwd.value){
    cpwd.style.border = "2px solid red";
    pcpwd.style.color = "red";
    pcpwd.innerHTML = "Confirm Password not same as Password";
    return false;
  }
}

function removeStyles() {
  let puser = document.getElementById("errorUser");
  let user = document.getElementById("txtUser");
  puser.innerHTML = "";
  user.style.border = "";
}
