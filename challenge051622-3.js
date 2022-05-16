// 6kyu - array.diff

// take in two arrays of numbers
// return first array with values removed that are included in second array (including duplicates)
// [1,2,2,2,3],[2] => [1,3]

function arrayDiff(a, b) {
    // return filtered array of values included in second array
    return a.filter(n => !b.includes(n));
}