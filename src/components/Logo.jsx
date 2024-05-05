import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  color: 'white',
  userSelect: 'none',
  fontSize: '1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.6rem',
  },
}));

export const Logo = () => {
  return (
    <Box padding="6px 6px 0px 8px" bgcolor="black" borderRadius="12px">
      <Text>Sd.</Text>
    </Box>
  );
};
