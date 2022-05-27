// 6kyu - Find the unique number

// take in array of numbers where one is unique
// return unique number
// [ 0, 0, 0.55, 0, 0 ] => 0.55

function findUniq(arr) {
    // set up loop
    for (let i=0; i<arr.length; i++) {
        // evaluate for indexOf & lastIndexOf
        if (arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])) return arr[i];
    }
}