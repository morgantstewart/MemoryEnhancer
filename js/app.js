/*-------------- Constants -------------*/


//8 pairs of symbols:


let firstSymbolChoice = '';
const heavyGreekCross = '\u{&#10010}';
const blackFourPointedStar = '\u{&#10022}';
const stressOutlinedWhiteStar = '\u{&#10010}';
const heavyAsterisk = '\u{&#10033}';
const blackFlorette = '\u{&#10047}';
const whiteSmilingFace = '\u{&#9786}';
const lastQuarterMoon = '\u{&#9790}';
const blackHeartSuit = '\u{&#9829}';
const circleLeftBlack = '\u{&#9680}';

let secondSymbolChoice = '';
const heavyGreekCross = '\u{&#10010}';
const blackFourPointedStar = '\u{&#10022}';
const stressOutlinedWhiteStar = '\u{&#10010}';
const heavyAsterisk = '\u{&#10033}';
const blackFlorette = '\u{&#10047}';
const whiteSmilingFace = '\u{&#9786}';
const lastQuarterMoon = '\u{&#9790}';
const blackHeartSuit = '\u{&#9829}';
const circleLeftBlack = '\u{&#9680}';



const winningCombos = [
    [heavyGreekCross, heavyGreekCross],
    [blackFourPointedStar, blackFourPointedStar],
    [stressOutlinedWhiteStar, stressOutlinedWhiteStar],
    [heavyAsterisk, heavyAsterisk],
    [blackFlorette, blackFlorette],
    [whiteSmilingFace, whiteSmilingFace],
    [lastQuarterMoon, lastQuarterMoon],
    [blackHeartSuit, blackHeartSuit],
    [circleLeftBlack, circleLeftBlack],
];


const message("Congratulations,  you're psychic!");
console.log("Congratulations, you're psychic!");


/*---------- Variables (state) ---------*/
let board, sqr, sqrReverse, userChoice, winner
let board = [];
let sqr = [];
let sqrReverse -= [];




/*----- Cached Element References  -----*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');

/*-------------- Functions -------------*/
init();

function newBoard(); {
    
}





/*----------- Event Listeners ----------*/

