// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const randomDice = (die1, die2) => `You rolled a ${die1} and a ${die2}. Tye sum to ${die1 + die2}"`;

const roll = randomDice(die1, die2);