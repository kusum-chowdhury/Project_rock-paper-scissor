

let choices = [
    "rock",
    "paper",
    "scissor"
];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}
let yourScore = 0;
    let computerScore = 0; 
function playRound(playerSelection, computerSelection) {
    playerSelection = window.prompt("choose");
    computerSelection = getComputerChoice();
     
    if (playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK" && computerSelection == "paper") {
        computerScore =+ 1;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER" && computerSelection == "rock") {
        yourScore++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "scissor" || playerSelection == "Scissor" || playerSelection == "SCISSOR" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissor";
    }
    else if (playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK" && computerSelection == "scissor") {
        yourScore =+ 1;
        return "You Win! Rock beats Scissor";
    }
    else if (playerSelection == "scissor" || playerSelection == "Scissor" || playerSelection == "SCISOR" && computerSelection == "paper") {
        yourScore =+ 1;
        return "You Win! Scissor beats Paper";
    }
    else if (playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER" && computerSelection == "scissor") {
        computerScore =+ 1;
        return "You Lose! Scissor beats Paper";
    }
    else {
        return "Tie! Try again";
    }

}
 

function game() {

    for (i = 0; i < 5; i++) {
      return playRound();
      
    }
if (yourScore > 2) {
    return "You Win!";
}
else {
    return "You lose!";
}
   

}
