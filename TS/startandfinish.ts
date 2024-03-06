const prompt: any = require("prompt-sync")();

let start: number = prompt("Type a start number: ");
let finish: number = prompt("Type a finish number: ");

function between(start: number, finish: number): void {
  for (let i = start + 1; i <= finish - 1; i++) {
    console.log(i);
  }
}

while (isNaN(start) || isNaN(finish)) {
  console.log("Please, type a valid number...");
  start = prompt("Type a start number: ");
  finish = prompt("Type a finish number: ");
}

between(Number(start), Number(finish));
