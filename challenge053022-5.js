// 6kyu - Detect pangram

// take in string
// return true/false if string includes every letter of alphabet
// "The quick brown fox jumps over the lazy dog" => true

function isPangram(string) {
    // create alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // make string into array and map
    let arr = string.split('').map(ele => ele.toLowerCase());
    // map alphabet if included in arr
    alphabet = alphabet.map(letter => arr.includes(letter) ? true : false)
    // check if alphabet includes false
    return alphabet.includes(false) ? false : true;
}