import { createContext, useContext, useEffect, useRef, useState } from 'react';
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
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight);
  const toggleMode = () => setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.clientHeight);
    }
  }, []);
  return (
    <AppContext.Provider value={{ mode, section: { ref: sectionRef, height: sectionHeight }, toggleMode }}>
      <Provider store={store}>{children}</Provider>
    </AppContext.Provider>
  );
};
