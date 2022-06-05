// 8kyu - Sort and star

// take in array of strings
// return first value after sort with letters separated by '***'
// ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) => 'a***r***e'

function twoSort(s) {
    // return sorted [0] split & joined
    return s.sort()[0].split('').join('***')
}