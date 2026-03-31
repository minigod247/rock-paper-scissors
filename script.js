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

