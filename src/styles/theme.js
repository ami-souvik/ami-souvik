import { createTheme, responsiveFontSizes } from '@mui/material';

export const getDesignTokens = (mode) => {
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#121212',
            },
            secondary: {
              main: '#ffffff',
            },
          }
        : {
            primary: {
              main: '#ffffff',
            },
            secondary: {
              main: '#121212',
            },
          }),
    },
    typography: {
      fontFamily: 'Outfit',
    },
  });
  theme.typography.body2 = {
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
  };
  return responsiveFontSizes(theme);
};
