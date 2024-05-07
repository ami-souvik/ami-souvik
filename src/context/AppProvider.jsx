import { createContext, useContext, useState } from 'react';
import { Provider } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { store } from '@store';

export const AppContext = createContext({});

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const toggleMode = () => setMode((mode) => (mode == 'light' ? 'dark' : 'light'));
  return (
    <AppContext.Provider value={{ mode, toggleMode }}>
      <Provider store={store}>{children}</Provider>
    </AppContext.Provider>
  );
};
