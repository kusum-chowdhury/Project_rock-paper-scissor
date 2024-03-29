
let playerSelection;
let yourScore = 0;
let computerScore = 0; 
let computerSelection = getComputerChoice();
let text = document.querySelector('.score-text');
let whoWon = document.querySelector('.won');
let h2 = document.querySelector('h2');
let score = 0;
let yourScoreDisplay = document.querySelector('.uc');
let computerChoiceDisplay = document.querySelector('.cc');
let possibleChoices = document.querySelectorAll("button");

// get random choices for computer player
function getComputerChoice() {
    const choices = [
        "rock",
        "paper",
        "scissor"
    ] 
    let compChoice = Math.floor((Math.random() * choices.length));
    return choices[compChoice];
   }



// get users choice and computer's choice then returns whoever's win 
// user wins add 1 in yourScore
// if computer wins add 1 in computerScore
// whoevers win add 1 in score
 function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
         computerScore++;
         score++;
         return text.textContent = "You Lost! Paper beats Rock";
     }
     else if (playerSelection == "paper" && computerSelection == "rock") {
         yourScore++;
         score++;
         return text.textContent = "You Win! Paper beats Rock";
     }
     else if (playerSelection == "scissor" && computerSelection == "rock") {
         computerScore++;
         score++;
         return text.textContent = "You Lost! Rock beats Scissor";
     }
     else if (playerSelection == "rock" && computerSelection == "scissor") {
         yourScore++;
         score++;
         return text.textContent = "You Win! Rock beats Scissor";
     }
     else if (playerSelection == "scissor" && computerSelection == "paper") {
         yourScore++;
         score++;
         return text.textContent = "You Win! Scissor beats Paper";
     }
     else if (playerSelection == "paper" && computerSelection == "scissor") {
         computerScore++;
         score++;
         return text.textContent = "You Lost! Scissor beats Paper";
     }
     else if (playerSelection == computerSelection) {
         score++;
         return text.textContent = "It's a Draw! Try again";
     } 
 
 }



// run function playround for 5 times
// if score reaches 5 check who wins

function game() {
   
    whoWon.textContent = '';

    playRound(playerSelection, computerSelection);
    yourScoreDisplay.textContent = playerSelection;
    computerChoiceDisplay.textContent = computerSelection;
    if (score === 5) {
        if ( yourScore < computerScore) {
            whoWon.textContent = "YOU LOST! TRY AGAIN! ";
        } else if (yourScore > computerScore){
            whoWon.textContent = "CONGRATUGLATIONS!! YOU WIN!";
        } else {
            whoWon.textContent = "ITS A TIE!! TRY AGAIN!";
        }
        score = 0;
        yourScore = 0;
        computerScore = 0;
       
    }
    
       return;
    }

    
 // run game function upon clicking on the buttons
 possibleChoices.forEach(btn => btn.addEventListener('click', (e) => {
    h2.textContent = '';
    playerSelection = (e.target.value);
   
   computerSelection = getComputerChoice();
     game();
 }))




   



