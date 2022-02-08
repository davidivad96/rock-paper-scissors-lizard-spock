import { Box, BoxProps, Button, ButtonProps, Container, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import { Header, PaperButton, RockButton, ScissorsButton } from './components';
import triangle from '../public/bg-triangle.svg';

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
          <PaperButton isSmallDevice={isSmallDevice} />
          <ScissorsButton isSmallDevice={isSmallDevice} />
        </Stack>
        <RockButton isSmallDevice={isSmallDevice} />
        <Box position="absolute">
          <img
            src={triangle}
            alt="triangle"
            width={isSmallDevice ? 220 : 280}
            style={{ position: 'relative', zIndex: 10, top: '70px' }}
          />
        </Box>
        <RulesButton>RULES</RulesButton>
      </Container>
    </Root>
  );
};

export default App;
