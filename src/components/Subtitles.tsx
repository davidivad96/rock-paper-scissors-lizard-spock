import { Typography, useTheme } from '@mui/material';

interface Props {
  show: boolean;
  translate: boolean;
}

const YouPickedSubtitle: React.FunctionComponent<Props> = ({ show, translate }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      fontWeight="bold"
      position="absolute"
      textAlign="center"
      mt={5}
      mb={4}
      sx={{
        letterSpacing: 3,
        transition: 'opacity 0.5s, transform 0.5s',
        transform: `translate3d(${translate ? '-210px' : '-170px'}, -200px, 0)`,
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
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

const TheHousePickedSubtitle: React.FunctionComponent<Props> = ({ show, translate }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      fontWeight="bold"
      position="absolute"
      textAlign="center"
      mt={5}
      mb={4}
      sx={{
        letterSpacing: 3,
        transition: 'opacity 0.5s, transform 0.5s',
        transform: `translate3d(${translate ? '210px' : '170px'}, -200px, 0)`,
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
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
