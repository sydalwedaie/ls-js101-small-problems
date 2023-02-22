function logInBox(message) {
  let horizontalLine = `+${"-".repeat(message.length + 2)}+`;
  let messageLine = `| ${message} |`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(messageLine);
  console.log(emptyLine);
  console.log(horizontalLine);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");
