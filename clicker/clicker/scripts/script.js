//script.js
//clicker app

////////////////////////////////////
////////////////////////////////////
//functions go here
 
var clickHandler = function (event) {
	console.log("Click");
	window.game.score = window.game.score +1 + g.interns;
	$ ("#score").text(window.game.score);
	console.log(window.game.score);
};

var hireInterns = function (event) {
	g = window.game;
	// interns cost $$
	internCost = 10 + g.interns;
	if (g.score > internCost) {
		g.score = g.score - internCost;
		g.interns = g.interns +1;
		$ ("#score").text(window.game.score);
	}
	$ ("#interns").text(g.interns);
	console.log("Interns = " + g.interns)
};


//main program goes here

// create the game object
this.game = {
	name: "Clicker Game",
	score: 0,
	interns: 0,
};


//set starting score
this.game.score = 0;
$ ("#score").text(this.game.score);

// set autoclickers
$("#interns").text(this.game.interns);

// set the click handler
$("#clickme").click(clickHandler);

$("#hireInterns").click(hireInterns);

