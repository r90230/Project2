/*
John Hereshko
SDI 1401
Code for Project 2
*/

// Variables
var myHealth = 100
var myDungeon = "Black Mist"
var myKnight = true

// Prompt for input
myName = prompt("What is your name, Knight?","Lancelot")

var proclaimName = function(name){
  if (name = "Lancelot"){ // Prompt Argument
    console.log("Hello there, Knight Lancelot! We have quite the adventure planned for you today!")
  } else {
    console.log("Hmm...from a distance you looked very similar to Knight Lancelot...Ahh, never you mind.");
  };
};

proclaimName(myName);

//Adding in 
