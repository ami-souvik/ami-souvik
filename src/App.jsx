import { useMemo, useRef } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { routes } from '@config';
import { RouterProvider, Outlet, useApp } from '@context';
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
        <RouterProvider href="/" routes={routes}>
          <Header />
          <div className="px-6 md:px-12 py-3">
            <Outlet />
          </div>
        </RouterProvider>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
