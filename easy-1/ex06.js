// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

const rlSync = require("readline-sync");

let input = rlSync.question(
  "Please enter an array of integers greater than 0: "
);

input = Array.from(input)
  .filter(item => Number.isInteger(Number(item)))
  .map(int => parseInt(int));

let inputOp = rlSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
);

while (!["s", "p"].includes(inputOp)) {
  inputOp = rlSync.question(
    'Enter "s" to compute the sum, or "p" to compute the product: '
  );
}

function calcSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function calcProduct(arr) {
  return arr.reduce((a, b) => a * b, 1);
}

if (inputOp === "s") {
  console.log(
    `The sum of the integers ${input.toString()} is ${calcSum(input)}.`
  );
} else if (inputOp === "p") {
  console.log(
    `The product of the integers ${input.toString()} is ${calcProduct(input)}.`
  );
}
