// Create an array of the word pool

let cafeGame = {

    words: ["latte", "cappucino", "coffee", "croissant", "macchiato", "scone", "chai", "tea", "muffin", "espresso", "frappucino"],

    guesses: 10,

    }

console.log(cafeGame.words.length);
console.log(cafeGame.guesses);

            // a function that resets the word and array for later
            function newWord(){

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
    
                guessesLeft = 10;
            }

// Pick a random word for the player to guess
var mysteryWord = cafeGame.words[Math.floor(Math.random() * cafeGame.words.length)];

// log mystery word
console.log(mysteryWord);

// empty array to store guesses
var answerArray = [];
var falseArray = [];

// empty variable to check the string against later
var finalAnswer;

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

        // check whether or not the word is filled in (if there's any "_"'s left)

            if (answerArray.includes("_")) {
                var finalAnswer = false;
            } else {
                var finalAnswer = true;
                wins++;
                document
                document.getElementById("wins-amnt").innerHTML = wins;
                guessesLeft = 10;
            }

        // resets guess counter and adds +1 to wins
            //if (finalAnswer) {
                //wins++;
                //document.getElementById("wins-amnt").innerHTML = wins;
                //guessesLeft = 10;
            //}


    document.getElementById("remaining").innerHTML = guessesLeft--;

    });
    
        // resets word if finalAnswer is true/there is a win
        if (finalAnswer) { newWord();}

