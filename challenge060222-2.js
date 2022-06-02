// 6kyu - mexican wave

// take in string
// return array of string doing wave
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
    // create wave array
    let waveArr = [];
    // clear loop for str
    for (let i = 0; i < str.length; i++) {
        // create letter variable
        let letter = str[i];
        // catch spaces
        if (letter === ' ') {
            continue;
        } else {
            // push modified word to wave array
            waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i+1));
        }
    }
    return waveArr;
}