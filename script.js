function createGrid(numOfSquares) {
    const grid = document.querySelector('.grid');

    for (let i = 0; i < numOfSquares; i++) {;
        for (let j = 0; j < numOfSquares; j++) {
            const currentSquareDiv = document.createElement('div');
            
            let currentSquareDivMeasurement = 960 / numOfSquares
            currentSquareDiv.style.cssText = `width: ${currentSquareDivMeasurement}px; height: ${currentSquareDivMeasurement}px;`

            currentSquareDiv.addEventListener("mouseover", () => {
                currentSquareDiv.style.backgroundColor = "darkolivegreen";
            });
            
            grid.appendChild(currentSquareDiv);
        }
    }
}

// function addButtonFunctionality() {}


// This helper function clears the current etch-a-sketch pad/grid that's on the page
function clearCurrentGrid() {
    const grid = document.querySelector('.grid');
    
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
     }
}

function main() {
    const newGridButton = document.querySelector('.new-grid-button');
    // const penStatusButton = document.querySelector('.pen-status-button');

    newGridButton.addEventListener("click", () => {
        let userGridPrompt = parseInt(prompt("Enter the number of squares per side"));

        while (userGridPrompt > 100) {
            userGridPrompt = parseInt(prompt("Enter the number of squares per side"));
        }
        clearCurrentGrid();
        createGrid(userGridPrompt);
    });

    createGrid(16);
}

main()  