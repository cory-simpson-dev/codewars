// 8kyu - Is the string uppercase?

// take in string
// return true/false if string is entirely uppercase
// "hello I AM DONALD" => false

String.prototype.isUpperCase = function() {
    return this.split('').every(letter => letter === letter.toUpperCase())
}