import { createElement } from 'react';
import { useMediaQuery } from '@mui/material';
import { NavigationDrawer, NavigationBar } from '@components';
import { routes } from '@config';
import { useRouter } from '@context';

export const Navigator = () => {
  const { state, navigate } = useRouter();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const click = (e, href) => {
    e.preventDefault();
    navigate(href);
  };
  const navRoutes = routes.filter((r) => !!r.label);
  // return createElement(mdw ? NavigationDrawer : NavigationBar, { state, routes: navRoutes, click });
  return <NavigationBar state={state} routes={navRoutes} click={click} />;
};
