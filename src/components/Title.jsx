import React from 'react';
import { Typography, Stack } from '@mui/material';

export const Title = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography fontSize="2rem" lineHeight="1.8rem" fontWeight={600}>
        savs
      </Typography>
      <Typography fontSize="2.7rem" fontWeight={800} fontFamily="SignPainter-B">
        .sprite
      </Typography>
    </Stack>
  );
};
