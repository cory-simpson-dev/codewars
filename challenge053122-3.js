// 7kyu - is this a triangle?

// take in 3 numbers
// return true/false if 3 numbers can make triangle (triangle inequality theorem)
// (1,2,2) => true

function isTriangle(a,b,c) {
    // use triangle inequality theorem
    return (a+b>c && a+c>b && b+c>a)
}