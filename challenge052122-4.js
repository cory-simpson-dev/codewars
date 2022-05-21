// 7kyu - Sum of the first nth term of series

// take in number (nth term)
// return sum of 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +... series up to nth term with 2 decimal places & as a string
// 2 => "1.25"

function SeriesSum(n) {
    // catch 0
    if (n===0) return '0.00'
    // create answer variable
    let answer = 0;
    let denominator = 1
    // for n, increase denominator by 3
    for (let i=1; i<=n; i++) {
        answer += 1/(denominator)
        denominator += 3;
    }
    // return answer string with 2 decimals
    return answer.toFixed(2).toString();
}