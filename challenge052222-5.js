// 7kyu - square every digit

// take in number
// return joined numbers after each are squared
// 9119 => 811181

function squareDigits(num) {
    // string > split > map > Number join
    return Number(num.toString().split('').map(num => num*num).join(''))
}