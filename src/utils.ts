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

export const colors = {
  paper: {
    border: 'hsl(230, 89%, 65%)',
    borderShadow: 'hsl(230, 89%, 56%)',
  },
  scissors: {
    border: 'hsl(40, 84%, 53%)',
    borderShadow: 'hsl(39, 89%, 43%)',
  },
  rock: {
    border: 'hsl(349, 70%, 56%)',
    borderShadow: 'hsl(349, 71%, 46%)',
  },
  lizard: {
    border: 'hsl(261, 72%, 63%)',
    borderShadow: 'hsl(261, 73%, 53%)',
  },
  spock: {
    border: 'hsl(189, 58%, 57%)',
    borderShadow: 'hsl(189, 59%, 47%)',
  },
};
