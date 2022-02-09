import { useCallback, useState } from 'react';
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Container,
  Fade,
  IconButton,
  Modal,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LineTo from 'react-lineto';
import { Header, PaperButton, RockButton, ScissorsButton } from './components';
import rules from '../public/image-rules.svg';

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
      <Modal open={isModalOpened} onClose={closeModal}>
        <Fade in={isModalOpened} timeout={500}>
          {isSmallDevice ? (
            <Stack
              width="100%"
              height="100%"
              bgcolor="#FFF"
              color="#000"
              p={6}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" color="hsl(214, 47%, 23%)" fontWeight="bold">
                RULES
              </Typography>
              <img src={rules} alt="rules" />
              <IconButton size="large" onClick={closeModal} sx={{ opacity: '0.5' }}>
                <CloseIcon />
              </IconButton>
            </Stack>
          ) : (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              bgcolor="#FFF"
              color="#000"
              p={3}
              sx={{ transform: 'translate(-50%, -50%)' }}
            >
              <Stack direction="row" justifyContent="space-between" mb={5}>
                <Typography variant="h5" color="hsl(214, 47%, 23%)" fontWeight="bold">
                  RULES
                </Typography>
                <IconButton onClick={closeModal} sx={{ bottom: '3px', opacity: '0.5' }}>
                  <CloseIcon />
                </IconButton>
              </Stack>
              <img src={rules} alt="rules" />
            </Box>
          )}
        </Fade>
      </Modal>
    </Root>
  );
};

export default App;
