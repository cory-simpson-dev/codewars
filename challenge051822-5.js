// 8kyu - Get the mean of an array

// take in array of numbers
// return average rounded down
// [1,1,1,1,1,1,1,2] => 1

function getAverage(marks) {
    return Math.floor(marks.reduce((acc, num) => acc += num/marks.length, 0))
}