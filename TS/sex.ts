const prompt = require("prompt-sync")();

let gender: string = prompt("Choose your sex (F,  M, 0): ");

if (gender === "F") {
  console.log("You're female");
} else if (gender === "M") {
  console.log("You're male");
} else {
  console.log("Ok... You're not a human...");
}
