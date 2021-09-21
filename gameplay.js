const computerChoice1 = 1;
const computerChoice2 = 2;
const computerChoice3 = 3; 

const stringSelection1 = "rock";
const stringSelection2 = "paper";
const stringSelection3 = "scissors";

let computersFinalChoice; 


function computerPlay(computerGuess){
    
    let computersChoice = Math.floor(Math.random()*3)+ 1;

    //console.log("Random number: " + computersChoice);

    if(computersChoice === computerChoice2){
        //console.log("computer choice: " + computersChoice);
        return computerGuess = stringSelection2;
    }
    
    if(computersChoice === computerChoice3){
       
       //console.log("computer choice: " + computersChoice);
        return computerGuess =  stringSelection3;
    }

    if(computersChoice === computerChoice1){
        //console.log("computer choice: " + computersChoice);
        return computerGuess =  stringSelection1;
    }
    console.log(computersFinalChoice);
    //alert("Computer: " + computersFinalChoice);
}