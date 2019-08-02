var bands = ['Black Sabbath', 'Slipknot', 'Metallica', 'Tool', 'Pantera', 'Mastodon'];
var band;
var incompleteWord = [];

var nameLength = 0;
var numCorrect = 0;
var numGuesses = 0;

var guessedLetters = [];
var nameArray;
var bandArray = [];

// document.addEventListener('keydown', logKey);

function logKey(typed_letter) {

   console.log(typed_letter);
    return typed_letter;
}


function decideBand() {
  var randomNumber = Math.floor(Math.random() * bands.length + 1);
  band = bands[randomNumber - 1].toLowerCase();
}

function convertWord() {
  console.log(band);
  bandArray = band.split("");
  console.log(nameArray);
  console.log(nameLength);

  // nameLength = nameArray.length;
  for (var i = 0; i < bandArray.length; i++) {
    if (bandArray[i] == " ") {
      nameLength--;
      incompleteWord.push(" ");
    }
    else {
      incompleteWord.push("_");
    }
  }
}

function upperString(array){
  var returnString = ""
  for (var i=0; i < array.length; i++){
    returnString += array[i].toUpperCase() + " ";
  }
  return returnString;
}
function guessLetter(letter) {
  if ((checkLetter(letter, guessedLetters))) {
    console.log("You already guessed that!");
  }
  else {
    var index = bandArray.indexOf(letter);
    numGuesses++;
    guessedLetters.push(letter);

    while (index !== -1) {
      incompleteWord[index] = bandArray[index];
      numCorrect++;

      index = bandArray.indexOf(letter, index + 1);

      // for (var i=0; i < bandArray.length; i++){
      //   if (bandArray[i] == letter) {
      //     incompleteWord[i] = letter;
      //     // nameLength--;
      //     guessedLetters.push(letter);
      //     numCorrect++;
      //     numGuesses++;
      //   }
      // }
      // if (!checkLetter(letter, guessedLetters)) {
      //   guessedLetters.push(letter);
      //   numGuesses++;
      // }
      document.getElementById("statistics").innerHTML = "Number correct: " + numCorrect + "  | Guessed Letters: " + guessedLetters + "  | Number of Guesses: " + numGuesses;
      document.getElementById("guessedletters").innerHTML = upperString(guessedLetters);
      document.getElementById("inprogressword").innerHTML = upperString(incompleteWord);
    }
  }
}

function checkLetter(letter, array) {
  var flagVariable = false;

  for (var i = 0; i < array.length; i++) {
    if (letter == array[i]) {
      flagVariable = true;
    }
  }

  return flagVariable;
}

function checkVictory() {
  // for (var i= 0; i < incompleteWord.length; i++){
  //   if (incompleteWord[i] == "_"){
  //     return false;
  //   }
  // }
  if (checkLetter(("_"), incompleteWord)) {
    return false;
  }
  else {
    return true;
  }

}


  decideBand();
  convertWord();

document.onkeyup = function(event) {  
  //document.addEventListener('keydown', logKey);
  var letter = event.key.toLowerCase();


  while (!checkVictory()) {
    // var letter = event.key.toLowerCase();
    //if (prompt("Would you like to continue?")){
    // var letter = prompt("Guess a letter!");
    guessLetter(letter);
    // console.log("Guess a letter");
    console.log(incompleteWord);
    // var input = prompt();
    // guessLetter(input);
    console.log("Number correct: ", numCorrect);
    console.log("Guessed Letters: ", guessedLetters);
    console.log("Number of Guesses: ", numGuesses);
    // document.getElementById('artist-name').innerHTML = incompleteWord;
    // document.getElementById("statistics").innerHTML = "Number correct: " + numCorrect + "  | Guessed Letters: " + guessedLetters + "  | Number of Guesses: " + numGuesses;


  }
    console.log("You won! The band was: ", band);
    console.log(incompleteWord);
}
    // document.getElementById('buttons').innerHTML = "You won! The band was: " + band;

// }


// mainGame();

// $(document).ready(function() {
//   decideBand();
//   convertWord();

  // while (!checkVictory()){
  //   // Console Game Working
  //   // console.log("Guess a letter");
  //   // console.log(incompleteWord);
  //   // var input = prompt();
  //   // guessLetter(input);
  //   // console.log("Number correct: ", numCorrect);
  //   // console.log("Guessed Letters: ", guessedLetters);
  //   // console.log("Number of Guesses: ", numGuesses );
  //   // document.onkeyup = function(event) {

  //   //   // Captures the key press, converts it to lowercase, and saves it to a variable.
  //     // var letter = event.key.toLowerCase();
  //     // guessLetter(letter);
  // };

  // console.log("You won! The band was: ", band);
  // console.log(incompleteWord)


