import React from 'react';
import { Typography, Stack } from '@mui/material';

export const Title = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="h4" lineHeight="1.8rem" fontWeight={700}>
        savs
      </Typography>
      <Typography variant="h3" fontFamily="SignPainter-B">
        .sprite
      </Typography>
    </Stack>
  );
};
