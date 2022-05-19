// 7kyu - Disemvowel trolls

// take in string
// return string without vowels
// "What are you, a communist?" => "Wht r y,  cmmnst?"

function disemvowel(str) {
    // set up vowels string array
    let vowels='aeiou'.split('');
    // return filtered str without vowels included
    return str.split('').filter(char => !vowels.includes(char.toLowerCase())).join('')
}