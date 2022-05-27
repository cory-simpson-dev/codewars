// 8kyu - I love you, a little, a lot, passionately ... not at all

// take in a number > 0
// return a string based on number given
// 7 => 'I love you'

function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    if (nbPetals > 6) {
        if (nbPetals%6===0) return arr[5];
        return arr[nbPetals%6-1]
    } else return arr[nbPetals-1]
}