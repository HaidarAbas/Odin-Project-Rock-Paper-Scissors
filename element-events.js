import * as game from "game-logic.js"

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

[btnRock, btnPaper, btnScissors].forEach(item => addEventListener("click", game.playRound(getHumanChoice(item.value), game.getComputerChoice())));