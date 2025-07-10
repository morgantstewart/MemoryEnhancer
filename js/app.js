/*-------------- Constants -------------*/
// Define constants for 8 different pairs of symbols
const cards = [0, 1, 2, 3, 4, 5, 6, 7];


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


// const message("Congratulations, you're psychic!");
// console.log("Congratulations, you're psychic!");


/*---------- Variables (state) ---------*/

let playerChoice;
let message;
let firstCardClicked = undefined;
let winningCardsArray;
let secondCardClicked = undefined;
let winningCombo = 0;
let matchedPairs = 0;
let tries = 0;



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
    console.log("clicked")
}
const checkForMatch = () => {
    if (firstCardClicked === secondCardClicked) {
        pairs++
        console.log('match!');
    } else {
        console.log('not a match!')
    }
    firstCardClicked = undefined
    secondCardClicked = undefined
}

cardsEl.forEach((card) => {
    card.addEventListener("click", (event) => {
        // console.log(firstCardClicked);
        if (firstCardClicked === undefined) {
            firstCardClicked = event.target.innerText;
            console.log('first clicked: ' + event.target.innerText);
            //toggle here
        } else {
            secondCardClicked = event.target.innerText;
            console.log('second clicked! ' + event.target.innerText);
            // card.removeEventListener('click', eventHandler);
            // set both back to undefined
            //toggle here

            function checkForMatch() {
                if (firstCardClicked === secondCardClicked) {
                    console.log('paired!')
                    const myElement = document.getElementById('statusMessage');
                    //minor click event to demonstrate match success here
                    matchedPairs = matchedPairs + 1;
                    myElement.textContent = 'Match paired. Continue.';
                    firstCardClicked = undefined
                    secondCardClicked = undefined
// add reset clicks here
                } else {
                    const myElement = document.getElementById('statusMessage');
                    // removeEventListener("click", (clicked));
                    myElement.textContent = 'Try again.';
                    firstCardClicked = undefined
                    secondCardClicked = undefined
                    //another kind of click reset here?
                }
            } checkForMatch();
        };
    })
});






// another function for win loss conditions, if match pairs equals = 7
// can write it in new function but can call the function after x function is run 



//LATER:
// no timer needed if incorrect guesses past limit




// look into flip logic, if not a match, fliips over/match stays, etc with class toggling.
//winningCombo.push(firstCardClicked, secondCardClicked);


/*----------- Event Listeners ----------*/

resetBtnEl.onclick = (reset) => {
    console.log("reset pressed")
    // add an actual reset feature here, currently only displays reset text
    const myElement = document.getElementById('statusMessage');
    myElement.textContent = 'Game reset.';
}













// GRAVEYARD RIP //

// ['✚', '✦', '✩', '✱', '✿', '☺', '☾', '♥', '◐']
// const icons = [...symbols, ...symbols]


// function checkMatch() {
// variable 1st Option
// variable 2nd Option
// if firstOption.length === 0, then firstOption = .sqrEls
// else if second option === 0, then secondOption = .sqrEls
// then execute checkmatch function inside here 
// };


//how to flip crds, shuffle cards, track pairs
//how to demonstrate win?

