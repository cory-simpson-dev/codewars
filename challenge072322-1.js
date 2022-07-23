// leetcode - 3. Longest Substring without Repeating Characters

// take in string
// return length of longest substring without repeating characters
// 'abcabcbb' => 3 ('abc')

var lengthOfLongestSubstring = function(s) {
    // longest word counter
    let highCount = 0;
    // set up current string array
    let currentString = [];
    // loop through string
    for (let i = 0; i<s.length; i++) {
        // check if current character is already in string
        let currentPosition = currentString.indexOf(s[i]);
        // check if value was already used
        if (currentPosition !== -1) {
            currentString.splice(0, currentPosition + 1);
        }
        // push current character to array
        currentString.push(s[i]);
        // compare lengths
        if (currentString.length > highCount) {
            highCount = currentString.length;
        }
    }
    // return high
    return highCount
}