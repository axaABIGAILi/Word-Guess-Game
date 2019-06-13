// Create an array of the word pool

let cafeGame = {

    words: ["latte", "cappucino", "coffee", "croissant", "macchiato", "scone", "chai", "tea", "cold brew", "flat white", "frappucino"],

    guesses: 10,

}

console.log(cafeGame.words.length);

// Pick a random word for the player to guess
var mysteryWord = cafeGame.words[Math.floor(Math.random() * cafeGame.words.length)];

console.log(mysteryWord);

// create blanks in the "current" paragraph
for (var i = 0; i < mysteryWord.length; i++) {

      document.getElementById("current").innerHTML += "_ ";

    }

// "Press any key to get started" - take any user KEY PRESS to initialize the game

// loop to track guesses (10 guesses)
for ( i = 1; i <= cafeGame.guesses; i++) {

    document.addEventListener("keydown", 
    
    function userInput(event) {

        


    })



}

// compare user input against stored string


// track the number of "guesses" - of KEY PRESSES - against a finite counter

// keep track of the LETTERS typed



// falsy characters are recorded under "Guessed Lettrs"

// truthy characters are shown as progress


// the GUESSES counter decreases with each guess

// LOOP


// Win Counter goes up by 1 for every victory (properly guessed word)

// after the user's guesses expire OR they win, game automatically restarts (LOOPS)

