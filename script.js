// OUTPUT "Hello World" in web browser console to ensure connection to html file.
console.log("Hello World");

// DECLARE global variables.
let compChoice;
let userChoice;

/*
DECLARE getComputerChoice function.
    GENERATE a random number between 0 and 1.
    MULTIPLY the random number by 3.
    ROUND DOWN the random number to the next integer.
    ASSIGN number to compChoice.

    IF compChoice is equal to 0 then:
        ASSIGN "rock" to compChoice.
    ELSE IF compChoice is equal to 1 then:
        ASSIGN "paper" to compChoice.
    ELSE (value is equal to 2) then:
        ASSIGN "scissors" to compChoice.
    END IF ELSE BLOCK.
OUTPUT to console the computer choice to ensure desired outcomes.
*/

function getComputerChoice() {
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        compChoice = "rock";
    } else if (compChoice == 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    console.log(compChoice);
}

getComputerChoice();