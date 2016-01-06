var cards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L"];
var cardValues = [];
var cardIDs = [];
var cardsFlipped = 0;

// Fisher Yates Shuffle Modern Algorithm.
// Watch: https://www.developphp.com/video/JavaScript/Fisher-Yates-Shuffle-Modern-Algorithm-Array-Programming-Tutorial
// To easier understand exactly how the algorithm works
window.addEventListener("load", newBoard);

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

/*document.getElementById("memory_board").innerHTML = output;*/
/*output += '<div id="ID_'+i+'" onclick="flipCards(this,\''+cards[i] + '\')"></div>';*/
function newBoard() {
	var div;
	var output = "";
	var letter;
	cardsFlipped = 0;
	cards.shuffle();
	document.getElementById("memory_board");
	for (var i = 0; i < cards.length; i++) {
		output = cards[i];	
		alert(output);
		div = document.createElement("div");
		div.id = "id_" + i;
		div.addEventListener("click", function() {
			flipCards(this, output);
		});
		memory_board.appendChild(div);
	}

}

function flipCards(e, val) {
	alert(val);
	if (e === "" && cardValues.length < 2) {
		e.style.background = "#FFF";
		e.innerHTML = val;
		if (cardValues.length === 0) {
			cardValues.push(val);
			cardIDs.push(e.id);
		}
	}

}

