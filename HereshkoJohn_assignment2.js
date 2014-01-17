/*
John Hereshko
SDI 1401
Code for Project 2
*/

// Variables
var myHealth = 100;
var myArrow = " Arrow!";
var dragonNorth = true;
var mySteps = 30;
var myArrowColor = "The Vermillion Red";

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
		console.log("I am going north to find the dragon!");
	} else if (direction === false){
		console.log("The dragon is chasing me!");
	};
	return steps;
	return direction;
	}; // Creating Boolean function
	
while (dragonNorth === true && mySteps > 0){
	goingNorth(dragonNorth, mySteps)
	console.log("I am " + mySteps + " steps away from the dragon!") // While loop output
	mySteps--
}; // While loop

console.log("I have reached the dragon!");

for (myHealth = 100; myHealth > 5; myHealth -= 5){
     console.log("The dragon has hit me! I have " + myHealth + " health points left!");
	 myHealth - 5;
}; // For loop

console.log("The dragon is damaging me too much! I am at " + myHealth + " health points now! I must retreat"); // Output for For Loop


var theVermillionArrow = function(color, arrow){
	console.log("The dragon is right beside me! I must use my ultimate weapon!")
	color += arrow // String concatenation
	console.log(color)
	return color
	}; //String function
	
	var theBattle = theVermillionArrow(myArrowColor, myArrow) // Output of String function
	console.log(theBattle);
	
	
