// 7kyu - Number of people in the bus

// take in list/array of integer pairs (people get in bus, people get off bus)
// return number of people on bus after last stop
// [[10,0],[3,5],[5,8]] => 5

var number = function(busStops) {
    let total = 0
    for (let i = 0; i<busStops.length; i++) {
        total += busStops[i][0];
        total -= busStops[i][1];
    }
    return total;
}