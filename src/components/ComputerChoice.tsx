import { GameChoice } from '../interfaces';
import { OptionButton } from './GameButtons';

interface Props {
  isSmallDevice: boolean;
  gameChoice: GameChoice;
}

const ComputerChoice: React.FunctionComponent<Props> = ({ isSmallDevice, gameChoice }) => {
  return (
    <OptionButton
      sx={{
        transition: 'opacity 0.5s',
        opacity: gameChoice === '' ? 0 : 1,
        visibility: gameChoice === '' ? 'hidden' : 'visible',
        transform: `translate3d(${isSmallDevice ? '110px' : '170px'}, -50px, 0) scale(1.3)`,
        cursor: 'default',
        border: 'none',
        backgroundColor: 'rgba(0,0,0,0.2)',
      }}
    >
      hello
    </OptionButton>
  );
};

export default ComputerChoice;
