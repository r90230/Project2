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
var attackingHim = true;

// Prompt for input
myName = prompt("What is your name, Knight?","Lancelot")


// Functions
var proclaimName = function(name){ // Prompt Argument
  if (name === "Lancelot"){  // Argument conditional
    console.log("Hello there, Knight Lancelot! We have quite the adventure planned for you today!") // Output 1
  } else if (name != "Lancelot") {
    console.log("Hmm...from a distance you looked very similar to Knight Lancelot...Ahh, never you mind."); // Output 2
    return name
  };
};

var fighting = function(hisHealth){       //number function
	var attackingHim = confirm("I am very close to the dragon now! Okay to attack him, or cancel to try to flee!");
	if (attackingHim === true){
		while (hisHealth > 200){
			hisHealth -= 30;
			console.log("I have gotten his health down to " + hisHealth + " health points!")
					};
	return hisHealth;	       	}; 
};

var goingNorth = function(direction, steps) { // Boolean function
	if (direction === true && steps > 0){
		console.log("I am going north to find the dragon!");
	} else if (direction === false){
		console.log("The dragon is chasing me!");
	};
	return direction;
}; // Creating Boolean function
		
var theVermillionArrow = function(color, arrow){
	color += arrow // String concatenation
	return color
}; //String function

var theBattle = theVermillionArrow(myArrowColor, myArrow) // Output of String function
	
		
proclaimName(myName); // Running function for Procedure

dragonNorth = confirm("The dragon appears to be heading to the north. Ok to head north, or Cancel to head south")
// Confirm for direction selection


while (dragonNorth === true && mySteps > 0){
	goingNorth(dragonNorth, mySteps)
	console.log("I am " + mySteps + " steps away from the dragon!") // While loop output
	mySteps--
}; // While loop

console.log("I have reached the dragon!"); // Output to prove loop ending



fighting(1000);

for (myHealth = 100; myHealth > 5; myHealth -= 5){
     console.log("The dragon has hit me! I have " + myHealth + " health points left!");
	 myHealth - 5;
}; // For loop

console.log("The dragon is damaging me too much! I am at " + myHealth + " health points now! I must retreat"); // Output for For Loop

console.log("The dragon is right beside me! I must use my ultimate weapon!");

console.log(theBattle); // Output for string function

console.log("My health is at " + myHealth + " health points. I have used my " + theBattle + ". I am out of options. I must retreat this time. We will see eachother again, dragon!");
