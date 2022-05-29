// 6kyu - Find the parity outlier

// Given an array of even or odd numbers
// return the outlier
// [2, 4, 0, 100, 4, 11, 2602, 36] => 11

function findOutlier(integers) {
    // create odd filtered array
    let odds = integers.filter(num => Math.abs(num)%2===1);
    // create even filtered array
    let evens = integers.filter(num => Math.abs(num)%2===0);
    // compare length and return shorter
    return (odds.length > evens.length) ? evens[0] : odds[0];
}