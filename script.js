let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.random();
  if (number < 0.33) {
    return "rock";
  } else if (number < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice())


function getHumanChoice() {
  let userInput = prompt("What's is your choice?");
  return userInput;
}
console.log(getHumanChoice())


function playRound(humanChoice, computerChoice) {
 humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "Draw";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return `You win`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return `You win`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return `You win`;
  } else {
    computerScore++;
    return `You lose`;
  }
}
 // console.log(playRound())
 let humanSelection = getHumanChoice();
 let = computerSelection = getComputerChoice();

 console.log(playRound(humanSelection, computerSelection));


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

playGame()