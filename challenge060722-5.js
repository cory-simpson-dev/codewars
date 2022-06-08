// 7kyu - Sort numbers

// take in array numbers
// return numbers sorted
// [1,2,3,10,5] => [1,2,3,5,10]

function solution(nums){
    // catch 0 & null
    return (nums===0 || nums===null) ? [] : nums.sort((a,b)=>a-b);
}