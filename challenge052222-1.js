// 5kyu - Simple pig latin

// take in string with punctuation
// return string with 1st letter pushed to last + 'ay' - do not touch punctuation
// 'Hello world !' => 'elloHay orldway !'

function pigIt(str) {
    // split string
    let test = str.split(' ')
    for (let i=0; i<test.length; i++) {
        // split word
        let split = test[i].split('')
        // catch non-alphabet characters with charCodeAt
        if (test[i].charCodeAt(0) > 64) {
            // combine letters
            test[i] = `${split.slice(1).join('')}${split[0]}ay`
        }
    }   
    // return joined array
    return test.join(' ')
}