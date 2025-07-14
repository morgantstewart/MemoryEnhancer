/*-------------- Constants -------------*/
const cards = [0, 1, 2, 3, 4, 5, 6, 7];
const cardMatches = {};
const myElement = document.getElementById('sqr');
cardMatches.matches = [];
const cardsEl = document.querySelectorAll(".sqr");
console.log(cardsEl);
const reset = document.querySelector("reset");
const timerDisplay = document.getElementById('timer');
const size = Math.random() * 5 + 5;
const x = Math.random() * window.innerWidth;
const color = `hsl(${Math.random() * 360}, 70%, 60%)`; // Random HSL color
const duration = Math.random() * 3 + 2;
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
resetBtnEl.addEventListener("click", handleClick);
const startBtnEl = document.querySelector('#start');


/*-------------- Functions -------------*/

function clicked(event) {
    console.log("clicked");
}

function stopTimer() {
    clearInterval(timerInterval);
}

function startGame() {
    startTimer;
    resetBtnEl.addEventListener("click", handleClick);
};

startGame();

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
        matchedPairs = matchedPairs + 1;
        myElement.textContent = 'Match paired. Continue...';
        winCheck();
        firstCardClicked = undefined
        secondCardClicked = undefined

    } else {
        const myElement = document.getElementById('statusMessage');
        matchedPairs = matchedPairs + 1;
        myElement.textContent = 'Try Sorry, you lost.';
        firstCardClicked = undefined
        secondCardClicked = undefined
        stopTimer();
    }
};

function winCheck() {
    if (matchedPairs === 5) {
        stopTimer();
        console.log("WIN!");
        const myElement = document.getElementById('statusMessage');
        myElement.textContent = "WIN! MEMORY ENHANCED.";

        triggerConfetti();
    } else if (matchedPairs === 0) {
        const myElement = document.getElementById('statusMessage');
        myElement.textContent = "Sorry, you lost.";
        stopTimer();
    }
};

function startTimer() {
    timerInterval = setInterval(() => {
        seconds--;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 30;
        timerDisplay.textContent =
            `${minutes < 0 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function handleClick() {
    window.location.reload();
}

function createConfettiPiece() {
    const container = document.getElementById('confetti-container');
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    /*----------- Event Listeners ----------*/

    resetBtnEl.onclick = (reset) => {
        console.log("reset pressed")
        window.location.reload();
        const myElement = document.getElementById('statusMessage');
        stopTimer();
        myElement.textContent = 'Game reset.';
    };

    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    piece.style.left = `${x}px`;
    piece.style.setProperty('--confetti-color', color);
    piece.style.animationDuration = `${duration}s`;

    container.appendChild(piece);

    piece.addEventListener('animationend', () => {
        piece.remove();
    });
}

function triggerConfetti(count = 50) {
    for (let i = 0; i < count; i++) {
        setTimeout(createConfettiPiece, i * 50);
    };
};