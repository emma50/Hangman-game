class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split("");
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = "playing"
    }

    getStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === " ")
        
        const failed = this.remainingGuesses <= 0 
    
        if (finished) {
            this.status = "finished "; 
        } else if (failed) {
            this.status = `failed`; 
        } else {
            this.status = `playing`;
        }
    
        return this.status
    }

    get statusMessage() {
        if (this.status == "playing") {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === "failed") {
            return `Nice try! The word was *${this.word.join("")}*`
        } else {
            return `Great work! You guessed the word`
        } 
    }

    get puzzle() {
        let puzzle = ""
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                puzzle += letter;
            } else {
                puzzle += "*";
            }
        })
    
        return puzzle;
    }
    
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);
    
        if (this.status !== "playing") {
            return;
        }
    
        if (isUnique) {
            // this.guessedLetters.push(guess)
            this.guessedLetters = [...this.guessedLetters, guess]
        } 
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    
        this.getStatus()
    }
}

export { Hangman as default }



