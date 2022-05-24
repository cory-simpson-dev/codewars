// 6kyu - Counting duplicates

// take in string of letters and numbers
// return count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once
// "aA11" => 2

function duplicateCount(text) {
    // create alphabet/number array
    let possible = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    // sort current
    let current = text.toLowerCase().split('').sort();
    console.log(current)
    // create duplicate counter
    let duplicates = 0;
    // loop through current to see if it is included in possible
    for (let i=0; i<current.length; i++) {
        // see if current i & i+1 are same
        if (current[i]===current[i+1]) {
            // check if it is included in possible
            if (possible.includes(current[i])) {
                // add to duplicates
                duplicates++;
                // filter possible
                possible = possible.filter(ele => ele !== current[i]);
                console.log(possible);
            }
        }
    }
    // return duplicates
    return duplicates
}