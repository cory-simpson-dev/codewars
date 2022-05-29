// 7kyu - Growth of a population

// take in population integer, percent growth, increased inhabitants/year, goal integer
// return how many years it takes to reach goal population
// (1500, 5, 100, 5000) => 15

function nbYear(p0, percent, aug, p) {
    // set up year counter
    let years = 0;
    // set up currently population 
    let current = p0;
    // set up while loop
    while (current < p) {
        years++;
        // I did not round down, which I should've because it's people we are talking about
        current = current + current * percent/100 + aug;
    }
    return years;
}