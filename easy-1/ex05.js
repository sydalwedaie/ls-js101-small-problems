// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console.

const rlSync = require("readline-sync");

let billAmount = rlSync.question("What is the bill amount? ");
let tipRate = rlSync.question("What is the tip percentage? ");
let tipAmount = (billAmount * tipRate) / 100;
let billTotal = Number(billAmount) + Number(tipAmount);

console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);
