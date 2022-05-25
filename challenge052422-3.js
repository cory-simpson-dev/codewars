// 6kyu - Tribonacci sequence

// 6kyu - Tribonacci sequence

// take in signature array of 3 digits & n 
// return array of 3 digits reduced n times
// ([1,1,1],10) => [1,1,1,3,5,9,17,31,57,105]

function tribonacci(signature,n) {
    // catch n = 0, 1, 2
    if (n===0) {
        return [];
    } else if (n===1) {
        return [signature[0]];
    } else if (n===2) {
        return [signature[0], signature[1]];
    } else {
        // for length of n
        for (let i=3; i<n; i++) {
            // push sum of previous 3 to signature
            signature.push(signature[i-1] + signature[i-2] + signature[i-3]);
        }
    }
    // return signature
    return signature;
}