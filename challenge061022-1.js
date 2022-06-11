// 7kyu - The robber language

// take in string sentence
// return string with consonants duplicated with o inserted between
// "hello world" => "hohelollolo wowororloldod"

function robberEncode(sentence) {
    // create consonant
    let consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
    // split
    let split = sentence.split('')
    // loop through split checking if letter is a consonant
    for (let i = 0; i<split.length; i++) {
        if (consonants.includes(split[i].toLowerCase())) {
            // catch uppercase
            if (split[i] === split[i].toUpperCase()) {
                split[i] = split[i] + 'O' + split[i]
            } else {
                split[i] = split[i] + 'o' + split[i]
            }            
        }
    }
    return split.join('')
}