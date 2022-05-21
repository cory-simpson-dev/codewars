// 8kyu - You only need one - beginner

// take in array of a & x (can contain numbers or strings, x can be either)
// return true/false if array contains value
// [66, 101], 66 => true

function check(a,x) {
    // includes()
    return a.includes(x) ? true : false;
}