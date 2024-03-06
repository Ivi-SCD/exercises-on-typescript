const prompt: any = require("prompt-sync")();
let total: number = 0;

while (true) {
  let num: number = prompt("Type a positive number: ");
  if (isNaN(num)) {
    console.log("Type a valid number");
    continue;
  }
  if (num < 0) {
    console.log(`Yeah! Look at this sum: ${total}`);
    break;
  }
  total += Number(num);
}
