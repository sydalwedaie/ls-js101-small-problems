// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

let rlSync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcom to Area Calculator!");
prompt("Enter the length of the room in meters:");
let length = rlSync.question();

prompt("Enter the width of the room in meters:");
let width = rlSync.question();

let areaSqmt = length * width;

prompt(`The area of the room is ${areaSqmt} meters (${areaSqmt * 10.7639})`);
