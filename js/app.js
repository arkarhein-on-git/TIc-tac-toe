function getComputerChoice() {
         
    let choice = ['rock','paper','scissor']

    return choice[Math.floor(Math.random()* choice.length)]
 }
// function getPlayerChoice(){
//       const player = prompt(`rock paper or siccsor?`);
//       return player.toLowerCase();
// }

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection){
          console.log(playerScore);
          console.log(computerSelection);
          
    
    if (playerSelection === computerSelection) return "Draw, play agin.";

    if ( playerSelection === "rock" && computerSelection === "scissor" || 
         playerSelection === "scissor"&& computerSelection === "paper "||
         playerSelection === "paper" && computerSelection === "rock") {
            
             playerScore = playerScore + 1;
            return "You Won! You have defeated the Computer.";
            

         } else if ( computerSelection === "rock" && playerSelec === "scissor" || 
         computerSelection === "scissor"&& playerSelection === "paper"||
         computerSelection === "paper" && playerSelection === "rock") {
            computerScore = computerScore + 1;
            return "Computer Won! You have been defeated."
            
         }
        
         
}

const playerSelection = 'rock';


function playGame() {
        
       for ( let i=0 ; i < 5 ; i++) {
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection))
       } 
    
     if (playerScore > computerScore) return "You defeated the Computer" ;
     if (playerScore < computerScore) return "You lost ";
            
} 


playGame();