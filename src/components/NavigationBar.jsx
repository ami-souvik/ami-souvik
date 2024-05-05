import { useState } from 'react';
import { Stack, Typography, Link, Box, useMediaQuery, Drawer, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from '@context';

const urls = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/blogs',
    label: 'Blogs',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

const StyledLink = styled(Link)(({ disabled }) => ({
  textDecoration: 'none',
  userSelect: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
}));

const Key = ({ href, children }) => {
  const { state, navigate } = useRouter();
  const active = state.href === href;
  const click = (e) => {
    e.preventDefault();
    navigate(href);
  };
  return (
    <StyledLink disabled={active} href={href} onClick={click}>
      <Typography fontWeight={active ? 600 : 400} fontFamily="Outfit">
        {children}
      </Typography>
    </StyledLink>
  );
};

const Seperator = () => <Box height="4px" width="4px" borderRadius="4px" bgcolor="text.primary" />;

export const NavigationBar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { state } = useRouter();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  if (mdw)
    return (
      <Stack
        direction="row"
        alignItems="center"
        position="fixed"
        left="0px"
        bottom="0px"
        width="100%"
        height="48px"
        p="6px 24px"
        zIndex={99}
        boxShadow={`0px 1px 12px 2px ${theme.palette.primary.main}22`}
        bgcolor="secondary.main"
      >
        <Stack direction="row" alignItems="center">
          <IconButton onClick={() => setOpen((open) => !open)}>
            <MenuIcon />
          </IconButton>
          <Typography>{urls.filter((each) => state.href === each.href)[0].label}</Typography>
        </Stack>
        <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
          <Stack>
            {urls.map(({ href, label }) => (
              <Box
                key={href}
                padding="8px 16px"
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Key href={href}>{label}</Key>
              </Box>
            ))}
          </Stack>
        </Drawer>
      </Stack>
    );
  return (
    <Stack width="100%" direction="row" alignItems="center" spacing={2}>
      <Key href="/">Home</Key>
      <Seperator />
      <Key href="/about">About</Key>
      <Seperator />
      <Key href="/blogs">Blogs</Key>
      <Seperator />
      <Key href="/contact">Contact</Key>
    </Stack>
  );
};
