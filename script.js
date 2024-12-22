console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3");
let gameover = new Audio("game-over-arcade-6435.mp3");

let turn = "X";
let isGameOver = false;

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
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!";
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();  // Only plays the sound when there's a win.
        }
    });
}

// Game Logic
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isGameOver) {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});
