// How Old is Teddy?

function randomAge(min, max) {
  let range = Math.abs(max - min);
  let lowerBound = min < max ? min : max;
  return Math.floor(Math.random() * (range + 1)) + lowerBound;
}

console.log(randomAge(120, 20));
console.log(randomAge(12, 120));
console.log(randomAge(12, 12));
