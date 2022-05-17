// 8kyu - Name shuffler

// P - take first/last string
// R - return last/first string
// E - 'john McClane' => "McClane john"

function nameShuffler(str) {
    // split str => reverse => join
    return str.split(' ').reverse().join(' ')
}