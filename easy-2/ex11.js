// Get Middle Character / 0 1 2 3 4

function centerOf(str) {
  let middleIndex = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return str[middleIndex];
  }
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
