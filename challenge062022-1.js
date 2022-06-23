// 8kyu - Find maximum and minimum values of a list

// take in array of numbers
// return maximum and minimum in two separate functions
// [4,6,2,1,9,63,-134,566] => max = 566, min = -134

var min = function(list){
    list.sort((a,b)=>a-b)
    return list[0];
}

var max = function(list){
    list.sort((a,b)=>b-a)
    return list[0];
}