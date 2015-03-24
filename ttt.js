var ttt = ttt || {};

var board = document.getElementById("board");

var turn = "x";

var xTiles = [], yTiles = [];

ttt.go = function(space) {
	
	var img = document.getElementById(space);
	
	img.src = turn + ".png";
	
	if (turn === "x") {
		turn = "o";
	} else {
		turn = "x";
	}
}

ttt.reset = function() {
	for (var i = 1;i < 10;i ++) {
		var img = document.getElementById("" + i);
		img.src = "blank.png";
	}
	turn = "x";
}