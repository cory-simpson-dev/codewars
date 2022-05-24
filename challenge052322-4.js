// 8kyu - Do I get a bonus?

// take in number & boolean
// return string of number * 10 if boolean = true prefixed by "\u00A3"
// (10000, true) => '£100000'

function bonusTime(salary, bonus) {
    // check if bonus is true
    return (bonus === true) ? `\u00A3${salary*10}` : `\u00A3${salary}`
}