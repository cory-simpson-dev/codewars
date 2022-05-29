// 8kyu - Grasshopper - summation

// take in number
// return summation of every number from 1 to num
// 8 => 36

var summation = function(num) {
    // set up answer
    let answer = 0;
    // set up loop
    for (let i=1; i<=num; i++) {
        answer += i;
    }
    return answer;
}