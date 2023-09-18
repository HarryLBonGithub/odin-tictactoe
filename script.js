console.log("--SCRIPT CONNECTED--");

const board = (() =>{

    const grid = [
        ["X","O","X"],
        ["O","X","O"],
        ["X","O","X"]
    ];

    const display = () =>{
        const boardGrid = document.querySelector("#board-grid");

        for (let row =0; row <3; row++) {

            let newRow = document.createElement("div");


            for(let column = 0; column <3; column++){
                let newGridSpot = document.createElement("div");
                newGridSpot.textContent = grid[row][column];

                newRow.appendChild(newGridSpot);
            };

            boardGrid.appendChild(newRow);
        };
    };

    return {grid, display};
})();

board.display();