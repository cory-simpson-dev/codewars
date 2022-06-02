// 6kyu - Two sum

// take in array of integers and a target number
// return the indices of two different items that when added together give the target value
// ([1, 2, 3], 4) => (0, 2)

function twoSum(numbers, target) {
    // set up loop through numbers
    for (let i=0; i<numbers.length; i++) {
        // second loop
        for (let j=i+1; j<numbers.length; j++) {
            // checking if numbers add up to target
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}