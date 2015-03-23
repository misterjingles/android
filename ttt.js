var ttt = ttt || {};

var board = document.getElementById("board");

var turn = "x";

ttt.go = function(space) {
	if (turn === "x") {
		turn = "o";
	} else {
		turn = "x";
	}
	
	var tile = document.getElementById(space);
	
	alert("tile.coords=" + tile.coords + "\n" + 
		  "board.top,left=(" + board.offsetTop + "," + board.offsetLeft + ")");
}