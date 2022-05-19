// 8kyu - Counting sheep...

// receive array of true/false (may include null/undefined)
// return count of trues
// [true, true, false] => 2

function countSheeps(arrayOfSheep) {
    // create counter
    let counter = 0;
    // if true, counter++
    for (sheep of arrayOfSheep) {
        if (sheep === true) counter++;
    };
    // return counter
    return counter;
}