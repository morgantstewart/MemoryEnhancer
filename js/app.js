/*-------------- Constants -------------*/


//9 pairs of symbols, 16 total used

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// These should be able to match somehow, so maybe it's like 8a and 8 b or something. or maybe it's just declaring the same number twice. Because two matches have the same numbers, you can assign the same icon to one number and it will work for both. You're trying to match a number with another number but all the numbers are different. ALSO. If you use that method, where like 8 = heart, you could maybe find a way to randomize the ordeR? Love you! You're doing great!


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
let firstCardClicked;
let secondCardClicked;
let winningCombo;



/*----- Cached Element References  -----*/

const gameContainer = document.getElementById('game');
const squareEls = document.querySelectorAll('.sqr');
const boardEls = document.querySelector('board')
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');
console.log(resetBtnEl);


const resultDisplayEl = document.querySelector('#result-display');





/*-------------- Functions -------------*/
//init();

function clicked(event) {
    console.log("clicked")
}


const checkForMatch = () => {
    if (firstCardClicked === secondCardClicked) {
        console.log("it's a match!")//add what happens
    } else {
        console.log("Not a match!") 
        // add cards flipping back over
    }
    firstCardClicked = undefined
    secondCardClicked = undefined
    tries++
};

// console.log(firstCardClicked + secondCardClicked);


//store first click
//store second click
//compare
//if matches, match counter that goes up one
// goal to get 8 matches





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


// connecting the two cards to an event...









//how to flip crds, shuffle cards, track pairs
//how to demonstrate win?



// function handleClick(event) {
//     const parentElement = event.target.[parentElement];
//     console.log(parentElement);
// };

// function checkMatch() {
// variable 1st Option
// variable 2nd Option
// if firstOption.length === 0, then firstOption = .qrEls
// else if second option === 0, then secondOption = sqrEls
// then execute checkmatch function inside here 
// };


/*----------- Event Listeners ----------*/





resetBtnEl.onclick = (reset) => {
    console.log("reset pressed")
}




// GRAVEYARD RIP //




// ['✚', '✦', '✩', '✱', '✿', '☺', '☾', '♥', '◐']
// const icons = [...symbols, ...symbols]