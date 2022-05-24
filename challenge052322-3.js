// 6kyu - Replace with alphabet position

// take in string of letters and characters
// return string of positions in alphabet for each character (ignore non-letters)
// "The sunset sets at twelve o' clock." => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
    // create alphabet array
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // split and filter text for anything not included in alphabet
    let filtered = text.split('').filter(ele => alphabet.includes(ele.toLowerCase()));
    // create answer array
    let answer = []
    // loop through filtered pushing each letter with the index of alphabet letter + 1
    for (let i=0; i<filtered.length; i++) {
        let position = alphabet.indexOf(filtered[i].toLowerCase())+1;
        answer.push(position);
    }
    // return answer joined
    return `${answer.join(' ')}`
}