import { Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { GameChoice } from '../interfaces';
import { OptionButton } from './GameButtons';
import paper from '../../public/icon-paper.svg';
import scissors from '../../public/icon-scissors.svg';
import rock from '../../public/icon-rock.svg';
import lizard from '../../public/icon-lizard.svg';
import spock from '../../public/icon-spock.svg';
import { colors } from '../utils';

const images = {
  paper,
  scissors,
  rock,
  lizard,
  spock,
};

const styles = {
  paper: {
    border: `15px solid ${colors.paper.border}`,
    boxShadow: `inset 0px 6px rgb(0 0 0 / 20%), 0 6px ${colors.paper.borderShadow}`,
  },
  scissors: {
    border: `15px solid ${colors.scissors.border}`,
    boxShadow: `inset 0px 6px rgb(0 0 0 / 20%), 0 6px ${colors.scissors.borderShadow}`,
  },
  rock: {
    border: `15px solid ${colors.rock.border}`,
    boxShadow: `inset 0px 6px rgb(0 0 0 / 20%), 0 6px ${colors.rock.borderShadow}`,
  },
  lizard: {
    border: `15px solid ${colors.lizard.border}`,
    boxShadow: `inset 0px 6px rgb(0 0 0 / 20%), 0 6px ${colors.lizard.borderShadow}`,
  },
  spock: {
    border: `15px solid ${colors.spock.border}`,
    boxShadow: `inset 0px 6px rgb(0 0 0 / 20%), 0 6px ${colors.spock.borderShadow}`,
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
            const choices: GameChoice[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
            setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
          }
          return time - 1;
        });
      }, 700);
      return () => clearInterval(timer);
    }
  }, [playerChoice, setComputerChoice]);

  const sx = useMemo(
    () => ({
      transition: 'opacity 0.5s, transform 0.5s',
      opacity: playerChoice === '' ? 0 : 1,
      visibility: playerChoice === '' ? 'hidden' : 'visible',
      transform: `translate3d(${
        isSmallDevice ? '110px' : computerChoice !== '' ? '210px' : '170px'
      }, -50px, 0) scale(1.3)`,
      cursor: 'default',
      border: `${computerChoice !== '' ? styles[computerChoice].border : 'none'}`,
      boxShadow: `${computerChoice !== '' ? styles[computerChoice].boxShadow : 'none'}`,
      backgroundColor: `${computerChoice !== '' ? '#FFF' : 'rgba(0, 0, 0, 0.2)'}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    [computerChoice, isSmallDevice, playerChoice],
  );

  return (
    <OptionButton sx={sx}>
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
