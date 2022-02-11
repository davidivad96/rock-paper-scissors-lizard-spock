import { Paper, PaperProps, styled } from '@mui/material';
import paper from '../../public/icon-paper.svg';
import scissors from '../../public/icon-scissors.svg';
import rock from '../../public/icon-rock.svg';

const OptionButton = styled(Paper)<PaperProps>(({ theme }) => ({
  position: 'absolute',
  width: '150px',
  height: '150px',
  lineHeight: '180px',
  textAlign: 'center',
  borderRadius: '50%',
  border: '15px solid',
  zIndex: 100,
  cursor: 'pointer',
  [theme.breakpoints.down('tablet')]: {
    width: '120px',
    height: '120px',
    lineHeight: '140px',
    borderWidth: '10px',
  },
}));

interface Props {
  isSmallDevice: boolean;
}

const PaperButton: React.FunctionComponent<Props> = ({ isSmallDevice }) => (
  <OptionButton
    sx={{
      borderColor: 'hsl(230, 89%, 65%)',
      boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(230, 89%, 56%)',
      transform: 'translate3d(-110px, -120px, 0)',
      ':hover': {
        transition: 'transform 1s',
        transform: 'translate3d(-110px, -120px, 0) scale(1.2)',
      },
    }}
  >
    <img src={paper} alt="paper" width={isSmallDevice ? '45px' : '65px'} />
  </OptionButton>
);

const ScissorsButton: React.FunctionComponent<Props> = ({ isSmallDevice }) => (
  <OptionButton
    sx={{
      borderColor: 'hsl(40, 84%, 53%)',
      boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(39, 89%, 43%)',
      transform: 'translate3d(110px, -120px, 0)',
      ':hover': {
        transition: 'transform 1s',
        transform: 'translate3d(110px, -120px, 0) scale(1.2)',
      },
    }}
  >
    <img src={scissors} alt="scissors" width={isSmallDevice ? '45px' : '65px'} />
  </OptionButton>
);

const RockButton: React.FunctionComponent<Props> = ({ isSmallDevice }) => (
  <OptionButton
    sx={{
      borderColor: 'hsl(349, 70%, 56%)',
      boxShadow: 'inset 0px 6px rgb(0 0 0 / 20%), 0 6px hsl(349, 71%, 46%)',
      transform: 'translate3d(0, 80px, 0)',
      ':hover': {
        transition: 'transform 1s',
        transform: 'translate3d(0, 80px, 0) scale(1.2)',
      },
    }}
  >
    <img src={rock} alt="rock" width={isSmallDevice ? '45px' : '65px'} />
  </OptionButton>
);

export { PaperButton, ScissorsButton, RockButton };
