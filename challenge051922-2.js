// 7kyu - Ones and zeros

// array of ones/zeros
// return binary value as an integer
// [0, 0, 0, 1] => 1

const binaryArrayToNumber = arr => {
    // create answer variable
    let answer = 0
    // reverse array
    arr = arr.reverse()
    // for length of array, if 1 is present, answer += power base 2 i
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===1) {
            answer += Math.pow(2, i)
        }
    }
    // return answer
    return answer
}