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
var falseArray = [];

// create blank spaces equal to the length of the mystery word
for (var i = 0; i < mysteryWord.length; i++) {

      answerArray[i]= "_";

    }
// populate html w/ answerArray - currently blank
document.getElementById("current").innerHTML = answerArray.join(" ");

// populate html w/ false Array, blank array for guessed answers
//document.getElementById("already-guessed").innerHTML = falseArray;

// display wins in the "wins-amnt" paragraph
var wins = 0;
document.getElementById("wins-amnt").innerHTML =  wins;

// display guesses amnt
document.getElementById("remaining").innerHTML = cafeGame.guesses;

// define a variable with the remaining letters to guess
//var guessesLeft = cafeGame.guesses;
//console.log(guessesLeft);

// take in user guesses via keystrokes
document.addEventListener("keypress", event => {
        let userInput = String.fromCharCode(event.keyCode);
        console.log(userInput);

        let guessesLeft = cafeGame.guesses;

// loop event function as long as there's more than 0 geusses, update  by subtracting one from guesses  
for ( k = guessesLeft; k > 0; k--) {

// run function while k > 0
while (guessesLeft > 0) {

        for (j = 0; j < mysteryWord.length; j++) {

                if (userInput === mysteryWord[j]) {
                // record right guesses in answer array
                answerArray[j] = userInput;
                document.getElementById("current").innerHTML += userInput;
                break;

            } else {

                falseArray[j] = userInput;
                document.getElementById("already-guessed").append(String(userInput));
                break;

            };

            }
            //else {
                // record false answers in "already guessed" array
                //falseArray[j] = userInput;

               // document.getElementById("already-guessed").append(String(userInput)); }
            

        

        document.getElementById("already-guessed").append(String(userInput));

        // guessesLeft goes down by 1
        //document.getElementById("remaining").innerHTML = 
    

    }

}

});

//guessesLeft--;

// increase the Win counter when a word is guessed
//if (guessesLeft >= 0 && answerArray[j].concat === mysteryWord) { wins++; };
