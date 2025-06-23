// This is a user vs computer version of the rock, paper, scissors game. 
// Number 0 -> Rock 
// Number 1 -> Paper 
// Number 2 -> Scissors

// Create variables to keep track of game score
let computerScore = 0; 
let userScore = 0;

function getComputerChoice(){
    // Randomise Choice process through Math.random(); as we have 3 choices, multiply result by 3.
    // If random num <= 1, pick rock; elif num between 1(excl.) and 2(incl.), pick paper; else pick scissors
    const random_num = Math.floor(Math.random() * 3); 
    // Return a random number and round it down to integer 
    console.log(`Random num: ${random_num}`);
    return random_num;
}

function getUserChoice(){
    // Ask user for a string input, spelling must be correct, but case sensitiveness does not make a difference.
    // Return user choice as number for easy comparison in playRound func
    const userInput = prompt('Enter your rock, paper, scissors Choice below: ').toLowerCase(); 
    // Convert input text to lowercase for consistency
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
    // Call computer and user choice functions, compare results according to game logic, and update winner's score
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();
    let roundWinner; 
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
    if (userScore !== computerScore){
        roundWinner = userScore > computerScore ? "user" : "computer";
        return 'The winner is the ' + roundWinner;
    }
    else {
        return 'We have a draw!';
    }
}