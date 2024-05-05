import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { NavigationBar, Title, ToggleMode } from '@components';

export const Header = () => {
  const theme = useTheme();
  const mdw = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack boxShadow={`0px 1px 12px 2px ${theme.palette.primary.main}22`}>
      <Stack p={mdw ? '6px 24px' : '12px 48px'} direction="row" justifyContent="space-between" alignItems="center">
        <Title />
        <Stack direction="row" spacing={2}>
          <NavigationBar />
          <ToggleMode />
        </Stack>
      </Stack>
    </Stack>
  );
};
