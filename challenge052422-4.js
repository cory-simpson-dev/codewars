// 7kyu - Remove the minimum

// take in integer array
// return integer array with smallest removed (if two copies of lowest, remove one with lower index)
// [2,2,1,2,1] => [2,2,2,1]

function removeSmallest(numbers) {
    // identify minimum number index
    let index = numbers.indexOf(Math.min(...numbers));
    // filter element at index
    return numbers.filter((ele, i) => i !== index);
}