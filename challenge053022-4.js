// 6kyu - Does my number look big in this?

// take in positive number
// return true/false if number split and powered up based on the number of digits in a given base
// 153 =>  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 => true

function narcissistic(value) {
    // split value
    let arr = String(value).split('').map(Number);
    // set up power variable
    let power = arr.length;
    // map values & reduce
    arr = arr.map(ele => Math.pow(ele,power)).reduce((acc, num)=>acc+num,0);
    return arr===value;
}