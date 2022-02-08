import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['Barlow Semi Condensed', '"Helvetica Neue"', 'Arial', 'sans-serif', 'Roboto'].join(','),
    fontWeightRegular: 500,
    fontWeightBold: 600,
  },
  palette: {
    text: {
      primary: '#FFF',
    },
  },
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 600,
      desktop: 1366,
    },
  },
});

export default theme;