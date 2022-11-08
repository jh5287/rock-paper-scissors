//These are the game logic functions
function computerPlay(){
 let choice = Math.floor(Math.random()*3);
 if (choice === 0)
    return 'rock';
else if (choice === 1)
    return 'paper';
else if (choice === 2)
    return 'scissor';
}

function determineWinner(player, comp) {
    if ( (player == "rock" && comp == "paper") || (player == "paper" && comp == "scissor") || (player == "scissor" && comp == "rock")){
        return `You lost :( You picked ${player} and the computer picked ${comp}`;
    }
    else if ((player == "rock" && comp == "rock") || (player == "paper" && comp == "paper") || (player == "scissor" && comp == "scissor")){
        return `It\'s a tie! You picked ${player} and the computer picked ${comp}`
    }
    else {
        return `You won! You picked ${player} and the computer picked ${comp}`;
    }
}

function playRound(playerSelection) {
	let comp = computerPlay();
    displayResults.textContent = determineWinner(playerSelection, comp);
    if ( (playerSelection == "rock" && comp == "paper") || (playerSelection == "paper" && comp == "scissor") || (playerSelection == "scissor" && comp == "rock")){
        return "comp";
    }
    else if ((playerSelection == "rock" && comp == "rock") || (playerSelection == "paper" && comp == "paper") || (playerSelection == "scissor" && comp == "scissor")){
        return "tie";
    }
    else {
        return "player";
    }
 }
//End of game logic functions


//function game() {
//    let playerWins = 0;
//    let compWins = 0;
//    let ties = 0;
//    for (let i = 0; i < 5; i++){
//        let result = playRound();
//        if (result === "comp")
//            compWins++;
//        else if (result === "tie")
//            ties++;
//        else
//            playerWins++;
//    }
//    return `Player won ${playerWins} times, computer won ${compWins} times, and tied ${ties} times.`;
//}
//
// console.log(game())

const displayResults = document.querySelector("#displayResults");

const rockOption = document.querySelector('.rockOption');
rockOption.addEventListener('click', () => {
    let playerSelection = 'rock';
    playRound(playerSelection);
} )
const paperOption = document.querySelector('.paperOption');
paperOption.addEventListener('click', () => {
    let playerSelection = 'paper';
    playRound(playerSelection);
} )
const scissorOption = document.querySelector('.scissorOption');
scissorOption.addEventListener('click', () => {
    let playerSelection = 'scissor';
    playRound(playerSelection);
} )





