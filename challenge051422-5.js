// 6kyu - A needle in the haystack

// P - array including 'needle'
// R - return string 'found the needle at position index'
// E - ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false] => 'found the needle at position 3'

// set up function findNeedle
function findNeedle(haystack) {
// return template literal with index of needle
    return `found the needle at position ${haystack.indexOf('needle')}`
}