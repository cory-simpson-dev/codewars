// 7kyu - You're a square!

// take in integer
// return true if square
// 0 => true

function isSquare(n) {
    // check if number is whole after sqrt
    return Number.isInteger(Math.sqrt(n));
}