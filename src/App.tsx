import { useCallback, useState, useMemo, useEffect } from 'react';
import { Box, BoxProps, Container, styled, useMediaQuery, useTheme } from '@mui/material';
import Lottie from 'react-lottie';
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
  Result,
} from './components';
import { GameChoice, GameResult } from './interfaces';
import triangle from '../public/bg-triangle.svg';
import { calculateResult } from './utils';
import confettiAnimation from '../public/lottie/62717-confetti.json';

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
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            transition: 'filter 0.5s',
            filter: `${result === 'lose' ? 'grayscale(100%)' : ''}`,
          }}
        >
          <YouPickedSubtitle show={playerChoice !== ''} translate={computerChoice !== ''} />
          <TheHousePickedSubtitle show={playerChoice !== ''} translate={computerChoice !== ''} />
          <PaperButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('paper')} />
          <ScissorsButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('scissors')} />
          <RockButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('rock')} />
          <ComputerChoice {...ButtonCommonProps} setComputerChoice={setComputerChoice} />
          <Result isSmallDevice={isSmallDevice} result={result} resetGame={resetGame} />
          {result === 'win' && (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: confettiAnimation,
              }}
              height={400}
              width={400}
              style={{ position: 'absolute' }}
            />
          )}
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
