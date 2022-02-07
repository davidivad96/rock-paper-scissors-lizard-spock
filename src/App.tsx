import { Box, Container, Typography } from '@mui/material';

const App = () => (
  <Box
    height="100vh"
    sx={{ backgroundImage: 'radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))' }}
  >
    <Container maxWidth="desktop">
      <Typography>Hello world!</Typography>
    </Container>
  </Box>
);

export default App;
