// 7kyu - Find the middle element

// take in array of 3 unique numbers
// return the index of the numerical element that lies between the other two elements
// [2, 3, 1] => 0

function gimme(triplet){
    // sort array and identify middle element
    let middle = triplet.slice().sort((a,b)=>a-b)[1];
    console.log(middle)
    // return index of middle in triplet
    return triplet.indexOf(middle)
}