// 8kyu - Convert number to reversed array of digits

function digitize(n) {
    return n.toString().split('').map(n => Number(n)).reverse()
}