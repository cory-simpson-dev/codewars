// 6kyu - Find the odd int

// take in array of integers
// return value of integer that appears an odd number of times
// [1,1,2] => 2

function findOdd(A) {
    // sort array 
    let sort = A.sort((a,b) => a-b)
    // if i & i+1 are same, replace both with ''
    for (let i=0; i<sort.length; i++) {
        if (sort[i]===sort[i+1]) {
            sort[i]=''
            sort[i+1]=''
        } 
    }
    return sort.filter(num => num!='')[0]
}