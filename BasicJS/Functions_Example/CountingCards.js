let count = 0;

function cc(card) {
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
        count++;
    } else if ([10, 'K', 'J', 'Q', 'A'].includes(card)) {
        count--;
    }
    if (count > 0) {
        return count + " Bet";
    } else if (count <= 0) {
        return count + " Hold";
    }
}