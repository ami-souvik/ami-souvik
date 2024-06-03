import { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { routes } from '@config';
import { RouterProvider, Outlet } from '@context';
import { Footer, Header, StickyCursor } from '@components';

function App() {
  const stickyElement = useRef(null);
  return (
    <>
      <StickyCursor stickyElement={stickyElement} />
      <div className="min-h-screen">
        <CssBaseline />
        <RouterProvider href="/" routes={routes}>
          <Header />
          <div className="px-6 md:px-12 py-3">
            <Outlet />
          </div>
        </RouterProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
