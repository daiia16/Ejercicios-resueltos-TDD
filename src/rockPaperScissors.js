/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw

Result:
- Player One wins
- Player Two wins
- Is a draw
*/
const GAME_WORDS = Object.freeze({
  rock: 'Rock',
  paper: 'Paper',
  scissors: 'Scissors',
});

const GAME_RESULTS = Object.freeze({
  playerTwoWins: 'Player Two wins',
  playerOneWins: 'Player One wins',
  draw: 'Is a draw',
});

const game = (playerOne, playerTwo) => {
  if (playerOne === GAME_WORDS.rock && playerTwo === GAME_WORDS.paper
    || playerOne === GAME_WORDS.paper && playerTwo === GAME_WORDS.scissors
    || playerOne === GAME_WORDS.scissors && playerTwo === GAME_WORDS.rock) {
    return GAME_RESULTS.playerTwoWins;
  }

  if (playerOne === GAME_WORDS.rock && playerTwo === GAME_WORDS.scissors
    ||playerOne === GAME_WORDS.paper && playerTwo === GAME_WORDS.rock
    ||playerOne === GAME_WORDS.scissors && playerTwo === GAME_WORDS.paper) {
    return GAME_RESULTS.playerOneWins;
  }

  return GAME_RESULTS.draw;
}

export { game, GAME_WORDS, GAME_RESULTS };