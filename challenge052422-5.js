// 8kyu - Array plus array

// take in two integer arrays
// return sum of both arrays
// ([1, 2, 3], [4, 5, 6]) => 21

function arrayPlusArray(arr1,arr2) {
    // return both arrays reduced and added
    return arr1.reduce((acc, num) => acc + num, 0) + arr2.reduce((acc, num) => acc + num, 0);
}