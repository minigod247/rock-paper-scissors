let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.random();
  if (number < 0.33) return "rock";
  else if (number < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("What's your choice?");
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice) return "Invalid input";

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "Draw";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
  }

  console.log("Final Score:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);
}

playGame();