console.log("--SCRIPT CONNECTED--");

const boardCreator= () =>{

    const grid = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
    ];

    const getBoard = () => {
        return grid;
    }

    const addMark = (row, column, player)=>{
        if (grid[row][column] != " ") {
            return;
        }; 
        
        grid[row][column] = player.symbol;
    };

    const printBoard = () => {
        grid.forEach(row => {
            console.log(row);
        });
    };

    return {getBoard, addMark, printBoard};
};

const playerCreator = (name, symbol) => {
    
    return {name, symbol};
};

const GMCreator = () =>{
    const board = boardCreator();

    const playerOne = playerCreator("p1", "X");
    const playerTwo = playerCreator("p2", "O");

    const players = [playerOne, playerTwo];

    let activePlayer = players[0];

    const switchPlayerTurn = () =>{
        if (activePlayer == players[0]){
            activePlayer = players[1];
        } else {
            activePlayer = players[0];
        };
    };

    const getActivePlayer = () => {
        return activePlayer;
    }

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };
    
    const playRound = () => {

    };

    board.printBoard();
};

const screenControl = () => {
    const boardGrid = document.querySelector("#board-grid");
    
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
}

const GM = GMCreator();








