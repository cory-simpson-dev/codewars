// 4kyu - Sudoku Solution Validator

// take in an array (9 arrays including 9 digits each) representing a sudoku grid
// return true/false is the grid is a valid solution
// [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
// [6, 7, 2, 1, 9, 5, 3, 4, 8],
// [1, 9, 8, 3, 4, 2, 5, 6, 7],
// [8, 5, 9, 7, 6, 1, 4, 2, 3],
// [4, 2, 6, 8, 5, 3, 7, 9, 1],
// [7, 1, 3, 9, 2, 4, 8, 5, 6],
// [9, 6, 1, 5, 3, 7, 2, 8, 4],
// [2, 8, 7, 4, 1, 9, 6, 3, 5],
// [3, 4, 5, 2, 8, 6, 1, 7, 9]] => true

function validSolution(board){
    // set counters 
    let crossCounter = 0;
    let verticalCounter = 0;
    // catch 0s
    let includesZero;
    for (let i = 0; i < 9; i++) {
        board[i].every(num => num > 0) ? includesZero = false : includesZero = true;
        if (includesZero === true) return false;
    }
    // validate individual arrays (cross)
    while (crossCounter < 9) {
        let evaluate = board[crossCounter];
        // determine if the array as all unique elements
        for (let i=1; i < 10; i++) {
            // if the index of i is not the last index of i, return false
            if (evaluate.indexOf(i) !== evaluate.lastIndexOf(i)) {
                return false;
            }
        }
        crossCounter++;
    }
    // validate columns (vertical)
    while (verticalCounter < 9) {
        // collect single element of each array to evaluate
        let evaluate = []
        for (let i = 0; i < 9; i++) {
            evaluate.push(board[i][verticalCounter])
        }
        // determine if the array as all unique elements
        for (let i=1; i < 10; i++) {
            // if the index of i is not the last index of i, return false
            if (evaluate.indexOf(i) !== evaluate.lastIndexOf(i)) {
                return false;
            }
        }
        verticalCounter++;
    }

    let b = board;
    // evaluate square sums
    let sum1 = b[0][0] + b[0][1] + b[0][2] + b[1][0] + b[1][1] + b[1][2] + b[2][0] + b[2][1] + b[2][2];
    let sum2 = b[3][0] + b[3][1] + b[3][2] + b[4][0] + b[4][1] + b[4][2] + b[5][0] + b[5][1] + b[5][2];
    let sum3 = b[6][0] + b[6][1] + b[6][2] + b[7][0] + b[7][1] + b[7][2] + b[8][0] + b[8][1] + b[8][2];
    let sum4 = b[0][4] + b[0][5] + b[0][3] + b[1][4] + b[1][5] + b[1][3] + b[2][4] + b[2][5] + b[2][3];
    let sum5 = b[3][4] + b[3][5] + b[3][3] + b[4][4] + b[4][5] + b[4][3] + b[5][4] + b[5][5] + b[5][3];
    let sum6 = b[6][4] + b[6][5] + b[6][3] + b[7][4] + b[7][5] + b[7][3] + b[8][4] + b[8][5] + b[8][3];
    let sum7 = b[0][6] + b[0][7] + b[0][8] + b[1][6] + b[1][7] + b[1][8] + b[2][6] + b[2][7] + b[2][8];
    let sum8 = b[3][6] + b[3][7] + b[3][8] + b[4][6] + b[4][7] + b[4][8] + b[5][6] + b[5][7] + b[5][8];
    let sum9 = b[6][6] + b[6][7] + b[6][8] + b[7][6] + b[7][7] + b[7][8] + b[8][6] + b[8][7] + b[8][8];
    let evaluate = [sum1,sum2,sum3,sum4,sum5,sum6,sum7,sum8,sum9]
    return evaluate.every(ele => ele === 45);
}