import { Button, useTheme } from '@mui/material';

interface Props {
  onClick: () => void;
}

const RulesButton: React.FunctionComponent<Props> = ({ onClick }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        border: '2px solid hsl(217, 16%, 45%)',
        borderRadius: '6px',
        color: '#FFF',
        padding: '0.4rem 2rem',
        alignSelf: 'flex-end',
        [theme.breakpoints.down('tablet')]: {
          alignSelf: 'center',
        },
      }}
      onClick={onClick}
    >
      RULES
    </Button>
  );
};

export default RulesButton;
