const { question } = require("readline-sync");

function askForLetter(guesses){
    let letter = question("Raad een letter: ").toLowerCase();
    // check of er maar 1 letter is ingevoerd is er meer ingevoerd geef een waarschuwing en vraag opnieuw voor een letter
    if (letter.length !== 1) {
        console.log("Je mag maar 1 letter invoeren! Niet meer en niet minder.");
        letter = askForLetter(guesses);
    }
    if(!/[a-zA-Z]/.test(letter) ){
        console.log("Hey pannenkoek! Je mag geen speciale tekens gebruiken!");
        letter = askForLetter(guesses);
    }
    if(guesses.includes(letter)){
        console.log(guesses + "\nDeze letter had je al gekozen kies opnieuw");
        letter = askForLetter(guesses);
    }
    return letter;
}

module.exports = (
    askForLetter
);