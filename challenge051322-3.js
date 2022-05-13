// 6kyu - Remove the parentheses

// P - string with parentheses (can be nested), no numbers, no brackets/curly braces
// R - return string without parentheses as well as everything inside
// E - argument 'I have (a really big)heart' returns 'I have heart'

// set up function
function removeParentheses(s) {
// create helper variable to keep track of when parentheses is identified
    let counter = 0;
// create array for pushing items that are not parentheses and not in between parentheses
    let nonParentheses = [];
// split string into array & loop through
    s.split('').forEach(ele => {
// conditionals for parentheses
        if(ele === '(') {
            counter++
        } else if(ele === ')') {
            counter--
        } else if(counter < 1) {
            nonParentheses.push(ele)
        }
    })
// return joined array
return nonParentheses.join('')
}