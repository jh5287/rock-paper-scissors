function computerPlay(){
 let choice = Math.floor(Math.random()*3);
 if (choice === 0)
    return 'rock';
else if (choice === 1)
    return 'paper';
else if (choice === 2)
    return 'scissor';
}
function playerInitial(){
    let playerSelection = prompt("Enter rock, paper, or scissor: ");
    playerSelection = playerSelection.toLowerCase();
    let flag = false;
    while (!flag){
        if ((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissor"))
            flag = true;
        else{
            playerSelection = prompt("Please enter a valid option: rock, paper, or scissor: ");
        }
    }
    return playerSelection;
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

function playRound() {
    let  player = playerInitial();
	let comp = computerPlay();
    console.log(determineWinner(player, comp))
    if ( (player == "rock" && comp == "paper") || (player == "paper" && comp == "scissor") || (player == "scissor" && comp == "rock")){
        return "comp";
    }
    else if ((player == "rock" && comp == "rock") || (player == "paper" && comp == "paper") || (player == "scissor" && comp == "scissor")){
        return "tie";
    }
    else {
        return "player";
    }
 }

function game() {
    let playerWins = 0;
    let compWins = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++){
        let result = playRound();
        if (result === "comp")
            compWins++;
        else if (result === "tie")
            ties++;
        else
            playerWins++;
    }
    return `Player won ${playerWins} times, computer won ${compWins} times, and tied ${ties} times.`;
}

 console.log(game())


