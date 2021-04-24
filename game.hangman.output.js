const { countWrongLetters } = require("./gamelogic");

function drawHangman(word, guesses) {
    switch (countWrongLetters(word, guesses)) {
        case 1:
            console.log(`

      |
      |
      |
      |
      |
      ===========`
            );
            break;
        case 2:
            console.log(`

      | /
      |/
      |
      |
      |
      ===========`
            );
            break;
        case 3:
            console.log(`
      ___________
      | /
      |/
      |
      |
      |
      ===========`
            );
            break;
        case 4:
            console.log(`
      ___________
      | /     |
      |/
      |
      |
      |
      ===========`
            );
            break;
        case 5:
            console.log(`
      ___________
      | /     |
      |/     _o_
      |
      |
      |
      ===========`
            );
            break;
        case 6:
            console.log(`
      ___________
      | /     |
      |/     _o_
      |       O
      |
      |
      ===========`
            );
            break;
        case 7:
            console.log(`
      ___________
      | /     |
      |/     _o_
      |       O
      |      / \\
      |
      ===========`
            );
            break;
        default:
            break;
    }
}

module.exports = (
    drawHangman
);