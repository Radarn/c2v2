var cards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L"];
var cardValue = [];
var cardID = [];
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



/*function newBoard() {
	var div;
	var output = "";
	cardsFlipped = 0;
	cards.shuffle();
	/*document.getElementById("memory_board");*/
	/*for (var i = 0; i < cards.length; i++) {
		output += '<div id="ID_'+i+'" onclick="flipCards(this,\''+cards[i] + '\')"></div>';
		document.getElementById("memory_board").innerHTML = output;*/

		//Can't find out how to pass second parameter in flipCards to be a unique index value.
		/*output = cards[i];
		div = document.createElement("div");
		div.id = "id_" + i;
		div.addEventListener("click", function() {
			flipCards(this, output);
		});
		memory_board.appendChild(div);*/
	/*}

}*/

function newBoard() {
    var div;
    var output = "";
    cardsFlipped = 0;
    cards.shuffle();
    document.getElementById("memory_board");
    for (var i = 0; i < cards.length; i++) {
             
        output = cards[i];    
        console.log(output);
        div = document.createElement("div");
        div.id = "id_" + i;
           
        (function (_out) {
           
            div.addEventListener('click', function(){
                flipCards(this, _out);
           });
       })(output);
    
        memory_board.appendChild(div)
    }
}


function flipCards(e, val) {
	console.log(val);
	if (cardValue.length < 2) {
		alert(val);
		e.style.background = "#FFF";
		e.innerHTML = val;
		if (cardValue.length === 0) {
			cardValue.push(val);
			cardID.push(e.id);
		} else if (cardValue === 1) {
			cardValue.push(val);
			cardID.push(e.id);
			if (cardValue[0] === cardValue[1]) {
				cardsFlipped += 2;

				cardValue = [];
				cardID = [];

				if (cardsFlipped === cards.length) {
					alert("Board cleared... generating new board");
					document.getElementById("memory_board").innerHTML = "";
					newBoard();
				}
			} else {
				function hideCards() {
					var card_1 = document.getElementById(cardID[0]);
					var card_2 = document.getElementById(cardID[1]);
					card_1.innerHTML = "";
					card_1.style.background = "#CCC"
					card_2.innerHTML = "";
					card_2.style.background = "#CCC";

					cardValue = [];
					cardID = [];

				}
				setTimeout(hideCards, 1000);
			}
		}
	}

}

