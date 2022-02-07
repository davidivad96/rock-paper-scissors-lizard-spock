import { Box, Paper, Typography } from '@mui/material';
import logo from '../../public/logo.svg';

const Header = () => (
  <Box
    width="520px"
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    py={2}
    px={3}
    border="2px solid hsl(217, 16%, 45%)"
    borderRadius="10px"
  >
    <img src={logo} alt="logo" />
    <Paper elevation={2} sx={{ backgroundColor: '#FFF', padding: '15px 30px' }}>
      <Typography variant="h6" color="hsl(229, 64%, 46%)">
        SCORE
      </Typography>
      <Typography variant="h3" color="hsl(229, 25%, 31%)" fontWeight="bold">
        12
      </Typography>
    </Paper>
  </Box>
);

export default Header;
