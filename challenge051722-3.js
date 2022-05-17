// 6kyu - Which are in?

// take in two arrays of strings
// return sorted array in lexicographical order of the strings of one array are substrings of the other array's strings
// ["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"] => ["arp", "live", "strong"]

function inArray(a1, a2) {
    // filter a1, only partials included in a2, sort
    return a1.filter(partial => a2.some(word => word.includes(partial))).sort()
}