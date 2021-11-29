/*
// find and select container div

const container = document.querySelector('div');

const content = document.createElement('div');
content.classList.add('content');

container.appendChild(content);

// Create a P tag to enter in the rules of the game
const rules_text = document.createElement('p');

// Append DOM
container.appendChild(rules_text);

rules_text.textContent = "Rules: Rules are the same. Click the icons below! There will be 5 rounds! Good luck!";

// set Attribute 
rules_text.setAttribute('id', 'rulesText');

// Create another div element to border around buttons
const button_container = document.createElement('div');

button_container.style.border = '1px solid black';

button_container.setAttribute('id', "btnContainer");

container.appendChild(button_container);

const div_button = document.querySelector("#btnContainer");

// Creating the 3 buttons for user to click on

const btn_Rock = document.createElement('button');

const btn_Scissors = document.createElement('button');

const btn_Paper = document.createElement('button');

// add text for now 
btn_Rock.textContent = "Rock";

btn_Scissors.textContent = "Scissors";

btn_Paper.textContent = "Paper";

// Update and set Attribute
btn_Rock.setAttribute('id', "#btn_Rock");
btn_Scissors.setAttribute('id', "#btn_Scissors");
btn_Paper.setAttribute('id', "#btn_Paper");

// Add to HTML
div_button.appendChild(btn_Rock);
div_button.appendChild(btn_Scissors);
div_button.appendChild(btn_Paper);

// Make margin
btn_Rock.style.margin = "100px";
btn_Scissors.style.margin = "100px";
btn_Paper.style.margin = "100px";

// Create img tag
//const img_Rock = document.createElement();
*/

