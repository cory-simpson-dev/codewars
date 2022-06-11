// 6kyu - Find the missing letter

// take in array of letters 
// return missing letter
// ["a","b","c","d","f"] => "e"

function findMissingLetter(array) {
    // create alphabet array
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // identify index of first letter array and modify alphabet
    let slicePoint = alphabet.indexOf(array[0].toLowerCase());
    alphabet = alphabet.slice(slicePoint)
    // loop through array comparing each letter
    for (let i = 0; i<array.length; i++) {
        // if same, shift alphabet
        if (alphabet[0] === array[i].toLowerCase()) {
            alphabet.shift();
        } else {
            // else check uppercase or lowercase and return
            if (array[i].toUpperCase() === array[i]) {
                return alphabet[0].toUpperCase();
            } else {
                return alphabet[0];
            }
        }
    }
}