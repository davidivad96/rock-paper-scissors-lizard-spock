import { GameChoice, GameResult } from './interfaces';

export const calculateResult = (player: GameChoice, computer: GameChoice): GameResult => {
  if (player === computer) {
    return 'draw';
  }
  if (player === 'paper') {
    return computer === 'rock' ? 'win' : 'lose';
  }
  if (player === 'rock') {
    return computer === 'paper' ? 'lose' : 'win';
  }
  return computer === 'paper' ? 'win' : 'lose';
};
