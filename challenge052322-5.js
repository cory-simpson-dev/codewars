// 8kyu - Sum mixed array

// take in array of integers as strings & numbers
// return sum of array as integer
// [9, 3, '7', '3'] => 22

function sumMix(x) {
    return x.reduce((acc,num) => acc + +num, 0)
}