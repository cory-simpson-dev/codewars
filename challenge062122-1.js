// 8kyu - How many stairs will Suzuki climb in 20 years?

// take in array of arrays of numbers
// return sum x 20 (for 20 years)

function stairsIn20(s){
    // create total
    let total = 0;
    // for each array in the array, add the reduce to the total
    s.forEach(day => total += day.reduce((acc,num) => acc += num, 0))
    // return the total x 20
    return total*20;
}