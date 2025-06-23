// This is a user vs computer version of the rock, paper, scissors game. 
// Number 0 -> Rock 
// Number 1 -> Paper 
// Number 2 -> Scissors

// Initialise variables to keep track of game score
let computerScore = 0; 
let userScore = 0;

function getComputerChoice(){
    // Randomise selection process through Math.random(); as we have 3 choices, multiply result by 3
    const random_num = Math.floor(Math.random() * 3); 
    return random_num;
}

function getUserChoice(){
    // Ask user for a string input, spelling must be correct, but case sensitiveness does not make a difference
    const userInput = prompt('Enter your rock, paper, scissors Choice below: ').toLowerCase(); 
    // Convert input text to lowercase for consistency
    // Return user choice as number for easy comparison in playRound func
    if (userInput === 'rock') {
        return 0;
    } else if (userInput === 'paper') {
        return 1;
    }
    else {
        return 2;
    }
}


function playRound(){
    // Call computer and user choice functions, compare results according to game logic
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();
    // No need to check draws
    if (computerChoice === 0 && userChoice === 2){
        // Rock beats scissors
        computerScore += 1;
    }
    else if (computerChoice === 0 && userChoice === 1){
        userScore += 1;
    }
    else if (computerChoice === 1 && userChoice === 0){
        // Paper beats rock
        computerScore += 1;
    }
    else if (computerChoice === 1 && userChoice === 2){
        userScore += 1;
    }
    else if (computerChoice === 2 && userChoice === 1){
        // Scissors beat paper
        computerScore += 1;
    }
    else if (computerChoice === 2 && userChoice === 0){
        userScore += 1;
    }
    console.log(`Round finished. User score is ${userScore}, computer score is ${computerScore}`)
}


function playGame(){
    let roundWinner;
    for (let i=0; i<5; i++){
        playRound();
    }
    if (userScore !== computerScore){
        roundWinner = userScore > computerScore ? "user" : "computer";
        return 'The winner is the ' + roundWinner;
    }
    else {
        return 'We have a draw!';
    }
}