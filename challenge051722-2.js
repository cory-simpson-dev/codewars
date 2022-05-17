// 7kyu - String merge!

// take in two words and a letter
// return single word that's a combination of both words, merged at the point where the given letter first appears in each word
// ("hello", "world", "l") => "held"

function stringMerge(string1, string2, letter) {
    // set up answer
    let answer = '';
    // split string 1
    let string1arr = string1.split('');
    // cycle through until letter reached - adding letters to answer
    for (let i = 0; i<string1arr.indexOf(letter); i++) {
        answer += string1arr[i];
    };
    // repeat for 2nd string from letter to end
    let string2arr = string2.split('');
    for (let i=string2arr.indexOf(letter); i<string2arr.length; i++) {
        answer += string2arr[i];
    };
    return answer
}