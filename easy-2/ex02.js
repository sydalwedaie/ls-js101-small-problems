// Greeting a user

/*
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.
*/

const rlSync = require("readline-sync");
let name = rlSync.question("What's your name?");

function greet(name) {
  let pureName = name
    .split("")
    .filter(c => c !== "!")
    .join("");

  let normalGreeting = `Hello ${pureName}.`;
  let screamingGreeting =
    `Hello ${pureName}. Why are you screaming?`.toUpperCase();
  return pureName === name ? normalGreeting : screamingGreeting;
}

console.log(greet(name));
