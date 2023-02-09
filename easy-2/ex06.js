// The End Is Near But Not Here

/*
Write a function that returns the next to last word in the String passed to it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.
*/

function penultimate(str) {
  return str.split(" ").splice(-2, 1)[0];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// Further Exploration

/*
Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.
*/

function middleWord(str) {
  let wordsArray = str.split(" ");
  if (wordsArray.length % 2 === 0) {
    let middleIndex = wordsArray.length / 2 - 1;
    return wordsArray.splice(middleIndex, 2).join(" ");
  } else {
    let middleIndex = Math.floor(wordsArray.length / 2);
    return wordsArray[middleIndex];
  }
}

console.log(middleWord("one two three four five six"));
console.log(middleWord("one two three four five"));
console.log(middleWord("one two three four"));
console.log(middleWord("one two three"));
