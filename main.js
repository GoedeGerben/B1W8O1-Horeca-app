alert("HELP");

var drank = "niks"
var fris = 0
var bier = 0
var wijn = 0
var niks = 0

var drank = prompt("Welke bestelling wilt u toevoegen? Fris, bier of wijn?");
	if (drank == "fris") {
		fris + 1
	}

	else if (drank == "bier") {
		bier + 1
	}
	
	else if (drank == "wijn") {
		wijn + 1
	}

	else if (drank == "niks") {
		niks + 1
	}

	else {
		alert("Er is iets mis gegaan");
		window.location = window.location ;
	}