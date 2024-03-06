const prompt = require("prompt-sync")();

let startNumber: number = prompt("Type a number: ");
let finishNumber: number = prompt("Type another number: ");
let oddNumbers: number[] = [];

function between(start: number, finish: number, array: number[]): void {
  for (let i = start; i <= finish; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
}

while (isNaN(startNumber) || isNaN(finishNumber)) {
  console.log("Please, type a valid number...");
  startNumber = prompt("Type a number: ");
  finishNumber = prompt("Type another number: ");
}

between(Number(startNumber), Number(finishNumber), oddNumbers);
console.log(oddNumbers);
