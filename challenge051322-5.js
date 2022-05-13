// 8kyu - Stringy strings

// P - number, whole/positive
// R - return string of alternating 1s and 0s starting with 1
// E - argument 6 should return '101010'

// set up function
function stringy(size) {
// set up variable to add string values to
    let answer = ''
// for loop to go until size is met with two conditions (1 & 0)
    for (let i = 0; i < size; i++) {
        if (i%2===0) {
            answer += '1'
        } else {
            answer += '0'
        }
    }
// return answer
    return answer
}