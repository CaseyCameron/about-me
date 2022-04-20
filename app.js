// grab DOM elements
// const button = document.getElementById('button');
// const nameEl = document.getElementById('name');
// const sectionEl = document.getElementById('my-info');
const animalDiv = document.getElementById('animal-div');

const animalButton = document.getElementById('animal-button');
// set event listeners

// advanced example
// button.addEventListener('click', () => {
//     if (nameEl.textContent === '____') {
//         nameEl.textContent = 'Casey';
//     } else {
//         nameEl.textContent = '____';
//     }
//     sectionEl.classList.toggle('my-style');
// });



animalButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
});
