// Odd Lists

function oddities(array) {
  return array.filter((_, index) => index % 2 === 0);
}

function evens(array) {
  return array.reduce((prev, current, index) => {
    return index % 2 === 1 ? prev.concat(current) : prev;
  }, []);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log();

console.log(evens([2, 3, 4, 5, 6]));
console.log(evens([1, 2, 3, 4, 5, 6]));
console.log(evens(["abc", "def"]));
console.log(evens([123]));
console.log(evens([]));
