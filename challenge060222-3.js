// 8kyu - Count by x

// take in two integers x & n
// return array of counting to n times with x interval
// (2,5) => [2,4,6,8,10]

function countBy(x,n) {
    // set up answer array
    let z = [];
    let i = 0;
    // loop up to n
    while (i < x*n) {
        // iterate up to n
        i += x;
        z.push(i);
    }
    return z;
}