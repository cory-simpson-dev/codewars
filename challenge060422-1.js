// 4kyu - Snail

// take in n x n array (i.e. single array comprised of 3 separate arrays with 3 integers each)
// return single array with numbers from going through original arrays in a snail shape
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 6, 9, 8, 7, 4, 5]

snail = function(array) {
    // set up answer array
    let answer = [];
    
    while (array.length>0) {
        // RIGHT - loop through first array item
        if (array.length>0) {
            for (let i = 0; i<array[0].length; i++) {
                answer.push(array[0][i]);
            }
            array.shift();
        }
        // DOWN - for length of array, push last array item/pop
        if (array.length>0) {
            for (let i = 0; i<array.length; i++) {
                answer.push(array[i][array[i].length-1]);
                array[i].pop();
            }
        }
        // LEFT - loop through last array item & pop original array
        if (array.length>0) {
            for (let i = array[array.length-1].length-1; i >= 0; i--) {
                answer.push(array[array.length-1][i]);
            }
            array.pop();
        }
        // UP - for length of array, push first array item/shift
        if (array.length>0) {
            for (let i = array.length-1; i > 0; i--) {
                answer.push(array[i][0]);
                array[i].shift();
            }
            console.log(`Step 4 - Up: ${array}`)
            console.log(`Answer = ${answer}`)
        }
        // end of loop - repeat in while array.length > 0
    }
    return answer;
}