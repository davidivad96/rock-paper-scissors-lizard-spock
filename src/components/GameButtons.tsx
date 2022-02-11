import { useMemo } from 'react';
import { Paper, PaperProps, styled } from '@mui/material';
import paper from '../../public/icon-paper.svg';
import scissors from '../../public/icon-scissors.svg';
import rock from '../../public/icon-rock.svg';
import lizard from '../../public/icon-lizard.svg';
import spock from '../../public/icon-spock.svg';
import { GameChoice } from '../interfaces';

export const OptionButton = styled(Paper)<PaperProps>(({ theme }) => ({
  position: 'absolute',
  width: '130px',
  height: '130px',
  lineHeight: '145px',
  textAlign: 'center',
  borderRadius: '50%',
  border: '15px solid',
  zIndex: 100,
  cursor: 'pointer',
  [theme.breakpoints.down('tablet')]: {
    width: '100px',
    height: '100px',
    lineHeight: '115px',
    borderWidth: '10px',
  },
}));

interface Props {
  isSmallDevice: boolean;
  playerChoice: GameChoice;
  computerChoice: GameChoice;
  onClick: () => void;
}

const PaperButton: React.FunctionComponent<Props> = ({ isSmallDevice, playerChoice, computerChoice, onClick }) => {
  const transform = 'translate3d(140px, 0, 0)';
  const sx = useMemo(
    () =>
      playerChoice === 'paper'
        ? {
            transition: 'transform 0.5s',
            transform: `translate3d(${
              isSmallDevice ? '-110px' : computerChoice !== '' ? '-210px' : '-170px'
            }, -50px, 0) scale(1.3)`,
          }
        : playerChoice !== ''
        ? {
            transform,
            transition: 'opacity 0.5s',
            opacity: 0,
          }
        : {
            transform,
            ':hover': {
              transition: 'transform 1s',
              transform: `${transform} scale(1.2)`,
            },
          },
    [playerChoice, isSmallDevice, computerChoice],
  );

  return (
    <OptionButton
      sx={{
        borderColor: 'hsl(230, 89%, 65%)',
        boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(230, 89%, 56%)',
        ...sx,
      }}
      onClick={onClick}
    >
      <img src={paper} alt="paper" width={isSmallDevice ? '35px' : '50px'} />
    </OptionButton>
  );
};

const ScissorsButton: React.FunctionComponent<Props> = ({ isSmallDevice, playerChoice, computerChoice, onClick }) => {
  const transform = 'translate3d(0, -80px, 0)';
  const sx = useMemo(
    () =>
      playerChoice === 'scissors'
        ? {
            transition: 'transform 0.5s',
            transform: `translate3d(${
              isSmallDevice ? '-110px' : computerChoice !== '' ? '-210px' : '-170px'
            }, -50px, 0) scale(1.3)`,
          }
        : playerChoice !== ''
        ? {
            transform,
            transition: 'opacity 0.5s',
            opacity: 0,
          }
        : {
            transform,
            ':hover': {
              transition: 'transform 1s',
              transform: `${transform} scale(1.2)`,
            },
          },
    [playerChoice, isSmallDevice, computerChoice],
  );

  return (
    <OptionButton
      sx={{
        borderColor: 'hsl(40, 84%, 53%)',
        boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(39, 89%, 43%)',
        ...sx,
      }}
      onClick={onClick}
    >
      <img src={scissors} alt="scissors" width={isSmallDevice ? '35px' : '50px'} />
    </OptionButton>
  );
};

const RockButton: React.FunctionComponent<Props> = ({ isSmallDevice, playerChoice, computerChoice, onClick }) => {
  const transform = 'translate3d(80px, 160px, 0)';
  const sx = useMemo(
    () =>
      playerChoice === 'rock'
        ? {
            transition: 'transform 0.5s',
            transform: `translate3d(${
              isSmallDevice ? '-110px' : computerChoice !== '' ? '-210px' : '-170px'
            }, -50px, 0) scale(1.3)`,
          }
        : playerChoice !== ''
        ? {
            transform,
            transition: 'opacity 0.5s',
            opacity: 0,
          }
        : {
            transform,
            ':hover': {
              transition: 'transform 1s',
              transform: `${transform} scale(1.2)`,
            },
          },
    [playerChoice, isSmallDevice, computerChoice],
  );

  return (
    <OptionButton
      sx={{
        borderColor: 'hsl(349, 70%, 56%)',
        boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(349, 71%, 46%)',
        ...sx,
      }}
      onClick={onClick}
    >
      <img src={rock} alt="rock" width={isSmallDevice ? '35px' : '50px'} />
    </OptionButton>
  );
};

const LizardButton: React.FunctionComponent<Props> = ({ isSmallDevice, playerChoice, computerChoice, onClick }) => {
  const transform = 'translate3d(-80px, 160px, 0)';
  const sx = useMemo(
    () =>
      playerChoice === 'lizard'
        ? {
            transition: 'transform 0.5s',
            transform: `translate3d(${
              isSmallDevice ? '-110px' : computerChoice !== '' ? '-210px' : '-170px'
            }, -50px, 0) scale(1.3)`,
          }
        : playerChoice !== ''
        ? {
            transform,
            transition: 'opacity 0.5s',
            opacity: 0,
          }
        : {
            transform,
            ':hover': {
              transition: 'transform 1s',
              transform: `${transform} scale(1.2)`,
            },
          },
    [playerChoice, isSmallDevice, computerChoice],
  );

  return (
    <OptionButton
      sx={{
        borderColor: 'hsl(261, 72%, 63%)',
        boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(261, 73%, 53%)',
        ...sx,
      }}
      onClick={onClick}
    >
      <img src={lizard} alt="lizard" width={isSmallDevice ? '35px' : '50px'} />
    </OptionButton>
  );
};

const SpockButton: React.FunctionComponent<Props> = ({ isSmallDevice, playerChoice, computerChoice, onClick }) => {
  const transform = 'translate3d(-140px, 0, 0)';
  const sx = useMemo(
    () =>
      playerChoice === 'spock'
        ? {
            transition: 'transform 0.5s',
            transform: `translate3d(${
              isSmallDevice ? '-110px' : computerChoice !== '' ? '-210px' : '-170px'
            }, -50px, 0) scale(1.3)`,
          }
        : playerChoice !== ''
        ? {
            transform,
            transition: 'opacity 0.5s',
            opacity: 0,
          }
        : {
            transform,
            ':hover': {
              transition: 'transform 1s',
              transform: `${transform} scale(1.2)`,
            },
          },
    [playerChoice, isSmallDevice, computerChoice],
  );

  return (
    <OptionButton
      sx={{
        borderColor: 'hsl(189, 58%, 57%)',
        boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(189, 59%, 47%)',
        ...sx,
      }}
      onClick={onClick}
    >
      <img src={spock} alt="spock" width={isSmallDevice ? '35px' : '50px'} />
    </OptionButton>
  );
};

export { PaperButton, ScissorsButton, RockButton, LizardButton, SpockButton };
