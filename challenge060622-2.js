// 7kyu - Testing 1-2-3

// take in array of strings
// return array with prepended numbers based on position starting at 1
// ["a", "b", "c"] => ["1: a", "2: b", "3: c"]

var number=function(array){
    // set up answer array
    let answer = [];
    // loop through array
    for (let i=0; i<array.length; i++) {
        answer.push(`${i+1}: ${array[i]}`);
    }
    return answer;
}