var cards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L"];
var cardValues = [];
var cardIDs = [];
var cardsFlipped = 0;

// Fisher Yates Shuffle Modern Algorithm.
// Watch: https://www.developphp.com/video/JavaScript/Fisher-Yates-Shuffle-Modern-Algorithm-Array-Programming-Tutorial
// To easier understand exactly how the algorithm works
Array.prototype.shuffle = function() {

	var i, j, temp;

	i = this.length;

	while (--i > 0) {
		j = Math.floor(Math.random() * (i+1)); 
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
	return this;
}



function newBoard() {
	var div;
	var output = "";
	cardsFlipped = 0;
	cards.shuffle();
	for (var i = 0; i < cards.length; i++) {
		div = document.createElement("div");
		div.id = "id_" + i;
		div.innerHTML = cards[i];
		output += div
		div.addEventListener("click", function() {
			flipCards(this, cards[i]);
		});
	document.getElementById("memory_board").innerHTML = output;

	}

}

function flipCards() {
	
	
}

