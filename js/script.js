function getComputerChoice() {
         
    let choice = Math.floor(Math.random()* 12 );
    
    if ( choice <= 4) return "Rock";
    if ( choice <= 8) return "Paper";
    if ( choice <= 12) return "Sicssor";

}