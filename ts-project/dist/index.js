"use strict";
// task 1
Object.defineProperty(exports, "__esModule", { value: true });
let example1 = "Hello World!";
let example2 = 42;
let example3 = true;
let example4 = Symbol();
let example5 = 123n;
console.log(example1, example2, example3, example4, example5);
// task 2
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
const greeting = concatTwoStrings("Hello", "World");
console.log(greeting);
// task 3
const add = (a, b) => {
    return a + b;
};
const result = add(2, 3);
console.log(result);
//# sourceMappingURL=index.js.map