import { useState } from 'react';
import { Stack, Typography, Drawer, Link, useTheme, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAction = styled(Link)(({ theme, disabled }) => ({
  textDecoration: 'none',
  userSelect: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
  color: theme.palette.text.primary,
}));

export const NavigationDrawer = ({ state, routes, click }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleClick = (href) => (e) => {
    setOpen((v) => !v);
    click(e, href);
  };
  var lastScrollTop; // This Varibale will store the top position
  const navbar = document.getElementById('drawer-navigation-section');
  addEventListener('scroll', (e) => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      //if it will be greater than the previous
      navbar.style.bottom = '-80px';
      //set the value to the negetive of height of navbar
    } else {
      navbar.style.bottom = '0px';
    }
    lastScrollTop = scrollTop;
  });
  return (
    <>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        <Stack>
          {routes.map(({ href, label }) => (
            <StyledAction key={href} disabled={state.href === href} href={href} onClick={click}>
              <Typography fontWeight={state.href === href ? 600 : 400} fontFamily="Outfit">
                {label}
              </Typography>
            </StyledAction>
          ))}
        </Stack>
      </Drawer>
      <Stack
        id="drawer-navigation-section"
        sx={{
          transition: '0.5s',
        }}
        direction="row"
        alignItems="center"
        position="fixed"
        left="0px"
        bottom="0px"
        width="100%"
        height="48px"
        p="32px 24px"
        zIndex={99}
        boxShadow={`0px 1px 12px 2px ${theme.palette.primary.main}22`}
        bgcolor="background.default"
        onClick={toggleDrawer(true)}
      >
        <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center">
          <Typography>{routes.filter(({ href }) => href === state.href)[0]?.label}</Typography>
          <MenuIcon />
        </Stack>
      </Stack>
    </>
  );
};
