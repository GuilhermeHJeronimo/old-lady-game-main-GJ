export const initialTableState = new Array(9).fill(0);

export const isValidPlay = (selectedCell, tableState) => tableState[selectedCell] === 0;

export const fullTable = (tableState) => !tableState.includes(0);

export const hasWinner = (tableState) => {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ];

    return winConditions.some(([a, b, c]) => tableState[a] && tableState[a] === tableState[b] && tableState[a] === tableState[c]);
}
