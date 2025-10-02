const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rndInt = Math.floor(Math.random() * 3);

    switch (rndInt) {
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
        default:
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice: rock, paper or scissors");

    switch (choice.toLowerCase()) {
        case rock:
            return rock;
        case paper:
            return paper;
        case scissors:
            return scissors;
        default:
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    let responseWin = `You win! ${humanChoice} beats ${computerChoice}. `;
    let responseLose = `You lose! ${computerChoice} beats ${humanChoice}. `;

    if (humanChoice === computerChoice) {
        console.log("It's a draw! Current score: " + `Human ${humanScore}   /   Computer ${computerScore}`);
    } 
    else if (humanChoice === rock) {
        if (computerChoice === paper) {
            computerScore++;
            console.log(responseLose + `Current score: Human ${humanScore}   /   Computer ${computerScore}`);
        }

        if (computerChoice === scissors) {
            humanScore++;
            console.log(responseWin + `Current score: Human ${humanScore}   /   Computer ${computerScore}`);
        }
    }
    else if (humanChoice === paper) {
        if (computerChoice === scissors) {
            computerScore++;
            console.log(responseLose + `Current score: Human ${humanScore}   /   Computer ${computerScore}`);
        }

        if (computerChoice === rock) {
            humanScore++;
            console.log(responseWin + `Current score: Human ${humanScore}   /   Computer ${computerScore}`);
        }
    }
    else if (humanChoice === scissors) {
        if (computerChoice === rock) {
            computerScore++;
            console.log(responseLose + `Current score: Human ${humanScore}   /   Computer ${computerScore}`);
        }

        if (computerChoice === paper) {
            humanScore++;
            console.log(responseWin + `Current score: Human ${humanScore}   /   Computer ${computerScore}`);
        }
    }
}

function playGame(numOfRounds) {
    for (let c = 0; c < numOfRounds; c++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log("Game Over! It's a tie!")
    }
    else if (humanScore > computerScore) {
        console.log("Game Over! Human Victory!")
    }
    else {
        console.log("Game Over! Computer Victory!")
    }
}

playGame(5);
