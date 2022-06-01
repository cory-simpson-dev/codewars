// 7kyu - friend or foe?

// take in array of strings
// return array of strings filtered to length === 4
// ["Ryan", "Kieran", "Mark"] => ["Ryan", "Mark"]

function friend(friends) {
    return friends.filter(ele => ele.length===4)
}