// 7kyu - Find the stray number

// take in odd-length array of integers (which are all same except one)
// return integer that is not same
// [1, 1, 2] ==> 2

function stray(numbers){
    // sort and evaluate first two elements
    let sorted = numbers.sort((a,b)=>a-b)
    return (sorted[0]===sorted[1]) ? sorted[sorted.length-1] : sorted[0];
}