import { Typography, useTheme } from '@mui/material';

interface Props {
  show: boolean;
}

const YouPickedSubtitle: React.FunctionComponent<Props> = ({ show }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      fontWeight="bold"
      position="absolute"
      textAlign="center"
      sx={{
        letterSpacing: 3,
        transform: 'translate3d(-170px, -200px, 0)',
        transition: 'opacity 0.5s',
        opacity: show ? 1 : 0,
        [theme.breakpoints.down('tablet')]: {
          transform: 'translate3d(-110px, -180px, 0)',
          width: '120px',
        },
      }}
    >
      YOU PICKED
    </Typography>
  );
};

const TheHousePickedSubtitle: React.FunctionComponent<Props> = ({ show }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      fontWeight="bold"
      position="absolute"
      textAlign="center"
      sx={{
        letterSpacing: 3,
        transform: 'translate3d(170px, -200px, 0)',
        transition: 'opacity 0.5s',
        opacity: show ? 1 : 0,
        [theme.breakpoints.down('tablet')]: {
          transform: 'translate3d(110px, -180px, 0)',
          width: '120px',
        },
      }}
    >
      THE HOUSE PICKED
    </Typography>
  );
};

export { YouPickedSubtitle, TheHousePickedSubtitle };
