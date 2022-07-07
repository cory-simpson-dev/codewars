// 7kyu - Reduce my fraction

// take in array of numerator and denominator
// return array of reduced numerator and denominator
// [45, 120] => [3, 8]

function reduce(fraction) {
    if (fraction[1] === 1) return fraction;
    let gcd = (a, b) => {
        return b ? gcd (b, a%b) : a;
    };
    gcd = gcd(fraction[0],fraction[1]);
    return [fraction[0]/gcd, fraction[1]/gcd];
}
