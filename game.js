
//let playerSelection; 
const GAME_CHOICES = ['Rock', 'Paper', 'Scissors'];
const GAME_CHOICES_LENGTH = GAME_CHOICES.length;

function getRandomNumberBetweenZeroAndLimit(limit){
    return Math.floor(Math.random() * limit);
}

// export allows you to use it in another file
function computerPlay(){
    return GAME_CHOICES[getRandomNumberBetweenZeroAndLimit(GAME_CHOICES_LENGTH)];
}
function createWinnerOfRoundString(playerSelection, computerSelection){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function createLoserOfRoundString(playerSelection, computerSelection){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function captalizeFirstLetterOfWord(word){
    let lowerCaseWord = word.toLowerCase(); 
    return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
}

function playSingleRound(playerSelection, computerSelection){ 

    if(playerSelection === computerSelection){
        return "You Both Tie! No one wins! ;-;";
    }

    else if(playerSelection === "Rock"){
        if(computerSelection === "Scissors"){
            return createWinnerOfRoundString(playerSelection, computerSelection);   
        }
        else if(computerSelection === "Paper"){
            return createLoserOfRoundString(playerSelection, computerSelection);
        }
    }

    else if(playerSelection === "Paper"){
        if(computerSelection === "Rock"){
            return createWinnerOfRoundString(playerSelection, computerSelection);   
        }
        else if(computerSelection === "Scissors"){
            return createLoserOfRoundString(playerSelection, computerSelection);   
        }
    }

    else if(playerSelection === "Scissors"){
        if(computerSelection === "Rock"){
            return createLoserOfRoundString(playerSelection, computerSelection);   
        }
        else if(computerSelection === "Paper"){
            return createWinnerOfRoundString(playerSelection, computerSelection);   
        }
    }
}

function getPlayerSelection(){
    let playerSelection;

    do {
        playerSelection = prompt("Enter and Choose Rock, Paper, or Scissors");
        playerSelection = captalizeFirstLetterOfWord(playerSelection);
    }

    while(!GAME_CHOICES.includes(playerSelection));

    return playerSelection;

}


function game(){
    // Your JavaScript goes here!
    console.log("ROCK, PAPER, SCISSORS GAME!");

    //console.log("Computer choice:", computerPlay());

    const TOTAL_ROUNDS = 5; 

    let computerScore = 0;

    let playerScore = 0; 

    for(let currentRound = 0; currentRound < TOTAL_ROUNDS; currentRound++){
        let computerSelection = computerPlay();
        let playerSelection = getPlayerSelection();
        
        let roundResults = playSingleRound(playerSelection, computerSelection);

    
        if(roundResults.includes("Win")){
            playerScore++;
        }

        else if(roundResults.includes("Lose")){
            computerScore++;
        }

        console.log(roundResults);
        
    }

    console.log("Player's Score: ", playerScore);
    console.log("Computer's Score: ", computerScore);
    
    if(playerScore === computerScore){
        console.log("Game is tied! No one wins! ;-;");
    }
    if(playerScore > computerScore){
        console.log("Player wins!!!");
    }
    else if(playerScore < computerScore){
        console.log("Computer wins!!!");
    }


     //while(currentRound < totalRounds){  }
        
        /*playerSelection = prompt("Choose Rock, Paper, or Scissors");

        if(playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors"){
            alert("Good Choice!!");
            // console.log("Your selection: " + playerSelection);
        }
        else{
            alert("Entered in the incorrect selection")
            console.log("Wrong Choice: " + playerSelection);
        }
        */
       

        //console.log("player choice: " + playerSelection);
        //computerChoice = computerPlay(computerGuess);
        // console.log("Computer selection: " + computerChoice)
        //playRound(playerSelection, computerChoice);
        
        /*currentRound++;
        console.log("Current Round: " + currentRound);
        console.log("Your score: " + playerScore);
        console.log("Computers Score: " + computerScore)
        */

    /*if(playerScore > computerScore){
        window.alert("You win!!!" + "\nPlayers Final Score: " + playerScore + "\n Computer's Final Score: " + computerScore)

    }
    else if(playerScore < computerScore){
        alert("You lose!!");
    }
    else{
        alert("You both tied!! Try again next time!");
    }
    */

}

game();