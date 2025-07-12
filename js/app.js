/*-------------- Constants -------------*/
// Define constants for 8 different pairs of symbols
const cards = [0, 1, 2, 3, 4, 5, 6, 7];
const cardMatches = {};
const myElement = document.getElementById('sqr');
cardMatches.matches = [];
const totalPairs = 8;
// remember: currently you actually only have 7 matched pairs, some are mismatched
const cardsEl = document.querySelectorAll(".sqr");
console.log(cardsEl);
const reset = document.querySelector("reset");


const getPlayerChoice = (event) => {
    console.log('getPlayerChoice:', event);
};


const play = (event) => {
    getPlayerChoice(event);
};


const card = document.querySelector(".sqr");

card.addEventListener("click", function () {
    card.classList.toggle("card-front");
});



card.classList.toggle("card-back");



const timerDisplay = document.getElementById('timer');


// Call startTimer() when the game begins
// Call stopTimer() when the game ends



/*---------- Variables (state) ---------*/

let playerChoice;
let message;
let firstCardClicked = undefined;
let winningCardsArray;
let secondCardClicked = undefined;
let winningCombo = 0;
let matchedPairs = 0;
let tries = 0;
let seconds = 60;
let timerInterval;


/*----- Cached Element References  -----*/

const gameContainer = document.getElementById('game');
const squareEls = document.querySelectorAll('.sqr');
const boardEls = document.querySelector('board')
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');
const resultDisplayEl = document.querySelector('#result-display');


/*-------------- Functions -------------*/

//function init();
function clicked(event) {
    console.log("clicked");
}

cardsEl.forEach((card) => {
    card.addEventListener("click", function (event) {
        if (firstCardClicked === undefined) {
            firstCardClicked = event.target.innerText;
            console.log('first clicked: ' + event.target.innerText);
            startTimer();
        } else {
            secondCardClicked = event.target.innerText;
            console.log('second clicked! ' + event.target.innerText);
            checkForMatch();
        }
    });
});





function checkForMatch() {
    console.log(matchedPairs);
    if (firstCardClicked === secondCardClicked) {
        console.log('paired!')
        const myElement = document.getElementById('statusMessage');
        //minor click event to demonstrate match success here
        matchedPairs = matchedPairs + 1;
        myElement.textContent = 'Match paired. Continue...';
        // inTheClick();
        winCheck();
        firstCardClicked = undefined
        secondCardClicked = undefined
        // add reset clicks here
    } else {
        const myElement = document.getElementById('statusMessage');
        // removeEventListener("click", (clicked));
        matchedPairs = matchedPairs + 1;
        myElement.textContent = 'Try again.';
        firstCardClicked = undefined
        secondCardClicked = undefined
        //another kind of click reset here?
    }
};

// function inTheClick() {
//     setTimeout(() => {
//       cardsEl.classList.add('flipped');
//     }, 1000);
//  setTimeout(() => {
//       cardsEl.classList.remove('flipped');
//     }, 3000);
//     console.log(squareEls.child);
// }

function winCheck() {
    if (matchedPairs === 5) {
        console.log("WIN!");
        const myElement = document.getElementById('statusMessage');
        myElement.textContent = "WIN! MEMORY ENHANCED.";
        stopTimer()
        triggerConfetti();
        
    } else {

    }
}




function startTimer() {
    timerInterval = setInterval(() => {
        seconds--;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.textContent = 
            `${minutes < 0 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}


// function cardBackFaceUp(cardsEl) {
//     cardsEl.classList.add
//     ToggleEvent(" ")
//     console.log(cardBacksElement);
// }





//LATER:
// no timer needed if incorrect guesses past limit
//complete reset button functionality



// look into flip logic, if not a match, fliips over/match stays, etc with class toggling.
//winningCombo.push(firstCardClicked, secondCardClicked);


/*----------- Event Listeners ----------*/

resetBtnEl.onclick = (reset) => {
    console.log("reset pressed")
    // add an actual reset feature here, currently only displays reset text
    window.location.reload();
    const myElement = document.getElementById('statusMessage');
    stopTimer()
    myElement.textContent = 'Game reset.';
};




//confetti code

function createConfettiPiece() {
    const container = document.getElementById('confetti-container');
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    // Randomize properties
    const size = Math.random() * 5 + 5; // Size between 5px and 15px
    const x = Math.random() * window.innerWidth;
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`; // Random HSL color
    const duration = Math.random() * 3 + 2; // Duration between 2s and 5s

    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    piece.style.left = `${x}px`;
    piece.style.setProperty('--confetti-color', color);
    piece.style.animationDuration = `${duration}s`;

    container.appendChild(piece);

    // Remove piece after animation completes
    piece.addEventListener('animationend', () => {
        piece.remove();
    });
}

// Trigger confetti (e.g., on button click or page load)
function triggerConfetti(count = 50) {
    for (let i = 0; i < count; i++) {
        setTimeout(createConfettiPiece, i * 50); // Stagger creation
    };
};







// GRAVEYARD RIP //

// ['✚', '✦', '✩', '✱', '✿', '☺', '☾', '♥', '◐']
// const icons = [...symbols, ...symbols]


