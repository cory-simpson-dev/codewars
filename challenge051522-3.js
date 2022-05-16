// 6kyu - Give me a diamond

// P - number
// R - return diamond shape with * & \n && if - or even, return null
// E - 5 => "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
    // if n is even or negative, return null
    if (n%2===0 || n<1) return null;
    // build bottom half of diamond
    let bottom = '';
    let bCounter = 0;
    for (let i = n; i > 0; i-=2) {
        bottom += `${' '.repeat(bCounter)}${'*'.repeat(i)}\n`
        bCounter++;
    }
    // build top half of diamond
    let top ='';
    let tCounter = bCounter-1;
    for (let i=1; i<n; i+=2) {
        top += `${' '.repeat(tCounter)}${'*'.repeat(i)}\n`
        tCounter--;
    }
    // return concatenated top and bottom
    return top.concat(bottom)
}