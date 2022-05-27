// 8kyu - the feast of many beasts

// take in beast & dish string
// return true/false if first/last letter of each string matches
// "great blue heron", "garlic naan" => true

function feast(beast, dish) {
    return (beast.charAt(0)===dish.charAt(0) && beast.charAt(beast.length-1)===dish.charAt(dish.length-1)) ? true : false;
}