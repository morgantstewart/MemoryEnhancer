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
    tries++
}

cardsEl.forEach((card) => {
    card.addEventListener("click", (event) => {
        // console.log(firstCardClicked);
        if (firstCardClicked === undefined) {
            firstCardClicked = event.target.innerText;
            console.log('first clicked: ' + event.target.innerText);
        } else {
            secondCardClicked = event.target.innerText;
            console.log('second clicked! ' + event.target.innerText);
            tries++
            function checkForMatch() {
                if (firstCardClicked === secondCardClicked) {
                    console.log('paired!')
                    const myElement = document.getElementById('statusMessage');
                    //minor click event to demonstrate match success here
                    myElement.textContent = 'Match paired. Continue.';
                    //reset click event here?
                } else {
                    const myElement = document.getElementById('statusMessage');
                    myElement.textContent = 'Try again.';
                    //click reset here?
                }
            } checkForMatch();
        };
    })
});

//above: updated DOM with status of matching pair.
// below: winning trigger 
if (checkForMatch * 7) {
    console.log('MEMORY = ENHANCED!')
    const myElement = document.getElementById('statusMessage');
    myElement.textContent = 'MEMORY = ENHANCED!';
} else {
    console.log('Keep playing to enhance memory.')
}

//How to declare a winner? -> need to wipe click count first.








// working on adding pair to a winner's array below:

let myArray = [winningCombo];
let newElement = 'combo';

let uniqueElements = new Set(winningCardsArray);
uniqueElements.add(newElement);

myArray = Array.from(uniqueElements); // Convert Set back to Array

console.log(myArray); // Output: ["red", "green", "blue", "yellow"]

let existingElement = 'green';
uniqueElements.add(existingElement); // Adding an existing element has no effect
myArray = Array.from(uniqueElements);
console.log(myArray); // Output: ["red", "green", "blue", "yellow"]



/// end troubleshooting code





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

