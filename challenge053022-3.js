// 6kyu - Playing with digits

// take in positive integer n & p
// return integer k or -1 if (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// (89, 1) => 1

function digPow(n,p) {
    // split number 
    let arr = String(n).split('').map(ele => +ele);
    console.log(arr)
    // create loop for evaluating left side of equation (n)
    let left = arr.reduce((acc,num,i,self)=>acc+(Math.pow(self[i],p+i)),0);
    let k = left/n;
    return Number.isInteger(k) ? k : -1;
}