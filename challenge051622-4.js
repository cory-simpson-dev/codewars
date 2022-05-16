// 7kyu - insert dashes

// take in positive number
// return string of number with dashes between every two odd numbers
// 454793 => '4547-9-3'

function insertDash(num) {
    // set up answer string
    let answer = '';
    // convert number to string, split
    let arr = String(num).split('');
    // loop through 
    for (let i=0; i<arr.length; i++) {
        // if odd and odd are next to each other, add dash
        (Number(arr[i])%2===1 && Number(arr[i+1])%2===1) ? answer += arr[i] + '-' : answer += arr[i]
    }
    return answer
}
