import React from 'react';
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Title } from '@components';

export const Footer = () => {
  const theme = useTheme();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack padding={mdw ? '6px 24px' : '12px 48px'}>
      <Stack
        spacing={4}
        direction={mdw ? 'column' : 'row'}
        justifyContent="space-between"
        border={`1px solid ${theme.palette.text.primary}`}
        sx={{
          padding: '24px 96px 24px 48px',
        }}
      >
        <Stack>
          <Title />
        </Stack>
        <Stack spacing={2}>
          <Typography fontWeight={800}>Follow</Typography>
          <Typography>Figma</Typography>
          <Typography>Instagram</Typography>
          <Typography>LinkedIn</Typography>
        </Stack>
      </Stack>
      <Typography margin="24px" alignSelf="flex-end">
        © 2024 Sav • Kolkata • All rights reserved
      </Typography>
    </Stack>
  );
};
