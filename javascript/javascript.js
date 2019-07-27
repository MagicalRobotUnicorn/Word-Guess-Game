var bands = ['Black Sabbath', 'Slipknot', 'Metallica', 'Tool', 'Pantera', 'Mastodon'];
var band;
var incompleteword = "";
var nameLength = 0;
var numGuesses = 0;
var guessedLetters = [];

function decideBand() {
  var randomNumber = Math.floor((Math.random() * bands.length) + 1);
  band = bands[randomNumber];
}

function convertWord(){
  nameLength = band.length;
  for (var i=0; i < band.length; i++){
    if (band[i] == " ") {
      nameLength--;
      incompleteword += " ";
    }
    else {
      incompleteword += "_";
    }
  }
}

function guessLetter(letter) {
  if (letter in guessLetters) {
    continue;
  }
  else {
    for (var i=0; i < band.length; i++){
      if (band[i] == letter) {
        incompleteword[i] = letter;
        nameLength--;
        guessedLetters.push(letter);
        numGuesses++;
      }
    }
  }
}
