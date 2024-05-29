import { useMemo, useRef } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { routes } from '@config';
import { Route, RouterProvider, Routes, useApp } from '@context';
import { Footer, Header, StickyCursor } from '@components';
import { getDesignTokens } from '@styles';

function App() {
  const stickyElement = useRef(null);
  const { mode } = useApp();
  const theme = useMemo(() => getDesignTokens(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <StickyCursor stickyElement={stickyElement} />
      <div className="min-h-screen bg-white dark:bg-primary-main">
        <CssBaseline />
        <RouterProvider href="/">
          <Header ref={stickyElement} />
          <Routes>
            {routes.map(({ href, label, component }) => (
              <Route key={href} label={label} path={href} component={component} />
            ))}
          </Routes>
        </RouterProvider>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
