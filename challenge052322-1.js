// 5kyu - Moving zeros to the end

// take in array of numbers, letters and booleans
// return array with 0s at the end
// [false,1,0,1,2,0,1,3,"a"] => [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    // create 0 counter
    let zeros = 0;
    // loop through array looking for 0s
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
        }
    }
    // filter array to remove 0s
    arr = arr.filter(ele => ele !== 0);
    // for size of zeros, push 0 onto arr
    for (let i = 0; i<zeros; i++) {
        arr.push(0)
    }
    return arr
}