// 7kyu - Find all pairs

// P - array of integers
// R - count of pairs, return zero or if no pairs
// E - [0,0,0,0] => 2 | [1,1,2,2,3,3] => 3

// set up function
function duplicates(array) {
// create counter variable
    let counter = 0
// slice and sort array
    array=array.slice().sort()
    for (let i=0; i<array.length; i++) {
        // check for pairs
        if (array[i]===array[i+1]){
            // add to counter if condition met
            counter++
            // reset arrays to empty strings so they aren't counted again
            array[i]=''
            array[i+1]=''
        }
    }
// return counter
    return counter
}
