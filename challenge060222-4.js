// 6kyu - sort the odd

// take in array of numbers
// return array with odd numbers sorted and evens in same place
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

function sortArray(array) {
    // create odds array
    let odds = array.filter(num => num % 2).sort((a,b) => a-b);
    console.log(`oddsStart = ${odds}`);
    // map array for each odd -> shift()
    return array.map(num => num % 2 ? odds.shift() : num)
}