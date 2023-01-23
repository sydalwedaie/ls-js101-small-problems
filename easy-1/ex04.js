// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Further Exploration
// Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.

let rlSync = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcom to Area Calculator!");

prompt("Enter the desired input type: 1) Meters 2) Feet");
let inputChoice = rlSync.question();

switch (inputChoice) {
  case "1":
    inputChoice = "meters";
    break;
  case "2":
    inputChoice = "feet";
    break;
}

prompt(`Enter the length of the room in ${inputChoice}:`);
let length = rlSync.question();

prompt(`Enter the width of the room in ${inputChoice}:`);
let width = rlSync.question();

let area = length * width;

if (inputChoice === "meters") {
  prompt(
    `The area of the room is ${area} square meters (${(
      area * SQMETERS_TO_SQFEET
    ).toFixed(2)} feet).`
  );
} else if (inputChoice === "feet") {
  prompt(
    `The area of the room is ${area} square feet (${(
      area / SQMETERS_TO_SQFEET
    ).toFixed(2)} meters).`
  );
}
