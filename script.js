// War Card Game

/* 52 card deck
    - Rank (Name value)
    - Suit (heart/spade/club/diamond)
    - Values
    - A way to shuffle
    - A way to pass the cards to the players

Players
    - Names
    - Score
    - Hand

Logic to play the game
    - Play a specific one
    - Ways to compare the cards
*/

//Deck Class
/* An array to store the cards
    an array to store all the cards ranks
    an array to store all cards suits
*/    

class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = [
            "Hearts ♥", "Diamonds ♦", "Spades ♠", "Clubs ♣"
        ];
    }
    // A method to create a deck
    // Push new card (as an object)
    createDeck(){ //does not need parameter because it will be linked to the deck class
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}` , 
                    value: j + 1 //so the value starts at the 1 value as you iterate
                }
                this.deck.push(card)
            }
        }
    }
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); 
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        } 
    }
}

// Class for a War Game

/*Needs:
    - A deck
    - Create the deck, Shuffle it and pass it

    - Logic to play the game
        - Turn based, How many turns
        - Control flow statement logic 

    - 2 Players
        - Hand
        - Score
        - Name

*/


class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }
    //Method to play the game
    /*
    Pass out cards to both players
    Take x amount of turns as players have cards
    Award points based on card.value
    Log the winner

    */
   playGame() {
        // Instantiate a new deck, create deck, then shuffle
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()

        // deck is a class with values, but deck.deck is an array with 52 shuffled cards 
        while (deck.deck.length !== 0) {
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }

        // Actually playing the game, How many turns?

        for (let i = 0; i < this.player1.hand.length; i++) {
            // Logic to award points based on comparing the card values
            if (this.player1.hand[i].value > this.player2.hand[i].value){
                this.player1.score ++
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 1 wins a point!
                    Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)
            } else if (this.player2.hand[i].value > this.player1.hand[i].value){
                this.player2.score ++
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 2 wins a point!
                    Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)
            } else {
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Tie: No Points awarded
                    Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)
            }

        }
        if (this.player1.score > this.player2.score) {
            console.log(`Player 1 WINS
                Final Score: p1: ${this.player1.score}
                             p2: ${this.player2.score}  
            `)
        } else if (this.player2.score > this.player1.score) {
            console.log(`Player 2 WINS
                Final Score: p1: ${this.player1.score}
                             p2: ${this.player2.score}  
            `)
        } else {
            console.log('TIE')
        }

    }

}

const game = new Game
game.playGame()

