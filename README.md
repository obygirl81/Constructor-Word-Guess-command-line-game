# Constructor-Word-Guess-command-line-game
Advanced JavaScript: Constructor Word Guess Game

This is a Word Guess command-line application game developed using constructor functions. In this game, user will guess the correct name of the longest river in the Unites States of America randomly selected by the computer on the screen. User will have 10 chances to guess the correct name. When the user guesses a correct name, a message is displayed to user that you win. If user fails to guess the correct longest river name, a message is displayed to user that you lose. User is given a choice to either replay game or exit the game using the up and down arrow key on the computer keyboard. Do you know the longest rivers in the United States of America? Test your knowledge and have fun!

This game receives user input using the inquirer or prompt npm packages.

Letter.js: Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 

index.js: This is the file containing the logic for the course of the game, which depends on Word.js.  It randomly selects a word and uses the Word constructor to store it, prompts the user for each guess, and keeps track of the user's remaining guesses

See the attached screenshots and here is the link to check out the game: https://github.com/obygirl81/Constructor-Word-Guess-command-line-game

