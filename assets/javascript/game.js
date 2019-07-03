// setting available choices for the computer
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"]

// set all values to zero
var win = 0;
var losses = 0;
var guessLeft = 9;
var guesses = [];

var letsplay = confirm ("Are you eligible for enrolment into Hogwarts? Lets play to find out.")

if (letsplay) {
    prompt ("What's your name?");
    alert("What letter am I thinking of? Guess correctly to be accepted");
}

else {
    alert("Aww, just a squib");
}

// an event function to note when a choice has been made
var userGuess = document.onkeyup;

document.onkeyup = function (event) {
    userGuess = event.key;
    alert("You chose " + userGuess.toUpperCase())
}

// random letter to act as the computers choice
var compChoice = letters[Math.floor(Math.random() * letters.length)];


