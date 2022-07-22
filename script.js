

let yourScore = 0;
let computerScore = 0; 

function getComputerChoice() {
    let choices = [
        "rock",
        "paper",
        "scissor"
    ]
    let compChoice = Math.floor(Math.random() * 3);
    return choices[compChoice];
   
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK" && computerSelection == "paper") {
        computerScore++;
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
        yourScore++;
        return "You Win! Rock beats Scissor";
    }
    else if (playerSelection == "scissor" || playerSelection == "Scissor" || playerSelection == "SCISOR" && computerSelection == "paper") {
        yourScore++;
        return "You Win! Scissor beats Paper";
    }
    else if (playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER" && computerSelection == "scissor") {
        computerScore++;
        return "You Lose! Scissor beats Paper";
    }
    else {
        return "Tie! Try again";
    }

}


function game() {

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("choose rock paper scissor");
        let computerSelection = getComputerChoice();

       console.log(playRound(playerSelection, computerSelection));
      }
if (yourScore > 2) {
    return "You Win!";
}
else {
    return "You lose!";
}
   
}
 