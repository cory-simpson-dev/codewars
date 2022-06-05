// 4kyu - Strip comments

// take in string with symbols and letters and array of symbols
// return string with all text/whitespace following symbols removed
// "apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"] => "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    // split input at \n
    const result = input.split(/\n/);
    // loop through input array
    for (let i = 0; i<result.length; i++) {
        // split array
        result[i].split('')
        // determine if array includes marker
        for (let j = 0; j<markers.length; j++) {
            // if the index of the marker is given, slice input up to that point & trim
            if (result[i].indexOf(markers[j]) >= 0) {
                result[i] = result[i].slice(0, result[i].indexOf(markers[j])).trim();
            } 
        }
    }
    // return result joined at \n
    return result.join('\n');
}