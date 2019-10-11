class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.guessed = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.guessed = Math.round((this.max + this.min) / 2);
    	return this.guessed;
    }

    lower() {
    	this.max = this.guessed;
    	return this.max;
    }

    greater() {
    	this.min = this.guessed;
    	return this.min;
    }
}

module.exports = GuessingGame;
