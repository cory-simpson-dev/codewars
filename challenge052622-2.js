// 7kyu - complementary DNA

// take in string of dna
// return opposite string of dna
// "ATTGC" => "TAACG"

function DNAStrand(dna) {
    // split dna
    let arr = dna.split('')
    // loop through array
    for (let i=0; i<arr.length; i++) {
        // switch case
        switch (arr[i]) {
            case 'A':
                arr[i] = 'T'; break;
            case 'T':
                arr[i] = 'A'; break;
            case 'C':
                arr[i] = 'G'; break;
            case 'G':
                arr[i] = 'C'; break;
        }
    }
    // return joined
    return arr.join('');
}