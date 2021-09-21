

function playRound(playerSelection, computerSelection) {
    // your code here!
    let playerSelect = playerSelection.toLowerCase();

    // Condition for Tied Game
    if( playerSelect === computerSelection){
        console.log("You Both Tied! No One Wins! ;-;");
    }

    // Condition if Rock (You) Beats Scissors (Computer)
    if(playerSelect === "rock" && computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors");
        playerScore++;
    }

    // Condition if Rock (You) Loses Against Paper (Computer)
    if(playerSelect === "rock" && computerSelection === "paper"){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    }

    // Condition if Paper (You) Beats Rock (Computer)
    if(playerSelect === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock");
        playerScore++;
    }

    // Condition if Paper (You) Loses Against Scissors (Computer)
    if(playerSelect === "paper" && computerSelection === "scissors"){
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    }

    // Condition if Scissors (You) Beats Paper (Computer)
    if(playerSelect === "scissors" && computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper");
        playerScore++;
    }
    // Condition if Scissors (You) Loses Against Paper (Computer)
    if(playerSelect === "scissors" && computerSelection === "rock"){
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    }
    
  }