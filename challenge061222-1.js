// 5kyu - Count '9's from 1 to n

// take in number
// return the number of 9s from 1 to n
// 8 => 0

//  failed to execute in time

// function number9(n){
//     // set up counter variable
//     // set up nines variable
//     let counter = 9;
//     let nines = 0;
//     // loop up to n
//     while (counter <= n) {
//         // make a string version of the current number and split
//         let arr = String(counter).split('').forEach(ele => {
//                 if (ele === '9') {
//                     nines++;
//                 }
//             })
//         counter++
//     }
//     return nines
// }

// solution found stackoverflow


function number9Helper(num) {
    var pow = Math.floor(Math.log10(num));
    var round = Math.pow(10, pow);
    var times = Math.floor(num / round);
    var rest = Math.abs(num - (round * times));
    var res = pow * (round==10 ? 1 : round / 10) * times;
    if (num.toString()[0] == '9') res += rest;
    if (rest < 9) return res;
    else return res + number9Helper(rest);
}
function number9(num) {
    var res = number9Helper(num);
    res = res + (num.toString().split('9').length-1);
    return res;
}