// 8kyu - vowel remover

// take in string
// return string with lowercase vowels removed
// "goodbye" => "gdby"

function shortcut (string) {
    // split and filter
    return string.split('').filter(letter => !'aeiou'.split('').includes(letter)).join('')
}