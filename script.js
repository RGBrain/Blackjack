
// BLACKJACK

// VARIABLES
let isAlive = true;
let stand = false;
let dealerStand = false;

// Random number generator
function randomNumber(low, high) {
    let range = (high - low)+1;
    newNumber = Math.floor(Math.random() * range);
    return(newNumber+low);
}

//BJ Checker
function hasBlackjack (hand) {
    if (hand === 21) {
        isAlive = false;
        return true;
    }
    else {
        return false;
    }
}

function isBust (hand) {
    if (hand > 21) {
        isAlive = false;
        return true;
    }
    else {
        return false;
    }
}

//Get user to stick or twist
function twist() {
    var playerHit = prompt("You have " + playerHand + ".  The dealer has " + dealerHand + ", Would you like another card? - 'yes' or 'no'");
    if (playerHit === 'yes') {
        return true;
    }
    else if (playerHit === 'no') {
        return false;
    }
}

//deal a hand to player between 4 and 21 INCLUSIVE
var playerHand = randomNumber(4,21);

// Check for Blackjack (21)
if (hasBlackjack(playerHand)) {
    console.log("You have BLACKJACK!  You win!")
}

// Deal dealer a card between 2 and 11
var dealerHand = randomNumber(2,11);

// ! Need to tell the player everyone's cards 
console.log("Player hand: " + playerHand)
console.log("Dealer hand: " + dealerHand)

// ! add lowercase functionality and y/n

console.log("Player hand is now: " + playerHand)

while (isAlive && !stand) {
    let twister = twist();
    if (twister === true) {
        playerHand += randomNumber(2,11);
    }
    else if (twister === false) {
        stand = true;
    }
    if (hasBlackjack(playerHand)) {
        alert("You have BLACKJACK!  You win!")
    }
    if (isBust(playerHand)) {
        alert("You have " + playerHand + ", you're bust.")
    }
}

// If the dealer plays 
while (isAlive && stand && !dealerStand) {
    if (dealerHand < 17) {
        dealerHand += randomNumber(2,11);
    }
    else {
        dealerStand = true;
    }
    if (hasBlackjack(dealerHand)) {
        dealerStand = true;
    }
    if (isBust(dealerHand)) {
        alert("Dealer's bust with " + dealerHand)
        isAlive = false;
    }
}

console.log("Player end hand: " + playerHand)
console.log("Dealer end hand: " + dealerHand)

if (isAlive && stand && dealerStand) {
    if (playerHand === dealerHand) {
        alert("It's a push, you both had " + playerHand);
    }
    else if (playerHand > dealerHand) {
        alert(playerHand + " beats " + dealerHand + " You win!");
    }
    else {
        alert(dealerHand + " beats " + playerHand + " The house wins!");
    }
}
console.log("Player final hand: " + playerHand)
console.log("Dealer final hand: " + dealerHand)