var cards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L"];
var cardValue = [];
var cardID = [];
var cardsFlipped = 0;
var scoreValue = 0;

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
        div = document.createElement("div");        
        div.id = "id_" + i;
        div.classList.add(".front");
           
        (function (_out) {
           
            div.addEventListener('click', function(){
                flipCards(this, _out);
           });
       })(output);

       memory_board.appendChild(div);
    }
}


function flipCards(e, val) {
	var card_1, card_2;

	if (cardValue.length < 2) {
		e.style.background = "lightblue";
		e.innerHTML = val;

		if (cardValue.length === 0) {
			cardValue.push(val);			
			cardID.push(e.id);

		} else if (cardValue.length === 1) {
			cardValue.push(val);			
			cardID.push(e.id);

			card_1 = document.getElementById(cardID[0]);
			card_2 = document.getElementById(cardID[1]);

			if (cardValue[0] === cardValue[1] && card_1 !== card_2) {
				cardsFlipped += 2;
				scoreValue ++;
				var score = document.getElementById("score");
				score.innerHTML = scoreValue;

				card_1.style.background = "lime";
				card_2.style.background = "lime";

				cardValue = [];
				cardID = [];
				
				

				if (cardsFlipped === cards.length) {
					alert("Board cleared... generating new board");
					document.getElementById("memory_board").innerHTML = "";

					newBoard();
				}
			} else {
				function hideCards() {
					card_1.innerHTML = "";
					card_1.style.background = "url(images/cardback.jpg) no-repeat";
					card_1.style.backgroundSize = "cover";

					card_2.innerHTML = "";
					card_2.style.background = "url(images/cardback.jpg) no-repeat";
					card_2.style.backgroundSize = "cover";

					cardValue = [];
					cardID = [];

				}
			
				card_1.style.background = "firebrick";
				card_2.style.background = "firebrick";

				setTimeout(hideCards, 700);
			}
		}
	}
}

