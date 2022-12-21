


//Adding Dom for the buttons





const newDiv = document.querySelector(".newdiv");

const buttons = document.querySelectorAll('.player button');

 buttons.forEach( function(button){
   button.addEventListener('click', function(e) { 
      const buttonName = e.target.textContent ;

      const playerSelection = buttonName.toLowerCase() ;
       

      const computerSelection = getComputerChoice(); 


     playRound(playerSelection, computerSelection) ;

     whoWins(playerScore, computerScore);


   });
}); 

function whoWins(playerScore , computerScore){
       if (playerScore === 5) {
         const h2 = document.createElement('h2');
         h2.innerText = `You have beaten the Computer `;
         newDiv.append(h2)
       } else if (computerScore === 5) {
         const h2 = document.createElement('h2');
         h2.innerText = `You have been beaten by the Computer `;
         newDiv.append(h2)
       }

}


function getComputerChoice() {

     let choice = ['rock','paper','scissor'];
     return choice[Math.floor(Math.random()* choice.length)]
 }






 let playerScore = 0;
 let computerScore = 0;



function playRound(playerSelection, computerSelection){

      if( playerSelection === computerSelection){
         const p = document.createElement('p');
         p.innerText = "Draw";
         newDiv.appendChild(p);

      } else if (playerSelection === "rock" &&
      computerSelection === "scissor" ||
      playerSelection === "scissor" &&
      computerSelection === "paper" ||
      playerSelection === "paper" &&
      computerSelection === "rock")
      {   
         playerScore++ 
         const p = document.createElement('p');
         p.innerText = "You Won";
         newDiv.appendChild(p);

      } else {
          computerScore++
          const p = document.createElement('p');
         p.innerText = "Computer Won!";
         newDiv.appendChild(p);

      }
      
   
   };
        
         
// }
//function for playin 5 times;

// function playGame() {
        
//        for ( let i=0 ; i < 5 ; i++) {

//             let playerChoice = prompt(`rock paper or scissor`);
//             console.log(`playerChoice : ${playerChoice}`)
//             console.log(typeof playerChoice);
//             const playerSelection = playerChoice.toLowerCase();
//             const computerSelection = getComputerChoice();
//             playRound(playerSelection, computerSelection);
//         } 
//          if ( playerScore > computerScore ) {
//             return `Congratulations for the winning.`;
//          } else if ( computerScore > playerScore) {
//             return ` Sorry for your loss.`;
//          } else {
//             `Oh god, it was a draw`;
//          }
// } 