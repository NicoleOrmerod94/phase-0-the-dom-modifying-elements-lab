// 1) Remove the DOM node 'main#main'
const mainElement = document.querySelector('main#main');
mainElement.remove();

// 2) Create an <h1> element and store it in the 'newHeader' variable
const newHeader = document.createElement('h1');

// 3) Set the id of the 'newHeader' element to 'victory'
newHeader.id = 'victory';

// 4) Set the text of the 'newHeader' element to include "YOUR-NAME is the champion"
const yourName = 'Your Name'; // Replace 'Your Name' with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the 'newHeader' to the body of the document
document.body.appendChild(newHeader);
