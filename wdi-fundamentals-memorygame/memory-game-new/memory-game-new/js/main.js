

console.log("up and running!");

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];
const cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
} 	else {
  		console.log("Sorry, try again.");
}
}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank + ' of ' + cards[cardId].suit, cards[cardId].cardImage);
		cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) { {
		if (cardsInPlay[0] === cardsInPlay[1])
			alert("you've found a match!");
	}
		if (cardsInPlay[0] !== cardsInPlay[1]) {
			alert("sorry, try again"); 
	}
}
checkForMatch();
}

flipCard(0);

flipCard(2);

console.log()

