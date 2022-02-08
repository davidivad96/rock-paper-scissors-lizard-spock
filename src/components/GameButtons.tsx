import { Paper, PaperProps, styled } from '@mui/material';
import paper from '../../public/icon-paper.svg';
import scissors from '../../public/icon-scissors.svg';
import rock from '../../public/icon-rock.svg';

const OptionButton = styled(Paper)<PaperProps>(({ theme }) => ({
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

interface Props {
  isSmallDevice: boolean;
}

const PaperButton: React.FunctionComponent<Props> = ({ isSmallDevice }) => (
  <OptionButton sx={{ borderColor: 'hsl(230, 89%, 65%)' }}>
    <img src={paper} alt="paper" width={isSmallDevice ? '45px' : '65px'} />
  </OptionButton>
);

const ScissorsButton: React.FunctionComponent<Props> = ({ isSmallDevice }) => (
  <OptionButton sx={{ borderColor: 'hsl(40, 84%, 53%)' }}>
    <img src={scissors} alt="scissors" width={isSmallDevice ? '45px' : '65px'} />
  </OptionButton>
);

const RockButton: React.FunctionComponent<Props> = ({ isSmallDevice }) => (
  <OptionButton sx={{ borderColor: 'hsl(349, 70%, 56%)' }}>
    <img src={rock} alt="rock" width={isSmallDevice ? '45px' : '65px'} />
  </OptionButton>
);

export { PaperButton, ScissorsButton, RockButton };
