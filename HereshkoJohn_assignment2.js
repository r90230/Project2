/*
John Hereshko
SDI 1401
Code for Project 2
*/

// Variables
var myHealth = 100;
var myDungeon = "Black Mist";
var myWeapon = true;
var myArrows = 20;
var mySharpness = 20;
var dragonNorth = true;
var mySteps = 30

// Prompt for input
myName = prompt("What is your name, Knight?","Lancelot")

var proclaimName = function(name){ // Prompt Argument
  if (name === "Lancelot"){  // Argument conditional
    console.log("Hello there, Knight Lancelot! We have quite the adventure planned for you today!") // Output 1
  } else if (name != "Lancelot") {
    console.log("Hmm...from a distance you looked very similar to Knight Lancelot...Ahh, never you mind."); // Output 2
    return name
  };
};

proclaimName(myName); // Running function for Procedure

dragonNorth = confirm("The dragon appears to be heading to the north. Ok to head north, or Cancel to head south")
// Confirm for direction selection

var goingNorth = function(direction, steps) {
	if (direction === true && steps > 0){
		console.log("I am going north to find the dragon!")
	} else if (dragonNorth === false){
		console.log("I am not pursuing the dragon!")
	};
	}; // Creating Boolean function
	
while (mySteps > 0){
	goingNorth
	console.log("I am " + mySteps + " away from the dragon!")
	mySteps--
}; // While loop for steps

console.log("I have reached the dragon!")

