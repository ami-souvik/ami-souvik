import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Navigator, Title, ToggleMode } from '@components';

export const Header = () => {
  const theme = useTheme();
  const mdw = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack>
      <Stack p={mdw ? '6px 24px' : '12px 48px'} direction="row" justifyContent="space-between" alignItems="center">
        <Title />
        <Navigator />
        <ToggleMode />
      </Stack>
    </Stack>
  );
};
