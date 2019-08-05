var game = {
  bands: ['Black Sabbath', 'Slipknot', 'Metallica', 'Tool', 'Pantera', 'Mastodon'],
  band: "",
  incompleteWord: [],

  nameLength: 0,
  numCorrect: 0,
  numGuesses: 0,

  guessedLetters: [],
  nameArray: [],
  bandArray: [],

  decideBand: function () {
    var randomNumber = Math.floor(Math.random() * this.bands.length + 1);
    this.band = this.bands[randomNumber - 1].toLowerCase();
  },

  convertWord: function () {
    // Band in the console (I left this in to aid in the grading of the assignment)
    console.log(this.band);
    this.bandArray = this.band.split("");

    for (var i = 0; i < this.bandArray.length; i++) {
      if (this.bandArray[i] == " ") {
        this.nameLength--;
        this.incompleteWord.push(" ");
      }
      else {
        this.incompleteWord.push("_");
      }
    }
  },

  upperString: function (array) {
    var returnString = ""
    for (var i = 0; i < array.length; i++) {
      returnString += array[i].toUpperCase() + " ";
    }
    return returnString;
  },

  guessLetter: function (letter) {
    if ((this.checkLetter(letter, this.guessedLetters))) {
      alert("You already guessed that!");
    }
    else {
      var index = this.bandArray.indexOf(letter);
      this.numGuesses++;
      this.guessedLetters.push(letter);

      while (index !== -1) {
        this.incompleteWord[index] = this.bandArray[index];
        this.numCorrect++;

        index = this.bandArray.indexOf(letter, index + 1);
      }
      document.getElementById("numCorrect").innerHTML = this.numCorrect;
      document.getElementById("numGuesses").innerHTML = this.numGuesses;
      document.getElementById("guessedletters").innerHTML = this.upperString(this.guessedLetters);
      document.getElementById("inprogressword").innerHTML = this.upperString(this.incompleteWord);
    }
  },

  checkLetter: function (letter, array) {
    var flagVariable = false;

    for (var i = 0; i < array.length; i++) {
      if (letter == array[i]) {
        flagVariable = true;
      }
    }

    return flagVariable;
  },

  checkVictory: function () {

    if (this.checkLetter(("_"), this.incompleteWord)) {
      return false;
    }
    else {
      return true;
    }

  },

  winTriggered: function () {
    var photoFilename = "./assets/images/" + this.band.replace(" ", "") + ".jpg";
    var musicFilename = "./assets/" + this.band.replace(" ", "") + ".mp3";

    document.getElementById("artist-photo").innerHTML = '<img src="' + photoFilename + '" class="mainphoto shadow">';


    document.getElementById("audio").innerHTML = '<audio id="myAudio"> <source src="' + musicFilename + '" type="audio/mpeg"></audio>';

    document.getElementById("myAudio").play();
    // Update buttons
    // document.getElementsByClassName("skull").classList.add("skullwin");

    document.getElementById("buttons").innerHTML = '<button type="button" class="btn btn-secondary btn-lg" id="pause"><h1>Pause Audio</h1></button><button type="button" class="btn btn-secondary btn-lg" id="reload"><h1>Play Again</h1></button>';
    (document.getElementById("pause")).addEventListener("click", function () {
      document.getElementById("myAudio").pause();
    });
    (document.getElementById("reload")).addEventListener("click", function () {
      location.reload();
    });

    document.getElementById("skull").id = "skullwin";


    // CSS Animations
    // Update Page Function

  }
}


game.decideBand();
game.convertWord();

document.onkeyup = function (event) {
  console.log(event);

  var letter = event.key.toLowerCase();

  game.guessLetter(letter);

  if (game.checkVictory()) {
    game.winTriggered();
  }
}
