// 7kyu - Dropcaps

// P - string
// R - return string that maintains spacing & capitalizes 1st letter of each letter greater than 2 characters
// E - "apple of banana" => "Apple of Banana"

function dropCap(n) {
    // split word and map - if length greater than 2, capitalize first char & slice remaining word
    return n.split(' ').map(word => word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word).join(' ') 
}