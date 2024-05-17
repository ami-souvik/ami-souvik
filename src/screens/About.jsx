import { Stack, Typography, useMediaQuery } from '@mui/material';
import { ProcessIndicator } from '@components';
import { process } from '@config';

export const About = () => {
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack
      id="about"
      flex={1}
      spacing={4}
      direction={mdw ? 'column' : 'row'}
      justifyContent="space-between"
      sx={{
        padding: '48px',
        marginY: '24px',
      }}
    >
      <Stack spacing={2} sx={{ width: mdw ? '100%' : '50%' }}>
        <Typography>As Freelance Professional</Typography>
        <Typography variant="h3">Creating Stunning Websites That Stand Out</Typography>
        <Typography>
          Welcome to my portfolio website, where I showcase my expertise in web design and development. I am passionate
          about creating visually appealing and user-friendly websites that leave a lasting impression.
        </Typography>
        <ProcessIndicator data={process} />
      </Stack>
      <Stack spacing={2} sx={{ width: mdw ? '100%' : '50%' }}></Stack>
    </Stack>
  );
};
