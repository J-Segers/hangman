
// check if each letter of the word is in the guessed array if true push letter to new output else push a '_' to new output
function displayWordSoFar(word, guesses) {
let displayed = [];
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const isGuessed = guesses.includes(letter);

    if(isGuessed) {
      displayed.push(letter);
    } else {
      displayed.push("_");
    }
  }

  return displayed.join(" ") + " ";
}

function isGameWon(word, guesses) {
  for (let i = 0; i < word.length; i++) {
    if(!guesses.includes(word.charAt(i))) {
      return false;
    }
  }

  return true;
}

function isGameLost(word, guesses) {
  return countWrongLetters(word, guesses) >= 7;
}

// count the mistakes
function countWrongLetters(word, guesses) {
  let mistakes = 0;

  for (let i = 0; i < guesses.length; i++) {
    if (!word.includes(guesses[i])) {
      mistakes++;
    }
  }

  return mistakes;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  countWrongLetters: countWrongLetters
};
