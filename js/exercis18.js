"use strict";

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    if (b === undefined) {
      this.result = this.result + a;
    } else {
      this.result = a + b;
    }
    return this.result;
  }

  subtract(a, b) {
    if (b === undefined) {
      this.result = this.result - a;
    } else {
      this.result = a - b;
    }
    return this.result;
  }

  multiply(a, b) {
    if (b === undefined) {
      this.result = this.result * a;
    } else {
      this.result = a * b;
    }
    return this.result;
  }

  divide(a, b) {
    if (b === undefined) {
      this.result = this.result / a;
    } else {
      this.result = a / b;
    }
    return this.result;
  }

  displayResult() {
    console.log(`Поточний результат: ${this.result}`);
  }
}

const calc = new Calculator();

calc.displayResult();

calc.add(10, 5);
calc.displayResult();

calc.add(5);
calc.displayResult();

calc.subtract(4);
calc.displayResult();

calc.multiply(2);
calc.displayResult();

calc.divide(4);
calc.displayResult();

calc.divide(100, 5);
calc.displayResult();
