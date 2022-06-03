// 4kyu - Human readable duration format

// take in seconds integer >= 0 
// return string of human readable time
// 3662 => "1 hour, 1 minute and 2 seconds"

function formatDuration(givenSeconds) {
    // set up counters
    let years = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0
    // catch 0 input
    if (givenSeconds===0) return 'now';
    // set up while loops (adding to each counter)
    while (givenSeconds >= 31536000) {
        years++;
        givenSeconds-=31536000;
    }
    while (givenSeconds >= 86400) {
        days++;
        givenSeconds-=86400;
    }
    while (givenSeconds >= 3600) {
        hours++;
        givenSeconds-=3600;
    }
    while (givenSeconds >= 60) {
        minutes++;
        givenSeconds-=60;
    }
    seconds = givenSeconds;
    // set up answer array
    let answer = []
    // evaluate values of counters
    if (years === 1) {
        answer.push('1 year')
    } else if (years > 1) {
        answer.push(`${years} years`)
    }
    if (days === 1) {
        answer.push('1 day')
    } else if (days > 1) {
        answer.push(`${days} days`)
    }
    if (hours === 1) {
        answer.push('1 hour')
    } else if (hours > 1) {
        answer.push(`${hours} hours`)
    }
    if (minutes === 1) {
        answer.push('1 minute')
    } else if (minutes > 1) {
        answer.push(`${minutes} minutes`)
    }
    if (seconds === 1) {
        answer.push('1 second')
    } else if (seconds > 1) {
        answer.push(`${seconds} seconds`)
    }
    // check length of array
    if (answer.length === 1) return answer[0];
    if (answer.length === 2) return answer.join(' and ');
    if (answer.length > 2) {
        return answer.slice(0, answer.length-1).join(', ') + ' and ' + answer[answer.length-1];
    }
}