import { useCallback, useState, useMemo } from 'react';
import { Box, BoxProps, Container, styled, useMediaQuery, useTheme } from '@mui/material';
import {
  Header,
  RulesModal,
  RulesButton,
  PaperButton,
  RockButton,
  ScissorsButton,
  YouPickedSubtitle,
  TheHousePickedSubtitle,
} from './components';
import { GameChoice } from './interfaces';
import triangle from '../public/bg-triangle.svg';

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
  const [selectedButton, setSelectedButton] = useState<GameChoice>('');

  const openModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  const onGameChoiceClick = useCallback((choice: GameChoice) => {
    setSelectedButton(choice);
  }, []);

  const ButtonCommonProps = useMemo(
    () => ({ isSmallDevice, gameChoice: selectedButton }),
    [isSmallDevice, selectedButton],
  );

  return (
    <Root>
      <Container
        maxWidth="desktop"
        sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', marginBottom: '25px' }}
      >
        <Header />
        <Box display="flex" flex={1} flexDirection="column" justifyContent="center" alignItems="center">
          <YouPickedSubtitle show={selectedButton !== ''} />
          <TheHousePickedSubtitle show={selectedButton !== ''} />
          <PaperButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('paper')} />
          <ScissorsButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('scissors')} />
          <RockButton {...ButtonCommonProps} onClick={() => onGameChoiceClick('rock')} />
          <img
            src={triangle}
            alt="triangle"
            style={{
              transition: 'opacity 0.5s',
              opacity: selectedButton !== '' ? 0 : 1,
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
