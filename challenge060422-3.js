// 7kyu - Categorize new member

// take in list of pairs (arrays in array)
// return 'Open' or 'Senior' (senior if >= 55 & > 7)
// [[45, 12],[55,21],[19, -2],[104, 20]],['Open', 'Senior', 'Open', 'Senior']

function openOrSenior(data) {
    // map array
    return data.map(arr => {
        return arr[0] > 54 && arr[1] > 7 ? 'Senior' : 'Open';
    })
}