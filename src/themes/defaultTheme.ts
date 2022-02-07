import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['Barlow Semi Condensed', '"Helvetica Neue"', 'Arial', 'sans-serif', 'Roboto'].join(','),
    fontWeightRegular: 500,
  },
  palette: {
    text: {
      primary: '#FFF',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 1366,
    },
  },
});

export default theme;
