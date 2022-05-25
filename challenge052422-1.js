// 8kyu - beginner - reduce but grow

// take in array of integers
// return result of multiplying values together in order
// [1, 2, 3, 4] => 24

function grow(x) {
    // reduce
    return x.reduce((acc, num) => acc * num, 1);
}