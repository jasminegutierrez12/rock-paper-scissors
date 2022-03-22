
const GAME_CHOICES = ['Rock', 'Paper', 'Scissors'];
const GAME_CHOICES_LENGTH = GAME_CHOICES.length;

function getRandomNumberBetweenZeroAndLimit(limit){
    return Math.floor(Math.random() * limit);
}

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

function getResultsOfRoundString(playerSelection, computerSelection){ 

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
     
    //playerSelection = captalizeFirstLetterOfWord(playerSelection);
    }

    while(!GAME_CHOICES.includes(playerSelection));

    return playerSelection;

}

function playRound(){
    const playerSelection = String(this.id);
    const computerSelection = computerPlay();

    const results = getResultsOfRoundString(playerSelection, computerSelection);
    updateUIWithRoundResults(results)
    updateUIScoresWithRoundResults(results);
    updateRound();
    updateUIImageOfPlayer(playerSelection);
    updateUIImageOfComputer(computerSelection);
}

function updateRound(){
    const currentRoundNode = document.querySelector("#currentRound");
    const currentRound = parseInt(currentRoundNode.textContent);
    const MAX_ROUND = 5;
    
    if(currentRound < MAX_ROUND){
        currentRoundNode.textContent = currentRound + 1;
    }
    else{
        currentRoundNode.textContent = "1";
    }
}

function updateUIWithRoundResults(results){
    const roundResultsNode = document.querySelector("#roundResults");
    roundResultsNode.textContent = results; 
}

function updateUIScoresWithRoundResults(results){
    const playerScoreNode = document.querySelector("#playerScore");
    const playerScore = parseInt(playerScoreNode.textContent);
    const computerScoreNode = document.querySelector("#computerScore");
    const computerScore = parseInt(computerScoreNode.textContent);

    if(results.includes("Win")){
        playerScoreNode.textContent = playerScore + 1;
    }

    else if(results.includes("Lose")){
        computerScoreNode.textContent = computerScore + 1;
    }
}
function updateUIImageOfComputer(computerSelection){
    const computerImgNode = document.querySelector(".computerImgChoice");
    if(computerSelection === "Rock"){
        computerImgNode.src = "images/rock_icon.png"
    }
    else if(computerSelection === "Paper"){
        computerImgNode.src = "images/paper_icon.png"
    }
    else if(computerSelection === "Scissors"){
        computerImgNode.src = "images/scissors_icon.png"
    }
}

function updateUIImageOfPlayer(playerSelection){
    const playerImgNode = document.querySelector(".playerImgChoice");
    if(playerSelection === "Rock"){
        playerImgNode.src = "images/rock_icon.png"
    }
    else if(playerSelection === "Paper"){
        playerImgNode.src = "images/paper_icon.png"
    }
    else if(playerSelection === "Scissors"){
        playerImgNode.src = "images/scissors_icon.png"
    }
}


function game(){
    const TOTAL_ROUNDS = 1; 

    let computerScore = 0;

    let playerScore = 0; 
    
    const buttons = document.querySelectorAll('.buttonChoice');

    buttons.forEach((button) =>{
        button.addEventListener('click', playRound);
    });

    /*for(let currentRound = 0; currentRound < TOTAL_ROUNDS; currentRound++){
        let computerSelection = computerPlay();
        // let playerSelection = getPlayerSelection();
        
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
    */
}

game();