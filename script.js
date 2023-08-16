function createGrid() {
    const content = document.querySelector('.content');

    for (let i = 1; i < 17; i++) {;
        for (let j = 1; j < 17; j++) {
            const currentSquareDiv = document.createElement('div');
            currentSquareDiv.style.cssText = 'width: 40px; height: 40px;'

            currentSquareDiv.addEventListener("mouseover", () => {
                currentSquareDiv.style.backgroundColor = "red";
            });
            
            content.appendChild(currentSquareDiv);
        }
    }
}

function main() {
    createGrid()
}

main()