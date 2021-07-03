const container = document.querySelector('.container');
const reset = document.querySelector('#reset-button');

function createGrid(gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    }
    let gridCells = document.querySelectorAll('div');
    gridCells.forEach(gridCell => gridCell.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    this.style.backgroundColor = 'black';
}

function resetGridColor() {
    let gridCells = document.querySelectorAll('div');
    gridCells.forEach(gridCell => gridCell.style.backgroundColor = "white")
}

createGrid(50);
reset.addEventListener('click', resetGridColor);