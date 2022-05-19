// 7kyu - Sum of two lowest positive integers

// array of positive numbers (at least 4)
// return sum of two lowest positive numbers
// [19, 5, 42, 2, 77] => 7

function sumTwoSmallestNumbers(numbers) {
    // sort numbers
    let sorted = numbers.sort((a,b) => a-b);
    // return sum of first two numbers in array
    return sorted[0] + sorted[1];
}
