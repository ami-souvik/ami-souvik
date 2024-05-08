import { Stack, Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Fragment } from 'react';

const StyledAction = styled(Link)(({ theme, disabled }) => ({
  textDecoration: 'none',
  userSelect: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
  color: disabled ? theme.palette.secondary.main : theme.palette.text.primary,
  borderRadius: 12,
  padding: '2px 16px',
  backgroundColor: disabled ? theme.palette.text.primary : 'transparent',
}));

export const NavigationBar = ({ state, routes, click }) => (
  <Stack flex={1} direction="row" alignItems="center" spacing={1}>
    {routes.map((route, index) => (
      <Fragment key={route.href}>
        <StyledAction disabled={state.href === route.href} href={route.href} onClick={(e) => click(e, route.href)}>
          <Typography fontFamily="Outfit">{route.label}</Typography>
        </StyledAction>
      </Fragment>
    ))}
  </Stack>
);
