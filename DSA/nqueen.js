

function isValid(board, row, col) {
    let orgRow = row;
    let orgCol = col;

    // Check above left side
    while (row >= 0 && col >= 0) {
        if (board[row][col] === "Q") {
            return false;
        }
        row--;
        col--;
    }

    // Check straight left side
    row = orgRow;
    col = orgCol;
    while (col >= 0) {
        if (board[row][col] === "Q") {
            return false;
        }
        col--;
    }

    // Check bottom left side
    row = orgRow;
    col = orgCol;
    while (row < board.length && col >= 0) {
        if (board[row][col] === "Q") {
            return false;
        }
        row++;
        col--;
    }

    return true;
}

function getSolveQueen(col, board, result, n) {
    if (col === n) {
        result.push(board.map(row => [...row]));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (isValid(board, i, col)) {
            let copy = board.map(row => row.slice());
            copy[i][col] = "Q";
            getSolveQueen(col + 1, copy, result, n);
            copy[i][col] = "";
        }
    }
}

function solveNQueens(n) {
    let board = Array.from({ length: n }, () => Array(n).fill("."));
    let result = [];
    getSolveQueen(0, board, result, n);
    return result;
}

// Example for N = 4
let n = 4;
let solutions = solveNQueens(n);
console.log(solutions);