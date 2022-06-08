// 7kyu - Find the divisors!

// take in integer > 1
// return array of all integer's (not 1 or integer itself) - if prime, return '${integer} is prime'
// 25 => [5]

function divisors(integer){
    // set up counter & answer array
    let count = 2;
    let answer = [];
    // while loop to find divisibles
    while (count < integer) {
        // if divisible
        if (integer%count === 0) {
            answer.push(count);
        }
        count++;
    }
    return (answer.length>0) ? answer : `${integer} is prime`
}