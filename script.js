console.log("--SCRIPT CONNECTED--");

const board = (() =>{

    const boardGrid = document.querySelector("#board-grid");

    const grid = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
    ];

    const display = () =>{
        
        for (let row =0; row <3; row++) {

            let newRow = document.createElement("div");
            newRow.classList.add('row');


            for(let column = 0; column <3; column++){
                let newGridSpot = document.createElement("div");
                newGridSpot.textContent = grid[row][column];
                newGridSpot.classList.add('game-space');
                newGridSpot.setAttribute('row', row);
                newGridSpot.setAttribute('column', column);

                newRow.appendChild(newGridSpot);
            };

            boardGrid.appendChild(newRow);
        };
    };

    const clear = () =>{
        let rows = document.querySelectorAll(".row");
        rows.forEach(row => {
            boardGrid.removeChild(row);
        });
    };

    const addMark = (row, column, player)=>{
        grid[row][column] = player.symbol;
    }

    return {grid, display, clear, addMark};
})();

const playerCreator = (name, symbol) => {
    
    const playTurn = () =>{
        console.log(`Player ${name} is using ${symbol}`);
    }

    return {name, symbol};
};



board.display();
const playerOne = playerCreator("p1", "X");


