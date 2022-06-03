// 6kyu - break camelcase

// take in string
// return string with a space between words
// "camelCasing"  =>  "camel Casing"

function solution(string) {
    // set up answer array
    let answer = [];
    // split string
    stringArr = string.split('');
    // set up word position
    let wordPosition = 0;
    // loop through looking for capital letters
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i]===stringArr[i].toUpperCase()) {
            // if capital, push word up to that point to answer array joined
            answer.push(stringArr.slice(wordPosition, i).join(''))
            wordPosition = i;
        }
    }
    // add last word to array
    answer.push(stringArr.slice(wordPosition).join(''))
    return answer.join(' ');
}