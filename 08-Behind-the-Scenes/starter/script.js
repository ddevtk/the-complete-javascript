'use strict';

// // function calcAge(birthYear) {
// //   const age = 2021 - birthYear;

// //   function printAge() {
// //     let outPut = `${firstName},You are ${age}, born in ${birthYear}`;
// //     console.log(outPut);
// //     if (birthYear >= 1981 && birthYear <= 2000) {
// //       var millential = true;
// //       const firstName = 'Linh ';
// //       const str = `Oh, and you're a millential, ${firstName}`;
// //       console.log(str);

// //       function add(a, b) {
// //         return a + b;
// //       }
// //       outPut = 'NEW OUTPUT';
// //     }
// //     console.log(millential);
// //     console.log(outPut);
// //     // console.log(add(2, 3));
// //   }
// //   printAge();
// //   return age;
// // }

// // const firstName = 'Duong';
// // calcAge(2000);

// /* console.log(addDec(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function () {
//   return a + b;
// };

// const addArrow = (a, b) => a + b; */

// /* if (!numProducts) deleteShoppingCart();

// var numProducts = 1;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }
//  */

// // console.log(this);

// /* const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge(2000);

// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2001);

// duong.calcAge();

// const linh = {
//   year: 2003,
// };

// linh.calcAge = duong.calcAge;
// linh.calcAge();

//  */

// // var firstName = 'Linh';

// const duong = {
//   firstName: 'Duong',
//   year: 2000,
//   crush: 'linh',
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1999 && self.year <= 2004);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1999 && this.year <= 2004);
//     };
//     isMillenial();
//   },

//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// duong.greet();
// duong.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 6);
// addExpr(2, 6, 12, 14);

// var addArrow = (a, b) => a + b;

/* let age = 20;
let oldAge = age;
age = 21;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Duong',
  age: 21,
};
const friend = me;
friend.age = 22;

console.log('Friend: ', friend);
console.log('Me: ', me);
 */

let lastName = 'Vu';
let oldLastName = lastName;
lastName = 'Bui';
console.log(lastName);
console.log(oldLastName);

const ThuyLinh = {
  first: 'Linh',
  lastName: 'Bui',
  age: 21,
};
const ThuyLinhCopy = Object.assign({}, ThuyLinh);
ThuyLinhCopy.lastName = 'Duong';
console.log('Before marriage', ThuyLinh);
console.log('After marri age', ThuyLinhCopy);
