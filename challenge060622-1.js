// 6kyu - the supermarket queue

// take in array of positive integers & another positive integer
// return the total time required (i.e. sum of array divided by integer (max of number of customers))
// [1,2,3,4,5], 100) => 5

function queueTime(customers, n) {
    // set up array to keep track of longest queue time
    var timeArr = [];
    // create array slots for number of registers n
    for(let i = 0; i < n; i++) {
        timeArr.push(0);
    }
    // loop through customers
    for(let j = 0; j < customers.length; j++) {
        // add current customer to shortest time of array
        timeArr[0] += customers[j];
        // resort array to return shortest time to front
        timeArr.sort((a,b)=> a-b);
    }
    // return longest time (end of array)
    return timeArr[timeArr.length-1];
}