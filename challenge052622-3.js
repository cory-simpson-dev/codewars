// 6kyu - convert string to camel case

// take in dash/underscore delimited word string
// return camelcased string (capitalize first word first letter if originally capitalized)
// "The_Stealth_Warrior" => "TheStealthWarrior"

function toCamelCase(str) {
    // set up alphabet
    let alphabet='abcdefghijklmnopqrstuvwxyz'.split('')
    // determine delimiter
    let delimiter = str.split('').filter(ele => !alphabet.includes(ele.toLowerCase()))[0]
    // split on delimiter
    let arr = str.split(delimiter)
    return arr.map((ele, i) => {
        // catch first word
        if (i==0) return ele;
        return ele.charAt(0).toUpperCase() + ele.slice(1)
    }).join('')
}
