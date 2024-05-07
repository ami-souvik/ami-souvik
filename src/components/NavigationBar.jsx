import { Stack, Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Fragment } from 'react';

const Seperator = styled(Box)(({ theme }) => ({
  height: '4px',
  width: '4px',
  borderRadius: '4px',
  backgroundColor: theme.palette.text.primary,
}));

const StyledAction = styled(Link)(({ theme, disabled }) => ({
  textDecoration: 'none',
  userSelect: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
  color: theme.palette.text.primary,
}));

export const NavigationBar = ({ state, routes, click }) => (
  <Stack flex={1} direction="row" alignItems="center" spacing={2}>
    {routes.map((route, index) => (
      <Fragment key={route.href}>
        <StyledAction disabled={state.href === route.href} href={route.href} onClick={click}>
          <Typography fontWeight={state.href === route.href ? 600 : 400} fontFamily="Outfit">
            {route.label}
          </Typography>
        </StyledAction>
        {index !== routes.length - 1 && <Seperator />}
      </Fragment>
    ))}
  </Stack>
);
