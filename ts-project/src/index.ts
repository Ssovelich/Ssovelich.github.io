// task 1

let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;

console.log(example1, example2, example3, example4, example5);

// task 2

const concatTwoStrings = (a: string, b: string): string => {
  return [a, b].join(" ");
};

const greeting = concatTwoStrings("Hello", "World");
console.log(greeting);

// task 3

const add = (a: number, b: number): number => {
  return a + b;
};

const result = add(2, 3);
console.log(result);
