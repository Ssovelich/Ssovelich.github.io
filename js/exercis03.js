"use strict";

//** task 1 */

const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

console.log("***Цикл for***");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("***Цикл while***");
let index = 0;
while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

console.log("***Цикл do...while***");
let i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);

//** task 2 */

// const Numbs = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < Numbs.length; i++) {
//   if (Numbs[i] % 2 === 0) {
//     console.log(Numbs[i]);
//   }
// }

//** task 3 */

// const names = ['Batman'];

// names.push('Joker');
// names.unshift('Bane');

// if (!names.includes('Alfred')) {
//   names.push('Alfred');
// }

// const index = names.indexOf('Batman');
// if (index !== -1) {
//   names.splice(index, 1);
// }

// console.log(names);

//** task 4 */

// function sumInput() {
//   const numbers = [];

//   while (true) {
//     let value = prompt("Введіть число:");

//     if (value === null || value.trim() === "" || isNaN(value)) {
//       break;
//     }

//     numbers.push(Number(value));
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }

//   return sum;
// }

// console.log("Сума введених чисел:", sumInput());

//** task 5 */

// const styles = ["Jazz", "Blues"];

// styles.push("Rock-n-Roll");

// const middleIndex = Math.floor(styles.length / 2);
// styles[middleIndex] = "Classics";

// const removedElement = styles.shift();
// console.log(removedElement);

// styles.unshift("Rap", "Reggae");
// console.log(styles);
