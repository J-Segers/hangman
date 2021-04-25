const { question } = require("readline-sync");

function askForLetter(guesses){
    let letter = question("Raad een letter: ").toLowerCase();
    // check if only 1 character was entered and prompt to input a character again if not true
    if (letter.length !== 1) {
        console.log("Je mag maar 1 letter invoeren! Niet meer en niet minder.");
        letter = askForLetter(guesses);
    }
    // check if character entered is not in the alphabet. if so prompt to input a character again
    if(!/[a-zA-Z]/.test(letter) ){
        console.log("Hey pannenkoek! Je mag geen speciale tekens gebruiken!");
        letter = askForLetter(guesses);
    }
    // check if character entered has already been entered. if so prompt to input a character again
    if(guesses.includes(letter)){
        console.log(guesses + "\nDeze letter had je al gekozen kies opnieuw");
        letter = askForLetter(guesses);
    }
    return letter;
}

module.exports = (
    askForLetter
);