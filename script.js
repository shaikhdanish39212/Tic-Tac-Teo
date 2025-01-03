console.log("Welcome to Tic Tac Toe");

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
            document.querySelector('.info').innerText = winner + " Won!";
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
}

// Game Logic
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element, index) => {
    let boxtext = element.querySelector(".boxtext");  // This will select the inner div where X or O will be displayed
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isGameOver) {  // Only update if the box is empty
            boxtext.innerText = turn;  // Set the text to X or 0
            turn = changeTurn();  // Switch the turn
            checkWin();  // Check if there's a win after the move

            if (!isGameOver) {
                document.querySelector(".info").innerText = "Turn for " + turn;  // Display the current turn
            }
        }
    })
})

// Add onclick listener to reset button
let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";  // Clear the text from each box
    });
    turn = "X";
    isGameOver = false;
    isFirstTurn = true;  // Reset flag when game is reset
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";  // Reset the image if any
});
