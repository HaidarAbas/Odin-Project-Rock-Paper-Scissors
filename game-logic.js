const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let roundCounter = 0;

let activeBtns = true;
let btnElements = document.querySelectorAll("button");

const imgHandLeft = document.getElementById("img-hand-left");
const imgHandRight = document.getElementById("img-hand-right");

//-----------------DOM method for results-----------------//

const resultsTextArea = document.createElement("textarea");
resultsTextArea.setAttribute("id", "results-text");
resultsTextArea.setAttribute("style", "width: 650px; height: 200px; border: 2px dashed grey; border-radius: 5px; resize: none;");
resultsTextArea.readOnly = true;

const resultsScoreHeader = document.createElement("h4");
resultsScoreHeader.setAttribute("id", "results-score");
resultsScoreHeader.textContent = "Human 0   /   Computer 0"

const resultsDisplayDiv = document.getElementById("results-display");
resultsDisplayDiv.appendChild(resultsTextArea);
resultsDisplayDiv.appendChild(resultsScoreHeader);

//-----------------game logic-----------------//

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
    }
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Please enter your choice: rock, paper or scissors").toLowerCase();

        switch (choice) {
            case rock:
            case paper:
            case scissors:
                return choice;
        }
    }
}

function getHumanChoiceOnClick(btn) {
    let choice = btn.textContent;

    switch (choice) {
        case rock:
        case paper:
        case scissors:
            return choice;
    }
}

function playRound(humanChoice, computerChoice) {
    let responseWin = `You win! ${humanChoice} beats ${computerChoice}.`;
    let responseLose = `You lose! ${computerChoice} beats ${humanChoice}.`;

    switch (humanChoice) {
        case computerChoice:
            resultsTextArea.value += ("It's a draw!" + `\n`);
            break;
        case rock:
            if (computerChoice === paper) {
                computerScore++;
                resultsScoreHeader.textContent = `Human ${humanScore}   /   Computer ${computerScore}`;
                resultsTextArea.value += (responseLose + `\n`);
                break;
            }
            humanScore++;
            resultsScoreHeader.textContent = `Human ${humanScore}   /   Computer ${computerScore}`;
            resultsTextArea.value += (responseWin + `\n`);
            break;
            
        case paper:
            if (computerChoice === scissors) {
                computerScore++;
                resultsScoreHeader.textContent = `Human ${humanScore}   /   Computer ${computerScore}`;
                resultsTextArea.value += (responseLose + `\n`);
                break;
            }
            humanScore++;
            resultsScoreHeader.textContent = `Human ${humanScore}   /   Computer ${computerScore}`;
            resultsTextArea.value += (responseWin + `\n`);
            break;

        case scissors:
            if (computerChoice === rock) {
                computerScore++;
                resultsScoreHeader.textContent = `Human ${humanScore}   /   Computer ${computerScore}`;
                resultsTextArea.value += (responseLose + `\n`);
                break;
            }
            humanScore++;
            resultsScoreHeader.textContent = `Human ${humanScore}   /   Computer ${computerScore}`;
            resultsTextArea.value += (responseWin + `\n`);
            break;
    }

    roundCounter++;
    checkScore(5);
}

function checkScore(numOfRounds) {
    if (roundCounter === numOfRounds) {
        if (humanScore === computerScore) {
            resultsScoreHeader.textContent += " | Game Over! It's a tie!";
        }
        else if (humanScore > computerScore) {
            resultsScoreHeader.textContent += " | Game Over! Human Victory!";
        }
        else {
            resultsScoreHeader.textContent += " | Game Over! Computer Victory!";
        }
    }
}

function toggleButtons() {
    btnElements.forEach((btn) => {
        if (activeBtns === true) {
            btn.disabled = "true";
        } else {
            btn.removeAttribute("disabled");
        }
    });

    if (activeBtns === true) {
        activeBtns = false;
    } else {
        activeBtns = true;
    }
}

//-----------------events-----------------//

//animations
const shakeLeftKeyFrames = [{transformOrigin: "left"}, {transformOrigin: "left", transform: "rotate(-45deg)"}, {transformOrigin: "left", transform: "rotate(0)"}];
const shakeRightKeyFrames = [{transformOrigin: "right"}, {transformOrigin: "right", transform: "rotate(45deg)"}, {transformOrigin: "right", transform: "rotate(0)"}];
const shakeOptions = {duration: 750, iterations: 3};

btnElements.forEach((btn) => {
    btn.onclick = () => {
        let humanChoice = getHumanChoiceOnClick(btn);
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        if (imgHandLeft.src !== "rps-images/rock-small.png" && imgHandRight.src !== "rps-images/rock-small-flip.png") {
            imgHandLeft.src = "rps-images/rock-small.png";
            imgHandRight.src = "rps-images/rock-small-flip.png";
        }

        toggleButtons();

        imgHandLeft.animate(shakeLeftKeyFrames, shakeOptions);
        imgHandRight.animate(shakeRightKeyFrames, shakeOptions);

        setTimeout(() => {
            if (computerChoice === paper) {
                imgHandRight.src = "rps-images/paper-small-flip.png";
            }
            else if (computerChoice === scissors) {
                imgHandRight.src = "rps-images/scissors-small-flip.png";
            }

            if (humanChoice === paper) {
                imgHandLeft.src = "rps-images/paper-small.png";
            }
            else if (humanChoice === scissors) {
                imgHandLeft.src = "rps-images/scissors-small.png";
            }

            toggleButtons();
        }, 2500);
    };
    
});
