const dieRoll = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled ${dieRoll}`);

////////////////CHALLENGE///////////////////

// Collect input from user
let inputLow = prompt("Give me a low number: ")
let inputHigh = prompt("Give me a higher number: ");

// Convert the input to a number
const lowerNumber = parseInt(inputLow);
const higherNumber = parseInt(inputHigh);

//Use Math.random() and the user's number to generate a random number
let randomNumber = Math.floor(Math.random() * higherNumber) + 1;

// Create a message displaying the random number
alert(`Your random number between ${lowerNumber} and ${higherNumber} is: ${randomNumber}`);