// 8kyu - Define a card suit

// P - string including card
// R - return string of card suit
// E - '3♣' => 'clubs'

function defineSuit(card) {
    // split card
    let cards = card.split('')
    // switch case for last index
    switch (cards[cards.length-1]) {
        case '♣': return 'clubs';
        case '♦': return 'diamonds';
        case '♥': return 'hearts';
        default: return 'spades'
    }
}