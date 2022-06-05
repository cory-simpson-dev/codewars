// 7kyu - Anagram detection

// take in two strings
// return true/false if strings are anagrams of each other
// ("foefet", "toffee") => true

var isAnagram = function(test, original) {
    return (test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join(''))
}