import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Container,
  Paper,
  PaperProps,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Header } from './components';
import paper from '../public/icon-paper.svg';
import scissors from '../public/icon-scissors.svg';
import rock from '../public/icon-rock.svg';
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

const OptionPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  width: '150px',
  height: '150px',
  lineHeight: '180px',
  textAlign: 'center',
  borderRadius: '50%',
  border: '15px solid',
  boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%)',
  zIndex: 100,
  cursor: 'pointer',
  ':hover': {
    boxShadow: 'inset 0px 6px rgb(0 0 0 / 30%)',
    opacity: 0.9,
  },
  [theme.breakpoints.down('tablet')]: {
    width: '100px',
    height: '100px',
    lineHeight: '120px',
    borderWidth: '10px',
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
          <OptionPaper sx={{ borderColor: 'hsl(230, 89%, 65%)' }}>
            <img src={paper} alt="paper" width={isSmallDevice ? '45px' : '65px'} />
          </OptionPaper>
          <OptionPaper sx={{ borderColor: 'hsl(40, 84%, 53%)' }}>
            <img src={scissors} alt="scissors" width={isSmallDevice ? '45px' : '65px'} />
          </OptionPaper>
        </Stack>
        <OptionPaper sx={{ borderColor: 'hsl(349, 70%, 56%)' }}>
          <img src={rock} alt="rock" width={isSmallDevice ? '45px' : '65px'} />
        </OptionPaper>
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
