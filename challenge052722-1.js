// 6kyu - Equal sides of an array

// take in array of integers
// return the lowest index where the side to the left of n is equal to the side to the right of n (else -1)
// {1,2,3,4,3,2,1} => 3

function findEvenIndex(arr) {
    // set up sum counters
    let sum = 0;
    let sumLeft = 0;
    // set up for loop to generate total sum
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    // set up for loop to find where sumLeft === sum
    for (let i=0; i<arr.length; i++) {
        sum -= arr[i];
        // check for equal
        if (sumLeft===sum) {
            return i;
        }
        // if not equal, add change to sumLeft
        sumLeft += arr[i];
    }
    // if all else fails, return -1
    return -1;
}