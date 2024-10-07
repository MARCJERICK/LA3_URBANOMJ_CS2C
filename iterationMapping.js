// Importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();
// Prompt the user for the max limit of loops
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

// Outer loop
for (let i = 0; i <= maxLimit; i++) {
  // Inner loop
  for (let j = 0; j <= maxLimit; j++) {
    // Calculate the added value
    let addedValue = i + j;

    // Log the corresponding loop points and added value per iteration
    console.log(`[${i}] [${j}] Added value is ${addedValue}`);
  }
}