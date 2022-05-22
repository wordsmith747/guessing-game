const prompt = require('prompt-sync')();
var continueWithNewGame = true;

while (continueWithNewGame) {
    // Generate a random integer between 1 and 10
    var computerGuess = Math.floor(Math.random() * 10 + 1);
    //Output of the computer's calculation for debugging only  
    console.log(`***The computer guess is the following ${computerGuess}` );
    //Run the game
    var userGuessedCorrectly = false;
    while (userGuessedCorrectly === false) {

        var userGuessString = prompt('Guess the number between 1 and 10.  ');
        var userGuess = parseInt(userGuessString);

        if (userGuess === computerGuess) {
            console.log("You've guessed the number")
            userGuessedCorrectly = true;
        } else {
            console.log("Try again")
        }
    }

    //Establishing if the game should carry on or not
    var anotherGameAnswer = prompt("Do you want to play another game? Y/N   ");
    //Clean user input and determine if the game should continue
    if (anotherGameAnswer.toUpperCase().trim() === "N") {
        continueWithNewGame = false;
    }
}

console.log("Thank you for participation in my game. See you next time!");