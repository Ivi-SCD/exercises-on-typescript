const prompt: any = require("prompt-sync")();

let gasolina: number = prompt("Type the gas price: ");
let alcool: number = prompt("Type the alcohol price: ");

while (isNaN(gasolina) || isNaN(alcool)) {
  console.log("Please, type a valid number...");
  gasolina = prompt("Type the gas price: ");
  alcool = prompt("Type the alcohol price: ");
}

const resultado: void =
  gasolina > alcool
    ? console.log(`Go to Alcohol, be wise. Look at this price: ${alcool}`)
    : console.log(`Go to Gasoline, be wise. Look at this price:${gasolina}`);
