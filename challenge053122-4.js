// 7kyu - two to one

// take in two strings
// return sorted string of unique letters
// ("xyaabbbccccdefww", "xxxxyyyyabklmopq")

function longest(s1,s2) {
    // create answer array
    let answer = [];
    let skipped = 0;
    // loop through s1
    for (let i = 0; i < s1.length; i++) {
        (answer.includes(s1[i]) ? skipped++ : answer.push(s1[i]))
    }
    // loop through s2
    for (let i = 0; i < s2.length; i++) {
        (answer.includes(s2[i]) ? skipped++ : answer.push(s2[i]))
    }
    return answer.sort().join('')
}