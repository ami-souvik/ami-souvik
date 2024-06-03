import { createContext, useContext } from 'react';
import { Provider } from 'react-redux';
import { setTheme } from '@slice';
import { store } from '@store';
import { cn } from '@utils';

export const AppContext = createContext({});

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const initialize = () => {
    const mode = store.getState().config.theme.mode;
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  initialize();
  store.subscribe(initialize);
  const toggleMode = () => {
    const mode = store.getState().config.theme.mode;
    store.dispatch(setTheme({ mode: mode === 'light' ? 'dark' : 'light' }));
  };
  return (
    <AppContext.Provider value={{ toggleMode }}>
      <Provider store={store}>
        <div
          className={cn(
            'font-sans bg-background dark:bg-background-dark',
            // light styles
            'text-foreground',
            // dark styles
            'dark:text-foreground-dark',
          )}
        >
          {children}
        </div>
      </Provider>
    </AppContext.Provider>
  );
};
