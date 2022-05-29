// 7kyu - Beginner series #3 sum of numbers

// take in two integers
// return sum of all numbers between (and including) two integers
// (1, 2) => (1 + 2 = 3)

function getSum(a,b) {
    // identify minimum & maximum
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    // return sum of difference
    return (max-min+1) * (min + max) / 2;
}