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
  if(guesses.length >= 7) {
    return true;
  }

  return false;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};

//console.log(displayWordSoFar('test', ['e', 's', 'h', 'g', 't']), isGameWon("test", ['e', 's', 'h', 'g', 't']));