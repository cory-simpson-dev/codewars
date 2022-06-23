// 8kyu - beginner series #2 clock

// take in hours minutes and seconds
// return time since midnight in milliseconds
// (0,1,1) => 61000

function past(h,m,s) {
    return (h*3600 + m*60 + s)*1000;
}