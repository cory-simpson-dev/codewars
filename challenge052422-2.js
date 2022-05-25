// 7kyu - The highest profit wins!

// take in array of numbers
// return array of lowest, highest number
// [1,2,3,4,5] => [1,5]

function minMax(arr) {
    // sort array
    let sorted = arr.sort((a,b) => a-b);
    // create answer array
    let answer = []
    // push array[0] & array[length-1]
    answer.push(sorted[0])
    answer.push(sorted[sorted.length-1])
    return answer
}