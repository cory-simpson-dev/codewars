// 8kyu - Remove first and last character

// take in string
// return string without first/last letter
// 'country' => 'ountr'

function removeChar(str) {
    // split string, slice, join, return
    return str.split('').slice(1,str.length-1).join('')
};