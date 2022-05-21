// 6kyu - Take a ten minutes walk

// take in array of letters (n, s, w, e) - 1 minute per letter
// return true/false if walk = 10 minutes & takes you back to starting point
// ['n','s','n','s','n','s','n','s','n','s'] => true

function isValidWalk(walk) {
    // create NS & WE counters
    let nsCounter = 0;
    let weCounter = 0;
    // catch walk length
    if (walk.length !== 10) {
        return false;
    } else {
        // cycle through walk adding/subtracting to counter
        for (let i = 0; i < walk.length; i++) {
            switch (walk[i]) {
                case 'n':
                    nsCounter ++;
                    break;
                case 's':
                    nsCounter --;
                    break;
                case 'w':
                    weCounter ++;
                    break;
                default:
                    weCounter --;
            }
        }
        return (nsCounter===0 && weCounter===0) ? true : false; 
    }
}