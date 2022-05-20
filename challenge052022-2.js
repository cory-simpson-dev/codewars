// 7kyu - Highest and lowest

// take is string of space separated numbers
// return highest and lowest number as string
// "1 2 3 4 5" => "5 1"

function highAndLow(numbers) {
    // split string, sort b-a
    let sorted = numbers.split(' ').sort((a,b) => b-a)
    return `${sorted[0]} ${sorted[sorted.length]}`
}