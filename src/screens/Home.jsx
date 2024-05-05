import { Stack, Typography, useMediaQuery } from '@mui/material';
import { Badge, Clickable } from '@components';
import CleanHandsRoundedIcon from '@mui/icons-material/CleanHandsRounded';

export const Home = () => {
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack flex={1} spacing={1} alignItems="flex-start">
      <Stack direction={mdw ? 'column' : 'row'} spacing={4} paddingY="48px">
        <Stack maxWidth="560px" spacing={1} alignItems="flex-start">
          <Typography variant="h3" paddingY="16px">
            Quickly get started developing landing pages for your clients with the light weight{' '}
            <strong>react-vite landing page boilerplate</strong>
          </Typography>
          <Clickable variant="contained">Get Started</Clickable>
        </Stack>
        <Badge id="default-badge" label="PUT YOUR TEXT HERE!" icon={CleanHandsRoundedIcon} />
      </Stack>
    </Stack>
  );
};
