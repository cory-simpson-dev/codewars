// 6kyu - Split strings

// take in string of letters
// return array of pairs, if pair is missing one, add '_'
// 'abc' =>  ['ab', 'c_']

function solution(str) {
    // set up answer array
    let answer = [];
    // split string
    str = str.split('');
    // loop through string array
    for (let i=0; i<str.length; i+=2) {
        // catch end of array
        let pair = ''
        if (str[i+1] === undefined) {
            pair = str[i]+'_'
        } else {
            pair = str[i]+str[i+1];
        }
        answer.push(pair);               
    }
    return answer;
}