// 8kyu - Is n divisible by x and y?

// take in 3 integers
// return true/false if number divisible by x and y
// (3,3,4) => false

function isDivisible(n,x,y) {
    return (n%x===0 && n%y===0);
}