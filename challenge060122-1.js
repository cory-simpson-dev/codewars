// 5kyu - Human readable time

// take in non-negative integer (seconds)
// return the time as a string HH:MM:SS
// 90 => '00:01:30'

function humanReadable(seconds) {
    // set up answer array & counters
    let answer = [];
    let hours = 0;
    let minutes = 0;
    let sec = 0;
    // while seconds >=3600
    while (seconds>=3600) {
        seconds -= 3600;
        hours++;
    }
    // while seconds >=60
    while (seconds>=60) {
        seconds -=60;
        minutes++;
    }
    sec = seconds;
    answer.push(String(hours).padStart(2, '0'));
    answer.push(String(minutes).padStart(2, '0'));
    answer.push(String(seconds).padStart(2, '0'));
    return answer.join(':')
}