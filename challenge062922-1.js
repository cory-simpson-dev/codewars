// 7kyu Simple beads count

// take in number of blue beads
// return number of red beads if in between two blue beads is two red beads
// 3 => 4

function countRedBeads(n) {
    return n<2 ? 0 : (n-1)*2;
}