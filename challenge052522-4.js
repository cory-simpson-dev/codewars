// 7kyu - Descending order

// take integer
// return digits in descending order
// 15 => 51

function descendingOrder(n) {
    // split, sort, join
    return Number(n.toString().split('').sort((a,b)=>b-a).join(''))
}