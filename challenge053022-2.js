// 6kyu - Your order, please

// take in string of words with numbers in each word that indicate their correct order
// return the string with the words/numbers as is in the correct order
// "is2 Thi1s T4est 3a"  =>  "Thi1s is2 3a T4est"

function order(words) {
    // split words into array
    words =  words.split(' ');
    // set up answer array
    let answer = [];
    // set up loop to go through length of numbers
    for (let i=1; i<=9; i++) {
        for (word of words) {
            if (word.includes(String(i))) {
                answer.push(word);
            }
        }
    }
    // return joined answer
    return answer.join(' ');
}