/*-------------- Constants -------------*/


//9 pairs of symbols, 16 total used

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let firstCardClicked 
let secondCardClicked

// ['✚', '✦', '✩', '✱', '✿', '☺', '☾', '♥', '◐']
// const icons = [...symbols, ...symbols]




const cardsEl = document.querySelectorAll(".sqr");
console.log(cardsEl);
const reset = document.querySelector("reset");



// const message("Congratulations, you're psychic!");
// console.log("Congratulations, you're psychic!");


/*---------- Variables (state) ---------*/
// let board, sqr, sqrReverse, userChoice, winner
// let board = [];
// let sqr = [];
// let sqrReverse -= [];




/*----- Cached Element References  -----*/

const gameContainer = document.getElementById('game');
const squareEls = document.querySelectorAll('.sqr');
const boardEls = document.querySelector('board')
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');
console.log(resetBtnEl);


/*-------------- Functions -------------*/
//init();

function clicked(event) {
    console.log("clicked")
}



const checkForMatch = () => {
    if (firstCardClicked === secondCardClicked) {
        console.log(event.target.innerText)//add what happens
    } else {
        console.log("Not a match!") 
        // add cards flipping back over
    }
    firstCardClicked = undefined
    secondCardClicked = undefined
    tries++

};




cardsEl.forEach((card) => {
    card.addEventListener("click", (event) => {
        if (firstCardClicked === undefined) {
        firstCardClicked = event.target.innerText;
        console.log(firstCardClicked)
        } else {
            secondCardClicked = event.target.innerText;
            console.log(secondCardClicked)
        };
    })
})




    //if fir
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