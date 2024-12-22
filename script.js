console.log("Welcome to Tic Tac Toe");

let audioWin = new Audio("win-sound.mp3"); // Replace with the path to your win sound file

let turn = "X";
let isGameOver = false;
let isFirstTurn = true;  // New flag to track the first turn

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && 
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && 
            (boxtexts[e[0]].innerText !== "")) {
            
            // Check who won
            let winner = boxtexts[e[0]].innerText;
            document.querySelector('.info').innerText = winner + " Won
