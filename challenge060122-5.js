// 6kyu - Are they the 'same'?

// take in two arrays
// return true/false if arrays have 'same' elements with same multiplicities
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] returns true

function comp(array1, array2) {
    // catch null
    if (array1 == null || array2 == null) return false;
    // map sqrt array2
    array2 = array2.map(ele => Math.sqrt(ele));
    // sort both arrays
    array1 = array1.sort((a,b) => a-b);
    array2 = array2.sort((a,b) => a-b);
    // set up loop to compare each 
    for (let i = 0; i<array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}