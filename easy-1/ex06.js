// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

const rlSync = require("readline-sync");

let inputInt = rlSync.question("Please enter an integer greater than 0: ");

while (!Number.isInteger(Number(inputInt))) {
  inputInt = rlSync.question("Please enter an integer greater than 0: ");
}

let inputOp = rlSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
);

while (!["s", "p"].includes(inputOp)) {
  inputOp = rlSync.question(
    'Enter "s" to compute the sum, or "p" to compute the product: '
  );
}

function calcSum(num) {
  let output = 0;
  for (let i = 0; i <= num; i++) {
    output += i;
  }
  return output;
}

function calcProduct(num) {
  let output = 1;
  for (let i = 1; i <= num; i++) {
    output *= i;
  }
  return output;
}

if (inputOp === "s") {
  console.log(
    `The sum of the integers between 1 and ${inputInt} is ${calcSum(
      Number(inputInt)
    )}.`
  );
} else if (inputOp === "p") {
  console.log(
    `The product of the integers between 1 and ${inputInt} is ${calcProduct(
      Number(inputInt)
    )}.`
  );
}
