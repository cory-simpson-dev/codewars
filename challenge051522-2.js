// 7kyu - Alphabet symmetry

// P - array of letter combinations, capital and lowercase, no spaces
// R - return array of counts of letters in each element that matches its position in the alphabet
// E - ["abode","ABc","xyzD"] => [4,3,1]

function solve(arr) {
    // set up alphabet string for comparison
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // set up answer array
    let answer = [];
    // set up loop through the array to evaluate
    arr.forEach((str, i) => {
        // set up counter
        let count = 0
        str = str.toLowerCase()
        // compare the index of the letters in the array to the index of the letter in the alphabet
        for (i=0; i<=str.length; i++) {
            if (str[i]===alphabet[i]) {
                count++
            }
        }
        // push count to answer
        answer.push(count)
    })
    return answer
}