// 7kyu - Shortest word

// take in string of words
// return length of shortest word
// "Let's travel abroad shall we" => 2

function findShort(s) {
    // split sentence & map & sort
    return s.split(' ').map(ele => ele.length).sort((a,b) => a-b)[0]
}