// 8kyu - find numbers which are divisible by given number

// take in array of integers and divisor
// return array of integers divisible by divisor
// [1, 2, 3, 4, 5, 6], 2 => [2, 4, 6]

function divisibleBy(numbers, divisor){
    // filter
    return numbers.filter(num=> num%divisor===0);
}