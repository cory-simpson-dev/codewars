// 7kyu - find the next perfect square

// take in integer
// return -1 if integer is not perfect square or return next 
// 121 => 144

function findNextSquare(sq) {
    // set up answer variable
    let answer = -1;
    // set up conditional to initiate loop
    if (Number.isInteger((Math.sqrt(sq)))) {
        for (let i = sq+1; i < 2*sq; i++) {
            if (Number.isInteger((Math.sqrt(i)))) return i; 
        }
    } else return answer
}