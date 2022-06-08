// 7kyu - count the divisors of a number

// take in integer
// return number of divisors
// 12 => 6

function getDivisorsCount(n){
    // set up counters
    let counter = 0;
    let i = 0;
    // while loop
    while(i<=n) {
        if (n%i===0) {
            counter++;
        }
        i++;
    }
    return counter;
}