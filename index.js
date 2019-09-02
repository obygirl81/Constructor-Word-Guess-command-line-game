
var Word = require("./word.js");
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

// words list
var longestRiver = ["missouri", "mississippi", "yukon", "rio grande", "colorado", "arkansas", "columbia","red", "snake", "ohio", "colorado river of texas", "tennessee", "canadian", "brazos", "green", "pecos", "white river arkansas", "james", "kuskokwim", "cimarron", "cumberland", "yellow stone", "north platte", "milk", "ouachita", "saint lawrence", "gila", "sheyenne", "tanana", "smoky hill", "niobrara", "little missouri", "sabine", "red river of the north", "des moines", "white river missouri", "trinity", "wabash"];

// Random name from longestRiver array
var randomName = Math.floor(Math.random() * longestRiver.length);
var randomWord = longestRiver[randomName];

// Passing random word via Word constructor
computerWord = new Word(randomWord);

var requireNewWord = false;

// Array to hold guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;

function knowledge() {

    // Creates new word for the Word constructor when true
    if (requireNewWord) {
        // Selects the random longestRiver array
        var randomName = Math.floor(Math.random() * longestRiver.length);
        var randomWord = longestRiver[randomName];

        // Passing random word through the Word constructor
        computerWord = new Word(randomWord);

        
        requireNewWord = false;
    }


    // Checks when a letter guessed is correct
    var wordComplete = [];
    computerWord.objArray.forEach(completeCheck);

    // the remaining letters to guess
    if (wordComplete.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess any letter between A-Z!",
                    name: "userinput"
                }
            ])
            .then(function (input) {

               
                if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("\nGuess again!\n");
                    knowledge();
                } else {

                   
                    if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                        console.log("\nAlready Guessed or Nothing Guessed\n");
                        knowledge();
                    } else {

                        // Checks when user guess is correct
                        var wordCheckArray = [];

                        
                        computerWord.userGuess(input.userinput);

                        computerWord.objArray.forEach(wordCheck);
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n");
                           
                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect!\n");
                           
                            correctLetters.push(input.userinput);
                        }

                        
                        computerWord.log();

                        // show remianing guesses left
                        console.log("Guesses Left: " + guessesLeft + "\n");
 
                        // show the letters already guessed
                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        // User number of guess left
                        if (guessesLeft > 0) {
                            
                            knowledge();
                        } else {
                            console.log("You lose!\n");

                            restartGame();
                        }


                        
                        function wordCheck(key) {
                            wordCheckArray.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("You win!\n");

        restartGame();
    }

   
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }

}

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do:",
                choices: ["Replay game", "Exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Replay game") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                knowledge();
            } else {
                return
            }
        })
}

knowledge();
