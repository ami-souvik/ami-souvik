import { createTheme, responsiveFontSizes } from '@mui/material';

//https://mui.com/material-ui/customization/default-theme/
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
            highlight: {
              main: '#ffe66d'
            },
            text: {
              primary: '#121212',
            },
          }
        : {
            primary: {
              main: '#ffffff',
            },
            secondary: {
              main: '#121212',
            },
            background: {
              default: '#121212'
            },
            highlight: {
              main: '#ffe66d'
            },
            text: {
              primary: '#ffffff',
            },
          }),
    },
    typography: {
      fontFamily: 'Outfit',
    },
  });
  const breakpoints = {
    [theme.breakpoints.down('sm')]: {
      fontSize: 2.5
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 3
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 3.3
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 3.6
    }
  }
  const fontSizeToLineHeight = 1.12
  const goldenRatio = 1.618
  const h1breakpoints = {}
  const h2breakpoints = {}
  const h3breakpoints = {}
  const signh1breakpoints = {}
  const signh2breakpoints = {}
  Object.keys(breakpoints).forEach(key => {
    h1breakpoints[key] = {
      fontSize: `${breakpoints[key].fontSize}rem`,
      lineHeight: `${breakpoints[key].fontSize * fontSizeToLineHeight}rem`,
    }
    h2breakpoints[key] = {
      fontSize: `${breakpoints[key].fontSize/goldenRatio}rem`,
      lineHeight: `${breakpoints[key].fontSize * fontSizeToLineHeight/goldenRatio}rem`,
    }
    h3breakpoints[key] = {
      fontSize: `${(breakpoints[key].fontSize/goldenRatio)/1.12}rem`,
      lineHeight: `${(breakpoints[key].fontSize * fontSizeToLineHeight/goldenRatio)/1.12}rem`,
    }
    signh1breakpoints[key] = {
      fontSize: `${breakpoints[key].fontSize * goldenRatio}rem`,
      lineHeight: `${breakpoints[key].fontSize * fontSizeToLineHeight * goldenRatio}rem`,
    }
    signh2breakpoints[key] = {
      fontSize: `${breakpoints[key].fontSize}rem`,
      lineHeight: `${breakpoints[key].fontSize * fontSizeToLineHeight}rem`,
    }
  })
  theme.typography.h1 = {
    fontSize: '1rem',
    fontWeight: 400,
    ...h1breakpoints
  };
  theme.typography.h2 = {
    fontSize: '1rem',
    fontWeight: 400,
    ...h2breakpoints
  };
  theme.typography.h3 = {
    fontSize: '1rem',
    fontWeight: 600,
    ...h3breakpoints
  };
  theme.typography.signh1 = {
    fontSize: '1rem',
    fontWeight: 400,
    ...signh1breakpoints
  };
  theme.typography.signh2 = {
    fontSize: '1rem',
    fontWeight: 400,
    ...signh2breakpoints
  };
  return responsiveFontSizes(theme);
};
