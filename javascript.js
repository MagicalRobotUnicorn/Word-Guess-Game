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
  var randomNumber = Math.floor((Math.random() * 6) + 1);
  band = bands[randomNumber - 1];
}

function convertWord(){
  console.log(band);
  bandArray = band.split("");
  console.log(nameArray);
  console.log(nameLength);

  // nameLength = nameArray.length;
  for (var i=0; i < bandArray.length; i++){
    if (bandArray[i] == " ") {
      nameLength--;
      incompleteWord.push(" ");
    }
    else {
      incompleteWord.push("_");
    }
  }
}

function guessLetter(letter) {
  if ((checkLetter(letter, guessedLetters))){
    console.log("You already guessed that!");
  }
  else {
    var index = bandArray.indexOf(letter);
    numGuesses++;
    guessedLetters.push(letter);

    while (index != -1){
      incompleteWord[index] = bandArray[index];
      // numCorrect++;

      index = bandArray.indexOf(letter);
    }
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
  }
}

function checkLetter(letter, array) {
  var flagVariable = false;

  for (var i=0; i < array.length; i++){
    if (letter == array[i]){
      flagVariable = true;
    }
  }

  return flagVariable;
}

function checkVictory() {
  for (var i= 0; i < bandArray.length; i++){
    if (incompleteWord[i] == "_"){
      return false;
    }
  }

  return true;
  // if (checkLetter("_", incompleteWord)){
  //   return false;
  // }
  // else {
  //   return true;
  // }
}

function mainGame() {
  decideBand();
  convertWord();

  while (true){
    console.log("Guess a letter");
    console.log(incompleteWord);
    var input = prompt();
    guessLetter(input);
    console.log("Number correct: ", numCorrect);
    console.log("Guessed Letters: ", guessedLetters);
    console.log("Number of Guesses: ", numGuesses );

    if (checkVictory()) {
      console.log("You won! The band was: ", band);
      console.log(incompleteWord)
      break;
    }
    else {
      continue;
    }
  }
}
