const container = document.querySelector('.container');
const reset = document.querySelector('#reset-button')
let defaultGridSize = 16;

function createGrid(gridSize) {
    // Create grid with inserted divs.
    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++) {
        let gridBlock = document.createElement('div');
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridBlock);
    }
    // After creating grid, add event listeners per cell (div).
    let gridCells = document.querySelectorAll('div');
    gridCells.forEach(gridCell => gridCell.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    this.style.backgroundColor = 'black';
}

function resetGrid() {
    let userInput = parseInt(prompt("Enter grid size. (2-100)"))
    let gridCells = document.querySelectorAll('div');
    gridCells.forEach(gridCell => gridCell.style.backgroundColor = "white");

    if (userInput >= 100) {
        createGrid(100);
    } else if (userInput <= 2) {
        createGrid(2);
    } else {
        createGrid(userInput);
    }
}

createGrid(defaultGridSize);

reset.addEventListener('click', resetGrid);