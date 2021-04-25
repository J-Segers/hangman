// const { question } = require("readline-sync"); <-- moved it to game.input when i added a new function to practice.
const { displayWordSoFar, isGameWon, isGameLost} = require("./gamelogic");
// for practice
const askForLetter = require("./game.input");
const drawHangman = require("./game.hangman.output");

function game(word, guesses) {
    drawHangman(word, guesses);

    // stops program from running this log at the start of the program
    if(guesses.length !== 0){
        console.log("Dit heb je tot nu toe geraden: ", guesses);
    }
    // output what has been guessed so far
    console.log(displayWordSoFar(word, guesses));

    // voeg de geraden letter toe aan de array met guesses
    guesses.push(askForLetter(guesses));
    console.log(guesses);

    // check if game should continue;
    if(isGameWon(word, guesses)) {
        drawHangman(word, guesses);
        console.log(displayWordSoFar(word, guesses));
        console.log("GEFELICITEERD!!! Je hebt het woord geraden!");
    } else if(isGameLost(word, guesses)){
        drawHangman(word, guesses);
        console.log(displayWordSoFar(word, guesses));
        console.log("Sorry je hebt het niet geraden!");
    } else {
        game(word, guesses);
    }
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

const dictionary = ["avontuurlijk", "schreeuwerig", "verschrikkelijk", "prinsesje", "gemakkelijk", "knutseldoosje", "autobandventieldopje", "haaientanden", "pingpongtafel"];
// randomizes the word to be guessed
const word = dictionary[Math.round(Math.random() * 10) % dictionary.length];

game(word, []);