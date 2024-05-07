import { Stack, Typography, useMediaQuery } from '@mui/material';
import { Badge, Clickable, Image } from '@components';
import greeting from '@assets/greeting.png';
import certified from '@assets/certified.png';

export const Home = () => {
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack spacing={1} alignItems="flex-start">
      <Stack direction={mdw ? 'column' : 'row'} spacing={4}>
        <Stack flex={1} spacing={1} alignItems="flex-start">
          <Stack direction="row" spacing={2} alignItems="center">
            <Image w="48px" src={greeting} />
            <Typography variant="h3" paddingY="16px">
              It's a me,
            </Typography>
            <Typography variant="h1" fontFamily="SignPainter">
              Sav
            </Typography>
          </Stack>
          <Clickable variant="contained">Get Started</Clickable>
        </Stack>
        <Badge
          id="default-badge"
          sx={{
            bgcolor: '#FAC748',
          }}
          inputSx={{
            fill: '#000',
            fontWeight: 600,
            letterSpacing: -1,
          }}
          label="I swear, I am a certified developer"
          icon={<Image w="48px" src={certified} />}
        />
      </Stack>
    </Stack>
  );
};
