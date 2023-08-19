function createGrid() {
    const content = document.querySelector('.grid');

    for (let i = 1; i < 17; i++) {;
        for (let j = 1; j < 17; j++) {
            const currentSquareDiv = document.createElement('div');
            currentSquareDiv.style.cssText = 'width: 40px; height: 40px;'

            currentSquareDiv.addEventListener("mouseover", () => {
                currentSquareDiv.style.backgroundColor = "darkolivegreen";
            });
            
            content.appendChild(currentSquareDiv);
        }
    }
}

function main() {
    // FEINT IDEA OF WHAT TO DO NEXT

    // Create button
        // When button is clicked (eventlistner), make sure the 
        // button cant be clicked, send the prompt to to ask for the desired
        // grid length (# of squares), store that answer in a variable, and then
        // call a function that takes in the prompt variable and creates a new grid with it
        // (Maybe refactor 'createGrid to have parameters in the loop and just have those values by default be 16?)



    createGrid()
}

main()  