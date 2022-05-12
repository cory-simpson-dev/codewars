// 7kyu - Jaden casing strings

String.prototype.toJadenCase = function() {
    // split string into array by words
    let arr = this.split(' ')
    // capitalize first letter of each word
    let capWords = arr.map(word => word[0].toUpperCase() + word.slice(1))
    // rejoin array of words into string and return
    return capWords.join(' ')
};
