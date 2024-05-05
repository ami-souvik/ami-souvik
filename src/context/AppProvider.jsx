import { createContext, useContext, useState } from 'react';
import { useMediaQuery } from '@mui/material';

export const AppContext = createContext({});

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const toggleMode = () => setMode((mode) => (mode == 'light' ? 'dark' : 'light'));
  return <AppContext.Provider value={{ mode, toggleMode }}>{children}</AppContext.Provider>;
};
