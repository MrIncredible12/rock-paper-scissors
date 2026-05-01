// OUTPUT "Hello World" in web browser console to ensure connection to html file.
console.log("Hello World");

// DECLARE global variables.
let humanScore = 0;
let computerScore = 0;

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

function getComputerChoice(compChoice) {
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        compChoice = "rock";
    } else if (compChoice == 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    console.log(compChoice);
    return compChoice;
}

/*
DECLARE function called getHumanChoice.
    PROMPT user "Rock, paper, or scissors?".
    ASSIGN string to humanChoice.
OUTPUT humanChoice to console.
*/

function getHumanChoice(userChoice){
    userChoice = prompt("Rock, paper, or scissors?", "");
    console.log(userChoice);
    return userChoice;
}

/*
DECLARE function called playRound with two parameters: humanChoice and computerChoice.
    FORCE humanChoice parameter to all lower case.
    IF humanChoice and computerChoice are identical:
        OUTPUT "It's a tie".
    ELSE that the two strings are different:
        IF humanChoice selected "rock":
            IF computerChoice selected "scissors":
                INCREMENT humanScore.
                OUTPUT "You win. Rock beats scissors."
            ELSE computerChoice selected "paper":
                INCREMENT computerScore.

*/

let playRound = (humanChoice, computerChoice) {
    
}

// Assign user and computer selections to constants.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Play game.
playRound(humanSelection, computerSelection);

// Winning conditions.
/*if (humanScore === 5) {
    console.log("Congratulations you win!");
} else if (computerScore === 5) {
    console.log("You lose! Game over.");
}
    */