// Exclusive Or

/*
write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
*/

function xor(val1, val2) {
  return !!((val1 && !val2) || (!val1 && val2));
}

console.log(xor(5, 0), xor(5, 0) === true); // true
console.log(xor(false, true), xor(false, true) === true); // true
console.log(xor(2, 2), xor(2, 2) === false); // true
console.log(xor(true, true), xor(true, true) === false); // true
