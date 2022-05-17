// 8kyu - String cleaning

// take in a string
// return string without numeric characters
// 'This looks5 grea8t!' -> 'This looks great!'

function stringClean(s) {
    let num = ['1','2','3','4','5','6','7','8','9','0'];
    // split string and filter out numbers
    return s.split('').filter(char => !num.includes(char)).join('')
}