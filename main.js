var drank = "niks";
var fris = 0;
var bier = 0;
var wijn = 0;
var niks = 0;
var prijs = 0;
var aantal = 0;
var snack = 0;

function _prijs() {
	prijs = Number(fris) * 1.5 + Number(bier) * 4 + Number(wijn) * 3.5 + Number(snack) * (Number(aantal) * 0.5 );
	alert("Uw totaalprijs is \u20ac" +prijs+"");
}

function _fris() {
	fris = prompt("Hoeveel " +drank+ " had u gewilt?");
	drank = "niks";
}

function _bier() {
	bier = prompt("Hoeveel " +drank+ " had u gewilt?");
	drank = "niks";
}

function _wijn() {
	wijn = prompt("Hoeveel " +drank+ " had u gewilt?");
	drank = "niks";
}

while(drank != "stop"){
	drank = prompt("Welke bestelling wilt u toevoegen? Fris voor \u20ac1,50, bier voor \u20ac4,-, wijn voor \u20ac3,50 of een lekkere snack?");
	if (drank == "fris") {
		_fris();
	}

	else if (drank == "bier") {
		bier();
	}
	
	else if (drank == "wijn") {
		wijn();
	}

	else if (drank == "snack") {
		aantal = prompt("Hoeveel bitterballen wilt u toevoegen (8 voor \u20ac4,- of 16 voor \u20ac8,-)?");
		if (aantal == 8 || aantal == 16) {
			snack = prompt("Hoeveel bitterbalschalen van " +aantal+ " stuks wilt u bestellen?");
		}
		else{ 
		alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
		}
		drank = "niks";
	}

	else if (drank == "stop") {
		_prijs();
	}

	else if (drank != "niks" || "stop"){
		alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		drank = "niks";
	}
}