const container = document.querySelector('.container');
const reset = document.querySelector('#reset-button');
let defaultGridSize = 16;
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('#slider-value')

function createGrid(gridSize) {
    // Create grid with inserted divs.
    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++) {
        //* Added div with class 'cell' to avoid conflicts.
        let gridBlock = document.createElement('div');
        gridBlock.setAttribute('class', 'cell')
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridBlock);
    }
    // After creating grid, add event listeners per cell.
    let gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(gridCell => gridCell.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    this.style.backgroundColor = 'black';
}

function resetGridColor() {
    let gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(gridCell => gridCell.style.backgroundColor = "white");
}

function setGridPixels() {
    let gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(gridCell => gridCell.remove());
    //TODO: Add Arrow Key support for slider value.
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
    createGrid(slider.value);
}

createGrid(defaultGridSize);

slider.addEventListener('mouseup', setGridPixels);
reset.addEventListener('click', resetGridColor);