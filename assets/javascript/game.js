// setting available choices for the computer
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];

// set all values to zero
var wins = 0;
var losses = 0;
var guessLeft = 9;
var attempts = [];
var compGuess = compGuess;

var letsplay = confirm ("Are you eligible for enrolment into Hogwarts? Lets play to find out.")

if (letsplay) {
    var userName = prompt ("What's your name?");
    alert("What letter am I thinking of? Guess correctly to be accepted");
}

else {
    alert("Aww, just a squib");
}

// random letter to act as the computers choice
compGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(compGuess);

// an event function to note when a choice has been made
document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();
    console.log(userGuess);


//if functions detailing actions for each scenario

        // scenario if user guesses correctly i.e. +1 to win, guesses do not decrement and attempt field clears
        if (userGuess === compGuess) {
            wins++;
            guessLeft = 9;
            attempts = [];
        }

        // scenario where guesses incorrectly i.e. pushes incorrect answer to attempts array and decrements no. of turns
        if (userGuess != compGuess) {
            attempts.push(userGuess);
            guessLeft--;
        }

        if (guessLeft === 0) {
            alert("Hmm, the sorting hat is still deciding...");
            losses++;
            attempts = [];
            guessLeft = 0;
            location.reload();
        }

        else if (losses === 9) {
            alert("Looks like you're just another muggle");
            location.reload();
        }

        else if (wins === 10) {
            alert("You're a wizard, " + userName + " !");
            location.reload();
        }
}
        var html = 
            "<p> Wins: " + wins + "</p>" +
            "<p> Losses: " + losses + "</p>" +
            "<p> Guesses remaining: " + guessLeft + "</p>" +
            "<p> You chose: " + attempts + "</p>";

        document.querySelector("#game").innerHTML = html;
    
 


