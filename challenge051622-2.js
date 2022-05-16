// 7kyu - Find the capitals

// take in string (single word)
// return array of indexes of all capital letters in the string
// 'CodEWaRs' => [0,3,4,6]

let capitals = function (word) {
    // split word into array & map 
    let arr = word.split('').map((letter, i) => {
        // if the letter string is equivalent to capital version, change to index
        if (letter === letter.toUpperCase()) {
            return i
        } else return ''
        // filter non-numbers
    }).filter(ele => ele!=='')
    return arr
}