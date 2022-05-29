// 6kyu - unique in order

// take in argument (string/array)
// return array with no repeats next to each other
// 'AAAABBBCCDAABBB' => ['A', 'B', 'C', 'D', 'A', 'B']

var uniqueInOrder = function(iterable) {
    // set up answer arr
    let answer = [];
    // loop through 
    for (let i=0; i<iterable.length; i++) {
        // check for identical neighbor
        if (iterable[i] !== iterable[i+1]) {
            // push value to answer
            answer.push(iterable[i]);
        }
    }
    return answer;
}