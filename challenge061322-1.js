// 5kyu - Valid parentheses

// take in string of parentheses
// return true/false if order of parentheses is valid
// ")(()))" => false

function validParentheses(parens) {
    // catch 0 length
    if (parens.length === 0) return true;
    if (parens.length%2 === 1) return false;
    // split string
    let parensArr = parens.split('');
    // create parentheses counters
    let open = 0;
    let closed = 0;
    // loop through array
    for (let i = 0; i < parensArr.length; i++) {
        // if open, add to open
        if (parensArr[i] === '(') {
            open++;
        } else if (parensArr[i] === ')') {
            closed++;
            // check if closed > open
            if (closed > open) {
                return false;
            }
        }
    }
    // if completed loop, check final status
    return (open === closed) ? true : false;
}