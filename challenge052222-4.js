// 8kyu - Are you playing banjo?

// take in string of name
// return 'name plays banjo' if starts with R/r
// "Adam" => "Adam does not play banjo"

function areYouPlayingBanjo(name) {
    // evaluate first letter
    if (name.charAt(0).toLowerCase()==='r') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}