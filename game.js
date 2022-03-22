
function getRandomNumberBetweenZeroAndLimit(limit){
    return Math.floor(Math.random() * limit);
}

function computerPlay(){
    const GAME_CHOICES = ['Rock', 'Paper', 'Scissors'];
    const GAME_CHOICES_LENGTH = GAME_CHOICES.length;
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

function playRound(){
    const playerSelection = String(this.id);
    const computerSelection = computerPlay();
    const currentRound = getCurrentRound();
    const results = getResultsOfRoundString(playerSelection, computerSelection);
    const MAX_ROUND = 5;
    const isFinalRound = currentRound >= MAX_ROUND; 

    updateUIImageOfPlayer(playerSelection);
    updateUIImageOfComputer(computerSelection);
    updateUIWithRoundResults(results); 
    updateUIScoresWithRoundResults(results);
    
    if(!isFinalRound){
        incrementRound();
    }
    else{
        showFinalResultsOfTheGame();
        resetRound();
        resetPlayerAndComputerScore();
        setTimeout(function(){
            resetResults();
        }, 2000);
        setTimeout(function(){
            resetImages();
        }, 500)
        setTimeout(function(){
            resetUIRoundResults();
        }, 1000)
    }
}

function setCurrentRound(currentRound){
    const currentRoundNode = document.querySelector("#currentRound");
    currentRoundNode.textContent = currentRound;
}

function getCurrentRound(){
    const currentRoundNode = document.querySelector("#currentRound");
    const currentRound = parseInt(currentRoundNode.textContent);
    return currentRound;
}

function resetRound(){
    setCurrentRound(1);
}

function incrementRound(){
    const currentRound = getCurrentRound();
    setCurrentRound(currentRound+1);
}

function updateUIWithRoundResults(results){
    const roundResultsNode = document.querySelector("#roundResults");
    roundResultsNode.textContent = results; 
}

function resetUIRoundResults(){
    const roundResultsNode = document.querySelector("#roundResults");
    roundResultsNode.textContent = " "; 
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

function resetPlayerAndComputerScore(){
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");
    
    playerScore.textContent = "0";
    computerScore.textContent = "0";

}

function showFinalResultsOfTheGame(){
    const finalResultsNode = document.querySelector("#finalRoundResults");
    const playerScoreNode = document.querySelector("#playerScore");
    const playerScore = parseInt(playerScoreNode.textContent);
    const computerScoreNode = document.querySelector("#computerScore");
    const computerScore = parseInt(computerScoreNode.textContent);

    if(playerScore === computerScore){
        finalResultsNode.textContent = "Game is tied! No one wins! ;-;";
    }
    if(playerScore > computerScore){
        finalResultsNode.textContent = "Player wins!!!";
    }
    else if(playerScore < computerScore){
        finalResultsNode.textContent = "Computer wins!!!";
    }
}

function resetResults(){
    const finalResultsNode = document.querySelector("#finalRoundResults");
    finalResultsNode.textContent = " ";
}

function resetImages(){
    const playerImgNode = document.querySelector(".playerImgChoice");
    const computerImgNode = document.querySelector(".computerImgChoice");

    playerImgNode.src = "";
    computerImgNode.src = "";
}

function game(){
    const TOTAL_ROUNDS = 1; 

    let computerScore = 0;

    let playerScore = 0; 
    
    const buttons = document.querySelectorAll('.buttonChoice');

    buttons.forEach((button) =>{
        button.addEventListener('click', playRound);
    });
}

game();