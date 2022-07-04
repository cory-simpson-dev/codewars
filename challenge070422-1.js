// 8kyu - Beginner series #4 cockroach

// take in speed (km/hr)
// return speed in cm/sec rounded down to the integer
// 1.08 => 30

function cockroachSpeed(s) {
    return Math.floor(s*1000*100/3600)
}