let playerSelect; 

const buttons = document.querySelectorAll('choice');
console.log(buttons);

//const btn_img = document.querySelector('.btn_img');

const btnRock = document.querySelector('#btnRock');

const btnScissor = document.querySelector('#btnScissors');

const btnPaper = document.querySelector('#btnPaper');

const playtext = document.querySelector("#playerText");



let currentRound = 0; 

let computerScore = 0; 
let playerScore = 0;
const TOTAL_ROUNDS = 5; 

let computerGuess; 
let computerChoice;

    /*btnRock.addEventListener("click", e => {
        playerSelect = 'rock'; 
        console.log("Player selection: " + playerSelect);
        computerChoice = computerPlay(computerGuess);
        console.log("Computer selection: " + computerChoice)
        playRound(playerSelect, computerChoice);
        currentRound++;
        console.log("Round: " + currentRound);
    });
    
    btnScissor.addEventListener("click", e => {
        playerSelect = 'scissors'; 
        console.log("Player selection: " + playerSelect);
        computerChoice = computerPlay(computerGuess);
        console.log("Computer selection: " + computerChoice)
        playRound(playerSelect, computerChoice);
        currentRound++;
        console.log("Round: " + currentRound);
    });
    
    btnPaper.addEventListener("click", e=>{
        playerSelect = 'paper'; 
        console.log("Player selection: " + playerSelect);
        computerChoice = computerPlay(computerGuess);
        console.log("Computer selection: " + computerChoice)
        playRound(playerSelect, computerChoice);
        currentRound++;
        console.log("Round: " + currentRound);
    });
    */

    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            console.log(button.id);
        })
    });


  console.log( "Computer Choice: " + computerPlay());


