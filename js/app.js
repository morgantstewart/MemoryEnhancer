/*-------------- Constants -------------*/
// Define constants for 8 different pairs of symbols
const cards = [0, 1, 2, 3, 4, 5, 6, 7];
	



const totalPairs = 8; // remember currently you actually only have 7 matched pairs, some are mismatched
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

let firstCardClicked = [0, 1, 2, 3, 4, 5, 6, 7, 8]  //or write 'cards' here?

let secondCardClicked;

let winningCombo;
let matchedPairs = 0;


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


cardsEl.forEach((card) => {
    card.addEventListener("click", (event) => {
        if (firstCardClicked = undefined) {
            firstCardClicked === event.target.innerText;
            console.log(firstCardClicked)
        } else {
            secondCardClicked = event.target.innerText;
            console.log(secondCardClicked)
        };
    })
})

const checkForMatch = () => {
    if (firstCardClicked === secondCardClicked) {
        console.log("match!!")
    } else {
        console.log("Not a match.")
        // add cards flipping back over later
    }
    firstCardClicked = undefined
    secondCardClicked = undefined
    tries++
};






//testing



//end testing




/*----------- Event Listeners ----------*/

resetBtnEl.onclick = (reset) => {
    console.log("reset pressed")
}

// document.querySelectorAll('W').forEach(function (button) {
//     button.addEventListener('click', play);
// });














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

