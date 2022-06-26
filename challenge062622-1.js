// 8kyu - Invert values

// take in array of numbers
// return array with numbers inverted
// [1,2,3] => [-1,-2,-3]

function invert(array) {
    // map array
    return array.map(ele => ele*(-1));
}