// 7kyu - Get the middle character

// take single word string
// return middle character(s)
// "testing" => 't'

function getMiddle(s) {
    // determine middle index number
    let middle = Math.floor(s.length/2)
    // if length = 1, return letter
    if (s.length < 2) {
        return s;
    }
    // if odd, return s at index middle
    else if (s.length%2 === 1) {
        return s[middle];
    }
    // if even, return s
    else if (s.length%2 === 0) {
        return `${s[middle-1]}${s[middle]}`
    }
}