// 6kyu - Duplicate encoder

// take in string of any characters (ignore capitalization)
// return string of '(' & ')' if character appears only once or more, respectively
// "din" => '((('

function duplicateEncode(word) {
    // lowercase, split, map
    let answer = word.toLowerCase().split('').map((letter, i, self) => {
        // if index of 1st instance & last instance is same, return '(' else ')'
        return self.indexOf(letter) == self.lastIndexOf(letter) ? '(' : ')';
    })
    return answer.join('')
}