import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { routes } from '@config';
import { Route, RouterProvider, Routes, useApp } from '@context';
import { Background, Footer, Header } from '@components';
import { getDesignTokens } from '@styles';
import { Canvas } from '@p5';

function App() {
  const { mode, section } = useApp();
  const theme = useMemo(() => getDesignTokens(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Canvas />
      <Background>
        <CssBaseline />
        <RouterProvider href="/">
          <Header />
          <Routes>
            {routes.map(({ href, label, component }) => (
              <Route
                key={href}
                label={label}
                path={href}
                component={component}
                componentProps={{ sectionRef: section.ref }}
              />
            ))}
          </Routes>
        </RouterProvider>
      </Background>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
