// This is a user vs computer version of the rock, paper, scissors game. 
// Number 0 -> Rock 
// Number 1 -> Paper 
// Number 2 -> Scissors

// Initialise variables to keep track of game score
let computerScore = 0; 
let userScore = 0;
let roundCounter = 0;

function getComputerChoice(){
    // Randomise selection process through Math.random(); as we have 3 choices, multiply result by 3
    const random_num = Math.floor(Math.random() * 3); 
    return random_num;
}

let buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener('click', (event) => {
    roundCounter += 1;
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound(getComputerChoice(), 0);
            break;
        case 'paper':
            playRound(getComputerChoice(), 1);
            break;
        case 'scissors':
            playRound(getComputerChoice(), 2);
            break;
    }
});

function playRound(computerChoice, userChoice){
    if (computerChoice === userChoice){
        updateTable();
        return;
    }
    switch (computerChoice) {
        case 0:
            if (userChoice === 1) userScore += 1;
            else computerScore += 1;
            break;
        case 1:
            if (userChoice === 2) userScore += 1;
            else computerScore += 1;
            break;
        case 2:
            if (userChoice === 0) userScore += 1;
            else computerScore += 1;
            break;
    }
    updateTable();
    checkWinner();
}

const tableClass = document.querySelector(".results");

function updateTable(){
    // Function that updates the table dynamically, as the user clicks the buttons/plays rounds
    // Adds new rows to the table to show the player an up to date score
    let newRow = document.createElement("tr");

    let newEntry1 = document.createElement("td");
    let newEntry2 = document.createElement("td");
    let newEntry3 = document.createElement("td");

    newEntry1.textContent = `Round ${roundCounter}`;
    newEntry2.textContent = userScore;
    newEntry2.style.textAlign = "center";   
    newEntry3.textContent = computerScore;
    newEntry3.style.textAlign = "center"; 

    newRow.appendChild(newEntry1);
    newRow.appendChild(newEntry2);
    newRow.appendChild(newEntry3);

    tableClass.appendChild(newRow);
}

function checkWinner(){
    if (userScore === 5 || computerScore === 5){
        let winner = userScore === 5 ? "user" : "computer";
        setTimeout(() => {
          alert(`Game over, the ${winner} has won!`);  
        }, 1000);  
    }
}