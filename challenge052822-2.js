// 7kyu - Exes and ohs

// take in string of letters
// return true/false if number of x and y is same
// "xooxx" => false

function XO(str) {
    // create x & o counter
    let x = 0, o = 0;
    // split str
    let split = str.split('')
    // loop through array
    for (let i=0; i<split.length; i++) {
        // check if value = 'x'
        if (split[i].toLowerCase()==='x') {
            x++
        } else if (split[i].toLowerCase()==='o') {
            o++
        }
    }
    return (x===o)
}