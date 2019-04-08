//script.js
//clicker app

//functions go here 


//main program here

var newHeadingText = prompt("new heading");
$ ("#main-heading").text(newHeadingText);

$ ("#score").text(100);

var timeUp = function() {
	$("h1").text("Time's Up!").slideUp(1500).slideDown(1500);
	
};
setTimeout(timeUp, 3000);

var score = 0;
var fps = 60;
var scoreUp = function() { 
	score = score + 25;
	$("#score").text(score).fadeOut(10).fadeIn(10);
	// wait 1 sec for next frame
	if (score < 100000) {
		setTimeout(scoreUp, 1000/fps);
	}
}
// start timer
scoreUp ();