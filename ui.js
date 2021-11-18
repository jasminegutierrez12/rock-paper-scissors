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