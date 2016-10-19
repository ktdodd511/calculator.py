console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";


var createCards = function() {
	// var cards = document.getElementById('game-board');

	for (i = 0; i < 4; i++) {
		var newDivs = document.createElement('div');
		document.getElementById('game-board').appendChild(newDivs);
		newDivs.innerHTML = '<div class="card"></div>';
}

}

createCards();

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i< cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards());
		cardElement.innerHTML = '<img src="kingcard.png" alt="King of Hearts" />';

	}

}

var isMatch = function(x) {
	if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

if (cardTwo === cardThree) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

if (cardOne === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

if (cardTwo === cardOne) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
} 

