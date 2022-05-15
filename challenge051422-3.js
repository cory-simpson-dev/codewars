// 6kyu - Odd-heavy array

// P - integer array
// R - return true/false dependent on if odd-heavy
// E - [0,1,5,7] => true

// Set up function isOddHeavy
function isOddHeavy(n){
    // set up odd variable that filters through array for odds & sort to access lowest number
    let odd = n.filter(ele=>ele%2!==0).sort((a,b)=>a-b)
    // set up even variable that filters through array for evens
    let even = n.filter(ele=>ele%2==0)
    // return false if no odd values
    if (odd.length === 0) return false
    // return true if all evens are less than the first odd value (i.e. the lowest)
    return even.every(ele=>ele<odd[0])
  }