var bands = ['Black Sabbath', 'Slipknot', 'Metallica', 'Tool', 'Pantera', 'Mastodon'];
var band;
var incompleteWord = [];

var nameLength = 0;
var numCorrect = 0;
var numGuesses = 0;

var guessedLetters = [];
var nameArray;
var bandArray = [];

function decideBand() {
  var randomNumber = Math.floor(Math.random() * bands.length + 1);
  band = bands[randomNumber - 1].toLowerCase();
}

function convertWord() {
  console.log(band);
  bandArray = band.split("");
  console.log(nameArray);
  console.log(nameLength);

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
      numGuesses++;

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

  if (checkLetter(("_"), incompleteWord)) {
    return false;
  }
  else {
    return true;
  }

}

// WRTIE BOTH OF THESE TONIGHT
// REWRITE 'ALREADY GUESSED' AS AN ALERT

function winTriggered(){
  var photoFilename = "./assets/images/" + band.replace(" ", "") + ".jpg";
  var musicFilename = "./assets/" + band.replace(" ", "") + ".mp3";

  document.getElementById("question-mark").innerHTML = '<img src="' + photoFilename + '">'


  document.getElementById("audio").innerHTML = '<audio id="myAudio"> <source src="' + musicFilename + '" type="audio/mpeg"></audio>';

  document.getElementById("myAudio").play();
// Update buttons
// CSS Animations
// Play music
}

function updatePage(){

}


decideBand();
convertWord();

document.onkeyup = function(event) {
  console.log(event);

  var letter = event.key.toLowerCase();

    guessLetter(letter);
  
    if (checkVictory()){
      winTriggered();
    }
}