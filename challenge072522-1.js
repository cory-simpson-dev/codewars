// leetcode - 1. Two Sum

// take in array of int & target number
// return indices of the two numbers that add up to the target
// [2,7,11,15], 9 => [0,1]

var twoSum = function(nums, target) {
    let numbersMap = {};
    // map array with index as value
    for (let i = 0; i < nums.length; i++) {
        numbersMap[nums[i]] = i;
    }
    // loop through array looking for target
    for (let j = 0; j < nums.length; j++) {
        let goal = target - nums[j];
        // check if goal exists in map & the current value is not the same index (i.e. same value)
        if (numbersMap.hasOwnProperty(goal) && numbersMap[goal] !== j) {
            return [j, numbersMap[goal]]
        }
    }
    return null;
}