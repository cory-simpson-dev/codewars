// 7kyu - two oldest ages

// take in array of numbers
// return array of two highest numbers [2nd highest, highest]
// [1, 2, 10, 8] => [8, 10]

function twoOldestAges(ages){
    // sort, slice, sort
    return ages.sort((a,b)=>b-a).slice(0,2).sort((a,b)=>a-b)
}