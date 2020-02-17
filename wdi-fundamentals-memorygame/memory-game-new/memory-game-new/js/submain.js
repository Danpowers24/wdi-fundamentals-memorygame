

console.log("up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId) {
	flipCard(0);
	flipCard(2);
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]) 
}

if (cardsInPlay.length === 2)  {
	 if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You found a match!");
}	if (cardsInPlay[0] !== cardsInPlay[2]) {
		alert("Sorry, try again...");
}} 

// Ok so copy n paste all this code into another file as a backup of this current state. 
//start deleting things that dont look right. 
//the if statements at the end look weird and the push stuff looks wrong
//flipcard function looks weird. explore that and really understad what it does. go back to the lesson that had the instructions to that piece. 