//const { question } = require("readline-sync"); <-- moved it to game.input when i added a new function to practice.
const { displayWordSoFar, isGameWon, isGameLost} = require("./gamelogic");
const askForLetter = require("./game.input");
const drawHangman = require("./game.hangman.output");

function game(word, guesses) {
    drawHangman(word, guesses);

    if(guesses.length !== 0){
        console.log("Dit heb je tot nu toe geraden: ", guesses);
    }
    console.log(displayWordSoFar(word, guesses));

    // voeg de geraden letter toe aan de array met guesses
    guesses.push(askForLetter(guesses));
    console.log(guesses);

    if(isGameWon(word, guesses)) {
        drawHangman(word, guesses);
        console.log(displayWordSoFar(word, guesses));
        console.log("GEFELICITEERD!!! Je hebt het woord geraden!");
    } else if(isGameLost(word, guesses)){
        drawHangman(word, guesses);
        console.log(displayWordSoFar(word, guesses));
        console.log("Sorry je hebt het niet geraden!");
    } else {
        // Als de game niet gewonnen of verloren is doen we nog ronde! we roepen game nog een keer aan
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
const word = dictionary[Math.round(Math.random() * 10) % dictionary.length];

game(word, []);