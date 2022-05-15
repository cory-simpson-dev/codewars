// 7kyu - Bingo (or not)

// P - array of 10 numbers
// R - return 'LOSE' or 'WIN' if your numbers spell bingo where 1=a, 2=b, etc.
// E - [1,2,3,4,5,6,7,8,9,10] => 'LOSE' || [21,13,2,7,5,14,7,15,9,10] => 'WIN'

// set up function
function bingo(a) {
    // set up comparison array
    let bingoValues = [2,7,9,14,15];
    // loop through every character to see if all bingo values are included
    return bingoValues.every(char => a.includes(char)) ? 'WIN' : 'LOSE';
}


