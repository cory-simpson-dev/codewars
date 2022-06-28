// 8kyu - Rock paper scissors!

// take in two strings
// return string of game results
// "scissors", "paper" --> "Player 1 won!"

const rps = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!'
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!';
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won!';
    } else if (p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
};