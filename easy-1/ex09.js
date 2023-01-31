// Leap Years (Part 1)

/*
The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
*/

function isLeapYear(year) {
  if (year % 4 === 0 && year <= 1752) return true;
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

console.log("true", isLeapYear(2016));
console.log("false", isLeapYear(2015));
console.log("false", isLeapYear(2100));
console.log("true", isLeapYear(2400));
console.log("true", isLeapYear(240000));
console.log("false", isLeapYear(240001));
console.log("true", isLeapYear(2000));
console.log("false", isLeapYear(1900));
console.log("true", isLeapYear(1752));
console.log("true", isLeapYear(1700));
console.log("false", isLeapYear(1));
console.log("true", isLeapYear(100));
console.log("true", isLeapYear(400));
