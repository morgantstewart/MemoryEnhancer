/*-------------- Constants -------------*/


//9 pairs of symbols, 16 total used

const symbols = ['✚', '✦', '✩', '✱', '✿', '☺', '☾', '♥', '◐']
const icons = [...symbols, ...symbols]






// const gameContainer = document.getElementById('game');
//     let firstCard = null;
//     let lockBoard = false;


// //define variable for user's first symbol choice:
// let firstSymbolChoice = '';
// const heavyGreekCross = '\u{&#10010}';
// const blackFourPointedStar = '\u{&#10022}';
// const stressOutlinedWhiteStar = '\u{&#10010}';
// const heavyAsterisk = '\u{&#10033}';
// const blackFlorette = '\u{&#10047}';
// const whiteSmilingFace = '\u{&#9786}';
// const lastQuarterMoon = '\u{&#9790}';
// const blackHeartSuit = '\u{&#9829}';
// const circleLeftBlack = '\u{&#9680}';

// //define variable for user's second symbol choice:
// let secondSymbolChoice = '';
// const heavyGreekCross = '\u{&#10010}';
// const blackFourPointedStar = '\u{&#10022}';
// const stressOutlinedWhiteStar = '\u{&#10010}';
// const heavyAsterisk = '\u{&#10033}';
// const blackFlorette = '\u{&#10047}';
// const whiteSmilingFace = '\u{&#9786}';
// const lastQuarterMoon = '\u{&#9790}';
// const blackHeartSuit = '\u{&#9829}';
// const circleLeftBlack = '\u{&#9680}';



// const winningCombos = [
//     [heavyGreekCross, heavyGreekCross],
//     [blackFourPointedStar, blackFourPointedStar],
//     [stressOutlinedWhiteStar, stressOutlinedWhiteStar],
//     [heavyAsterisk, heavyAsterisk],
//     [blackFlorette, blackFlorette],
//     [whiteSmilingFace, whiteSmilingFace],
//     [lastQuarterMoon, lastQuarterMoon],
//     [blackHeartSuit, blackHeartSuit],
//     [circleLeftBlack, circleLeftBlack],
// ];


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

/*-------------- Functions -------------*/
// init();


/*----------- Event Listeners ----------*/

const cards = document.querySelectorAll(".sqr");
console.log(cards);

const reset = document.querySelector("reset");

//
onclick = (cards) => {
    console.log("card selected");
}

// cards.addEventListener('click');
// console.log("card selected")



onclick = (resetBtnEl) => {
    console.log("reset pressed");
}