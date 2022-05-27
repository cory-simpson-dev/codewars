// 7kyu - Isograms

// take in string (single word)
// return true/false if tring is an isogram (ignoring letter case)
// 'aba' => false

function isIsogram(str) {
    // lowercase > split
    let arr = str.toLowerCase().split('');
    let size = arr.length
    // loop through
    for (let i = 0; i<size; i++) {
        // create shift variable
        let shifted = arr.shift();
        // if arr includes shifted, return false
        if (arr.includes(shifted)) return false;
    }
    return true;
}