// Create an array of the word pool

let cafeGame = {

    words: ["latte", "cappucino", "coffee", "croissant", "macchiato", "scone", "chai", "tea", "cold brew", "flat white", "frappucino"],

    guesses: 10,

    }


console.log(cafeGame.words.length);

// Pick a random word for the player to guess
var mysteryWord = cafeGame.words[Math.floor(Math.random() * cafeGame.words.length)];

console.log(mysteryWord);

// empty array to store guesses
var answerArray = [];

// create blank spaces equal to the length of the mystery word
for (var i = 0; i < mysteryWord.length; i++) {

      answerArray[i]= "_";

    }
// populate html w/ answerArray - currently blank
document.getElementById("current").innerHTML = answerArray.join(" ");

// display wins in the "wins-amnt" paragraph
var wins = 0;
document.getElementById("wins-amnt").innerHTML =  wins;

// display guesses amnt
document.getElementById("remaining").innerHTML = cafeGame.guesses;

// define a variable with the remaining letters to guess
var guessesLeft = cafeGame.guesses;
console.log(guessesLeft);

// take in user guesses via keystrokes
document.addEventListener("keypress", event => {
        let userInput = String.fromCharCode(event.keyCode);
        console.log(userInput);

// loop to track guesses (10 guesses)
while (guessesLeft > 0) {

        for (j = 0; j < mysteryWord.length; j++) {

           // let userInput = String.fromCharCode(event.keyCode);

            if (userInput === mysteryWord[j]) {
                // record right guesses in answer array
                answerArray[j] = userInput;
            } else {
                document.getElementById("already-guessed").innerHTML = userInput;
            }

        }

        // subtract one from your remaining guesses
        guessesLeft--;

    }

});

// increase the Win counter when a word is guessed
//if (guessesLeft >= 0 && 
