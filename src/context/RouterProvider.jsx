import { createContext, createElement, useContext, useState } from 'react';

const matchRoute = ({ exact, href }) => {
  return exact ? href === window.location.pathname : window.location.pathname.startsWith(href);
};

const findRoute = (routes) => {
  return routes.filter((r) => matchRoute(r))[0];
};

export const RouterContext = createContext({
  state: {
    href: '/',
  },
  navigate: () => {},
});

export const useRouter = () => {
  return useContext(RouterContext);
};

export const RouterProvider = ({ href = '/', routes, children }) => {
  const [prevstate, setPrevState] = useState(null);
  const [state, setState] = useState(findRoute(routes));
  onpopstate = () => {
    setState(findRoute(routes));
  };
  window.addEventListener('popstate', onpopstate);
  const navigate = (href) => {
    window.history.pushState({ href }, '', window.location.protocol + '//' + window.location.host + href);
    setPrevState(state);
    setState(findRoute(routes));
  };
  return (
    <RouterContext.Provider value={{ routes, prevstate, state, setState, navigate }}>{children}</RouterContext.Provider>
  );
};

export const Outlet = () => {
  const { state } = useRouter();
  console.log(state);
  return createElement(state.component, state.componentProps);
};
