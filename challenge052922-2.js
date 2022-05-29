// 6kyu - Persistent bugger

// take in integer
// return its multiplicative persistence
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

function persistence(num) {
    // set up persistence count
    let persistenceCount = 0;
    // evaluate num size
    if (num < 10) {
        return persistenceCount;
    // evaluation 
    } else {
        while (num.toString().length > 1) {
            num = num.toString().split('')
            num = num.reduce((acc, num) => acc * +num, 1)
            persistenceCount++
        }
    }
    return persistenceCount;
}