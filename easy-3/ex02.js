function logInBox(str) {
  let boxLength = str.length + 2;
  console.log("+" + "-".repeat(boxLength) + "+");
  console.log("|" + " ".repeat(boxLength) + "|");
  console.log("| " + str + " |");
  console.log("|" + " ".repeat(boxLength) + "|");
  console.log("+" + "-".repeat(boxLength) + "+");
}

logInBox("To boldly go where no one has gone before.");
logInBox("");
