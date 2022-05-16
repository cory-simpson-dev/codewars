// 8kyu - Fake binary

// take in string of digits
// return string of digits < 5 => 0 & digits > 5 => 1
// '45385593107843568' => '01011110001100111'

function fakeBin(x) {
    // split map join
    return x.split('').map(char => (Number(char) < 5) ? '0' : '1').join('')
}