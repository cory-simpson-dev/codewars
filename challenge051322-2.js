// 7kyu - Vowel count

// P - string
// R - return count of vowels
// E - 'abracadabra' returns 5

// set up function
function getCount(str) {
    // create holding variable for counted variables
    let vowelsCount = 0, consonantCount = 0;
    // create vowel array
    let vowels = ['a', 'e', 'i', 'o', 'u']
    // split str to array
    let split = str.split('')
    // loop through for vowels & add to vowelCount
    split.forEach(letter => {
        vowels.includes(letter) ? vowelsCount++ : consonantCount++
    })
    // return vowelsCount
    return vowelsCount
}