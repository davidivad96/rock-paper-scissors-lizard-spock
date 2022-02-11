import { useCallback, useState, useMemo, useEffect } from 'react';
import { Box, BoxProps, Button, Container, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  Header,
  RulesModal,
  RulesButton,
  PaperButton,
  RockButton,
  ScissorsButton,
  YouPickedSubtitle,
  TheHousePickedSubtitle,
  ComputerChoice,
} from './components';
import { GameChoice, GameResult } from './interfaces';
import triangle from '../public/bg-triangle.svg';
import { calculateResult } from './utils';

const Root = styled(Box)<BoxProps>({
  backgroundImage: 'radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '15px',
});

const App = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('tablet'));
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [playerChoice, setPlayerChoice] = useState<GameChoice>('');
  const [computerChoice, setComputerChoice] = useState<GameChoice>('');
  const [result, setResult] = useState<GameResult>('');

  const openModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  const onGameChoiceClick = useCallback((choice: GameChoice) => {
    setPlayerChoice(choice);
  }, []);

  const ButtonCommonProps = useMemo(
    () => ({ isSmallDevice, playerChoice, computerChoice }),
    [computerChoice, isSmallDevice, playerChoice],
  );

  const resetGame = useCallback(() => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  }, []);

  useEffect(() => {
    if (computerChoice !== '') {
      setResult(calculateResult(playerChoice, computerChoice));
    }
  }, [computerChoice, playerChoice]);

  return (
    <Root>
      <Container
        maxWidth="desktop"
        sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', marginBottom: '25px' }}
      >
        <Header />
        <Box display="flex" flex={1} flexDirection="column" justifyContent="center" alignItems="center">
          <YouPickedSubtitle show={playerChoice !== ''} computerChoice={computerChoice} />
          <TheHousePickedSubtitle show={playerChoice !== ''} computerChoice={computerChoice} />
          <PaperButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('paper')} />
          <ScissorsButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('scissors')} />
          <RockButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('rock')} />
          <ComputerChoice {...ButtonCommonProps} setComputerChoice={setComputerChoice} />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              transform: 'translateY(80px)',
              transition: 'opacity 0.5s',
              opacity: result === '' ? 0 : 1,
              zIndex: 100,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'DRAW'}
            </Typography>
            <Button
              sx={{
                backgroundColor: '#FFF',
                borderRadius: '6px',
                padding: '0.4rem 2rem',
                ':hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                },
              }}
              onClick={resetGame}
            >
              PLAY AGAIN
            </Button>
          </Box>
          <img
            src={triangle}
            alt="triangle"
            style={{
              transition: 'opacity 0.5s',
              opacity: playerChoice !== '' ? 0 : 1,
            }}
          />
        </Box>
      </Container>
      <RulesButton onClick={openModal}>RULES</RulesButton>
      <RulesModal isOpened={isModalOpened} onClose={closeModal} isSmallDevice={isSmallDevice} />
    </Root>
  );
};

export default App;
