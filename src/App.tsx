import { useCallback, useState } from 'react';
import { Box, BoxProps, Button, ButtonProps, Container, styled, useMediaQuery, useTheme } from '@mui/material';
import { Header, PaperButton, RockButton, ScissorsButton } from './components';
import RulesModal from './components/RulesModal';
import triangle from '../public/bg-triangle.svg';

const Root = styled(Box)<BoxProps>({
  backgroundImage: 'radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '15px',
});

const RulesButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: '2px solid hsl(217, 16%, 45%)',
  borderRadius: '6px',
  color: '#FFF',
  padding: '0.4rem 2rem',
  alignSelf: 'flex-end',
  [theme.breakpoints.down('tablet')]: {
    alignSelf: 'center',
  },
}));

const App = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('tablet'));
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  return (
    <Root>
      <Container
        maxWidth="desktop"
        sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', marginBottom: '25px' }}
      >
        <Header />
        <Box display="flex" flex={1} flexDirection="column" justifyContent="center" alignItems="center">
          <PaperButton isSmallDevice={isSmallDevice} />
          <ScissorsButton isSmallDevice={isSmallDevice} />
          <RockButton isSmallDevice={isSmallDevice} />
          <img src={triangle} alt="triangle" />
        </Box>
      </Container>
      <RulesButton onClick={openModal}>RULES</RulesButton>
      <RulesModal isOpened={isModalOpened} onClose={closeModal} isSmallDevice={isSmallDevice} />
    </Root>
  );
};

export default App;
