import { Box, Button, Typography } from '@mui/material';
import { GameResult } from '../interfaces';

interface Props {
  isSmallDevice: boolean;
  result: GameResult;
  resetGame: () => void;
}

const Result: React.FunctionComponent<Props> = ({ isSmallDevice, result, resetGame }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    sx={{
      transform: `translateY(${isSmallDevice ? '250px' : '80px'})`,
      transition: `${result === '' ? '' : 'opacity 0.5s'}`,
      opacity: result === '' ? 0 : 1,
      visibility: result === '' ? 'hidden' : 'visible',
      zIndex: 100,
    }}
  >
    <Typography variant="h4" fontWeight="bold">
      {result === 'win' ? 'YOU WIN!!' : result === 'lose' ? 'YOU LOSE :(' : "IT'S A TIE!"}
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
);

export default Result;
