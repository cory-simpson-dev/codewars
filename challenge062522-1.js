// 4kyu - Range extraction

// take in ordered array of numbers
// return string of numbers, comma-separated, with ranges if applicable
// [12, 13, 15, 16, 17] => "12,13,15-17"

function solution(list) {
    // create answer string
    let str = "";
    // loop through array
    for (let i=0; i<list.length; i++) {
        // check if current number + 1 = next number
        if (list[i]+1 !== list[i+1]) {
            // add number as letter with comma
            str += list[i].toString() + ',';
        } 
        // check if range
        else if (list[i]+1 === list[i+1] && (list[i+1]+1) === list[i+2] && list[i-1] !== list[i]-1) {
            // add number as letter with dash
            str += list[i].toString() + '-';
        }
        // check if last character of string is currently a range
        else if (str[str.length-1] === '-' && list[i+1] !== list[i]+1){
            // add number as letter with comma
            str += list[i].toString() + ',';
        }
        // check if range continues
        else if ((list[i]-1) === list[i-1] && (list[i]+1) === list[i+1]) {
            // do nothing
        }
        // check if end of range
        else if ((list[i]-1) === list[i-1] && (list[i-1]-1) === list[i-2] && list[i-1] !== list[i]-1) {
            // add number as letter with comma
            str += list[i].toString() + ',';
        }
        // otherwise add number as letter with comma
        else {
            str += list[i].toString() + ',';
        }
    }
    // return entire string without last comma
    return str.slice(0,-1);
}