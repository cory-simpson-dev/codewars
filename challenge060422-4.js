// 7kyu - Printer errors

// take in string of letters
// return string of # errors/length (error = letters after m)
// "aaaxbbbbyyhwawiwjjjwwm" => '8/22'

function printerError(s) {
    // create error array
    let error = 'nopqrstuvwxyz'.split('');
    // split string & filter & length = error count
    return `${s.split('').filter(ele => error.includes(ele)).length}/${s.length}`;
}