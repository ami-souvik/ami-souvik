import { Stack, Link, Typography, Box } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
import { useRouter } from '@context';
import { getRouteIndex } from '@config';
import { Magnetic } from '@components';

const StyledAction = styled(Link)(({ disabled, theme }) => ({
  textDecoration: 'none',
  userSelect: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
  color: theme.palette.text.primary,
  borderRadius: 12,
  padding: '2px 16px',
  cursor: 'none',
}));

export const NavigationBar = ({ state, routes, click }) => {
  const { prevstate } = useRouter();
  const slide = (i) => {
    const prevIndex = getRouteIndex(prevstate?.href);
    const index = getRouteIndex(state.href);
    return keyframes`
      from {
        transform: translate(${prevIndex > index ? 28 : prevIndex === -1 ? 0 : -28}px, -28px);
      }
      to {
        transform: translate(0, -28px);
      }
    `;
  };
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {routes.map((route, index) => (
        <Stack key={route.href} sx={{ position: 'relative' }}>
          <Magnetic>
            <StyledAction disabled={state.href === route.href} href={route.href} onClick={(e) => click(e, route.href)}>
              <Typography fontFamily="Outfit">{route.label}</Typography>
            </StyledAction>
          </Magnetic>
          {state.href === route.href && (
            <Box
              height="28px"
              bgcolor="text.primary"
              sx={{
                marginBottom: '-28px',
                opacity: 0.2,
                transform: 'translateY(-28px)',
                borderRadius: '12px',
                ...(state.href === route.href && { animation: `${slide(index)} 0.1s linear forwards` }),
              }}
            ></Box>
          )}
        </Stack>
      ))}
    </Stack>
  );
};
