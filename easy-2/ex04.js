// Squaring an Argument

/*
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
*/

function multiply(num1, num2) {
  return num1 * num2;
}

const square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Further Exploration
/*
What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?
*/

function nthPower(num, power) {
  if (power === 0) return 1;
  else if (power === 1) return num;
  else if (power === -1) return 1 / num;
  else if (power > 1) return multiply(num, nthPower(num, power - 1));
  else return multiply(1 / num, nthPower(num, power + 1));
}

console.log(nthPower(3, -8));
console.log(nthPower(3, -1));
console.log(nthPower(3, 0));
console.log(nthPower(3, 1));
console.log(nthPower(3, 8));
