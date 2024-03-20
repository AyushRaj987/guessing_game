#!  /usr/bin/env node
import inquirer from 'inquirer';
// Define the maximum number for the game
const maxNumber = 100;
// Function to generate a random number between 1 and maxNumber
function generateRandomNumber() {
    return Math.floor(Math.random() * maxNumber) + 1;
}
// Function to play the game
async function playGame() {
    const targetNumber = generateRandomNumber();
    let attempts = 0;
    console.log("Welcome to Guess the Number Game!");
    console.log(`Guess a number between 1 and ${maxNumber}`);
    while (true) {
        const { guess } = await inquirer.prompt([
            {
                type: 'input',
                name: 'guess',
                message: 'Enter your guess:'
            }
        ]);
        const guessedNumber = parseInt(guess);
        if (isNaN(guessedNumber)) {
            console.log("Invalid input. Please enter a valid number.");
        }
        else {
            attempts++;
            if (guessedNumber < targetNumber) {
                console.log("Too low. Try again.");
            }
            else if (guessedNumber > targetNumber) {
                console.log("Too high. Try again.");
            }
            else {
                console.log(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
                break;
            }
        }
    }
}
// Start the game
playGame();
