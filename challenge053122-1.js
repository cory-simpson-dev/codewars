// 7kyu - growth of a population

// take in initial population integer, percent, flat growth, goal population integer
// return number of years it takes to achieve
// (1500, 5, 100, 5000) => 15

function nbYear(p0, percent, aug, p) {
    // set up year counter
    let years = 0;
    // while p0 < p 
    while (p0 < p) {
        p0 = p0 + Math.floor(p0*percent/100) + aug;
        years++;
    }
    return years;
}