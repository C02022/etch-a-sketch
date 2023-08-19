const MAX_SKETCH_PAD_WIDTH = 960;
const STARTING_NUM_OF_SQUARES_PER_SIDE = 16;

function createGrid(numOfSquaresPerSide) {
    const grid = document.getElementById('grid');

    for (let i = 0; i < numOfSquaresPerSide; i++) {;
        for (let j = 0; j < numOfSquaresPerSide; j++) {
            const currentSquareDiv = document.createElement('div');
            
            let currentSquareDivMeasurement = MAX_SKETCH_PAD_WIDTH / numOfSquaresPerSide
            currentSquareDiv.style.width = currentSquareDiv.style.height = `${currentSquareDivMeasurement}px`;

            currentSquareDiv.addEventListener("mouseover", () => {
                currentSquareDiv.style.backgroundColor = "darkolivegreen";
            });
            
            grid.appendChild(currentSquareDiv);
        }
    }
}

/*
This helper function clears the current etch-a-sketch pad/grid that's on the 
page. Mainly added to declutter 'main' & organize code for newer features later on.
*/
function clearCurrentGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = "";
}

function main() {
    const newGridButton = document.querySelector('.new-grid-button');

    newGridButton.addEventListener("click", () => {
        let userGridPrompt = parseInt(prompt("Enter the number of squares per side"));

        while (userGridPrompt > 100 && userGridPrompt < 1) {
            userGridPrompt = parseInt(prompt("Enter the number of squares per side"));
        }

        clearCurrentGrid();
        createGrid(userGridPrompt);
    });

    createGrid(STARTING_NUM_OF_SQUARES_PER_SIDE);
}

main()  