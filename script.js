function createGrid() {
    const content = document.querySelector('.content');

    for (let i = 1; i < 17; i++) {;
        for (let j = 1; j < 17; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.style.cssText = 'width: 20px; height: 20px;'
            content.appendChild(squareDiv);
            // console.log(`Square Added on Row: ${i} , Column: ${j}`);
        }
        // console.log(`Done with Row: ${i}`);
    }
}

function main() {
    createGrid()
}

main()