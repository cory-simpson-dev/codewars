// 6kyu Stop gninnips my sdrow!

// take in string of only letters and spaces
// return string with words 5+ length reversed
// "Hey fellow warriors" => "Hey wollef sroirraw"

function spinWords(string) {
    // split string > map (evaluate length > split > reverse > join)
    return string.split(' ').map(word => {
        return word.length>4 ? word.split('').reverse().join('') : word
    }).join(' ')
}