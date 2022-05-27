// 7kyu - list filtering

// take in array of positive numebrs & strings
// return filtered array without strings
// [1,2,'a','b'] => [1,2]

function filter_list(l) {
    return l.filter(ele => typeof ele == 'number')
}