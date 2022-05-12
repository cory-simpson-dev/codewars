// 6kyu - Highest scoring word

function high(x) {
    // turn string of strings into array of words
    let wordArr = x.split(' ')
    // set up function to calculate the value of the words 
    let calcValue = (word) => {
        return word.split('').reduce((acc, currentWord) => acc + currentWord.charCodeAt(0)-96, 0)
    }
    // replace wordArr with values of words
    let scoreArr = wordArr.map(word => calcValue(word));
    // find the highest score & the related index
    let highIndex = 0;
    let highScore = 0;
    scoreArr.forEach((score, i) => {
        if (score > highScore) {
            highIndex = i;
            highScore = score;
        }
    });
    // return answer based on highIndex
    return wordArr[highIndex]
}

