// 7kyu - Breaking chocolate problem

// take in two integers
// return number of breaks needed to make single chocolate squares
// (5, 5) => 24

function breakChocolate(n,m) {
    return (n > 0 && m > 0) ? n*m-1 : 0;
}