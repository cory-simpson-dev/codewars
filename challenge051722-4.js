// 7kyu - String ends with?

// take in two strings
// return true if first string ends with second string
// 'abc', 'bc' => true

function solution(str, ending) {
    // split both string into arrays
    let strArr = str.split('');
    let endingArr = ending.split('');
    // count difference in length
    let diff = strArr.length - endingArr.length;
    // shift str for difference in length
    for (let i=0; i<diff; i++) {
        strArr.shift();
    };
    // join and compare string
    str = strArr.join('')
    return (str === ending) ? true : false;
}