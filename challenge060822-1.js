// 8kyu - Is there a vowel in there?

// take in string of numbers comma-separated
// return string with 1st/last character removed
// "1,2,3,4"    =>  "2 3"

function array(arr){
    // catch short arr
    if (arr.split(',').length < 3) return null;
    let mod = arr.split(',')
    // split array
    return mod.slice(1,mod.length-1).join(' ');
}