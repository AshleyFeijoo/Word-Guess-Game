document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded



// ========++++++========++++++========++++++========++++++========++++++///
// Arrays of words and letters
// ========++++++========++++++========++++++========++++++========++++++///
var wordList = ["SHREK", "DONKEY", "FIONA", "OGRE", "SWAMP"];
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// ========++++++========++++++========++++++========++++++========++++++///
// Global Variables   ========++++++///
// ========++++++========++++++========++++++========++++++========++++++///

var guessesLeft =  11;
var guessedLetter = [];
var guessedLetterArr = [];

var guessesLeftHtml = document.getElementById("guesses-left");
var guessedLetters = document.getElementById("guessed-letters");
var currentWord = document.getElementById("currentWord");
var startKeyDoc = document.getElementById("startKey");
var winImg= document.getElementById("youwin-img");

// ========++++++========++++++========++++++========++++++========++++++///
// Function to change alphabet into uppercase   ========++++++///
// ========++++++========++++++========++++++========++++++========++++++///
toUpper = function(x) {
  return x.toUpperCase();
};
alphabet = alphabet.map(toUpper);



// ========++++++========++++++========++++++========++++++========++++++///
//Program will begin by picking a random word and splitting it into letters
// ========++++++========++++++========++++++========++++++========++++++///

var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var letters = randomWord.replace(/alphabet/g, "_").split("");


// ========++++++========++++++========++++++========++++++========++++++///
// Program will change letters into an array of underscores
// ========++++++========++++++========++++++========++++++========++++++///

for (let i = 0; i < letters.length; i++) {
  letters[i] = letters[i].replace(/[A-Za-z]+$/, "_");
  var letterdash = letters;
}
var letters = randomWord.split("");


document.getElementById("youwin-img");


// ========++++++========++++++========++++++========++++++========++++++///
//Program will begin by picking a random word and splitting it into letters
// ========++++++========++++++========++++++========++++++========++++++///

var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var letters = randomWord.replace(/alphabet/g, "_").split("");


// ========++++++========++++++========++++++========++++++========++++++///
// Program will change letters into an array of underscores
// ========++++++========++++++========++++++========++++++========++++++///

for (let i = 0; i < letters.length; i++) {
  letters[i] = letters[i].replace(/[A-Za-z]+$/, "_");
  var letterdash = letters;
}
var letters = randomWord.split("");


document.getElementById("youwin-img");



// ========++++++========++++++========++++++========++++++========++++++///
    // Program begins when key is pressed
// ========++++++========++++++========++++++========++++++========++++++///




document.onkeypress = function(event) {

    
    // currentWord.innerHTML = currentWord.innerHTML;
    startKeyDoc.innerHTML = startKeyDoc.style.display = "none";
    currentWord.innerHTML = letterdash.join(' ');

    


    var playerGuess = event.key;
    var playerGuess = event.key.toUpperCase();
 
    if (!alphabet.includes(playerGuess)){
        return;
    }






    for (let i = 0; i < letters.length; i++) {
        // console.log("letters", letters[i]);
        // console.log("guess", playerGuess);
        playerGuess.toUpperCase;
        letters[i].toUpperCase;

        // searchTerm = playerGuess;
        //letters[i].includes(playerGuess)
    
        if (letters[i].includes(playerGuess)) {
            var position = letters.indexOf(playerGuess);
           letterdash.splice(position, 1, playerGuess);
           var joined = letterdash.join("  ");
           currentWord.innerHTML = joined;
        } 
    
        if (guessedLetterArr.includes(playerGuess)){
        }
        else {
        guessedLetterArr = [];
        guessesLeft = guessesLeft - 1; //if player guess is not equal to a letter, remove a guess left
        guessedLetterArr.push(playerGuess);
        guessesLeftHtml.innerHTML = guessesLeft;
        guessedLetters.textContent =  guessedLetters.textContent + playerGuess;
            }  
        if (guessesLeft === 0){
            newGuess = []; //create new empty array for letters
            guessedLetterArray= [];
            guessesLeft = 10; //resets the guesses left to 
            guessesLeftHtml.innerHTML = guessesLeft;
            guessedLetters.textContent =  guessedLetterArr.join(' ');
            currentWord.textContent = joined;
            break;
        }
        




}
};
});