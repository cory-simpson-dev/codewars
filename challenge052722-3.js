// 6kyu - sum of digits/digital root

// take in number
// return sum of digits of number, if answer > single digit, repeat
// 942 => 9 + 4 + 2 = 15 => 1 + 5 = 6

function digital_root(n) {
    // while number.toString().length > 1
    while (n.toString().length > 1) {
        // string > split > map to convert to number > reduce
        let number = n.toString().split('').map(ele => +ele).reduce((acc, num)=> acc+num,0);
        // avoid infinite loop
        n=number;
    }
    return n;
}