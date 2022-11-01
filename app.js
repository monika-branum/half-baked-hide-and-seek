// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function reset() {
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    reset();
    // then increment the guesses
    totalGuesses++;

    // then grab the appropriate container element for the correct guess from the DOM
    if (correctSpot === 'tree', userGuess === 'tree') {
        treeContainer.classList.add('face');
    } else if (correctSpot === 'shed', userGuess === 'shed') {
        shedContainer.classList.add('face');
    } else (correctSpot==='boulder', userGuess === 'boulder')
        boulderContainer.classList.add('face');
    }

    function displayResults() {
        winsEl.textContent = wins;
        lossesEl.textContent = total - wins;
        totalEl.textContent = total;
    }

    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}
