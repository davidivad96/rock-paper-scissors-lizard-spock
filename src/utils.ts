import { GameChoice, GameResult } from './interfaces';

export const calculateResult = (player: GameChoice, computer: GameChoice): GameResult => {
  if (player === computer) {
    return 'tie';
  }
  if (player === 'paper') {
    return computer === 'rock' || computer === 'spock' ? 'win' : 'lose';
  }
  if (player === 'rock') {
    return computer === 'scissors' || computer === 'lizard' ? 'win' : 'lose';
  }
  if (player === 'scissors') {
    return computer === 'paper' || computer === 'lizard' ? 'win' : 'lose';
  }
  if (player === 'lizard') {
    return computer === 'paper' || computer === 'spock' ? 'win' : 'lose';
  }
  return computer === 'scissors' || computer === 'rock' ? 'win' : 'lose';
};
