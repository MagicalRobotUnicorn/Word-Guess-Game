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
  // Band in the console (I left this in to aid in the grading of the assignment)
  console.log(band);
  bandArray = band.split("");

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
    alert("You already guessed that!");
  }
  else {
    var index = bandArray.indexOf(letter);
    numGuesses++;
    guessedLetters.push(letter);

    while (index !== -1) {
      incompleteWord[index] = bandArray[index];
      numCorrect++;

      index = bandArray.indexOf(letter, index + 1);
    }
      document.getElementById("numCorrect").innerHTML = numCorrect;
      document.getElementById("numGuesses").innerHTML = numGuesses;
      document.getElementById("guessedletters").innerHTML = upperString(guessedLetters);
      document.getElementById("inprogressword").innerHTML = upperString(incompleteWord);
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

function winTriggered(){
  var photoFilename = "./assets/images/" + band.replace(" ", "") + ".jpg";
  var musicFilename = "./assets/" + band.replace(" ", "") + ".mp3";

  document.getElementById("artist-photo").innerHTML = '<img src="' + photoFilename + '" class="mainphoto">';


  document.getElementById("audio").innerHTML = '<audio id="myAudio"> <source src="' + musicFilename + '" type="audio/mpeg"></audio>';

  document.getElementById("myAudio").play();
// Update buttons
  document.getElementById("buttons").innerHTML = '<button type="button" class="btn btn-secondary btn-lg" id="pause"><h1>Pause Audio</h1></button><button type="button" class="btn btn-secondary btn-lg" id="reload"><h1>Play Again</h1></button>';
  (document.getElementById("pause")).addEventListener("click", function(){
    document.getElementById("myAudio").pause();
  });
  (document.getElementById("reload")).addEventListener("click", function(){
    location.reload();
  });


// CSS Animations

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