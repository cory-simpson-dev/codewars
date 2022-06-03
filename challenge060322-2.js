// 7kyu - reverse words

// take in string
// return string with words reversed with spaces retained
// "This is an example!" => "sihT si na !elpmaxe"

function reverseWords(str) {
    // split at space > map word to be reversed
    str = str.split(' ').map(ele => ele.split('').reverse().join(''))
    return str.join(' ')
}