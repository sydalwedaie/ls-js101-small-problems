// When Will I Retire?

/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const readline = require("readline-sync");
const currentYear = new Date().getFullYear();

function prompt(message) {
  console.log(`=> ${message}`);
}

function getUserAge() {
  prompt("What's your age?");
  let currentAge = readline.prompt();
  while (!parseFloat(currentAge)) {
    currentAge = readline.prompt();
  }
  return parseFloat(currentAge);
}

function getRetirementAge() {
  prompt("At what age would you like to retire?");
  let retirementAge = readline.prompt();
  while (!parseFloat(retirementAge)) {
    retirementAge = readline.prompt();
  }
  return parseFloat(retirementAge);
}

function startProgram() {
  let yearsTillRetirement = -getUserAge() + getRetirementAge();
  let retirementYear = Math.floor(currentYear + yearsTillRetirement);

  prompt(`It's ${currentYear}. You will retire in ${retirementYear} `);
  prompt(
    `You have only ${yearsTillRetirement.toFixed(1)} years of work to go!`
  );
}

startProgram();
