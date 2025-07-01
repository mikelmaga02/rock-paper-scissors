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

let buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener('click', function clicker(event) {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound(getComputerChoice(), 0)
            break;
        case 'paper':
            playRound(getComputerChoice(), 1)
            break;
        case 'scissors':
            playRound(getComputerChoice(), 2)
            break;
    }
});

function playRound(computerChoice, userChoice){
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


// function playGame(){
//     let roundWinner;
//     for (let i=0; i<5; i++){
//         playRound();
//     }
//     if (userScore !== computerScore){
//         roundWinner = userScore > computerScore ? "user" : "computer";
//         return 'The winner is the ' + roundWinner;
//     }
//     else {
//         return 'We have a draw!';
//     }
// }