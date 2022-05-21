// 8kyu - Sum arrays

// take in array of numbers
// return sum of numbers
// [1, 5.2, 4, 0, -1] => 9.2

function sum(numbers) {
    // reduce
    return numbers.reduce((acc, num) => acc += num, 0)
}