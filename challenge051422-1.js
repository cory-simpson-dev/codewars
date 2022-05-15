// 8 kyu - Abbreviate a Two Word Name

// P - two word name string, lower case or capitalize first letter
// R - return abbreviation string with two capital letters and a dot separating them
// E - 'Sam Harris' => 'S.H'

// set up function
function abbrevName(name) {
// set up answer array
    let answer = []
// split name into array | for each, push char at 0 to answer array
    name.split(' ').forEach(ele => answer.push(ele.charAt(0)))
// return answer array joined with . separator
    return answer.join('.').toUpperCase()
}