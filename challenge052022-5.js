// 8kyu Dna to rna conversion

// take in string of letters
// return string with T's replaced with U's
// "GCAT" => "GCAU"

function DNAtoRNA(dna) {
    // split, map, join
    return dna.split('').map(letter => (letter==='T') ? 'U' : letter).join('')
}