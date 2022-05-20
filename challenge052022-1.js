// 8kyu - Reversed words

// take in string of words
// return string in reverse order
// "yoda doesn't speak like this" => "this like speak doesn't yoda"

function reverseWords(str) {
    // split string, reverse, join
    return str.split(' ').reverse().join(' ')
}