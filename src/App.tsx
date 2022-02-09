import { useCallback, useState } from 'react';
import { Box, BoxProps, Button, ButtonProps, Container, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import LineTo from 'react-lineto';
import { Header, PaperButton, RockButton, ScissorsButton } from './components';
import RulesModal from './components/RulesModal';

const Root = styled(Box)<BoxProps>({
  backgroundImage: 'radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const RulesButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: '2px solid hsl(217, 16%, 45%)',
  borderRadius: '6px',
  color: '#FFF',
  padding: '0.2rem 1.75rem',
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingX: '3rem',
        }}
      >
        <Header />
        <Stack direction="row" justifyContent="space-between" spacing="5rem">
          <PaperButton isSmallDevice={isSmallDevice} className="A" />
          <ScissorsButton isSmallDevice={isSmallDevice} className="B" />
        </Stack>
        <RockButton isSmallDevice={isSmallDevice} className="C" />
        <RulesButton onClick={openModal}>RULES</RulesButton>
      </Container>
      <LineTo from="A" to="B" zIndex={10} delay={0} borderWidth={14} borderColor="rgba(0,0,0,0.3)" />
      <LineTo from="A" to="C" zIndex={10} delay={0} borderWidth={14} borderColor="rgba(0,0,0,0.3)" />
      <LineTo from="B" to="C" zIndex={10} delay={0} borderWidth={14} borderColor="rgba(0,0,0,0.3)" />
      <RulesModal isOpened={isModalOpened} onClose={closeModal} isSmallDevice={isSmallDevice} />
    </Root>
  );
};

export default App;
