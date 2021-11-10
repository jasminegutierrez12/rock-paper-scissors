let currentRound = 0; 

let computerScore = 0; 
let playerScore = 0;
const totalRounds = 5; 

let computerGuess; 
let computerChoice;
let playerSelection; 


function game(){
    // Your JavaScript goes here!
    console.log("ROCK, PAPER, SCISSORS GAME!");

    
    while(currentRound < totalRounds){
        playerSelection = prompt("Choose Rock, Paper, or Scissors");

        if(playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors"){
            alert("Good Choice!!");
            // console.log("Your selection: " + playerSelection);
        }
        else{
            alert("Entered in the incorrect selection")
            console.log("Wrong Choice: " + playerSelection);
        }
        computerChoice = computerPlay(computerGuess);
        // console.log("Computer selection: " + computerChoice)
        playRound(playerSelection, computerChoice);
        currentRound++;
        console.log("Current Round: " + currentRound);
        console.log("Your score: " + playerScore);
        console.log("Computers Score: " + computerScore)
    }

    if(playerScore > computerScore){
        window.alert("You win!!!" + "\nPlayers Final Score: " + playerScore + "\n Computer's Final Score: " + computerScore)

    }
    else if(playerScore < computerScore){
        prompt("You lose!!");
    }
    else{
        prompt("You both tied!! Try again next time!");
    }

}