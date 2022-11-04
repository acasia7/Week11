let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let currentPlayer = "X";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const winningMessage = () => `Player ${currentPlayer} has won!`;


const statusDisplay = document.querySelector('.game--status');


document.querySelector('.game--container').addEventListener('click', handleCellClick);

function handleCellClick(clickedCellEvent) {
   
  if (gameActive) {
  
     const clickedCell = clickedCellEvent.target;

     const clickedCellIndex = parseInt(clickedCellEvent.target.getAttribute("data-index"));

     if (gameState[clickedCellIndex] !== "") {
        return;
     }

     handleCellPlayed(clickedCell, clickedCellIndex);

     handleResultValidation();
   }
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
  
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handleResultValidation() {
   
    let gameWon = false;

    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];

   for (let i = 0; i < 8; i++) {
       const winCondition = winningConditions[i];
       let a = gameState[winCondition[0]];
       let b = gameState[winCondition[1]];
       let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue; 
        }
        if (a === b && b === c) {
            gameWon = true;
            break 
        }
    }
   
    if (gameWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
  
    
    handlePlayerChange();
}

function handlePlayerChange() {
 
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

var button = document.querySelector('.btn');

button.addEventListener('click', function () {
    var tds = document.getElementsByTagName('div');
    for(var i = 0; i < tds.length; i++) {
        tds[i].innerHTML = '' // not sure what to change to have this reset the gameboard instead of clearing it completely
    }
});