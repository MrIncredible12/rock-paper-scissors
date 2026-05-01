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

function getHumanChoice(userChoice) {
    userChoice = prompt("Rock, paper, or scissors?", "");
    console.log(userChoice);
    return userChoice;
}

/* 
DECLARE function named playGame.
INSERT both playRound function and both scoring variables inside playGame function.
RUN playRound function.
RESET variables within humanSelection and computerSelection.
RUN playRound function again (five times in total).
IF both humanScore and computerScore sum total is 5:
    IF humanScore is greater than computerScore:
        OUTPUT "Congratulations! You've won the game!"
    ELSE 
        OUTPUT "Game over. You lost."
*/

// playGame function
function playGame() {
    // Assign user and computer selections to constants.
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

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
                OUTPUT "You lose. Rock loses to paper."
        IF humanChoice selected "paper":
            IF computerChoice selected "rock":
                INCREMENT humanScore.
                OUTPUT "You win. Paper beats rock."
            ELSE computerChoice selected "scissors":
                INCREMENT computerScore.
                OUTPUT "You lose. Paper loses to scissors."
        IF humanChoice selected "scissors":
            IF computerChoice selected "paper":
                INCREMENT humanScore.
                OUTPUT "You win. Scissors beats paper."
            ELSE computerChoice selected "rock":
                INCREMENT computerScore.
                OUTPUT "You lose. Scissors loses to rock."
    */

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie.");
            return;
        } else {
            switch (humanChoice) {
                case "rock":
                    if (computerChoice === "scissors") {
                        humanScore += 1;
                        console.log("You win! Rock beats scissors.");
                    } else {
                        computerScore += 1;
                        console.log("You lose! Rock loses to paper.");
                    }
                    break;
                case "paper":
                    if (computerChoice === "rock") {
                        humanScore += 1;
                        console.log("You win! Paper beats rock.");
                    } else {
                        computerScore += 1;
                        console.log("You lose! Paper loses to scissors.");
                    }
                    break;
                case "scissors":
                    if (computerChoice === "paper") {
                        humanScore += 1;
                        console.log("You win! Scissors beats paper.");
                    } else {
                        computerScore += 1;
                        console.log("You lose! Scissors loses to rock.");
                    }
                    break;
            }
        }
    }
    playRound(humanSelection, computerSelection);

    // Round 2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    // Round 3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    // Round 4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    // Round 5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // Winning and losing conditions
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
    } else {
        console.log("Game over. You lost.");
    }

}

// Play game.
playGame();

