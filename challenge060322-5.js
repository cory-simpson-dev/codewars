// 5kyu - where my anagrams at?

// take in string and array of strings
// return array of all anagrams of original string
// ('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

function anagrams(word, words) {
    // split word, sort & rejoin
    let wordSort = word.split('').sort().join('');
    // set up answer array
    let answer = [];
    // loop through array of words
    for (i = 0; i < words.length; i++) {
        // check if sorted word of words is same as word
        if (words[i].split('').sort().join('') === wordSort) {
            // push current word to answer
            answer.push(words[i]);
        }
    }
    return answer;
}
