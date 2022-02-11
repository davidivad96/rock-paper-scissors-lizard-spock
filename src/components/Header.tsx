import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../public/logo.svg';

const Header: React.FunctionComponent = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <Box
      width="520px"
      maxWidth="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      mb={10}
      border="2px solid hsl(217, 16%, 45%)"
      borderRadius="10px"
    >
      <img src={logo} alt="logo" width={isSmallDevice ? '100px' : 'auto'} />
      <Paper
        elevation={2}
        sx={{ backgroundColor: '#FFF', padding: isSmallDevice ? '7.5px 15px' : '15px 30px', textAlign: 'center' }}
      >
        <Typography variant="h6" color="hsl(229, 64%, 46%)">
          SCORE
        </Typography>
        <Typography variant="h3" color="hsl(229, 25%, 31%)" fontWeight="bold">
          12
        </Typography>
      </Paper>
    </Box>
  );
};

export default Header;
