// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// simple loop version
for (let i = 2; i < 100; i += 2) {
  // console.log(i);
}

// recursive version

function logEvenNumbers(start, end) {
  if (start >= end) return;
  if (start % 2 === 0) console.log(start);
  logEvenNumbers(start + 1, end);
}

logEvenNumbers(1, 50);
