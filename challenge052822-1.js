// 7kyu - Mumbling

// take in string of letters
// return string of letters with each letter repeated number of times based on it's position, joined by dash
// "abcd" => "A-Bb-Ccc-Dddd"

function accum(s) {
    // set up answer string
    let answer = '';
    // loop through length of string
    for (let i=0; i<s.length; i++) {
        if (i < s.length-1) {
            // look at char at i, if first one, return uppercase
            answer += s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i) + '-';
        } else if (i === s.length-1) {
            answer += s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i)
        }
    }
    return answer;
}