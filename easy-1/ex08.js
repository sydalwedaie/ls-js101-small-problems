// Leap Years (Part 1)

/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.
*/

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

console.log("true", isLeapYear(2016)); //
console.log("false", isLeapYear(2015)); //
console.log("false", isLeapYear(2100)); //
console.log("true", isLeapYear(2400)); //
console.log("true", isLeapYear(240000)); //
console.log("false", isLeapYear(240001)); //
console.log("true", isLeapYear(2000)); //
console.log("false", isLeapYear(1900)); //
console.log("true", isLeapYear(1752)); //
console.log("false", isLeapYear(1700)); //
console.log("false", isLeapYear(1)); //
console.log("false", isLeapYear(100)); //
console.log("true", isLeapYear(400)); //
