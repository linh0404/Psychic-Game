// setting available choices for the computer
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];

// set all values to zero
var wins = 0;
var losses = 0;
var guessLeft = 9;
var attempts = [];
var compGuess = "";

var letsplay = confirm ("Are you eligible for enrolment into Hogwarts? Lets play to find out.")

// create a reset function so that we set the restart variables
function reset() {
    guessLeft = 9;
    attempts = [];
    //generate a random letter as the computer's choice
    compGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(compGuess);
}

//do you want to play? 
if (letsplay) {
    var userName = prompt ("What's your name?");
    alert("What letter am I thinking of? Guess correctly to be accepted");
    reset();    
}

else {
    alert("Aww, just a squib");
}

// an event function to note when a choice has been made
    document.onkeyup = function (event) {
        console.log(compGuess)
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userGuess);

//if functions detailing actions for each scenario

        // scenario if user guesses correctly i.e. +1 to win, guesses do not decrement and attempt field clears
        if (userGuess === compGuess) {
            wins++;
            reset();
        }

        // scenario where guesses incorrectly i.e. pushes incorrect answer to attempts array and decrements no. of turns
        if (userGuess != compGuess) {
            attempts.push(userGuess);
            guessLeft--;
           
        }

        // scenario once guesses left is 0 i.e. increase loss, clears attempts array and resets no. of guesses
        if (guessLeft === 0) {
            alert("Hmm, the sorting hat is still deciding...");
            losses++;
            reset();
        }

        // once losses are at 3, game over - queue music...
        if (losses === 3) {
            alert("Sorry, it looks like you're just a muggle");
            var audio = new Audio ("assets/images/introfail.m4a");
            audio.play();
        }

        // once wins are at 3, you're officially enrolled into Hogwarts!
        if (wins === 3) {
            alert("You're a wizard, " + userName + " !");
            var audio = new Audio ("assets/images/intro.m4a");
            audio.play();
        }

        //change the html so that it displays the results
        var html = 
            "<p> Wins: " + wins + "</p>" +
            "<p> Losses: " + losses + "</p>" +
            "<p> Guesses remaining: " + guessLeft + "</p>" +
            "<p> You chose: " + attempts + "</p>";

        document.querySelector("#game").innerHTML = html;
    
    }

    
 


