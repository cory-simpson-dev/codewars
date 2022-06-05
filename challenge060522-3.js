// 6kyu - Write number in expanded form

// take in number
// return string of number in expanded form
// (70304), '70000 + 300 + 4')

function expandedForm(num) {
    // convert number to string and split, reverse, map to padend 0 x i, filter 0, reverse and join
    return String(num)
        .split('') 
        .reverse()
        .map((ele,i) => ele.padEnd(i+1, '0'))
        .filter(elem => +elem !== 0)
        .reverse()
        .join(' + ')
}