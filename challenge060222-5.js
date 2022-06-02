// 8kyu - count the monkeys!

// take in integer
// return array of integers from 1 to n
// 1 => [1]

function monkeyCount(n) {
    let answer = [];
    // loop and push
    for (let i = 1; i<=n; i++) {
        answer.push(i);
    }
    return answer;
}