// 6kyu - Multiples of 3 or 5

// take in number
// return sum of all numbers that are multiples of 3 & 5 beneath that number (count each number once)
// 10 => 3,5,6,9 => 23

function solution(number) {
    // create sum array
    let sumArray = [];
    // for loop
    for (let i=3; i<number; i++) {
        // check for multiple of 3/5
        if (i % 3 === 0 || i % 5 === 0) {
            sumArray.push(i)
        }
    }
    // return reduced sum array
    return sumArray.reduce((acc, num) => acc + num, 0)
}