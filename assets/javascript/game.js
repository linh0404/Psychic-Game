// setting available choices for the computer
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];

// set all values to zero
var wins = 0;
var losses = 0;
var guessLeft = 9;
var attempts = [];

var letsplay = confirm ("Are you eligible for enrolment into Hogwarts? Lets play to find out.")

if (letsplay) {
    var userName = prompt ("What's your name?");
    alert("What letter am I thinking of? Guess correctly to be accepted");
}

else {
    alert("Aww, just a squib");
}

// random letter to act as the computers choice


// an event function to note when a choice has been made
document.onkeyup = function (event) {
    userGuess = event.key;
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(compGuess);
    console.log(userGuess);


//if functions detailing actions for each scenario
        if (compGuess == userGuess) {s
            win++;
            guessLeft = 9;
            attempts.push(userGuess);
            }

        else if (compGuess != userGuess) {
            attempts.push(userGuess);
            guessLeft--;
        }

        if (guessLeft == 0) {
            alert("Hmm, the sorting hat is still deciding...");
            losses++;
        }

        else if (losses === 9) {
            alert("Looks like your just another muggle");
        }

        else if (wins === 10) {
            alert("Welcome to Hogwarts!")
        }
    }
        var html = 
            "<p> Wins: " + wins + "</p>" +
            "<p> Losses: " + losses + "</p>" +
            "<p> Guesses remaining: " + guessLeft + "</p>" +
            "<p> You chose: " + attempts + "</p>";

            document.querySelector("#game").innerHTML = html;
    



