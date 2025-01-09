const canvas = document.querySelector('.canvas');

function createCanvas(size = 16) {
    const squareSize = 480 / size;

    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        canvas.appendChild(square);
    }
}

createCanvas();