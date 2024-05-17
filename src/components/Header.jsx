import { forwardRef } from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Magnetic, Navigator, Title, ToggleMode } from '@components';

export const Header = forwardRef((props, ref) => {
  const theme = useTheme();
  const mdw = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack px={mdw ? '24px' : '48px'} alignItems="center">
      <Stack
        width="100%"
        py={mdw ? '6px' : '12px'}
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
      {/* <Divider
        border={`1px solid ${theme.palette.text.primary}2a`}
        sx={{ width: `calc(100% - ${mdw ? '24px' : '48px'})` }}
      /> */}
    </Stack>
  );
});
