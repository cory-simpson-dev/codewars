// 6kyu - Is a number prime?

// take in integer
// return true/false if integer is prime
// 

function isPrime(num) {
    // check for small primes
    if (num == 2 || num == 3 || num == 5 || num == 7) return true;
    // check for non-primes
    if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;  
    // divide by primes
    for (let i = 5; i * i <= num ; i+=6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}