import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { routes } from '@config';
import { Route, RouterProvider, Routes, useApp } from '@context';
import { Background, Footer, Header } from '@components';
import { getDesignTokens } from '@styles';

function App() {
  const { mode } = useApp();
  const theme = useMemo(() => getDesignTokens(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <CssBaseline />
        <RouterProvider href="/">
          <Header />
          <Routes>
            {routes.map(({ href, component }) => (
              <Route key={href} path={href} component={component} />
            ))}
            {/* <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/contact" component={Contact} /> */}
          </Routes>
        </RouterProvider>
      </Background>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
