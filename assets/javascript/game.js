// Create an array of the word pool

let cafeGame = {

    words: ["latte", "cappucino", "coffee", "croissant", "macchiato", "scone", "chai", "tea", "muffin", "espresso", "frappucino"],

    guesses: 10,

    }

console.log(cafeGame.words.length);
console.log(cafeGame.guesses);

// Pick a random word for the player to guess
var mysteryWord = cafeGame.words[Math.floor(Math.random() * cafeGame.words.length)];

// log mystery word
console.log(mysteryWord);

// empty array to store guesses
var answerArray = [];
var falseArray = [];

// create blank spaces equal to the length of the mystery word
for (var i = 0; i < mysteryWord.length; i++) {

      answerArray[i]= "_";

    }

// populate html w/ answerArray - currently blank
document.getElementById("current").innerHTML = answerArray.join(" ");

// populate html w/ false Array, blank array for guessed answers
document.getElementById("already-guessed").innerHTML = falseArray;

// display wins in the "wins-amnt" paragraph
var wins = 0;
document.getElementById("wins-amnt").innerHTML =  wins;

// define a variable with the remaining letters to guess
var guessesLeft = cafeGame.guesses;
console.log(guessesLeft);

// display guesses amnt
document.getElementById("remaining").innerHTML = guessesLeft;

// take in user guesses via keystrokes
document.addEventListener("keypress", event => {
        let userInput = String.fromCharCode(event.keyCode);
        console.log(userInput);

// compare keypress with mystery word array
     var letterFound = false;
     for (j = 0; j < mysteryWord.length; j++) {
            if (userInput == mysteryWord.charAt(j)) {
                // record right guesses in answer array
                answerArray[j] = userInput;
                //answerArray.push(userInput);
                //document.getElementById("current").append(userInput);
                letterFound = true;

            }

        }

        if(!letterFound) {
            falseArray.push(userInput);
            document.getElementById("already-guessed").append(userInput + " ");
        }

        document.getElementById("current").innerHTML = answerArray.join(" ");

        // a function to convert the answer array to a string that can be compared to the mystery word IF there are no "_"
            var finalAnswer;

                if (answerArray.includes("_")) {
                    finalAnswer = false;
                } else {
                    finalAnswer = true;
                }

                // statement to check array for falsiness and return "You lost" message
                //if (guessesLeft = 0 && answerArray.includes("_")) {alert("You lost!")}

    document.getElementById("remaining").innerHTML = guessesLeft--;

    // resets the guess counter, adds +1 to wins
    if (finalAnswer) {
        wins++;
        document.getElementById("wins-amnt").innerHTML = wins;
        guessesLeft = 10;
     }

    });