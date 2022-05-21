// 7kyu - Odd or even?

// take in array of integers
// return 'even' or 'odd' based on sum
// [0] => 'even'

function oddOrEven(array) {
    // create answer variable for reduce
    let answer = array.reduce((acc, num) => acc += num, 0);
    // evaluate for odd & even
    return Math.abs(answer) % 2 === 1 ? 'odd' : 'even';
}