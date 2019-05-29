function printDeckOfCards(deck) {
    function makeCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            S: '\u2660 ',
            H: '\u2665 ',
            D: '\u2666 ',
            C: '\u2663',
        };

        if (!faces.includes(face)) {
            throw new Error(`Invalid card: ${face + suit}`);
        }

        if (!suits.hasOwnProperty(suit)) {
            throw new Error(`Invalid card: ${face + suit}`);
        }

        const card = {
            face: face,
            suit: suits[suit],
            toString: function () {
                return this.face + this.suit;
            }
        };

        return card;
    }

    let cards = [];

    try {
        for (const input of deck) {
            const face = input.slice(0, input.length - 1);
            const suit = input.substr(input.length - 1);

            const card = makeCard(face, suit);
            cards.push(card);
        }
    } catch (error) {
        console.log(error.message);
        return;
    }

    console.log(cards.join(' '));
}
