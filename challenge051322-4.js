// 7kyu - Credit card mask

// P - string
// R - return string with '#' until last 4 characters
// E - '87654321' returns '####4321'

// set up function
function maskify(cc) {
// split string into array
    let split = cc.split('')
// set up conditional, if array length < 5, return joined array
    if (split.length < 5) {
        return split.join('')
    } else {
        // else return mapped array until index is < array.length-4
        return split.map((ele, i, self) => i < self.length-4 ? '#' : ele).join('')
    }
}