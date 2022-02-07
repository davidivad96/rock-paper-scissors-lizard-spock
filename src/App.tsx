import { Box, BoxProps, Container, styled } from '@mui/material';
import { Header } from './components';

const Root = styled(Box)<BoxProps>({
  backgroundImage: 'radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const App = () => (
  <Root>
    <Container maxWidth="desktop" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Header />
    </Container>
  </Root>
);

export default App;
