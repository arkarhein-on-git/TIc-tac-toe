

function getComputerChoice() {

   let choice = ['rock','paper','scissor'];
     return choice[Math.floor(Math.random()* choice.length)]
 }

let playerScore = 0;
let computerScore = 0;




function playRound(playerSelection, computerSelection){


   console.log( `Player Selection: ${playerSelection} , Computer Selection: ${computerSelection}, PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`);


    
    if (playerSelection === computerSelection) {

       return 'Draw'
    } else if ( playerSelection === "rock" && computerSelection === "scissor" || 
         playerSelection === "scissor"&& computerSelection === "paper "||
         playerSelection === "paper" && computerSelection === "rock") {
            
             playerScore++;
            return "You Won! You have defeated the Computer.";
            

         } else {
            computerScore++;
            return "Computer Won! You have been defeated.";
            
         }
        
         
}


function playGame() {
        
       for ( let i=0 ; i < 5 ; i++) {

            let playerChoice = prompt(`rock paper or scissor`);
            console.log(`playerChoice : ${playerChoice}`)
            console.log(typeof playerChoice);
            const playerSelection = playerChoice.toLowerCase();
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        } 
         if ( playerScore > computerScore ) {
            return `Congratulations for the winning.`;
         } else if ( computerScore > playerScore) {
            return ` Sorry for your loss.`;
         } else {
            `Oh god, it was a draw`;
         }
} 


 console.log (playGame());