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
    let playResult = determineWinner(playerSelection, comp);
    const displayResults = document.querySelector(".result");
    displayResults.textContent = playResult;
    if ( (playerSelection == "rock" && comp == "paper") || (playerSelection == "paper" && comp == "scissor") || (playerSelection == "scissor" && comp == "rock")){
        
        let container = document.querySelector('.compScore');
        let result = container.textContent;
        let r = parseInt(result);
        r++;
        container.textContent = r;
    }
    else if ((playerSelection == "rock" && comp == "rock") || (playerSelection == "paper" && comp == "paper") || (playerSelection == "scissor" && comp == "scissor")){
        return 'tie';
    }
    else {
        let container = document.querySelector('.playerScore');
        let result = container.textContent;
        let r = parseInt(result);
        r++;
        container.textContent = r;
    }
 }
//End of game logic functions


const playGame = document.querySelector('.game');
playGame.addEventListener('click', () => {
    game();
})
let playerWins = 0;
 let compWins = 0;
function game(){
const buttons = document.querySelector('.buttons');

const rockBtn = document.createElement('button'); //add rock option
rockBtn.classList.add('rockOption');
rockBtn.textContent = 'Rock';
buttons.appendChild(rockBtn);

const paperBtn = document.createElement('button'); // add scissor option
paperBtn.classList.add('paperOption');
paperBtn.textContent = 'Paper';
buttons.appendChild(paperBtn);

const scissorBtn = document.createElement('button'); // add paper option
scissorBtn.classList.add('scissorOption');
scissorBtn.textContent = 'Scissor';
buttons.appendChild(scissorBtn);

buttons.removeChild(playGame); //remove the play game button   

 



 let playerScore = document.querySelector('.playerScore');
 let compScore = document.querySelector('.compScore');
 compScore.textContent = compWins;
 playerScore.textContent = playerWins;
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

}
function determineFinalWinner(playerWins, compWins){
    if (playerWins == 5){
        return "Player wins!";
    }
    if (compWins == 5){
        return "Computer wins!";
    }
}
