var pictureSource;
var destinationType;
var imageName = "";

var turn = "x";
var moves = 0;

var xTiles = [], oTiles = [];

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function go(space) {
	
	var img = document.getElementById(space);
	
	if (img.src == "blank.png" || endsWith(img.src, "blank.png")) {
		img.src = turn + ".png";
		if (turn === "x") {
			xTiles.push(space);
			turn = "o";
		} else {
			oTiles.push(space);
			turn = "x";
		}
	}
	
	if (checkForVictory(xTiles)) {
		alert("X gon' give it to ya!");
		navigator.vibrate(1000);
		reset();
	} else if (checkForVictory(oTiles)) {
		alert("O my!");
		navigator.vibrate(1000);
		reset();
	} else if (moves == 8) {
		alert("Stalemate. How boring.");
		navigator.vibrate(1000);
		reset();
	} else {
		moves++;
	}
}

function reset() {
	for (var i = 1;i < 10;i ++) {
		var img = document.getElementById("" + i);
		img.src = "blank.png";
	}
	turn = "x";
	xTiles = [];
	oTiles = [];
	moves = 0;
}

function endsWith(a, b) {
	if (a.length < b.length) {
		return false;
	}
	if (a.indexOf(b) > -1) {
		return true;
	}
	return false;
}

function checkForVictory(array) {
	var victory = false;
	if (array.indexOf(7) > -1) {
		if (array.indexOf(4) > -1) {
			victory |= (array.indexOf(1) > -1);
		}
		if (array.indexOf(8) > -1) {
			victory |= (array.indexOf(9) > -1);
		}
		if (array.indexOf(5) > -1) {
			victory |= (array.indexOf(3) > -1);
		}
	}
	if (array.indexOf(2) > -1) {
		if (array.indexOf(1) > -1) {
			victory |= (array.indexOf(3) > -1);
		}
		if (array.indexOf(5) > -1) {
			victory |= (array.indexOf(8) > -1);
		}
	}
	if (array.indexOf(6) > -1) {
		if (array.indexOf(5) > -1) {
			victory |= (array.indexOf(4) > -1);
		}
		if (array.indexOf(9) > -1) {
			victory |= (array.indexOf(3) > -1);
		}
	}
	return victory;
}

function changePhoto(name) {
	imageName = name;
	//alert('Changing Photo');
	// Take picture using device camera and retrieve image as base64-encoded string
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL });
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function onPhotoDataSuccess(imageData) {
	// Get image handle
	//
	var smallImage = document.getElementById(imageName);

	// Unhide image elements
	//
	//smallImage.style.display = 'block';

	// Show the captured photo
	// The inline CSS rules are used to resize the image
	//
	smallImage.src = "data:image/jpeg;base64," + imageData;
}