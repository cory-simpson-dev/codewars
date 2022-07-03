// 7kyu - Factorial

// take in non-negative integer
// return factorial of integer or throw RangeError if <0 or >12
// 3 => 6

function factorial(n) {
    if (n < 0 || n > 12) {
        throw RangeError;
    }
    let answer = 1;
    // loop through multiple
    for (let i = 1; i <= n; i++) {
        answer *= i;
    }
    return answer;
}