// 8kyu - Find the smallest integer in the array

// take in array of integers
// return smallest number
// [34, -345, -1, 100] => -345

class SmallestIntegerFinder {
    findSmallestInt(args) {
    //   sort 
    return args.sort((a,b) => a-b)[0];
    }
  }