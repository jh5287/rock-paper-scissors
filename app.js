function computerPlay(){
 let choice = Math.floor(Math.random()*3);
 if (choice === 0)
    return 'rock';
else if (choice === 1)
    return 'paper';
else if (choice === 2)
    return 'scissor';
}

let playerSelection = prompt("Enter rock, paper, or scissor: ");
playerSelection = playerSelection.toLocaleLowerCase();
let flag = false;
while (!flag){
    if ((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissor"))
        flag = true;
    else{
        playerSelection = prompt("Please enter a valid option: rock, paper, or scissor: ");
    }
}
//const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
function playRound (playerSelection, computerPlay) {
    let  player = playerSelection.toLowerCase();
	let comp = computerSelection;
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

 console.log(playRound(playerSelection, computerSelection))


