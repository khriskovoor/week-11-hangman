var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

game = {
    wordBank: ["facebook", "google", "youtube", "microsoft", "yahoo", "amazon", "apple"],
    wordsWon: 0,
    remainingGuesses: 10,
    currentWord: null,
    startGame: function(word) {

        this.resetremainingGuesses();


        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);

        this.currentWord.getLets();

        this.keepPromptingUser();

    },
    resetremainingGuesses: function() {
        this.remainingGuesses = 10;
    },
    keepPromptingUser: function() {
        var self = this;

        prompt.get(['guessLetter'], function(err, result) {


            console.log('  The letter or space you guessed is: ' + result.guessLetter);


            var findHowManyOfUserGuess = self.currentWord.checkIfLetterFound(result.guessLetter);


            if (findHowManyOfUserGuess === 0) {
                console.log('You guessed wrong!');
                self.remainingGuesses -= 1;
            } else {
                console.log('You guessed the right word!');


                if (self.currentWord.didWeFindTheWord()) {
                    console.log('You Won!!!');
                    return;
                }
            }

            console.log('Guesses remaining: ', self.remainingGuesses);
            console.log(self.currentWord.wordRender());
            console.log('here are the letters you guessed already: ');

            if ((self.remainingGuesses > 0) && (self.currentWord.found == false)) {
                self.keepPromptingUser();
            } else if (self.remainingGuesses === 0) {
                console.log('The word you were guessing was', self.currentWord.word);
                console.log('Game Over');
            } else {
                console.log(self.currentWord.wordRender());
            }
        });
    }


};

game.startGame();
