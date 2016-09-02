var Letter = require('./letter.js');

var Word = function(word) {
    this.word = word;
    this.lets = [];
    this.found = false;

    this.getLets = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.lets.push(new Letter(this.word[i]));
        }
    };


    this.didWeFindTheWord = function() {

        this.found = this.lets.every(function(curLet) {
            return curLet.appear;
        });

        return this.found;
    };

    this.checkIfLetterFound = function(guessLetter) {
        var whatToReturn = 0;

        for (var i = 0; i < this.lets.length; i++) {
            if (this.lets[i].charac == guessLetter) {
                this.lets[i].appear = true;
                whatToReturn++;
            }
        }

        return whatToReturn;
    };

    this.wordRender = function() {
        var str = '';

        for (var i = 0; i < this.lets.length; i++) {
            str += this.lets[i].letterRender();
        }
        console.log("test" + this.lets[i]);
        console.log("Inside word render :" + str);
        return str;
    };
}

module.exports = Word;
