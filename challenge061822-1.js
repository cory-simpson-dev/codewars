// 8kyu - double char

// take string
// return string with each character doubled
// "String" => "SSttrriinngg"

function doubleChar(str) {
    return str.split('').map(ele => ele + ele).join('')
}