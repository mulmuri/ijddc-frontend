import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#808080"
    },
    secondary: {
      main: '#004DB3',
    },
    info: {
      main: '#3181F5'
    },
    success: {
      main: "#FFFFFF"
    },
    warning: {
      main: "#E4283B"
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#C0C0C3',
      secondary: '#C0C0C3'
    }
  },
});