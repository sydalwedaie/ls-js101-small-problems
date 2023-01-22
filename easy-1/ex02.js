// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

for (let i = 1; i < 100; i++) {
  if (i % 2 === 1) console.log(i);
}

// Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.

function logOddNumbersBetween(lower, upper) {
  let counter = lower;
  while (counter <= upper) {
    if (Math.abs(counter) % 2 === 1) console.log(counter);
    counter++;
  }
}

logOddNumbersBetween(0, 40);
logOddNumbersBetween(21, 43);
logOddNumbersBetween(-10, 10);

