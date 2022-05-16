// 8kyu - Square(n) sum

// P - array of numbers
// R - return sum of each number squared
// E - [1,2] => 5

function squareSum(numbers) {
    // reduce numbers
    return numbers.reduce((acc, n) => acc += n*n, 0)
}