import { forwardRef } from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Magnetic, Navigator, Title, ToggleMode } from '@components';

export const Header = forwardRef((props, ref) => {
  const theme = useTheme();
  const mdw = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack>
      <Stack
        p={mdw ? '6px 24px' : '12px 48px'}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`1px solid ${theme.palette.text.primary}2a`}
      >
        <Title />
        <Navigator />
        <Magnetic ref={ref}>
          <ToggleMode />
        </Magnetic>
      </Stack>
    </Stack>
  );
});
