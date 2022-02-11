import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { GameChoice } from '../interfaces';
import { OptionButton } from './GameButtons';
import paper from '../../public/icon-paper.svg';
import scissors from '../../public/icon-scissors.svg';
import rock from '../../public/icon-rock.svg';

const images = {
  paper,
  scissors,
  rock,
};

const styles = {
  paper: {
    border: '15px solid hsl(230, 89%, 65%)',
    boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(230, 89%, 56%)',
  },
  scissors: {
    border: '15px solid hsl(40, 84%, 53%)',
    boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(39, 89%, 43%)',
  },
  rock: {
    border: '15px solid hsl(349, 70%, 56%)',
    boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(349, 71%, 46%)',
  },
};

interface Props {
  isSmallDevice: boolean;
  playerChoice: GameChoice;
  computerChoice: GameChoice;
  setComputerChoice: (choice: GameChoice) => void;
}

const ComputerChoice: React.FunctionComponent<Props> = ({
  isSmallDevice,
  playerChoice,
  computerChoice,
  setComputerChoice,
}) => {
  const [time, setTime] = useState<number>(3);

  useEffect(() => {
    if (playerChoice !== '') {
      setTime(3);
      const timer = setInterval(() => {
        setTime((time) => {
          if (time === 1) {
            const choices: GameChoice[] = ['rock', 'paper', 'scissors'];
            setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
          }
          return time - 1;
        });
      }, 700);
      return () => clearInterval(timer);
    }
  }, [playerChoice, setComputerChoice]);

  return (
    <OptionButton
      sx={{
        transition: 'opacity 0.5s',
        opacity: playerChoice === '' ? 0 : 1,
        visibility: playerChoice === '' ? 'hidden' : 'visible',
        transform: `translate3d(${isSmallDevice ? '110px' : '170px'}, -50px, 0) scale(1.3)`,
        cursor: 'default',
        border: `${computerChoice !== '' ? styles[computerChoice].border : 'none'}`,
        boxShadow: `${computerChoice !== '' ? styles[computerChoice].boxShadow : 'none'}`,
        backgroundColor: `${computerChoice !== '' ? '#FFF' : 'rgba(0, 0, 0, 0.2)'}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {computerChoice === '' ? (
        <Typography variant="h3" fontWeight="bold">
          {time}
        </Typography>
      ) : (
        <img src={images[computerChoice]} alt="computer choice" width={isSmallDevice ? '45px' : '65px'} />
      )}
    </OptionButton>
  );
};

export default ComputerChoice;
