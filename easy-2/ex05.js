// Arithmetic Integer

/*
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
*/

const rlSync = require("readline-sync");

let num1 = Number(rlSync.question("==> Please enter first number: "));
let num2 = Number(rlSync.question("==> Please enter second number: "));

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${num1 / num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);
