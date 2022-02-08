import { Box, BoxProps, Button, ButtonProps, Container, styled } from '@mui/material';
import { Header } from './components';
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

const App = () => (
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
      <img src={triangle} alt="triangle" width={350} />
      <RulesButton>RULES</RulesButton>
    </Container>
  </Root>
);

export default App;
